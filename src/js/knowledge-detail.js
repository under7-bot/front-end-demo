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

function getKnowledgeIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function findById(items, id) {
  return items.find(function (item) {
    return item.id === id;
  });
}

function renderChipList(targetId, values) {
  const target = document.querySelector(targetId);
  const list = createElement("ul", "chip-list");
  const safeValues = values && values.length ? values : ["None"];

  safeValues.forEach(function (value) {
    list.appendChild(createElement("li", "chip", value));
  });

  target.innerHTML = "";
  target.appendChild(list);
}

function createKnowledgeLink(point) {
  const link = createElement("a", "relationship-item");
  link.href = "knowledge.html?id=" + encodeURIComponent(point.id);

  link.appendChild(createElement("strong", "", point.title));
  link.appendChild(createElement("span", "", point.id));

  return link;
}

function createQuestionItem(question) {
  const item = createElement("article", "relationship-item");

  item.appendChild(createElement("strong", "", question.title));
  item.appendChild(createElement("span", "", question.question));

  return item;
}

function renderKnowledgeLinks(targetId, ids, knowledgePoints) {
  const target = document.querySelector(targetId);
  target.innerHTML = "";

  if (!ids || ids.length === 0) {
    target.appendChild(createElement("p", "plain-note", "No linked knowledge points yet."));
    return;
  }

  ids.forEach(function (id) {
    const point = findById(knowledgePoints, id);

    if (point) {
      target.appendChild(createKnowledgeLink(point));
    } else {
      target.appendChild(createElement("p", "plain-note", "Missing knowledge point: " + id));
    }
  });
}

function renderQuestionLinks(targetId, ids, questions) {
  const target = document.querySelector(targetId);
  target.innerHTML = "";

  if (!ids || ids.length === 0) {
    target.appendChild(createElement("p", "plain-note", "No linked question notes yet."));
    return;
  }

  ids.forEach(function (id) {
    const question = findById(questions, id);

    if (question) {
      target.appendChild(createQuestionItem(question));
    } else {
      target.appendChild(createElement("p", "plain-note", "Missing question note: " + id));
    }
  });
}

function renderLearningPathPosition(point, learningPaths) {
  const target = document.querySelector("#learning-path-position");
  target.innerHTML = "";

  const relatedPaths = learningPaths.filter(function (path) {
    return point.learningPathIds.includes(path.id);
  });

  if (relatedPaths.length === 0) {
    target.appendChild(createElement("p", "plain-note", "This knowledge point is not in a learning path yet."));
    return;
  }

  relatedPaths.forEach(function (path) {
    const position = path.knowledgePointIds.indexOf(point.id) + 1;
    const total = path.knowledgePointIds.length;
    const item = createElement("article", "relationship-item");

    item.appendChild(createElement("strong", "", path.title));
    item.appendChild(createElement("span", "", "Position " + position + " of " + total));

    target.appendChild(item);
  });
}

function renderKnowledgeDetail(point, knowledgePoints, questions, learningPaths) {
  document.title = point.title + " | AI Memory Palace Learning Trace";
  document.querySelector("#knowledge-title").textContent = point.title;
  document.querySelector("#knowledge-summary").textContent = point.summary;
  document.querySelector("#knowledge-subject").textContent = point.subject || "Not set";
  document.querySelector("#knowledge-category").textContent = point.category || "Not set";
  document.querySelector("#knowledge-level").textContent = "Level " + point.level;

  renderChipList("#knowledge-keywords", point.keywords || point.tags);
  renderLearningPathPosition(point, learningPaths);
  renderKnowledgeLinks("#prerequisite-list", point.prerequisiteIds, knowledgePoints);
  renderKnowledgeLinks("#next-list", point.nextIds, knowledgePoints);
  renderKnowledgeLinks("#related-list", point.relatedIds, knowledgePoints);
  renderQuestionLinks("#question-list", point.questionIds, questions);
}

function renderNotFound(message) {
  document.querySelector("#knowledge-title").textContent = "Knowledge point not found";
  document.querySelector("#knowledge-summary").textContent = message;
}

async function startKnowledgeDetailPage() {
  try {
    const knowledgeId = getKnowledgeIdFromUrl();

    if (!knowledgeId) {
      renderNotFound("Add an id query parameter, for example: knowledge.html?id=python-function");
      return;
    }

    const knowledgePoints = await loadJson(dataFiles.knowledge);
    const questions = await loadJson(dataFiles.questions);
    const learningPaths = await loadJson(dataFiles.learningPaths);
    const point = findById(knowledgePoints, knowledgeId);

    if (!point) {
      renderNotFound("No knowledge point exists with id: " + knowledgeId);
      return;
    }

    renderKnowledgeDetail(point, knowledgePoints, questions, learningPaths);
  } catch (error) {
    renderNotFound(error.message + ". Use a local static server so fetch() can read JSON.");
  }
}

startKnowledgeDetailPage();
