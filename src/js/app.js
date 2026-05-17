const dataFiles = {
  knowledge: "../data/knowledge.json",
  questions: "../data/questions.json",
  learningPaths: "../data/learning_paths.json"
};

const languages = {
  zh: {
    htmlLang: "zh",
    headerEyebrow: "个人 AI 学习系统",
    projectTitle: "AI Memory Palace Learning Trace System",
    projectSubtitle: "用中文、日语和英语组织学习路径、知识点、问题笔记和聊天轨迹。",
    navigationEyebrow: "学习入口",
    navigationTitle: "导航",
    navPathKicker: "路径地图",
    navPathTitle: "Learning Paths",
    navPathDesc: "预览有顺序的学习路线。",
    navKnowledgeKicker: "知识上下文",
    navKnowledgeTitle: "Main Knowledge Points",
    navKnowledgeDesc: "预览带有前置、后续和关联关系的知识点。",
    navQuestionKicker: "复习问题",
    navQuestionTitle: "Question Notes",
    navQuestionDesc: "预览连接到知识点的问题笔记。",
    navChatKicker: "对话记忆",
    navChatTitle: "Chat Traces",
    navChatDesc: "聊天轨迹浏览入口，后续步骤实现。",
    navImportKicker: "稍后实现",
    navImportTitle: "Import Chat",
    navImportDesc: "Step 1 不实现聊天导入。",
    navSearchKicker: "稍后实现",
    navSearchTitle: "Search",
    navSearchDesc: "Step 1 不实现搜索。",
    learningPathEyebrow: "来自 data/learning_paths.json",
    learningPathTitle: "学习路径预览",
    knowledgeEyebrow: "来自 data/knowledge.json",
    knowledgeTitle: "主知识点预览",
    questionEyebrow: "来自 data/questions.json",
    questionTitle: "问题笔记预览",
    chatEyebrow: "占位入口",
    chatTraceTitle: "聊天轨迹",
    chatPlaceholder: "聊天轨迹浏览会在后续步骤中实现。",
    goal: "目标",
    pathOrder: "路径顺序",
    keywords: "关键词",
    prerequisites: "前置知识",
    next: "后续知识",
    related: "相关知识",
    learningPaths: "学习路径",
    relatedKnowledge: "相关知识",
    originalLanguage: "原始问题语言",
    status: "状态",
    type: "类型",
    none: "暂无",
    level: "等级",
    loadingPath: "正在加载学习路径预览...",
    loadingKnowledge: "正在加载知识点预览...",
    loadingQuestion: "正在加载问题笔记预览...",
    loadErrorHelp: "如果你直接打开 HTML 文件，请使用本地静态服务器，让 fetch() 可以读取 JSON。"
  },
  ja: {
    htmlLang: "ja",
    headerEyebrow: "個人 AI 学習システム",
    projectTitle: "AI Memory Palace Learning Trace System",
    projectSubtitle: "中国語、日本語、英語で学習パス、知識点、質問ノート、チャットトレースを整理します。",
    navigationEyebrow: "学習入口",
    navigationTitle: "ナビゲーション",
    navPathKicker: "パスマップ",
    navPathTitle: "Learning Paths",
    navPathDesc: "順序のある学習ルートをプレビューします。",
    navKnowledgeKicker: "知識コンテキスト",
    navKnowledgeTitle: "Main Knowledge Points",
    navKnowledgeDesc: "前提、次、関連を持つ知識点をプレビューします。",
    navQuestionKicker: "復習質問",
    navQuestionTitle: "Question Notes",
    navQuestionDesc: "知識点に接続された質問ノートをプレビューします。",
    navChatKicker: "会話の記憶",
    navChatTitle: "Chat Traces",
    navChatDesc: "チャットトレース閲覧の入口です。後のステップで実装します。",
    navImportKicker: "後で実装",
    navImportTitle: "Import Chat",
    navImportDesc: "Step 1 ではチャットインポートを実装しません。",
    navSearchKicker: "後で実装",
    navSearchTitle: "Search",
    navSearchDesc: "Step 1 では検索を実装しません。",
    learningPathEyebrow: "data/learning_paths.json から読み込み",
    learningPathTitle: "学習パスプレビュー",
    knowledgeEyebrow: "data/knowledge.json から読み込み",
    knowledgeTitle: "主な知識点プレビュー",
    questionEyebrow: "data/questions.json から読み込み",
    questionTitle: "質問ノートプレビュー",
    chatEyebrow: "プレースホルダー",
    chatTraceTitle: "チャットトレース",
    chatPlaceholder: "チャットトレース閲覧は後のステップで実装します。",
    goal: "目標",
    pathOrder: "パス順序",
    keywords: "キーワード",
    prerequisites: "前提知識",
    next: "次の知識",
    related: "関連知識",
    learningPaths: "学習パス",
    relatedKnowledge: "関連知識",
    originalLanguage: "元の質問言語",
    status: "状態",
    type: "タイプ",
    none: "なし",
    level: "レベル",
    loadingPath: "学習パスプレビューを読み込み中...",
    loadingKnowledge: "知識点プレビューを読み込み中...",
    loadingQuestion: "質問ノートプレビューを読み込み中...",
    loadErrorHelp: "HTML ファイルを直接開いた場合は、fetch() が JSON を読めるようにローカル静的サーバーを使ってください。"
  },
  en: {
    htmlLang: "en",
    headerEyebrow: "Personal AI learning system",
    projectTitle: "AI Memory Palace Learning Trace System",
    projectSubtitle: "Organize learning paths, knowledge points, question notes, and chat traces in Chinese, Japanese, and English.",
    navigationEyebrow: "Library entrances",
    navigationTitle: "Navigation",
    navPathKicker: "Path map",
    navPathTitle: "Learning Paths",
    navPathDesc: "Preview ordered learning routes.",
    navKnowledgeKicker: "Knowledge context",
    navKnowledgeTitle: "Main Knowledge Points",
    navKnowledgeDesc: "Preview knowledge points with prerequisite, next, and related links.",
    navQuestionKicker: "Review notes",
    navQuestionTitle: "Question Notes",
    navQuestionDesc: "Preview question notes connected to knowledge points.",
    navChatKicker: "Conversation memory",
    navChatTitle: "Chat Traces",
    navChatDesc: "Placeholder entrance for future chat trace browsing.",
    navImportKicker: "Coming later",
    navImportTitle: "Import Chat",
    navImportDesc: "Chat import is not implemented in Step 1.",
    navSearchKicker: "Coming later",
    navSearchTitle: "Search",
    navSearchDesc: "Search is not implemented in Step 1.",
    learningPathEyebrow: "Loaded from data/learning_paths.json",
    learningPathTitle: "Learning Path Preview",
    knowledgeEyebrow: "Loaded from data/knowledge.json",
    knowledgeTitle: "Main Knowledge Point Preview",
    questionEyebrow: "Loaded from data/questions.json",
    questionTitle: "Question Note Preview",
    chatEyebrow: "Placeholder",
    chatTraceTitle: "Chat Traces",
    chatPlaceholder: "Chat trace browsing will be added in a later step.",
    goal: "Goal",
    pathOrder: "Path order",
    keywords: "Keywords",
    prerequisites: "Prerequisites",
    next: "Next",
    related: "Related",
    learningPaths: "Learning Paths",
    relatedKnowledge: "Related Knowledge",
    originalLanguage: "Original Question Language",
    status: "Status",
    type: "Type",
    none: "None",
    level: "Level",
    loadingPath: "Loading learning path preview...",
    loadingKnowledge: "Loading knowledge point preview...",
    loadingQuestion: "Loading question note preview...",
    loadErrorHelp: "If you opened the HTML file directly, use a simple local static server so fetch() can read JSON."
  }
};

let currentLanguage = "zh";
let homepageData = {
  knowledge: [],
  questions: [],
  learningPaths: []
};

async function loadJson(filePath) {
  const response = await fetch(filePath);

  if (!response.ok) {
    throw new Error("Could not load " + filePath);
  }

  return response.json();
}

function createElement(tagName, className, text) {
  const element = document.createElement(tagName);

  if (className) {
    element.className = className;
  }

  if (text !== undefined && text !== null) {
    element.textContent = text;
  }

  return element;
}

function getText(value, language) {
  if (typeof value === "string") {
    return value;
  }

  if (!value) {
    return "";
  }

  return value[language] || value.zh || "";
}

function getArray(value, language) {
  if (Array.isArray(value)) {
    return value;
  }

  if (!value) {
    return [];
  }

  return value[language] || value.zh || [];
}

function getCopy(key) {
  return languages[currentLanguage][key] || languages.zh[key] || "";
}

function setText(id, text) {
  const element = document.querySelector("#" + id);

  if (element) {
    element.textContent = text;
  }
}

function renderChipList(values) {
  const list = createElement("ul", "chip-list");
  const items = values && values.length ? values : [getCopy("none")];

  items.forEach(function (value) {
    list.appendChild(createElement("li", "chip", value));
  });

  return list;
}

function appendMetaGroup(card, label, values) {
  const group = createElement("div", "meta-group");

  group.appendChild(createElement("p", "meta-label", label));
  group.appendChild(renderChipList(values));
  card.appendChild(group);
}

function updateStaticText() {
  const copy = languages[currentLanguage];
  document.documentElement.lang = copy.htmlLang;

  setText("header-eyebrow", copy.headerEyebrow);
  setText("project-title", copy.projectTitle);
  setText("project-subtitle", copy.projectSubtitle);
  setText("navigation-eyebrow", copy.navigationEyebrow);
  setText("navigation-title", copy.navigationTitle);
  setText("nav-path-kicker", copy.navPathKicker);
  setText("nav-path-title", copy.navPathTitle);
  setText("nav-path-desc", copy.navPathDesc);
  setText("nav-knowledge-kicker", copy.navKnowledgeKicker);
  setText("nav-knowledge-title", copy.navKnowledgeTitle);
  setText("nav-knowledge-desc", copy.navKnowledgeDesc);
  setText("nav-question-kicker", copy.navQuestionKicker);
  setText("nav-question-title", copy.navQuestionTitle);
  setText("nav-question-desc", copy.navQuestionDesc);
  setText("nav-chat-kicker", copy.navChatKicker);
  setText("nav-chat-title", copy.navChatTitle);
  setText("nav-chat-desc", copy.navChatDesc);
  setText("nav-import-kicker", copy.navImportKicker);
  setText("nav-import-title", copy.navImportTitle);
  setText("nav-import-desc", copy.navImportDesc);
  setText("nav-search-kicker", copy.navSearchKicker);
  setText("nav-search-title", copy.navSearchTitle);
  setText("nav-search-desc", copy.navSearchDesc);
  setText("learning-path-eyebrow", copy.learningPathEyebrow);
  setText("learning-path-title", copy.learningPathTitle);
  setText("knowledge-eyebrow", copy.knowledgeEyebrow);
  setText("knowledge-title", copy.knowledgeTitle);
  setText("question-eyebrow", copy.questionEyebrow);
  setText("question-title", copy.questionTitle);
  setText("chat-eyebrow", copy.chatEyebrow);
  setText("chat-trace-title", copy.chatTraceTitle);
  setText("chat-placeholder", copy.chatPlaceholder);

  document.querySelector("#learning-path-list").setAttribute("data-empty", copy.loadingPath);
  document.querySelector("#knowledge-list").setAttribute("data-empty", copy.loadingKnowledge);
  document.querySelector("#question-list").setAttribute("data-empty", copy.loadingQuestion);
}

function updateLanguageButtons() {
  document.querySelectorAll(".language-button").forEach(function (button) {
    const isSelected = button.dataset.language === currentLanguage;
    button.classList.toggle("is-active", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });
}

function renderLearningPathPreview(paths) {
  const target = document.querySelector("#learning-path-list");
  target.innerHTML = "";

  paths.slice(0, 2).forEach(function (path) {
    const card = createElement("article", "preview-card");

    card.appendChild(createElement("h3", "", getText(path.title, currentLanguage)));
    card.appendChild(createElement("p", "summary", getText(path.description, currentLanguage)));
    appendMetaGroup(card, getCopy("goal"), [getText(path.goal, currentLanguage)]);

    const listLabel = createElement("p", "meta-label", getCopy("pathOrder"));
    const orderedList = createElement("ol", "path-list");

    path.nodes.forEach(function (knowledgePointId) {
      orderedList.appendChild(createElement("li", "", knowledgePointId));
    });

    card.appendChild(listLabel);
    card.appendChild(orderedList);
    target.appendChild(card);
  });
}

function renderKnowledgePreview(knowledgePoints) {
  const target = document.querySelector("#knowledge-list");
  target.innerHTML = "";

  knowledgePoints.slice(0, 3).forEach(function (point) {
    const card = createElement("article", "preview-card");
    const header = createElement("div", "preview-header");

    header.appendChild(createElement("h3", "", getText(point.title, currentLanguage)));
    header.appendChild(createElement("span", "badge", getCopy("level") + " " + point.level));

    card.appendChild(header);
    card.appendChild(createElement("p", "summary", getText(point.summary, currentLanguage)));
    appendMetaGroup(card, getCopy("keywords"), getArray(point.keywords, currentLanguage));
    appendMetaGroup(card, getCopy("prerequisites"), point.prerequisiteIds);
    appendMetaGroup(card, getCopy("next"), point.nextIds);
    appendMetaGroup(card, getCopy("related"), point.relatedIds);
    appendMetaGroup(card, getCopy("learningPaths"), point.learningPathIds);

    target.appendChild(card);
  });
}

function renderQuestionPreview(questions) {
  const target = document.querySelector("#question-list");
  target.innerHTML = "";

  questions.slice(0, 3).forEach(function (question) {
    const card = createElement("article", "preview-card");
    const header = createElement("div", "preview-header");

    header.appendChild(createElement("h3", "", getText(question.title, currentLanguage)));
    header.appendChild(createElement("span", "badge warning", question.status));

    card.appendChild(header);
    card.appendChild(createElement("p", "summary", getText(question.answerSummary, currentLanguage)));
    appendMetaGroup(card, getCopy("relatedKnowledge"), question.relatedKnowledgeIds);
    appendMetaGroup(card, getCopy("originalLanguage"), [question.originalQuestion.language]);
    appendMetaGroup(card, getCopy("type"), [question.type]);
    appendMetaGroup(card, getCopy("status"), [question.status]);

    target.appendChild(card);
  });
}

function renderHomepage() {
  updateStaticText();
  updateLanguageButtons();
  renderLearningPathPreview(homepageData.learningPaths);
  renderKnowledgePreview(homepageData.knowledge);
  renderQuestionPreview(homepageData.questions);
}

function setLanguage(language) {
  currentLanguage = languages[language] ? language : "zh";
  renderHomepage();
}

function setupLanguageSelector() {
  document.querySelectorAll(".language-button").forEach(function (button) {
    button.addEventListener("click", function () {
      setLanguage(button.dataset.language);
    });
  });
}

function showLoadError(error) {
  const main = document.querySelector("main");
  const message = createElement(
    "p",
    "plain-note",
    error.message + ". " + getCopy("loadErrorHelp")
  );

  main.prepend(message);
}

async function startHomepage() {
  setupLanguageSelector();
  updateStaticText();
  updateLanguageButtons();

  try {
    const knowledgePoints = await loadJson(dataFiles.knowledge);
    const questions = await loadJson(dataFiles.questions);
    const learningPaths = await loadJson(dataFiles.learningPaths);

    homepageData = {
      knowledge: knowledgePoints,
      questions: questions,
      learningPaths: learningPaths
    };

    renderHomepage();
  } catch (error) {
    showLoadError(error);
  }
}

startHomepage();
