const fs = require("fs");
const path = require("path");
const { auditStudySystem } = require("./audit_study_system");

const root = path.resolve(__dirname, "..");
const dataPath = path.join(root, "data", "study_system.json");
const topicMapPath = path.join(root, "data", "topic_source_map.json");
const sourceChunksPath = path.join(root, "data", "source_chunks.json");
const outDir = path.join(root, "classroom-study-pages");

const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));
const topicMap = JSON.parse(fs.readFileSync(topicMapPath, "utf8"));
const sourceChunksDoc = fs.existsSync(sourceChunksPath)
  ? JSON.parse(fs.readFileSync(sourceChunksPath, "utf8"))
  : { chunks: [] };

const kpById = new Map(data.knowledgePoints.map((kp) => [kp.id, kp]));
const courseById = new Map(data.courses.map((course) => [course.id, course]));
const topicByKnowledgeId = new Map(topicMap.topics.map((topic) => [topic.knowledge_id, topic]));
const sourceById = new Map((sourceChunksDoc.chunks || []).map((chunk) => [chunk.source_id, chunk]));

function esc(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function hasText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function pageNameForKnowledge(id) {
  return `knowledge-${id.replace(/^kp-/, "")}.html`;
}

function linkKnowledge(id, className = "tag link-tag") {
  const kp = kpById.get(id);
  if (!kp) return "";
  return `<a class="${className}" href="${pageNameForKnowledge(id)}">${esc(kp.title)}</a>`;
}

function list(items) {
  if (!items || items.length === 0) return '<p class="muted">暂未设置</p>';
  return `<ul>${items.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>`;
}

function linkedList(ids) {
  if (!ids || ids.length === 0) return '<p class="muted">暂未设置</p>';
  return `<div class="link-row">${ids.map((id) => linkKnowledge(id)).join("")}</div>`;
}

function sourceState(topic) {
  const sourceIds = Array.isArray(topic?.source_ids) ? topic.source_ids : [];
  const sources = sourceIds.map((id) => sourceById.get(id)).filter(Boolean);
  const usingMock = !topic || topic.source_type === "mock" || topic.source_file === "data/study_system.json";
  const missingSourceIds = !usingMock && sourceIds.length === 0;
  const missingLinkedSource = !usingMock && sourceIds.some((id) => !sourceById.has(id));
  const extractionFailed = sources.some((source) => source.extraction_failed || source.extraction_status === "extraction_failed" || source.extraction_status === "unsupported_type");
  const needsOcr = sources.some((source) => source.needs_ocr || source.extraction_status === "needs_ocr");
  const missingSourceChunk = !topic || (!hasText(topic.source_chunk) && !hasText(topic.source_excerpt));
  const lowConfidence = typeof topic?.confidence === "number" && topic.confidence < 0.7;
  const quality = topic?.source_quality || {};
  const lowQuality = Boolean(!quality.is_primary_learning_source || quality.is_admin_material || quality.keyword_match_score < 0.5);
  const needsReview = Boolean(
    !topic ||
    usingMock ||
    missingSourceIds ||
    missingLinkedSource ||
    extractionFailed ||
    needsOcr ||
    missingSourceChunk ||
    lowConfidence ||
    lowQuality ||
    topic.needs_review
  );
  return { sourceIds, sources, usingMock, missingSourceIds, missingLinkedSource, extractionFailed, needsOcr, missingSourceChunk, lowConfidence, lowQuality, needsReview };
}

function layout(title, subtitle, active, body) {
  return `<!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${esc(title)}</title><style>
*{box-sizing:border-box}html,body{overflow-x:hidden}body{font-family:Arial,"Microsoft YaHei",sans-serif;background:#f5f7fa;margin:0;color:#222}header{background:#1f2937;color:white;padding:24px}.wrap{width:90%;max-width:1120px;margin:0 auto}.top{display:flex;justify-content:space-between;gap:12px;align-items:center;flex-wrap:wrap}.nav{display:flex;gap:8px;flex-wrap:wrap}.btn{color:inherit;text-decoration:none;border:1px solid rgba(255,255,255,.45);border-radius:999px;padding:8px 14px}.btn.active{background:#2563eb;border-color:#2563eb}.hero{margin-top:30px;max-width:860px}.hero h1{margin:0;font-size:38px;line-height:1.2}.hero p{line-height:1.7;color:#dbeafe}.container{width:90%;max-width:1120px;margin:30px auto 48px}.section-title{margin:34px 0 16px;border-left:6px solid #2563eb;padding-left:12px;font-size:24px}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:18px}.card,.panel{background:white;border-radius:12px;padding:22px;box-shadow:0 4px 10px rgba(0,0,0,.08);overflow-wrap:anywhere}.card h3{margin:0 0 10px;color:#1d4ed8}.card p,.panel p,.panel li{line-height:1.75;font-size:15px}.card-link{color:inherit;text-decoration:none}.tag{display:inline-block;background:#e0ecff;color:#1d4ed8;padding:4px 8px;margin:8px 4px 0 0;border-radius:6px;font-size:12px}.link-tag{text-decoration:none}.tag.current{background:#1d4ed8;color:#fff}.tag.warn{background:#fff7ed;color:#9a3412}.tag.danger{background:#fee2e2;color:#991b1b}.muted{color:#64748b}.route{display:flex;align-items:center;gap:10px;flex-wrap:wrap}.route i{color:#94a3b8}.link-row{display:flex;gap:8px;flex-wrap:wrap}.split{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:18px}.example{background:#111827;color:#e5e7eb;border-radius:10px;padding:16px;line-height:1.65;overflow-x:auto}.compare-table,.audit-table{width:100%;border-collapse:collapse;background:white}.compare-table th,.compare-table td,.audit-table th,.audit-table td{border:1px solid #dbe3ef;padding:12px;text-align:left;vertical-align:top}.compare-table th,.audit-table th{background:#eff6ff;color:#1e3a8a}.mine{border-left:6px solid #f59e0b}.source{border-left:6px solid #2563eb}.warning{border-left:6px solid #dc2626;background:#fff7f7}@media(max-width:640px){header{padding:24px 16px}.wrap,.container{width:100%}.container{padding:0 16px}.grid,.split{grid-template-columns:1fr}.hero h1{font-size:30px}.section-title{font-size:20px}.card,.panel{padding:18px}.route{align-items:flex-start}.route i{display:none}.btn{padding:7px 12px}}</style></head><body><header><div class="wrap"><div class="top"><a class="btn" href="../知识导航初版.html">返回知识导航</a><nav class="nav"><a class="btn ${active === "home" ? "active" : ""}" href="classroom-index.html">课程首页</a><a class="btn ${active === "map" ? "active" : ""}" href="knowledge-map.html">知识地图</a><a class="btn ${active === "compare" ? "active" : ""}" href="concept-compare.html">易混对照</a></nav></div><div class="hero"><h1>${esc(title)}</h1><p>${esc(subtitle)}</p></div></div></header><main class="container">${body}</main></body></html>`;
}

function courseCard(course) {
  return `<a class="card-link" href="${esc(course.page)}"><article class="card"><h3>${esc(course.title)}</h3><p>${esc(course.summary)}</p><span class="tag">${course.knowledgeIds.length} 个知识点</span></article></a>`;
}

function indexPage() {
  const cards = data.courses.map(courseCard).join("");
  const body = `<h2 class="section-title">课程列表</h2><section class="grid">${cards}</section>
<h2 class="section-title">真实资料摄取管线</h2><section class="panel source"><p>当前顺序：<code>materials/raw</code> → <code>tools/ingest_materials.js</code> → <code>data/source_chunks.json</code> → <code>tools/build_topic_source_map.js</code> → <code>data/topic_source_map.json</code> → audit → html pages。</p></section>`;
  return layout(data.site.title, data.site.subtitle, "home", body);
}

function knowledgeCard(id, index) {
  const kp = kpById.get(id);
  if (!kp) return "";
  const topic = topicByKnowledgeId.get(id);
  const state = sourceState(topic);
  const status = state.needsReview ? '<span class="tag danger">需要人工确认</span>' : '<span class="tag">真实资料已绑定</span>';
  return `<article class="card"><h3>${index + 1}. ${esc(kp.title)}</h3><p>${esc(kp.oneLine)}</p><p><strong>topic_id：</strong>${esc(topic?.topic_id || "未绑定")}</p><p><strong>来源：</strong>${esc(topic?.source_file || "未绑定")}</p>${status}<div>${linkKnowledge(kp.id)}</div></article>`;
}

function coursePage(course) {
  const body = `<h2 class="section-title">课程资料</h2><section class="panel">${list(course.materials)}</section>
<h2 class="section-title">AI总结</h2><section class="panel"><p>${esc(course.aiSummary)}</p></section>
<h2 class="section-title">知识点卡片</h2><section class="grid">${course.knowledgeIds.map(knowledgeCard).join("")}</section>
<h2 class="section-title">疑问 / 易错点</h2><section class="panel">${list(course.misunderstandings)}</section>
<h2 class="section-title">相关旧知识</h2><section class="panel">${list(course.oldKnowledge)}</section>
<h2 class="section-title">复习问题</h2><section class="panel">${list(course.reviewQuestions)}</section>`;
  return layout(course.title, course.summary, "home", body);
}

function locationLine(kp) {
  const prev = kp.prerequisiteIds?.map((id) => linkKnowledge(id)).join("") || '<span class="tag warn">起点</span>';
  const next = kp.nextIds?.map((id) => linkKnowledge(id)).join("") || '<span class="tag warn">阶段终点</span>';
  return `<div class="route">${prev}<i>→</i><span class="tag current">${esc(kp.title)}</span><i>→</i>${next}</div>`;
}

function sourceAuditPanel(topic, state) {
  const sourceIds = state.sourceIds.length ? state.sourceIds.join(", ") : "未绑定";
  const firstSource = state.sources[0];
  const extractionStatus = firstSource?.extraction_status || topic?.extraction_status || (state.usingMock ? "mock" : "unknown");
  const quality = topic?.source_quality || {};
  const warningText = !quality.is_primary_learning_source
    ? "该知识点目前只匹配到课程管理/大纲资料，或来源质量不足，可能不是正式概念讲解来源。"
    : "资料来源未对齐，需要人工确认。";
  const warning = state.needsReview
    ? `<section class="panel warning"><strong>${warningText}</strong><p>このページは資料との対応関係が不確実です。確認が必要です。</p></section>`
    : "";
  return `${warning}<h2 class="section-title">资料对齐检查</h2><section class="panel source"><table class="audit-table"><tbody>
<tr><th>topic_id</th><td>${esc(topic?.topic_id || "未绑定")}</td></tr>
<tr><th>source_id</th><td>${esc(sourceIds)}</td></tr>
<tr><th>source_type</th><td>${esc(topic?.source_type || "unknown")}</td></tr>
<tr><th>source_file</th><td>${esc(topic?.source_file || "缺失")}</td></tr>
<tr><th>source_page_or_section</th><td>${esc(topic?.source_page_or_section || "缺失")}</td></tr>
<tr><th>source_excerpt</th><td>${esc(topic?.source_excerpt || topic?.source_chunk || "缺失")}</td></tr>
<tr><th>confidence</th><td>${esc(topic?.confidence ?? "缺失")}</td></tr>
<tr><th>extraction_status</th><td>${esc(extractionStatus)}</td></tr>
<tr><th>ai_supplement</th><td>${topic?.ai_supplement === true ? "あり" : topic?.ai_supplement === false ? "なし" : "缺失"}</td></tr>
<tr><th>needs_review</th><td>${state.needsReview ? "true" : "false"}</td></tr>
<tr><th>source_quality.is_admin_material</th><td>${esc(quality.is_admin_material ?? "缺失")}</td></tr>
<tr><th>source_quality.contains_definition</th><td>${esc(quality.contains_definition ?? "缺失")}</td></tr>
<tr><th>source_quality.contains_example</th><td>${esc(quality.contains_example ?? "缺失")}</td></tr>
<tr><th>source_quality.keyword_match_score</th><td>${esc(quality.keyword_match_score ?? "缺失")}</td></tr>
<tr><th>source_quality.is_primary_learning_source</th><td>${esc(quality.is_primary_learning_source ?? "缺失")}</td></tr>
</tbody></table></section>`;
}

function knowledgePage(kp) {
  const course = courseById.get(kp.courseId);
  const topic = topicByKnowledgeId.get(kp.id);
  const state = sourceState(topic);
  const body = `${sourceAuditPanel(topic, state)}
<h2 class="section-title">一句话解释</h2><section class="panel"><p>${esc(kp.oneLine)}</p></section>
<h2 class="section-title">知识走廊</h2><section class="panel">${locationLine(kp)}</section>
<h2 class="section-title">核心内容</h2><section class="panel"><p>${esc(kp.core)}</p></section>
<h2 class="section-title">最小例子</h2><section class="panel"><pre class="example">${esc(kp.example)}</pre></section>
<section class="split"><div><h2 class="section-title">前置知识</h2><section class="panel">${linkedList(kp.prerequisiteIds)}</section></div><div><h2 class="section-title">相关知识</h2><section class="panel">${linkedList(kp.relatedIds)}</section></div><div><h2 class="section-title">后续知识</h2><section class="panel">${linkedList(kp.nextIds)}</section></div></section>
<h2 class="section-title">常见混淆</h2><section class="panel">${list(kp.confusions)}</section>
<h2 class="section-title">它回答的核心问题</h2><section class="panel"><p>${esc(kp.coreQuestion)}</p></section>
<h2 class="section-title">我的理解</h2><section class="panel mine"><p>${esc(kp.myUnderstanding)}</p></section>
<h2 class="section-title">返回课程</h2><section class="panel"><a class="tag link-tag" href="${esc(course.page)}">${esc(course.title)}</a></section>`;
  return layout(kp.title, `${course.title} - 知识点详情`, "home", body);
}

function mapPage() {
  const sections = data.maps.map((map) => `<article class="card"><h3>${esc(map.title)}</h3><div class="route">${map.nodes.map((id) => linkKnowledge(id)).join("<i>→</i>")}</div></article>`).join("");
  return layout("知识地图", "用路线形式查看知识之间的前后关系", "map", `<h2 class="section-title">路线地图</h2><section class="grid">${sections}</section>`);
}

function comparisonPage() {
  const blocks = data.comparisons.map((item) => {
    const leftTitle = item.leftId ? kpById.get(item.leftId)?.title : item.leftLabel;
    const rightTitle = item.rightId ? kpById.get(item.rightId)?.title : item.rightLabel;
    const left = item.leftId ? linkKnowledge(item.leftId, "tag link-tag current") : `<span class="tag current">${esc(item.leftLabel)}</span>`;
    const right = item.rightId ? linkKnowledge(item.rightId, "tag link-tag current") : `<span class="tag current">${esc(item.rightLabel)}</span>`;
    const rows = item.points.map((row) => `<tr><th>${esc(row[0])}</th><td>${esc(row[1])}</td><td>${esc(row[2])}</td></tr>`).join("");
    return `<section class="panel"><h3>${esc(item.title)}</h3><p>${left} <span class="muted">vs</span> ${right}</p><table class="compare-table"><thead><tr><th>对比点</th><th>${esc(leftTitle)}</th><th>${esc(rightTitle)}</th></tr></thead><tbody>${rows}</tbody></table></section>`;
  }).join("");
  return layout("易混对照", "把容易混淆的两个概念放在同一张表里看", "compare", `<h2 class="section-title">概念对比</h2><div class="grid">${blocks}</div>`);
}

function write(file, html) {
  fs.writeFileSync(path.join(outDir, file), html, "utf8");
}

function checkLinks() {
  const files = fs.readdirSync(outDir).filter((file) => file.endsWith(".html"));
  const missing = [];
  for (const file of files) {
    const html = fs.readFileSync(path.join(outDir, file), "utf8");
    for (const match of html.matchAll(/href="([^"]+\.html)(?:#[^"]*)?"/g)) {
      const href = match[1];
      if (href.startsWith("http") || href.startsWith("../")) continue;
      if (!fs.existsSync(path.join(outDir, href))) missing.push(`${file} -> ${href}`);
    }
  }
  return missing;
}

function generate() {
  write("classroom-index.html", indexPage());
  for (const course of data.courses) write(course.page, coursePage(course));
  for (const kp of data.knowledgePoints) write(pageNameForKnowledge(kp.id), knowledgePage(kp));
  write("knowledge-map.html", mapPage());
  write("concept-compare.html", comparisonPage());

  const missingLinks = checkLinks();
  const report = auditStudySystem();
  const generatedPages = data.courses.length + data.knowledgePoints.length + 3;
  console.log(`Generated pages: ${generatedPages}`);
  console.log(`missingLinks: ${missingLinks.length}`);
  console.log(`realSourceChunks: ${report.realSourceChunks}`);
  console.log(`topicsLinkedToRealSources: ${report.topicsLinkedToRealSources}`);
  console.log(`topicsStillUsingMockData: ${report.topicsStillUsingMockData}`);
  console.log(`extractionFailedCount: ${report.extractionFailedCount}`);
  console.log(`needsOcrCount: ${report.needsOcrCount}`);
  console.log(`alignmentErrors: ${report.alignmentErrors}`);
  console.log(`sourceQualityWarnings: ${report.sourceQualityWarnings}`);
  console.log(`needsReviewCount: ${report.needsReviewCount}`);
  console.log(`pagesWithoutSourceChunk: ${report.pagesWithoutSourceChunk}`);

  if (report.topicsStillUsingMockData > 0) {
    console.log("页面已生成，但仍有知识点使用 mock 数据，真实资料对齐未完成。");
  } else if (report.sourceQualityWarnings > 0) {
    console.log("页面已生成，但部分知识点来源质量较低，需要人工确认。");
  } else if (report.alignmentErrors > 0) {
    console.log("页面已生成，但资料对齐检查未通过。");
  } else {
    console.log("页面已生成，真实资料对齐检查通过。");
  }
}

generate();
