const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const studyPath = path.join(root, "data", "study_system.json");
const chunksPath = path.join(root, "data", "source_chunks.json");
const outPath = path.join(root, "data", "topic_source_map.json");

const adminPattern = /シラバス|授業ルール|課題チェック|課題一覧表|ガイダンス|授業計画|ルール|チェック|一覧/;
const definitionPattern = /とは|意味|定義|説明|構文|使い方|基本|概要|文法/i;
const examplePattern = /例|例えば|例：|ex\s*\d*|sample|サンプル/i;
const exercisePattern = /問|問題|演習|課題|実行結果|実習|確認/i;
const lecturePattern = /文法|基本|講義|資料|補足|解説|基礎/i;

function readJson(file, fallback) {
  if (!fs.existsSync(file)) return fallback;
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function normalize(text) {
  return String(text || "").toLowerCase();
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function subjectForCourse(courseId) {
  if (courseId.includes("programming")) return "programming-basics";
  if (courseId.includes("web")) return "web-basics";
  if (courseId.includes("database")) return "database-basics";
  if (courseId.includes("network")) return "network-basics";
  return courseId || "general";
}

function topicIdFor(kp) {
  return `${subjectForCourse(kp.courseId)}-${kp.id.replace(/^kp-/, "")}-001`;
}

function classifyTopic(kp) {
  if ((kp.prerequisiteIds || []).length >= 2) return "advanced_concept";
  return "core_concept";
}

function materialTypeFor(chunk) {
  const file = chunk?.file_name || "";
  if (adminPattern.test(file)) {
    return /シラバス|授業計画|ガイダンス|一覧/.test(file) ? "overview" : "course_admin";
  }
  if (exercisePattern.test(`${file} ${chunk?.chunk_text || ""}`)) return "exercise";
  return "concept";
}

function topicSignals(kp) {
  const words = [
    kp.title,
    ...(String(kp.oneLine || "").match(/[A-Za-z][A-Za-z0-9_/#.+-]*|[\u3040-\u30ff\u3400-\u9fff]{2,}/g) || []),
    ...(String(kp.core || "").match(/[A-Za-z][A-Za-z0-9_/#.+-]*|[\u3040-\u30ff\u3400-\u9fff]{2,}/g) || [])
  ];
  return unique(words)
    .map((word) => String(word).trim())
    .filter((word) => word.length >= 2)
    .slice(0, 20);
}

function keywordMatchScore(kp, chunk) {
  const signals = topicSignals(kp);
  const haystack = normalize(`${chunk.file_name} ${chunk.page_or_section} ${chunk.chunk_text} ${(chunk.detected_keywords || []).join(" ")}`);
  if (!signals.length) return 0;
  let matchedWeight = 0;
  let totalWeight = 0;
  for (const signal of signals) {
    const token = normalize(signal).slice(0, 32);
    const weight = signal === kp.title ? 3 : 1;
    totalWeight += weight;
    if (token.length >= 2 && haystack.includes(token)) matchedWeight += weight;
  }
  return Math.min(1, matchedWeight / totalWeight);
}

function sourcePriority(chunk) {
  const file = chunk.file_name || "";
  const type = materialTypeFor(chunk);
  if (type === "course_admin") return 0;
  if (type === "overview") return 1;
  if (type === "concept" && lecturePattern.test(file)) return 5;
  if (type === "concept") return 4;
  if (type === "exercise") return 3;
  return 2;
}

function sourceQuality(kp, chunk, keywordScore) {
  const file = chunk?.file_name || "";
  const text = chunk?.chunk_text || "";
  const materialType = materialTypeFor(chunk);
  const containsDefinition = definitionPattern.test(text);
  const containsExample = examplePattern.test(text);
  const containsExercise = exercisePattern.test(text);
  const isAdminMaterial = materialType === "course_admin" || materialType === "overview" || adminPattern.test(file);
  return {
    is_real_file: true,
    is_admin_material: isAdminMaterial,
    contains_definition: containsDefinition,
    contains_example: containsExample,
    contains_exercise: containsExercise,
    keyword_match_score: Number(keywordScore.toFixed(2)),
    is_primary_learning_source: !isAdminMaterial && (containsDefinition || containsExample || containsExercise) && keywordScore >= 0.5
  };
}

function hasValidLearningContent(quality) {
  return quality.contains_definition || quality.contains_example || quality.contains_exercise;
}

function excerpt(text) {
  return String(text || "").replace(/\s+/g, " ").trim().slice(0, 220);
}

function buildKeywords(kp, chunk) {
  return unique([
    ...(chunk?.detected_keywords || []),
    kp.title,
    ...topicSignals(kp)
  ]).slice(0, 12);
}

function confidenceFor({ keywordScore, priority, quality, chunk }) {
  let confidence = 0.35 + keywordScore * 0.45 + Math.min(priority, 5) * 0.04;
  if (quality.contains_definition) confidence += 0.08;
  if (quality.contains_example) confidence += 0.05;
  if (quality.contains_exercise) confidence += 0.02;
  if (quality.is_admin_material) confidence = Math.min(confidence, 0.59);
  if ((chunk.source_id || "").includes("general")) confidence = Math.min(confidence, 0.69);
  return Number(Math.max(0.1, Math.min(0.95, confidence)).toFixed(2));
}

function reviewReasons(topic, quality, chunk) {
  const reasons = [];
  if (quality.is_admin_material) reasons.push("admin_material_used_as_concept_source");
  if ((topic.source_chunk || "").trim().length < 80) reasons.push("source_chunk_too_short");
  if (!hasValidLearningContent(quality)) reasons.push("no_definition_example_or_exercise");
  if (topic.confidence < 0.7) reasons.push("confidence_below_0.7");
  if (quality.keyword_match_score < 0.5) reasons.push("keyword_match_score_below_0.5");
  if (topic.source_type !== "real") reasons.push("not_real_source");
  if (chunk?.extraction_status !== "ok") reasons.push("extraction_status_not_ok");
  if (chunk?.needs_ocr) reasons.push("needs_ocr");
  if (!quality.is_primary_learning_source) reasons.push("not_primary_learning_source");
  return reasons;
}

function mockQuality() {
  return {
    is_real_file: false,
    is_admin_material: false,
    contains_definition: false,
    contains_example: false,
    contains_exercise: false,
    keyword_match_score: 0,
    is_primary_learning_source: false
  };
}

function mockTopic(kp) {
  const quality = mockQuality();
  return {
    topic_id: topicIdFor(kp),
    knowledge_id: kp.id,
    subject_id: subjectForCourse(kp.courseId),
    topic_title: kp.title,
    material_type: "concept",
    topic_type: classifyTopic(kp),
    source_type: "mock",
    source_ids: [],
    source_file: "data/study_system.json",
    source_page_or_section: `knowledgePoints[id=${kp.id}]`,
    source_chunk: kp.oneLine || "",
    source_excerpt: kp.oneLine || "",
    keywords: buildKeywords(kp, null),
    prerequisites: kp.prerequisiteIds || [],
    next_topics: kp.nextIds || [],
    related_exercises: [],
    ai_supplement: true,
    confidence: 0.4,
    source_quality: quality,
    needs_review: true,
    review_reasons: ["mock_fallback", "not_real_source", "not_primary_learning_source"]
  };
}

function realTopic(kp, ranked) {
  const { chunk, keywordScore, priority, quality } = ranked;
  const confidence = confidenceFor({ keywordScore, priority, quality, chunk });
  const topic = {
    topic_id: topicIdFor(kp),
    knowledge_id: kp.id,
    subject_id: chunk.subject_id || subjectForCourse(kp.courseId),
    topic_title: kp.title,
    material_type: materialTypeFor(chunk),
    topic_type: classifyTopic(kp),
    source_type: "real",
    source_ids: [chunk.source_id],
    source_file: chunk.file_name,
    source_page_or_section: chunk.page_or_section,
    source_chunk: chunk.chunk_text,
    source_excerpt: excerpt(chunk.chunk_text),
    keywords: buildKeywords(kp, chunk),
    prerequisites: kp.prerequisiteIds || [],
    next_topics: kp.nextIds || [],
    related_exercises: [],
    ai_supplement: true,
    confidence,
    extraction_status: chunk.extraction_status,
    needs_ocr: Boolean(chunk.needs_ocr),
    extraction_failed: Boolean(chunk.extraction_failed),
    source_quality: quality
  };
  topic.review_reasons = reviewReasons(topic, quality, chunk);
  topic.needs_review = topic.review_reasons.length > 0;
  return topic;
}

function rankChunk(kp, chunk) {
  const keywordScore = keywordMatchScore(kp, chunk);
  const quality = sourceQuality(kp, chunk, keywordScore);
  const priority = sourcePriority(chunk);
  const learningBonus = quality.is_primary_learning_source ? 1 : 0;
  const score = keywordScore * 10 + priority + learningBonus;
  return { chunk, keywordScore, quality, priority, score };
}

function buildTopicSourceMap() {
  const study = readJson(studyPath, { knowledgePoints: [] });
  const sourceChunks = readJson(chunksPath, { chunks: [] });
  const chunks = Array.isArray(sourceChunks.chunks) ? sourceChunks.chunks : [];
  const usableChunks = chunks.filter((chunk) =>
    chunk.extraction_status === "ok" &&
    !chunk.extraction_failed &&
    !chunk.needs_ocr &&
    String(chunk.chunk_text || "").trim()
  );

  const topics = study.knowledgePoints.map((kp) => {
    const ranked = usableChunks
      .map((chunk) => rankChunk(kp, chunk))
      .filter((item) => item.keywordScore > 0)
      .sort((a, b) => b.score - a.score || b.priority - a.priority || b.keywordScore - a.keywordScore);
    if (!ranked.length) return mockTopic(kp);
    return realTopic(kp, ranked[0]);
  });

  const output = {
    version: 3,
    generated_at: new Date().toISOString(),
    source: "data/source_chunks.json",
    topics
  };
  fs.writeFileSync(outPath, `${JSON.stringify(output, null, 2)}\n`, "utf8");
  return output;
}

if (require.main === module) {
  const output = buildTopicSourceMap();
  const realCount = output.topics.filter((topic) => topic.source_type === "real").length;
  const mockCount = output.topics.filter((topic) => topic.source_type === "mock").length;
  const lowQuality = output.topics.filter((topic) => !topic.source_quality?.is_primary_learning_source).length;
  console.log(`topics: ${output.topics.length}`);
  console.log(`topicsLinkedToRealSources: ${realCount}`);
  console.log(`topicsStillUsingMockData: ${mockCount}`);
  console.log(`topicsWithLowSourceQuality: ${lowQuality}`);
}

module.exports = { buildTopicSourceMap };
