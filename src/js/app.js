const dataFiles = {
  knowledge: "../data/knowledge.json",
  questions: "../data/questions.json",
  chatTraces: "../data/chat_traces.json",
  learningPaths: "../data/learning_paths.json"
};

async function loadJson(path) {
  const response = await fetch(path);

  if (!response.ok) {
    throw new Error(`Failed to load ${path}`);
  }

  return response.json();
}

function createElement(tag, className, text) {
  const element = document.createElement(tag);

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
  const safeValues = values && values.length ? values : ["None"];

  safeValues.forEach((value) => {
    list.appendChild(createElement("li", "chip", value));
  });

  return list;
}

function appendMetaGroup(parent, label, values) {
  const group = createElement("div", "meta-group");
  group.appendChild(createElement("p", "meta-label", label));
  group.appendChild(renderChipList(values));
  parent.appendChild(group);
}

function renderKnowledge(knowledgePoints) {
  const target = document.querySelector("#knowledge-list");
  target.innerHTML = "";

  knowledgePoints.forEach((point) => {
    const card = createElement("article", "card");
    const header = createElement("div", "card-header");
    header.appendChild(createElement("h3", "", point.title));
    header.appendChild(createElement("span", "level-badge", `Level ${point.level}`));

    card.appendChild(header);
    card.appendChild(createElement("p", "summary", point.summary));

    appendMetaGroup(card, "Tags", point.tags);
    appendMetaGroup(card, "Prerequisites", point.prerequisiteIds);
    appendMetaGroup(card, "Next", point.nextIds);
    appendMetaGroup(card, "Related", point.relatedIds);
    appendMetaGroup(card, "Learning Paths", point.learningPathIds);
    appendMetaGroup(card, "Questions", point.questionIds);
    appendMetaGroup(card, "Chat Traces", point.chatTraceIds);

    target.appendChild(card);
  });
}

function renderQuestions(questions) {
  const target = document.querySelector("#question-list");
  target.innerHTML = "";

  questions.forEach((question) => {
    const card = createElement("article", "card");
    const header = createElement("div", "card-header");
    header.appendChild(createElement("h3", "", question.title));
    header.appendChild(createElement("span", "status-badge", question.status));

    card.appendChild(header);
    card.appendChild(createElement("p", "summary", question.question));
    appendMetaGroup(card, "Knowledge Links", question.knowledgePointIds);
    appendMetaGroup(card, "Source", [question.source]);

    target.appendChild(card);
  });
}

function renderChatTraces(chatTraces) {
  const target = document.querySelector("#chat-trace-list");
  target.innerHTML = "";

  chatTraces.forEach((trace) => {
    const card = createElement("article", "card");
    card.appendChild(createElement("h3", "", trace.title));
    card.appendChild(createElement("p", "summary", trace.summary));
    appendMetaGroup(card, "Knowledge Links", trace.knowledgePointIds);
    appendMetaGroup(card, "Question Links", trace.questionIds);
    appendMetaGroup(card, "Model", [trace.model]);

    target.appendChild(card);
  });
}

function renderLearningPaths(paths) {
  const target = document.querySelector("#learning-path-list");
  target.innerHTML = "";

  paths.forEach((path) => {
    const card = createElement("article", "card");
    card.appendChild(createElement("h3", "", path.title));
    card.appendChild(createElement("p", "summary", path.description));
    appendMetaGroup(card, "Goal", [path.goal]);

    const label = createElement("p", "meta-label", "Ordered Knowledge Points");
    const list = createElement("ol", "ordered-ids");
    path.knowledgePointIds.forEach((id) => {
      list.appendChild(createElement("li", "", id));
    });

    card.appendChild(label);
    card.appendChild(list);
    target.appendChild(card);
  });
}

async function init() {
  try {
    const [knowledge, questions, chatTraces, learningPaths] = await Promise.all([
      loadJson(dataFiles.knowledge),
      loadJson(dataFiles.questions),
      loadJson(dataFiles.chatTraces),
      loadJson(dataFiles.learningPaths)
    ]);

    renderKnowledge(knowledge);
    renderQuestions(questions);
    renderChatTraces(chatTraces);
    renderLearningPaths(learningPaths);
  } catch (error) {
    document.querySelector(".app-shell").prepend(
      createElement("p", "summary", `${error.message}. Use a local static server if browser file access blocks JSON loading.`)
    );
  }
}

init();
