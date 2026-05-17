const dataFiles = {
  questions: "../data/questions.json",
  knowledge: "../data/knowledge.json",
  chatTraces: "../data/chat_traces.json"
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

function getQuestionIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function findById(items, id) {
  return items.find(function (item) {
    return item.id === id;
  });
}

function createKnowledgeLink(point) {
  const link = createElement("a", "relationship-item");
  link.href = "knowledge.html?id=" + encodeURIComponent(point.id);

  link.appendChild(createElement("strong", "", point.title));
  link.appendChild(createElement("span", "", point.id));

  return link;
}

function renderRelatedKnowledge(question, knowledgePoints) {
  const target = document.querySelector("#related-knowledge-list");
  const ids = question.knowledgePointIds || [];

  target.innerHTML = "";

  if (ids.length === 0) {
    target.appendChild(createElement("p", "plain-note", "No related knowledge points yet."));
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

function renderSourceChat(question, chatTraces) {
  const target = document.querySelector("#source-chat-trace");
  const sourceChatId = question.sourceChatId;

  target.innerHTML = "";

  if (!sourceChatId) {
    target.appendChild(createElement("p", "plain-note", "No source chat trace linked yet."));
    return;
  }

  const chatTrace = findById(chatTraces, sourceChatId);

  if (!chatTrace) {
    target.appendChild(createElement("p", "plain-note", "Missing chat trace: " + sourceChatId));
    return;
  }

  const item = createElement("article", "relationship-item");
  item.appendChild(createElement("strong", "", chatTrace.title));
  item.appendChild(createElement("span", "", chatTrace.id));
  item.appendChild(createElement("span", "", chatTrace.summary));
  target.appendChild(item);
}

function renderQuestionDetail(question, knowledgePoints, chatTraces) {
  const originalQuestion = question.originalQuestion || question.question || "No original question provided.";
  const answerSummary = question.answerSummary || question.answerDraft || "No answer summary provided.";

  document.title = question.title + " | AI Memory Palace Learning Trace";
  document.querySelector("#question-title").textContent = question.title;
  document.querySelector("#question-original").textContent = originalQuestion;
  document.querySelector("#question-original-body").textContent = originalQuestion;
  document.querySelector("#question-answer-summary").textContent = answerSummary;
  document.querySelector("#question-type").textContent = question.type || "Not set";
  document.querySelector("#question-status").textContent = question.status || "Not set";
  document.querySelector("#question-source-chat-id").textContent = question.sourceChatId || "Not linked";

  renderRelatedKnowledge(question, knowledgePoints);
  renderSourceChat(question, chatTraces);
}

function renderNotFound(message) {
  document.querySelector("#question-title").textContent = "Question note not found";
  document.querySelector("#question-original").textContent = message;
  document.querySelector("#question-original-body").textContent = message;
}

async function startQuestionDetailPage() {
  try {
    const questionId = getQuestionIdFromUrl();

    if (!questionId) {
      renderNotFound("Add an id query parameter, for example: question.html?id=q-return-output");
      return;
    }

    const questions = await loadJson(dataFiles.questions);
    const knowledgePoints = await loadJson(dataFiles.knowledge);
    const chatTraces = await loadJson(dataFiles.chatTraces);
    const question = findById(questions, questionId);

    if (!question) {
      renderNotFound("No question note exists with id: " + questionId);
      return;
    }

    renderQuestionDetail(question, knowledgePoints, chatTraces);
  } catch (error) {
    renderNotFound(error.message + ". Use a local static server so fetch() can read JSON.");
  }
}

startQuestionDetailPage();
