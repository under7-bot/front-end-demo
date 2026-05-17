const dataFiles = {
  knowledge: "../data/knowledge.json",
  questions: "../data/questions.json",
  learningPaths: "../data/learning_paths.json"
};

const pageText = {
  zh: {
    htmlLang: "zh",
    detailEyebrow: "知识点详情",
    loadingTitle: "正在加载知识点...",
    loadingSummary: "正在加载摘要...",
    backLink: "返回首页",
    overviewEyebrow: "概览",
    overviewTitle: "知识信息",
    subject: "主题",
    category: "分类",
    level: "等级",
    levelValue: "等级",
    keywords: "关键词",
    pathEyebrow: "学习路径",
    pathTitle: "学习路径位置",
    prerequisiteEyebrow: "之前需要",
    prerequisiteTitle: "前置知识点",
    nextEyebrow: "之后学习",
    nextTitle: "后续知识点",
    relatedEyebrow: "附近概念",
    relatedTitle: "相关知识点",
    questionEyebrow: "复习链接",
    questionTitle: "相关问题笔记",
    position: "位置",
    of: "/",
    none: "暂无",
    noPath: "这个知识点还没有加入学习路径。",
    noKnowledgeLinks: "暂无相关知识点。",
    noQuestionLinks: "暂无相关问题笔记。",
    missingKnowledge: "缺少知识点：",
    missingQuestion: "缺少问题笔记：",
    notFoundTitle: "未找到知识点",
    missingId: "请在 URL 中添加 id 参数，例如：knowledge.html?id=cpu",
    notFoundPrefix: "没有找到这个 ID 的知识点：",
    loadErrorHelp: "请使用本地静态服务器打开页面，让 fetch() 可以读取 JSON。"
  },
  ja: {
    htmlLang: "ja",
    detailEyebrow: "知識点詳細",
    loadingTitle: "知識点を読み込み中...",
    loadingSummary: "概要を読み込み中...",
    backLink: "ホームへ戻る",
    overviewEyebrow: "概要",
    overviewTitle: "知識情報",
    subject: "主題",
    category: "カテゴリ",
    level: "レベル",
    levelValue: "レベル",
    keywords: "キーワード",
    pathEyebrow: "学習パス",
    pathTitle: "学習パス内の位置",
    prerequisiteEyebrow: "前に必要",
    prerequisiteTitle: "前提知識点",
    nextEyebrow: "次に学ぶ",
    nextTitle: "次の知識点",
    relatedEyebrow: "近い概念",
    relatedTitle: "関連知識点",
    questionEyebrow: "復習リンク",
    questionTitle: "関連質問ノート",
    position: "位置",
    of: "/",
    none: "なし",
    noPath: "この知識点はまだ学習パスに入っていません。",
    noKnowledgeLinks: "関連知識点はまだありません。",
    noQuestionLinks: "関連質問ノートはまだありません。",
    missingKnowledge: "見つからない知識点：",
    missingQuestion: "見つからない質問ノート：",
    notFoundTitle: "知識点が見つかりません",
    missingId: "URL に id パラメータを追加してください。例：knowledge.html?id=cpu",
    notFoundPrefix: "この ID の知識点はありません：",
    loadErrorHelp: "fetch() が JSON を読めるように、ローカル静的サーバーで開いてください。"
  },
  en: {
    htmlLang: "en",
    detailEyebrow: "Knowledge detail",
    loadingTitle: "Loading knowledge point...",
    loadingSummary: "Loading summary...",
    backLink: "Back to homepage",
    overviewEyebrow: "Overview",
    overviewTitle: "Knowledge Information",
    subject: "Subject",
    category: "Category",
    level: "Level",
    levelValue: "Level",
    keywords: "Keywords",
    pathEyebrow: "Learning path",
    pathTitle: "Learning Path Position",
    prerequisiteEyebrow: "Before this",
    prerequisiteTitle: "Prerequisite Knowledge Points",
    nextEyebrow: "After this",
    nextTitle: "Next Knowledge Points",
    relatedEyebrow: "Nearby ideas",
    relatedTitle: "Related Knowledge Points",
    questionEyebrow: "Review links",
    questionTitle: "Related Question Notes",
    position: "Position",
    of: "of",
    none: "None",
    noPath: "This knowledge point is not in a learning path yet.",
    noKnowledgeLinks: "No linked knowledge points yet.",
    noQuestionLinks: "No linked question notes yet.",
    missingKnowledge: "Missing knowledge point: ",
    missingQuestion: "Missing question note: ",
    notFoundTitle: "Knowledge point not found",
    missingId: "Add an id query parameter, for example: knowledge.html?id=cpu",
    notFoundPrefix: "No knowledge point exists with id: ",
    loadErrorHelp: "Use a local static server so fetch() can read JSON."
  }
};

let currentLanguage = "zh";
let currentKnowledgeId = "";
let pageData = {
  knowledge: [],
  questions: [],
  learningPaths: [],
  point: null,
  errorMessageKey: "",
  errorMessageDetail: ""
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

function getCopy(key) {
  return pageText[currentLanguage][key] || pageText.zh[key] || "";
}

function getText(value) {
  if (typeof value === "string") {
    return value;
  }

  if (!value) {
    return "";
  }

  return value[currentLanguage] || value.zh || "";
}

function getArray(value) {
  if (Array.isArray(value)) {
    return value;
  }

  if (!value) {
    return [];
  }

  return value[currentLanguage] || value.zh || [];
}

function setText(id, text) {
  const element = document.querySelector("#" + id);

  if (element) {
    element.textContent = text;
  }
}

function getKnowledgeIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function findById(items, id) {
  return items.find(function (item) {
    return item.id === id;
  });
}

function updateStaticText() {
  document.documentElement.lang = getCopy("htmlLang");

  setText("detail-eyebrow", getCopy("detailEyebrow"));
  setText("back-link", getCopy("backLink"));
  setText("overview-eyebrow", getCopy("overviewEyebrow"));
  setText("overview-title", getCopy("overviewTitle"));
  setText("subject-label", getCopy("subject"));
  setText("category-label", getCopy("category"));
  setText("level-label", getCopy("level"));
  setText("keywords-label", getCopy("keywords"));
  setText("path-eyebrow", getCopy("pathEyebrow"));
  setText("path-title", getCopy("pathTitle"));
  setText("prerequisite-eyebrow", getCopy("prerequisiteEyebrow"));
  setText("prerequisite-title", getCopy("prerequisiteTitle"));
  setText("next-eyebrow", getCopy("nextEyebrow"));
  setText("next-title", getCopy("nextTitle"));
  setText("related-eyebrow", getCopy("relatedEyebrow"));
  setText("related-title", getCopy("relatedTitle"));
  setText("question-eyebrow", getCopy("questionEyebrow"));
  setText("question-title", getCopy("questionTitle"));
}

function updateLanguageButtons() {
  document.querySelectorAll(".language-button").forEach(function (button) {
    const isSelected = button.dataset.language === currentLanguage;
    button.classList.toggle("is-active", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });
}

function renderChipList(targetId, values) {
  const target = document.querySelector(targetId);
  const list = createElement("ul", "chip-list");
  const safeValues = values && values.length ? values : [getCopy("none")];

  safeValues.forEach(function (value) {
    list.appendChild(createElement("li", "chip", value));
  });

  target.innerHTML = "";
  target.appendChild(list);
}

function createKnowledgeLink(point) {
  const link = createElement("a", "relationship-item");
  link.href = "knowledge.html?id=" + encodeURIComponent(point.id);

  link.appendChild(createElement("strong", "", getText(point.title)));
  link.appendChild(createElement("span", "", point.id));

  return link;
}

function createQuestionLink(question) {
  const link = createElement("a", "relationship-item");
  link.href = "question.html?id=" + encodeURIComponent(question.id);

  link.appendChild(createElement("strong", "", getText(question.title)));
  link.appendChild(createElement("span", "", getText(question.answerSummary)));

  return link;
}

function renderKnowledgeLinks(targetId, ids) {
  const target = document.querySelector(targetId);
  target.innerHTML = "";

  if (!ids || ids.length === 0) {
    target.appendChild(createElement("p", "plain-note", getCopy("noKnowledgeLinks")));
    return;
  }

  ids.forEach(function (id) {
    const point = findById(pageData.knowledge, id);

    if (point) {
      target.appendChild(createKnowledgeLink(point));
    } else {
      target.appendChild(createElement("p", "plain-note", getCopy("missingKnowledge") + id));
    }
  });
}

function renderQuestionLinks(ids) {
  const target = document.querySelector("#question-list");
  target.innerHTML = "";

  if (!ids || ids.length === 0) {
    target.appendChild(createElement("p", "plain-note", getCopy("noQuestionLinks")));
    return;
  }

  ids.forEach(function (id) {
    const question = findById(pageData.questions, id);

    if (question) {
      target.appendChild(createQuestionLink(question));
    } else {
      target.appendChild(createElement("p", "plain-note", getCopy("missingQuestion") + id));
    }
  });
}

function renderLearningPathPosition(point) {
  const target = document.querySelector("#learning-path-position");
  target.innerHTML = "";

  const pathIds = point.learningPathIds || [];
  const relatedPaths = pageData.learningPaths.filter(function (path) {
    return pathIds.includes(path.id);
  });

  if (relatedPaths.length === 0) {
    target.appendChild(createElement("p", "plain-note", getCopy("noPath")));
    return;
  }

  relatedPaths.forEach(function (path) {
    const nodes = path.nodes || [];
    const position = nodes.indexOf(point.id) + 1;
    const total = nodes.length;
    const item = createElement("article", "relationship-item");
    const positionText = position > 0
      ? getCopy("position") + " " + position + " " + getCopy("of") + " " + total
      : getCopy("position") + " " + getCopy("none");

    item.appendChild(createElement("strong", "", getText(path.title)));
    item.appendChild(createElement("span", "", positionText));

    target.appendChild(item);
  });
}

function renderKnowledgeDetail() {
  const point = pageData.point;

  if (!point) {
    renderNotFound();
    return;
  }

  document.title = getText(point.title) + " | AI Memory Palace Learning Trace";
  setText("knowledge-title", getText(point.title));
  setText("knowledge-summary", getText(point.summary));
  setText("knowledge-subject", getText(point.subject) || getCopy("none"));
  setText("knowledge-category", getText(point.category) || getCopy("none"));
  setText("knowledge-level", getCopy("levelValue") + " " + point.level);

  renderChipList("#knowledge-keywords", getArray(point.keywords));
  renderLearningPathPosition(point);
  renderKnowledgeLinks("#prerequisite-list", point.prerequisiteIds);
  renderKnowledgeLinks("#next-list", point.nextIds);
  renderKnowledgeLinks("#related-list", point.relatedIds);
  renderQuestionLinks(point.questionIds);
}

function renderNotFound() {
  document.title = getCopy("notFoundTitle") + " | AI Memory Palace Learning Trace";
  setText("knowledge-title", getCopy("notFoundTitle"));

  if (pageData.errorMessageKey === "missingId") {
    setText("knowledge-summary", getCopy("missingId"));
  } else if (pageData.errorMessageKey === "loadError") {
    setText("knowledge-summary", pageData.errorMessageDetail + ". " + getCopy("loadErrorHelp"));
  } else {
    setText("knowledge-summary", getCopy("notFoundPrefix") + pageData.errorMessageDetail);
  }
}

function renderPage() {
  updateStaticText();
  updateLanguageButtons();
  renderKnowledgeDetail();
}

function setLanguage(language) {
  currentLanguage = pageText[language] ? language : "zh";
  renderPage();
}

function setupLanguageSelector() {
  document.querySelectorAll(".language-button").forEach(function (button) {
    button.addEventListener("click", function () {
      setLanguage(button.dataset.language);
    });
  });
}

async function startKnowledgeDetailPage() {
  setupLanguageSelector();
  updateStaticText();
  updateLanguageButtons();

  try {
    currentKnowledgeId = getKnowledgeIdFromUrl();

    if (!currentKnowledgeId) {
      pageData.errorMessageKey = "missingId";
      renderPage();
      return;
    }

    const knowledge = await loadJson(dataFiles.knowledge);
    const questions = await loadJson(dataFiles.questions);
    const learningPaths = await loadJson(dataFiles.learningPaths);
    const point = findById(knowledge, currentKnowledgeId);

    pageData = {
      knowledge: knowledge,
      questions: questions,
      learningPaths: learningPaths,
      point: point || null,
      errorMessageKey: point ? "" : "notFound",
      errorMessageDetail: currentKnowledgeId
    };

    renderPage();
  } catch (error) {
    pageData.errorMessageKey = "loadError";
    pageData.errorMessageDetail = error.message;
    renderPage();
  }
}

startKnowledgeDetailPage();
