// iBut学习网页交互脚本。
// 本文件只使用原生 JavaScript，不使用框架和外部库。

// 获取 DOM 元素：如果缺少元素，就在控制台提示。
const progressText = document.querySelector("#progressText");
const navButtons = document.querySelector("#navButtons");
const searchInput = document.querySelector("#searchInput");
const searchForm = document.querySelector("#search-form");
const sidebarList = document.querySelector("#sidebarList");
const contentArea = document.querySelector("#contentArea");
const termsArea = document.querySelector("#termsArea");
const examHintsArea = document.querySelector("#examHintsArea");
const quizArea = document.querySelector("#quizArea");

function warnMissingElement(name, element) {
  if (!element) {
    console.warn("缺少页面元素：" + name);
  }
}

warnMissingElement("progressText", progressText);
warnMissingElement("navButtons", navButtons);
warnMissingElement("searchInput", searchInput);
warnMissingElement("sidebarList", sidebarList);
warnMissingElement("contentArea", contentArea);
warnMissingElement("termsArea", termsArea);
warnMissingElement("examHintsArea", examHintsArea);
warnMissingElement("quizArea", quizArea);

// 全局状态：记录当前筛选、搜索、选中小节和已读小节。
let currentFilter = "全部";
let currentSearchText = "";
let currentSectionId = "";
let readSectionIds = [];

// 数据准备：如果数据文件没有加载，使用空数组避免页面崩掉。
let allStudySections = [];
let allTerms = [];
let allExamHints = [];
let allQuizzes = [];

if (typeof studySections !== "undefined") {
  allStudySections = studySections;
} else {
  console.warn("缺少数据：studySections");
}

if (typeof terms !== "undefined") {
  allTerms = terms;
} else {
  console.warn("缺少数据：terms");
}

if (typeof examHints !== "undefined") {
  allExamHints = examHints;
} else {
  console.warn("缺少数据：examHints");
}

if (typeof quizzes !== "undefined") {
  allQuizzes = quizzes;
} else {
  console.warn("缺少数据：quizzes");
}

// localStorage 读取：从浏览器读取已读小节 id。
function loadReadSections() {
  const savedText = localStorage.getItem("ibutReadSections");

  if (!savedText) {
    readSectionIds = [];
    return;
  }

  try {
    const savedIds = JSON.parse(savedText);

    if (Array.isArray(savedIds)) {
      readSectionIds = savedIds;
    } else {
      readSectionIds = [];
    }
  } catch (error) {
    console.warn("已读数据读取失败");
    readSectionIds = [];
  }
}

// localStorage 保存：把已读小节 id 保存为 JSON 字符串数组。
function saveReadSections() {
  const savedText = JSON.stringify(readSectionIds);
  localStorage.setItem("ibutReadSections", savedText);
}

// 学习进度：根据已读数量和全部小节数量更新 Header。
function updateProgress() {
  if (!progressText) {
    return;
  }

  progressText.textContent = "已读 " + readSectionIds.length + " / " + allStudySections.length;
}

// 简单文字匹配：大小写不敏感，用 includes 判断是否包含关键词。
function textIncludes(value, searchText) {
  if (!value) {
    return false;
  }

  const text = String(value).toLowerCase();
  const keyword = searchText.toLowerCase();
  return text.includes(keyword);
}

// 数组文字匹配：用于匹配 jpKeywords 和 examHints 这类数组字段。
function arrayIncludes(list, searchText) {
  let found = false;

  list.forEach(function (item) {
    if (textIncludes(item, searchText)) {
      found = true;
    }
  });

  return found;
}

// 小节搜索匹配：搜索小节本身、相关术语、题眼和模拟题。
function sectionMatchesSearch(section, searchText) {
  if (!searchText) {
    return true;
  }

  if (textIncludes(section.title, searchText)) {
    return true;
  }

  if (textIncludes(section.chapter, searchText)) {
    return true;
  }

  if (textIncludes(section.goal, searchText)) {
    return true;
  }

  if (arrayIncludes(section.jpKeywords, searchText)) {
    return true;
  }

  if (textIncludes(section.explanation, searchText)) {
    return true;
  }

  if (textIncludes(section.scenario, searchText)) {
    return true;
  }

  if (arrayIncludes(section.examHints, searchText)) {
    return true;
  }

  if (textIncludes(section.confusion, searchText)) {
    return true;
  }

  if (textIncludes(section.summary, searchText)) {
    return true;
  }

  let foundInTerms = false;
  allTerms.forEach(function (term) {
    if (term.sectionId === section.id && termMatchesSearch(term, searchText)) {
      foundInTerms = true;
    }
  });

  if (foundInTerms) {
    return true;
  }

  let foundInHints = false;
  allExamHints.forEach(function (hint) {
    if (hint.chapter === section.chapter && hintMatchesSearch(hint, searchText)) {
      foundInHints = true;
    }
  });

  if (foundInHints) {
    return true;
  }

  let foundInQuizzes = false;
  allQuizzes.forEach(function (quiz) {
    if (quiz.chapter === section.chapter && quizMatchesSearch(quiz, searchText)) {
      foundInQuizzes = true;
    }
  });

  return foundInQuizzes;
}

// 术语搜索匹配：支持日本語、読み方、中文、English 和题眼。
function termMatchesSearch(term, searchText) {
  if (!searchText) {
    return true;
  }

  return textIncludes(term.jp, searchText)
    || textIncludes(term.reading, searchText)
    || textIncludes(term.zh, searchText)
    || textIncludes(term.en, searchText)
    || textIncludes(term.hint, searchText)
    || textIncludes(term.chapter, searchText);
}

// 题眼搜索匹配：搜索关键词、答案和说明。
function hintMatchesSearch(hint, searchText) {
  if (!searchText) {
    return true;
  }

  return textIncludes(hint.keyword, searchText)
    || textIncludes(hint.answer, searchText)
    || textIncludes(hint.note, searchText)
    || textIncludes(hint.chapter, searchText);
}

// 模拟题搜索匹配：搜索题目、答案、解析和提示。
function quizMatchesSearch(quiz, searchText) {
  if (!searchText) {
    return true;
  }

  return textIncludes(quiz.question, searchText)
    || textIncludes(quiz.answer, searchText)
    || textIncludes(quiz.explanation, searchText)
    || textIncludes(quiz.hint, searchText)
    || textIncludes(quiz.chapter, searchText);
}

// 小节筛选：根据导航按钮和搜索文字返回当前小节。
function getFilteredSections() {
  const filteredSections = allStudySections.filter(function (section) {
    let filterMatched = false;

    if (currentFilter === "全部" || currentFilter === "题眼速查" || currentFilter === "模拟题") {
      filterMatched = true;
    } else if (section.chapter === currentFilter) {
      filterMatched = true;
    } else if (section.category === currentFilter) {
      filterMatched = true;
    }

    return filterMatched && sectionMatchesSearch(section, currentSearchText);
  });

  return filteredSections;
}

// 题眼筛选：章节筛选和搜索时同步过滤题眼数据。
function getFilteredExamHints() {
  const filteredHints = allExamHints.filter(function (hint) {
    let filterMatched = false;

    if (currentFilter === "全部" || currentFilter === "题眼速查" || currentFilter === "模拟题") {
      filterMatched = true;
    } else if (hint.chapter === currentFilter) {
      filterMatched = true;
    }

    return filterMatched && hintMatchesSearch(hint, currentSearchText);
  });

  return filteredHints;
}

// 模拟题筛选：章节筛选和搜索时同步过滤题目数据。
function getFilteredQuizzes() {
  const filteredQuizzes = allQuizzes.filter(function (quiz) {
    let filterMatched = false;

    if (currentFilter === "全部" || currentFilter === "题眼速查" || currentFilter === "模拟题") {
      filterMatched = true;
    } else if (quiz.chapter === currentFilter) {
      filterMatched = true;
    }

    return filterMatched && quizMatchesSearch(quiz, currentSearchText);
  });

  return filteredQuizzes;
}

// 导航渲染：生成全部、章节、题眼速查和模拟题按钮。
function renderNavButtons() {
  if (!navButtons) {
    return;
  }

  const chapters = [];

  allStudySections.forEach(function (section) {
    if (!chapters.includes(section.chapter)) {
      chapters.push(section.chapter);
    }
  });

  let htmlText = "";
  htmlText += '<button class="chapter-nav-button" type="button" data-filter="全部">全部</button>';

  chapters.forEach(function (chapter) {
    htmlText += '<button class="chapter-nav-button" type="button" data-filter="' + chapter + '">' + chapter + '</button>';
  });

  htmlText += '<button class="chapter-nav-button" type="button" data-filter="题眼速查">题眼速查</button>';
  htmlText += '<button class="chapter-nav-button" type="button" data-filter="模拟题">模拟题</button>';

  navButtons.innerHTML = htmlText;
  renderNavActive();
}

// 导航 active 状态：当前筛选按钮高亮。
function renderNavActive() {
  if (!navButtons) {
    return;
  }

  const buttons = navButtons.querySelectorAll(".chapter-nav-button");

  buttons.forEach(function (button) {
    const filterName = button.getAttribute("data-filter");

    if (filterName === currentFilter) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}

// Sidebar 渲染：根据当前筛选结果显示目录和已读状态。
function renderSidebar() {
  if (!sidebarList) {
    return;
  }

  const filteredSections = getFilteredSections();

  if (filteredSections.length === 0) {
    sidebarList.innerHTML = '<li class="chapter-list-item">没有找到学习板块</li>';
    return;
  }

  let htmlText = "";

  filteredSections.forEach(function (section) {
    const activeClass = section.id === currentSectionId ? " active" : "";
    const readClass = readSectionIds.includes(section.id) ? " is-read" : "";
    const readText = readSectionIds.includes(section.id) ? "已读" : "未读";

    htmlText += '<li class="chapter-list-item">';
    htmlText += '<a class="chapter-link' + activeClass + readClass + '" href="#contentArea" data-section-id="' + section.id + '">';
    htmlText += '<strong>' + section.title + '</strong><br>';
    htmlText += '<span>' + section.chapter + ' · ' + readText + '</span>';
    htmlText += '</a>';
    htmlText += '</li>';
  });

  sidebarList.innerHTML = htmlText;
}

// 小节详情渲染：显示标题、目标、关键词、解释、场景、题眼、易混和总结。
function renderSectionDetail(section) {
  if (!contentArea) {
    return;
  }

  if (!section) {
    contentArea.innerHTML = '<h2>当前章节内容</h2><p>没有找到学习内容。</p>';
    return;
  }

  const isRead = readSectionIds.includes(section.id);
  const buttonText = isRead ? "已读" : "标记为已读";
  const keywordsText = section.jpKeywords.join("、");
  const hintsText = section.examHints.join("、");

  let htmlText = "";
  htmlText += '<h2 id="main-content-title">当前章节内容</h2>';
  htmlText += '<article class="lesson-card" id="lesson-card">';
  htmlText += '<h3 class="lesson-title">' + section.title + '</h3>';
  htmlText += '<p class="lesson-text"><strong>所属章节：</strong>' + section.chapter + '</p>';
  htmlText += '<p class="lesson-text"><strong>学习目标：</strong>' + section.goal + '</p>';
  htmlText += '<p class="lesson-text"><strong>日文关键词：</strong><span class="keyword">' + keywordsText + '</span></p>';
  htmlText += '<p class="lesson-text"><strong>中文解释：</strong>' + section.explanation + '</p>';
  htmlText += '<p class="lesson-text"><strong>典型场景：</strong>' + section.scenario + '</p>';
  htmlText += '<p class="lesson-text"><strong>考试题眼：</strong><span class="exam-point">' + hintsText + '</span></p>';
  htmlText += '<p class="lesson-text"><strong>易混淆点：</strong>' + section.confusion + '</p>';
  htmlText += '<p class="lesson-text"><strong>小结口诀：</strong><span class="memory-tip">' + section.summary + '</span></p>';
  htmlText += '<button class="answer-button" type="button" id="readButton" data-section-id="' + section.id + '">' + buttonText + '</button>';
  htmlText += '</article>';

  contentArea.innerHTML = htmlText;
}

// 关键词表渲染：根据当前 sectionId 显示对应术语。
function renderTerms(sectionId) {
  if (!termsArea) {
    return;
  }

  const sectionTerms = allTerms.filter(function (term) {
    return term.sectionId === sectionId;
  });

  let htmlText = '<h2 id="terms-title">关键词中日英对照</h2>';

  if (sectionTerms.length === 0) {
    htmlText += '<p>当前章节暂无关键词数据</p>';
    termsArea.innerHTML = htmlText;
    return;
  }

  htmlText += '<table class="terms-table" id="terms-table">';
  htmlText += '<thead><tr>';
  htmlText += '<th scope="col">日本語</th>';
  htmlText += '<th scope="col">読み方</th>';
  htmlText += '<th scope="col">中文</th>';
  htmlText += '<th scope="col">English</th>';
  htmlText += '<th scope="col">考试题眼</th>';
  htmlText += '</tr></thead>';
  htmlText += '<tbody>';

  sectionTerms.forEach(function (term) {
    htmlText += '<tr>';
    htmlText += '<td>' + term.jp + '</td>';
    htmlText += '<td>' + term.reading + '</td>';
    htmlText += '<td>' + term.zh + '</td>';
    htmlText += '<td>' + term.en + '</td>';
    htmlText += '<td>' + term.hint + '</td>';
    htmlText += '</tr>';
  });

  htmlText += '</tbody></table>';
  termsArea.innerHTML = htmlText;
}

// 题眼速查渲染：把题眼数据生成表格。
function renderExamHints() {
  if (!examHintsArea) {
    return;
  }

  const filteredHints = getFilteredExamHints();
  let htmlText = '<h2 id="exam-hints-title">题眼速查</h2>';

  if (filteredHints.length === 0) {
    htmlText += '<p>没有找到题眼数据。</p>';
    examHintsArea.innerHTML = htmlText;
    return;
  }

  htmlText += '<table class="terms-table">';
  htmlText += '<thead><tr>';
  htmlText += '<th scope="col">题目中出现</th>';
  htmlText += '<th scope="col">立刻想到</th>';
  htmlText += '<th scope="col">说明</th>';
  htmlText += '</tr></thead>';
  htmlText += '<tbody>';

  filteredHints.forEach(function (hint) {
    htmlText += '<tr>';
    htmlText += '<td>' + hint.keyword + '</td>';
    htmlText += '<td>' + hint.answer + '</td>';
    htmlText += '<td>' + hint.note + '</td>';
    htmlText += '</tr>';
  });

  htmlText += '</tbody></table>';
  examHintsArea.innerHTML = htmlText;
}

// 模拟题渲染：默认只显示题目和查看答案按钮。
function renderQuizzes() {
  if (!quizArea) {
    return;
  }

  const filteredQuizzes = getFilteredQuizzes();
  let htmlText = '<h2 id="quiz-title">模拟题练习</h2>';

  if (filteredQuizzes.length === 0) {
    htmlText += '<p>没有找到模拟题。</p>';
    quizArea.innerHTML = htmlText;
    return;
  }

  filteredQuizzes.forEach(function (quiz) {
    htmlText += '<article class="quiz-card">';
    htmlText += '<h3 class="quiz-question">' + quiz.question + '</h3>';
    htmlText += '<button class="answer-button" type="button" data-quiz-id="' + quiz.id + '">查看答案</button>';
    htmlText += '<div class="answer-box" id="answer-' + quiz.id + '" hidden>';
    htmlText += '<p><strong>正确答案：</strong>' + quiz.answer + '</p>';
    htmlText += '<p><strong>解析：</strong>' + quiz.explanation + '</p>';
    htmlText += '<p><strong>题眼关键词：</strong>' + quiz.hint + '</p>';
    htmlText += '</div>';
    htmlText += '</article>';
  });

  quizArea.innerHTML = htmlText;
}

// 已读标记：保存当前小节，并刷新进度和 Sidebar。
function markSectionAsRead(sectionId) {
  if (!readSectionIds.includes(sectionId)) {
    readSectionIds.push(sectionId);
    saveReadSections();
  }

  updateProgress();
  renderSidebar();

  const section = findSectionById(sectionId);
  renderSectionDetail(section);
}

// 查找小节：根据 id 找到对应学习小节。
function findSectionById(sectionId) {
  let result = null;

  allStudySections.forEach(function (section) {
    if (section.id === sectionId) {
      result = section;
    }
  });

  return result;
}

// 页面刷新：根据当前状态重新渲染所有区域。
function renderPage() {
  const filteredSections = getFilteredSections();

  if (filteredSections.length > 0) {
    let currentSectionIsVisible = false;

    filteredSections.forEach(function (section) {
      if (section.id === currentSectionId) {
        currentSectionIsVisible = true;
      }
    });

    if (!currentSectionIsVisible) {
      currentSectionId = filteredSections[0].id;
    }
  } else {
    currentSectionId = "";
  }

  const currentSection = findSectionById(currentSectionId);

  renderNavActive();
  renderSidebar();
  renderSectionDetail(currentSection);
  renderTerms(currentSectionId);
  renderExamHints();
  renderQuizzes();
  updateProgress();
}

// 事件绑定：处理导航、搜索、目录、已读按钮和答案展开。
function bindEvents() {
  if (navButtons) {
    navButtons.addEventListener("click", function (event) {
      const button = event.target;

      if (!button.classList.contains("chapter-nav-button")) {
        return;
      }

      currentFilter = button.getAttribute("data-filter");
      renderPage();

      if (currentFilter === "题眼速查" && examHintsArea) {
        examHintsArea.scrollIntoView();
      }

      if (currentFilter === "模拟题" && quizArea) {
        quizArea.scrollIntoView();
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      currentSearchText = searchInput.value.trim();
      renderPage();
    });
  }

  if (searchForm) {
    searchForm.addEventListener("submit", function (event) {
      event.preventDefault();
    });
  }

  if (sidebarList) {
    sidebarList.addEventListener("click", function (event) {
      const link = event.target.closest(".chapter-link");

      if (!link) {
        return;
      }

      event.preventDefault();
      currentSectionId = link.getAttribute("data-section-id");
      renderPage();
    });
  }

  if (contentArea) {
    contentArea.addEventListener("click", function (event) {
      const button = event.target;

      if (button.id !== "readButton") {
        return;
      }

      const sectionId = button.getAttribute("data-section-id");
      markSectionAsRead(sectionId);
    });
  }

  if (quizArea) {
    quizArea.addEventListener("click", function (event) {
      const button = event.target;

      if (!button.classList.contains("answer-button")) {
        return;
      }

      const quizId = button.getAttribute("data-quiz-id");
      const answerBox = document.querySelector("#answer-" + quizId);

      if (!answerBox) {
        console.warn("缺少答案区域：" + quizId);
        return;
      }

      if (answerBox.hidden) {
        answerBox.hidden = false;
        button.textContent = "收起答案";
      } else {
        answerBox.hidden = true;
        button.textContent = "查看答案";
      }
    });
  }
}

// 初始化：读取已读状态，显示第一个小节，并渲染页面。
function init() {
  loadReadSections();

  if (allStudySections.length > 0) {
    currentSectionId = allStudySections[0].id;
  }

  renderNavButtons();
  bindEvents();
  renderPage();
}

init();
