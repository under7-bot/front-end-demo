const fs = require("fs");
const path = require("path");
const os = require("os");
const { execFileSync } = require("child_process");
const { pathToFileURL } = require("url");

const root = path.resolve(__dirname, "..");
const rawDir = path.join(root, "materials", "raw");
const outPath = path.join(root, "data", "source_chunks.json");

const supportedTextTypes = new Set([".txt", ".md"]);
const supportedTypes = new Set([".txt", ".md", ".pdf", ".docx", ".pptx"]);
const keywordPattern = /[A-Za-z][A-Za-z0-9_/#.+-]*|[\u3040-\u30ff\u3400-\u9fff]{2,}/g;

function slugPart(value, fallback) {
  const normalized = String(value || "")
    .toLowerCase()
    .replace(/\.[^.]+$/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return normalized || fallback;
}

function detectSubjectId(filePath) {
  const parts = filePath.split(/[\\/]/).reverse();
  const hit = parts.find((part) => /sql/i.test(part))
    || parts.find((part) => /アルゴ|if|条件|繰返|変数/.test(part))
    || parts.find((part) => /[0-9]{3,}[a-zA-Z]*[0-9]*/.test(part));
  if (hit && /sql/i.test(hit)) return "26jy-sql";
  if (hit && /アルゴ|if|条件|繰返|変数/.test(hit)) return "226jy01-algorithm";
  return hit ? slugPart(hit, "general") : "general";
}

function detectKeywords(text) {
  const counts = new Map();
  for (const match of String(text || "").matchAll(keywordPattern)) {
    const word = match[0].trim();
    if (word.length < 2) continue;
    counts.set(word, (counts.get(word) || 0) + 1);
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 12)
    .map(([word]) => word);
}

function sourceKeyword(keywords) {
  const preferred = (keywords || []).find((word) => /select|where|table|if|else|for|while|変数|条件|繰返|主キー|外部キー|テーブル|表/i.test(word));
  return slugPart(preferred || (keywords || [])[0] || "general", "general").slice(0, 32);
}

function sectionSlug(pageOrSection) {
  const text = String(pageOrSection || "section");
  const page = text.match(/page\s*(\d+)/i);
  const slide = text.match(/slide\s*(\d+)/i);
  if (page) return `page${String(page[1]).padStart(2, "0")}`;
  if (slide) return `slide${String(slide[1]).padStart(2, "0")}`;
  return slugPart(text, "section").slice(0, 24);
}

function splitLongText(text, maxLength = 900) {
  const clean = String(text || "").replace(/\r\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();
  if (!clean) return [];
  const paragraphs = clean.split(/\n\s*\n/).map((part) => part.trim()).filter(Boolean);
  const chunks = [];
  let current = "";
  for (const paragraph of paragraphs) {
    if ((current + "\n\n" + paragraph).trim().length > maxLength && current.trim()) {
      chunks.push(current.trim());
      current = paragraph;
    } else {
      current = (current ? `${current}\n\n${paragraph}` : paragraph).trim();
    }
  }
  if (current.trim()) chunks.push(current.trim());
  return chunks.flatMap((chunk) => {
    if (chunk.length <= maxLength) return [chunk];
    const pieces = [];
    for (let start = 0; start < chunk.length; start += maxLength) {
      pieces.push(chunk.slice(start, start + maxLength).trim());
    }
    return pieces.filter(Boolean);
  });
}

function splitMarkdownOrText(text) {
  const lines = String(text || "").replace(/\r\n/g, "\n").split("\n");
  const sections = [];
  let currentTitle = "section 1";
  let current = [];

  for (const line of lines) {
    const heading = line.match(/^#{1,6}\s+(.+)$/);
    if (heading && current.join("\n").trim()) {
      sections.push({ page_or_section: currentTitle, text: current.join("\n").trim() });
      currentTitle = heading[1].trim();
      current = [];
      continue;
    }
    if (heading) {
      currentTitle = heading[1].trim();
      continue;
    }
    current.push(line);
  }

  if (current.join("\n").trim()) {
    sections.push({ page_or_section: currentTitle, text: current.join("\n").trim() });
  }

  return sections.flatMap((section) =>
    splitLongText(section.text).map((chunkText, index) => ({
      page_or_section: section.page_or_section,
      chunk_text: chunkText,
      section_chunk_index: index + 1
    }))
  );
}

function decodeXml(value) {
  return String(value || "")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
}

function textFromXml(xml) {
  const textRuns = [...String(xml || "").matchAll(/<(?:\w+:)?t\b[^>]*>([^<]*)/g)]
    .map((match) => decodeXml(match[1]).trim())
    .filter(Boolean);
  if (textRuns.length) return textRuns.join(" ");
  return decodeXml(String(xml || "").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
}

function extractZipToTemp(filePath) {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "study-material-"));
  const script = [
    "& {",
    "param($zipPath, $destPath)",
    "Add-Type -AssemblyName System.IO.Compression.FileSystem",
    "[System.IO.Compression.ZipFile]::ExtractToDirectory($zipPath, $destPath)",
    "}"
  ].join("; ");
  execFileSync("powershell.exe", ["-NoProfile", "-Command", script, filePath, tempDir], { stdio: "pipe" });
  return tempDir;
}

function extractDocx(filePath) {
  let tempDir = null;
  try {
    tempDir = extractZipToTemp(filePath);
    const wordDir = path.join(tempDir, "word");
    const candidates = [
      path.join(wordDir, "document.xml"),
      ...fs.existsSync(wordDir)
        ? fs.readdirSync(wordDir)
            .filter((name) => /^(header|footer|footnotes|endnotes)\d*\.xml$/.test(name))
            .map((name) => path.join(wordDir, name))
        : []
    ];
    const paragraphs = [];
    for (const xmlPath of candidates) {
      if (!fs.existsSync(xmlPath)) continue;
      const xml = fs.readFileSync(xmlPath, "utf8");
      for (const match of xml.matchAll(/<w:p\b[\s\S]*?<\/w:p>/g)) {
        const text = textFromXml(match[0]);
        if (text) paragraphs.push(text);
      }
    }
    const text = paragraphs.join("\n\n").trim();
    const chunks = splitLongText(text).map((chunkText, index) => ({
      page_or_section: `section ${index + 1}`,
      chunk_text: chunkText,
      section_chunk_index: index + 1
    }));
    return chunks.length ? chunks : [{
      page_or_section: "document",
      chunk_text: "",
      section_chunk_index: 1,
      needs_ocr: false,
      extraction_failed: true,
      extraction_status: "extraction_failed",
      extraction_error: "DOCX contained no extractable text."
    }];
  } catch (error) {
    return [{
      page_or_section: "document",
      chunk_text: "",
      section_chunk_index: 1,
      needs_ocr: false,
      extraction_failed: true,
      extraction_status: "extraction_failed",
      extraction_error: `DOCX extraction failed: ${error.message}`
    }];
  } finally {
    if (tempDir) fs.rmSync(tempDir, { recursive: true, force: true });
  }
}

function extractPptx(filePath) {
  let tempDir = null;
  try {
    tempDir = extractZipToTemp(filePath);
    const slidesDir = path.join(tempDir, "ppt", "slides");
    if (!fs.existsSync(slidesDir)) {
      return [{
        page_or_section: "document",
        chunk_text: "",
        section_chunk_index: 1,
        needs_ocr: false,
        extraction_failed: true,
        extraction_status: "extraction_failed",
        extraction_error: "PPTX has no ppt/slides folder."
      }];
    }
    const slideFiles = fs.readdirSync(slidesDir)
      .filter((name) => /^slide\d+\.xml$/.test(name))
      .sort((a, b) => Number(a.match(/\d+/)[0]) - Number(b.match(/\d+/)[0]));
    const chunks = [];
    for (const slideName of slideFiles) {
      const slideNumber = Number(slideName.match(/\d+/)[0]);
      const xml = fs.readFileSync(path.join(slidesDir, slideName), "utf8");
      const text = textFromXml(xml);
      if (!text) continue;
      splitLongText(text).forEach((chunkText, index) => {
        chunks.push({
          page_or_section: `slide ${slideNumber}`,
          chunk_text: chunkText,
          section_chunk_index: index + 1
        });
      });
    }
    return chunks.length ? chunks : [{
      page_or_section: "document",
      chunk_text: "",
      section_chunk_index: 1,
      needs_ocr: false,
      extraction_failed: true,
      extraction_status: "extraction_failed",
      extraction_error: "PPTX contained no extractable slide text."
    }];
  } catch (error) {
    return [{
      page_or_section: "document",
      chunk_text: "",
      section_chunk_index: 1,
      needs_ocr: false,
      extraction_failed: true,
      extraction_status: "extraction_failed",
      extraction_error: `PPTX extraction failed: ${error.message}`
    }];
  } finally {
    if (tempDir) fs.rmSync(tempDir, { recursive: true, force: true });
  }
}

async function extractPdf(filePath) {
  try {
    if (!globalThis.DOMMatrix) {
      globalThis.DOMMatrix = class DOMMatrix {};
    }
    if (!globalThis.ImageData) {
      globalThis.ImageData = class ImageData {};
    }
    if (!globalThis.Path2D) {
      globalThis.Path2D = class Path2D {};
    }
    const pdfjsPath = [
      path.join(root, "node_modules", "pdfjs-dist", "legacy", "build", "pdf.mjs"),
      path.join(os.homedir(), ".cache", "codex-runtimes", "codex-primary-runtime", "dependencies", "node", "node_modules", "pdfjs-dist", "legacy", "build", "pdf.mjs")
    ].find((candidate) => fs.existsSync(candidate));
    if (!pdfjsPath) throw new Error("Cannot find pdfjs-dist/legacy/build/pdf.mjs");
    const pdfjs = await import(pathToFileURL(pdfjsPath).href);
    const bytes = new Uint8Array(fs.readFileSync(filePath));
    const pdf = await pdfjs.getDocument({ data: bytes, disableWorker: true }).promise;
    const chunks = [];

    for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
      const page = await pdf.getPage(pageNumber);
      const content = await page.getTextContent();
      const text = content.items.map((item) => item.str).join(" ").replace(/\s+/g, " ").trim();
      if (text) {
        for (const [index, chunkText] of splitLongText(text).entries()) {
          chunks.push({
            page_or_section: `page ${pageNumber}`,
            chunk_text: chunkText,
            section_chunk_index: index + 1
          });
        }
      } else {
        chunks.push({
          page_or_section: `page ${pageNumber}`,
          chunk_text: "",
          section_chunk_index: 1,
          needs_ocr: true,
          extraction_failed: false,
          extraction_status: "needs_ocr"
        });
      }
    }

    return chunks.length ? chunks : [{
      page_or_section: "document",
      chunk_text: "",
      section_chunk_index: 1,
      needs_ocr: true,
      extraction_failed: false,
      extraction_status: "needs_ocr"
    }];
  } catch (error) {
    return [{
      page_or_section: "document",
      chunk_text: "",
      section_chunk_index: 1,
      needs_ocr: false,
      extraction_failed: true,
      extraction_status: "extraction_failed",
      extraction_error: `PDF extraction failed: ${error.message}`
    }];
  }
}

async function extractFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!supportedTypes.has(ext)) {
    return [{
      page_or_section: "document",
      chunk_text: "",
      section_chunk_index: 1,
      needs_ocr: false,
      extraction_failed: true,
      extraction_status: "unsupported_type",
      extraction_error: `Unsupported file type: ${ext || "unknown"}`
    }];
  }

  if (supportedTextTypes.has(ext)) {
    const text = fs.readFileSync(filePath, "utf8");
    const chunks = splitMarkdownOrText(text);
    return chunks.length ? chunks : [{
      page_or_section: "document",
      chunk_text: "",
      section_chunk_index: 1,
      needs_ocr: false,
      extraction_failed: true,
      extraction_status: "extraction_failed",
      extraction_error: "Text file is empty."
    }];
  }

  if (ext === ".pdf") return extractPdf(filePath);
  if (ext === ".docx") return extractDocx(filePath);
  if (ext === ".pptx") return extractPptx(filePath);
  return [];
}

function listFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return listFiles(fullPath);
    if (entry.name.startsWith(".")) return [];
    return [fullPath];
  });
}

async function ingestMaterials() {
  fs.mkdirSync(rawDir, { recursive: true });
  const files = listFiles(rawDir);
  const chunks = [];

  for (const [fileIndex, filePath] of files.entries()) {
    const fileName = path.basename(filePath);
    const fileType = path.extname(fileName).slice(1).toLowerCase() || "unknown";
    const subjectId = detectSubjectId(path.relative(rawDir, filePath));
    const extracted = await extractFile(filePath);
    const fileSlug = slugPart(fileName, `file${String(fileIndex + 1).padStart(3, "0")}`);

    for (const [chunkIndex, item] of extracted.entries()) {
      const globalChunkIndex = chunkIndex + 1;
      const extractionStatus = item.extraction_status || (item.chunk_text ? "ok" : "extraction_failed");
      const detectedKeywords = item.chunk_text ? detectKeywords(item.chunk_text) : [];
      const sourceId = `${subjectId}-file${String(fileIndex + 1).padStart(3, "0")}-${sectionSlug(item.page_or_section)}-${sourceKeyword(detectedKeywords)}-chunk${String(globalChunkIndex).padStart(3, "0")}`;
      chunks.push({
        source_id: sourceId,
        subject_id: subjectId,
        file_name: fileName,
        file_type: fileType,
        page_or_section: item.page_or_section || `section ${globalChunkIndex}`,
        chunk_index: globalChunkIndex,
        chunk_text: item.chunk_text || "",
        detected_keywords: detectedKeywords,
        extraction_status: extractionStatus,
        needs_ocr: Boolean(item.needs_ocr),
        extraction_failed: Boolean(item.extraction_failed || extractionStatus === "extraction_failed" || extractionStatus === "unsupported_type"),
        extraction_error: item.extraction_error || null
      });
    }
  }

  const output = {
    generated_at: new Date().toISOString(),
    raw_dir: "materials/raw",
    supported_file_types: [".txt", ".md", ".docx", ".pdf", ".pptx"],
    notes: [
      ".txt and .md are fully extracted.",
      ".pdf is extracted with pdfjs text extraction; scanned pages are marked needs_ocr.",
      ".docx and .pptx are extracted from their Office XML text where possible; unreadable files are marked extraction_failed."
    ],
    chunks
  };
  fs.writeFileSync(outPath, `${JSON.stringify(output, null, 2)}\n`, "utf8");
  return output;
}

if (require.main === module) {
  ingestMaterials()
    .then((output) => {
      const extractionFailedCount = output.chunks.filter((chunk) => chunk.extraction_failed).length;
      const needsOcrCount = output.chunks.filter((chunk) => chunk.needs_ocr).length;
      console.log(`sourceChunks: ${output.chunks.length}`);
      console.log(`extractionFailedCount: ${extractionFailedCount}`);
      console.log(`needsOcrCount: ${needsOcrCount}`);
    })
    .catch((error) => {
      console.error(error);
      process.exitCode = 1;
    });
}

module.exports = { ingestMaterials };
