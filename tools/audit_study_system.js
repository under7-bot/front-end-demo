const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const studyPath = path.join(root, "data", "study_system.json");
const topicMapPath = path.join(root, "data", "topic_source_map.json");
const sourceChunksPath = path.join(root, "data", "source_chunks.json");
const reportPath = path.join(root, "data", "audit_report.json");

function readJson(file, fallback = null) {
  if (!fs.existsSync(file)) return fallback;
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function hasText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function isMissingConfidence(value) {
  return typeof value !== "number" || Number.isNaN(value);
}

function sameText(a, b) {
  return String(a || "").trim() === String(b || "").trim();
}

function auditStudySystem(options = {}) {
  const study = readJson(studyPath, { courses: [], knowledgePoints: [] });
  const topicMapExists = fs.existsSync(topicMapPath);
  const sourceChunksExists = fs.existsSync(sourceChunksPath);
  const topicMap = readJson(topicMapPath, { topics: [] });
  const sourceChunksDoc = readJson(sourceChunksPath, { chunks: [] });
  const topics = Array.isArray(topicMap.topics) ? topicMap.topics : [];
  const sourceChunks = Array.isArray(sourceChunksDoc.chunks) ? sourceChunksDoc.chunks : [];
  const sourceById = new Map(sourceChunks.map((chunk) => [chunk.source_id, chunk]));
  const topicByKnowledgeId = new Map(topics.map((topic) => [topic.knowledge_id, topic]));

  const pages = study.knowledgePoints.map((kp) => {
    const topic = topicByKnowledgeId.get(kp.id);
    const sourceIds = Array.isArray(topic?.source_ids) ? topic.source_ids : [];
    const linkedSources = sourceIds.map((id) => sourceById.get(id)).filter(Boolean);
    const primarySource = linkedSources[0];
    const missingTopic = !topic;
    const usingMockData = missingTopic || topic.source_type === "mock" || topic.source_file === "data/study_system.json";
    const missingSourceIds = !usingMockData && sourceIds.length === 0;
    const missingSourceFile = missingTopic || !hasText(topic.source_file);
    const missingSourceChunk = missingTopic || (!hasText(topic.source_chunk) && !hasText(topic.source_excerpt));
    const missingSourceLocation = missingTopic || !hasText(topic.source_page_or_section);
    const missingConfidence = missingTopic || isMissingConfidence(topic.confidence);
    const missingAiSupplement = missingTopic || typeof topic.ai_supplement !== "boolean";
    const missingNeedsReview = missingTopic || typeof topic.needs_review !== "boolean";
    const emptyKeywords = missingTopic || !Array.isArray(topic.keywords) || topic.keywords.length === 0;
    const missingLinkedSource = !usingMockData && sourceIds.some((id) => !sourceById.has(id));
    const sourceChunkNotFromSourceChunks = !usingMockData && primarySource && !sameText(topic.source_chunk, primarySource.chunk_text);
    const sourceFileIsMock = usingMockData;
    const lowConfidence = !missingConfidence && topic.confidence < 0.7;
    const lowConfidenceNotMarkedReview = lowConfidence && topic.needs_review !== true;
    const quality = topic?.source_quality || {};
    const adminMaterialUsedAsConceptSource = Boolean((topic?.topic_type === "core_concept" || topic?.topic_type === "advanced_concept") && quality.is_admin_material);
    const lowSourceQuality = Boolean(
      !quality.is_real_file ||
      quality.is_admin_material ||
      !quality.is_primary_learning_source ||
      typeof quality.keyword_match_score !== "number" ||
      quality.keyword_match_score < 0.5
    );
    const withoutDefinitionOrExample = Boolean(!quality.contains_definition && !quality.contains_example && !quality.contains_exercise);
    const usingSyllabusAsMainSource = Boolean(/シラバス|授業計画|ガイダンス/.test(topic?.source_file || ""));
    const usingGeneralChunk = sourceIds.some((id) => /(^|-)general(-|$)/.test(id));
    const extractionFailedSource = linkedSources.some((source) => source.extraction_failed || source.extraction_status === "extraction_failed" || source.extraction_status === "unsupported_type");
    const needsOcrSource = linkedSources.some((source) => source.needs_ocr || source.extraction_status === "needs_ocr");
    const invalidOfficialPage = !usingMockData && (extractionFailedSource || needsOcrSource) && topic.needs_review !== true;

    const needsReview = Boolean(
      missingTopic ||
      usingMockData ||
      missingSourceIds ||
      missingSourceFile ||
      missingSourceChunk ||
      missingSourceLocation ||
      missingConfidence ||
      missingAiSupplement ||
      missingNeedsReview ||
      emptyKeywords ||
      missingLinkedSource ||
      sourceChunkNotFromSourceChunks ||
      lowConfidenceNotMarkedReview ||
      adminMaterialUsedAsConceptSource ||
      lowSourceQuality ||
      withoutDefinitionOrExample ||
      extractionFailedSource ||
      needsOcrSource ||
      topic?.needs_review
    );

    return {
      knowledge_id: kp.id,
      topic_id: topic?.topic_id || null,
      title: kp.title,
      source_type: topic?.source_type || null,
      source_ids: sourceIds,
      source_file: topic?.source_file || null,
      confidence: topic?.confidence ?? null,
      needs_review: needsReview,
      checks: {
        missing_topic: missingTopic,
        using_mock_data: usingMockData,
        missing_source_ids: missingSourceIds,
        missing_source_file: missingSourceFile,
        missing_source_chunk_or_excerpt: missingSourceChunk,
        missing_source_page_or_section: missingSourceLocation,
        missing_confidence: missingConfidence,
        missing_ai_supplement: missingAiSupplement,
        missing_needs_review: missingNeedsReview,
        empty_keywords: emptyKeywords,
        missing_linked_source: missingLinkedSource,
        source_chunk_not_from_source_chunks: sourceChunkNotFromSourceChunks,
        source_file_is_mock: sourceFileIsMock,
        low_confidence: lowConfidence,
        low_confidence_not_marked_review: lowConfidenceNotMarkedReview,
        admin_material_used_as_concept_source: adminMaterialUsedAsConceptSource,
        low_source_quality: lowSourceQuality,
        without_definition_or_example: withoutDefinitionOrExample,
        using_syllabus_as_main_source: usingSyllabusAsMainSource,
        using_general_chunk: usingGeneralChunk,
        extraction_failed_source: extractionFailedSource,
        needs_ocr_source: needsOcrSource,
        invalid_official_page: invalidOfficialPage
      }
    };
  });

  const count = (predicate) => pages.filter(predicate).length;
  const alignmentErrors = pages.reduce((total, page) => {
    const checks = page.checks;
    return total + [
      checks.missing_topic,
      checks.missing_source_ids,
      checks.missing_source_file,
      checks.missing_source_chunk_or_excerpt,
      checks.missing_source_page_or_section,
      checks.missing_confidence,
      checks.missing_ai_supplement,
      checks.missing_needs_review,
      checks.missing_linked_source,
      checks.source_chunk_not_from_source_chunks,
      checks.low_confidence_not_marked_review,
      checks.invalid_official_page,
      checks.admin_material_used_as_concept_source
    ].filter(Boolean).length;
  }, 0);

  const extractionFailedCount = sourceChunks.filter((chunk) => chunk.extraction_failed || chunk.extraction_status === "extraction_failed" || chunk.extraction_status === "unsupported_type").length;
  const needsOcrCount = sourceChunks.filter((chunk) => chunk.needs_ocr || chunk.extraction_status === "needs_ocr").length;
  const topicsLinkedToRealSources = count((page) => !page.checks.using_mock_data && page.source_ids.length > 0 && !page.checks.missing_linked_source);
  const topicsStillUsingMockData = count((page) => page.checks.using_mock_data);
  const adminMaterialUsedAsConceptSource = count((page) => page.checks.admin_material_used_as_concept_source);
  const topicsWithLowSourceQuality = count((page) => page.checks.low_source_quality);
  const topicsWithoutDefinitionOrExample = count((page) => page.checks.without_definition_or_example);
  const topicsUsingSyllabusAsMainSource = count((page) => page.checks.using_syllabus_as_main_source);
  const topicsUsingGeneralChunk = count((page) => page.checks.using_general_chunk);
  const sourceQualityWarnings = adminMaterialUsedAsConceptSource + topicsWithLowSourceQuality + topicsWithoutDefinitionOrExample + topicsUsingSyllabusAsMainSource + topicsUsingGeneralChunk;

  const report = {
    generated_at: new Date().toISOString(),
    topic_source_map_exists: topicMapExists,
    topic_source_map_non_empty: topics.length > 0,
    source_chunks_exists: sourceChunksExists,
    source_chunks_non_empty: sourceChunks.length > 0,
    realSourceChunks: sourceChunks.filter((chunk) => chunk.extraction_status === "ok" && !chunk.extraction_failed && !chunk.needs_ocr).length,
    totalCourses: study.courses.length,
    totalKnowledgePages: study.knowledgePoints.length,
    missingSourceFilePages: count((page) => page.checks.missing_source_file),
    pagesWithoutSourceChunk: count((page) => page.checks.missing_source_chunk_or_excerpt),
    missingConfidencePages: count((page) => page.checks.missing_confidence),
    needsReviewCount: count((page) => page.needs_review),
    emptyKeywordPages: count((page) => page.checks.empty_keywords),
    lowConfidencePages: count((page) => page.checks.low_confidence),
    unmarkedAiSupplementPages: count((page) => page.checks.missing_ai_supplement),
    topicsLinkedToRealSources,
    topicsStillUsingMockData,
    adminMaterialUsedAsConceptSource,
    topicsWithLowSourceQuality,
    topicsWithoutDefinitionOrExample,
    topicsUsingSyllabusAsMainSource,
    topicsUsingGeneralChunk,
    sourceQualityWarnings,
    extractionFailedCount,
    needsOcrCount,
    alignmentErrors,
    pages
  };

  if (options.write !== false) {
    fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
  }

  return report;
}

if (require.main === module) {
  const report = auditStudySystem();
  console.log(JSON.stringify({
    totalCourses: report.totalCourses,
    totalKnowledgePages: report.totalKnowledgePages,
    source_chunks_exists: report.source_chunks_exists,
    source_chunks_non_empty: report.source_chunks_non_empty,
    realSourceChunks: report.realSourceChunks,
    topicsLinkedToRealSources: report.topicsLinkedToRealSources,
    topicsStillUsingMockData: report.topicsStillUsingMockData,
    adminMaterialUsedAsConceptSource: report.adminMaterialUsedAsConceptSource,
    topicsWithLowSourceQuality: report.topicsWithLowSourceQuality,
    topicsWithoutDefinitionOrExample: report.topicsWithoutDefinitionOrExample,
    topicsUsingSyllabusAsMainSource: report.topicsUsingSyllabusAsMainSource,
    topicsUsingGeneralChunk: report.topicsUsingGeneralChunk,
    sourceQualityWarnings: report.sourceQualityWarnings,
    extractionFailedCount: report.extractionFailedCount,
    needsOcrCount: report.needsOcrCount,
    missingSourceFilePages: report.missingSourceFilePages,
    pagesWithoutSourceChunk: report.pagesWithoutSourceChunk,
    missingConfidencePages: report.missingConfidencePages,
    needsReviewCount: report.needsReviewCount,
    emptyKeywordPages: report.emptyKeywordPages,
    lowConfidencePages: report.lowConfidencePages,
    unmarkedAiSupplementPages: report.unmarkedAiSupplementPages,
    alignmentErrors: report.alignmentErrors
  }, null, 2));
}

module.exports = { auditStudySystem };
