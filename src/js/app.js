const dataFiles = {
  knowledge: "../data/knowledge.json",
  questions: "../data/questions.json",
  learningPaths: "../data/learning_paths.json"
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

  if (text) {
    element.textContent = text;
  }

  return element;
}

function renderChipList(values) {
  const list = createElement("ul", "chip-list");
  const items = values && values.length ? values : ["None"];

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

function renderLearningPathPreview(paths) {
  const target = document.querySelector("#learning-path-list");
  target.innerHTML = "";

  paths.slice(0, 1).forEach(function (path) {
    const card = createElement("article", "preview-card");

    card.appendChild(createElement("h3", "", path.title));
    card.appendChild(createElement("p", "summary", path.description));
    appendMetaGroup(card, "Goal", [path.goal]);

    const listLabel = createElement("p", "meta-label", "Path order");
    const orderedList = createElement("ol", "path-list");

    path.knowledgePointIds.forEach(function (knowledgePointId) {
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

    header.appendChild(createElement("h3", "", point.title));
    header.appendChild(createElement("span", "badge", "Level " + point.level));

    card.appendChild(header);
    card.appendChild(createElement("p", "summary", point.summary));
    appendMetaGroup(card, "Prerequisites", point.prerequisiteIds);
    appendMetaGroup(card, "Next", point.nextIds);
    appendMetaGroup(card, "Related", point.relatedIds);
    appendMetaGroup(card, "Learning Paths", point.learningPathIds);

    target.appendChild(card);
  });
}

function renderQuestionPreview(questions) {
  const target = document.querySelector("#question-list");
  target.innerHTML = "";

  questions.slice(0, 2).forEach(function (question) {
    const card = createElement("article", "preview-card");
    const header = createElement("div", "preview-header");

    header.appendChild(createElement("h3", "", question.title));
    header.appendChild(createElement("span", "badge warning", question.status));

    card.appendChild(header);
    card.appendChild(createElement("p", "summary", question.question));
    appendMetaGroup(card, "Knowledge Links", question.knowledgePointIds);

    target.appendChild(card);
  });
}

function showLoadError(error) {
  const main = document.querySelector("main");
  const message = createElement(
    "p",
    "plain-note",
    error.message + ". If you opened the HTML file directly, use a simple local static server so fetch() can read JSON."
  );

  main.prepend(message);
}

async function startHomepage() {
  try {
    const knowledgePoints = await loadJson(dataFiles.knowledge);
    const questions = await loadJson(dataFiles.questions);
    const learningPaths = await loadJson(dataFiles.learningPaths);

    renderLearningPathPreview(learningPaths);
    renderKnowledgePreview(knowledgePoints);
    renderQuestionPreview(questions);
  } catch (error) {
    showLoadError(error);
  }
}

startHomepage();
