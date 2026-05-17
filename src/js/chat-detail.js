const dataFiles = {
  chatTraces: "../data/chat_traces.json",
  questions: "../data/questions.json",
  knowledge: "../data/knowledge.json"
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

function getChatIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function findById(items, id) {
  return items.find(function (item) {
    return item.id === id;
  });
}

function getLinkedKnowledgeIds(chatTrace) {
  return chatTrace.linkedKnowledgeIds || chatTrace.knowledgePointIds || [];
}

function renderMessages(chatTrace) {
  const target = document.querySelector("#message-list");
  const messages = chatTrace.messages || [];

  target.innerHTML = "";

  if (messages.length === 0) {
    target.appendChild(createElement("p", "plain-note", "No messages saved for this chat trace yet."));
    return;
  }

  messages.forEach(function (message) {
    const item = createElement("article", "message-item " + message.role);
    item.appendChild(createElement("p", "message-role", message.role));
    item.appendChild(createElement("p", "message-text", message.content));
    target.appendChild(item);
  });
}

function renderLinkedKnowledge(chatTrace, knowledgePoints) {
  const target = document.querySelector("#linked-knowledge-list");
  const ids = getLinkedKnowledgeIds(chatTrace);

  target.innerHTML = "";

  if (ids.length === 0) {
    target.appendChild(createElement("p", "plain-note", "No linked knowledge points yet."));
    return;
  }

  ids.forEach(function (id) {
    const point = findById(knowledgePoints, id);

    if (point) {
      const link = createElement("a", "relationship-item");
      link.href = "knowledge.html?id=" + encodeURIComponent(point.id);
      link.appendChild(createElement("strong", "", point.title));
      link.appendChild(createElement("span", "", point.id));
      target.appendChild(link);
    } else {
      target.appendChild(createElement("p", "plain-note", "Missing knowledge point: " + id));
    }
  });
}

function renderGeneratedQuestions(chatTrace, questions) {
  const target = document.querySelector("#generated-question-list");
  const generatedQuestions = questions.filter(function (question) {
    return question.sourceChatId === chatTrace.id;
  });

  target.innerHTML = "";

  if (generatedQuestions.length === 0) {
    target.appendChild(createElement("p", "plain-note", "No question notes generated from this chat yet."));
    return;
  }

  generatedQuestions.forEach(function (question) {
    const link = createElement("a", "relationship-item");
    link.href = "question.html?id=" + encodeURIComponent(question.id);
    link.appendChild(createElement("strong", "", question.title));
    link.appendChild(createElement("span", "", question.id));
    target.appendChild(link);
  });
}

function renderChatDetail(chatTrace, questions, knowledgePoints) {
  const date = chatTrace.date || chatTrace.createdAt || "Date not set";

  document.title = chatTrace.title + " | AI Memory Palace Learning Trace";
  document.querySelector("#chat-title").textContent = chatTrace.title;
  document.querySelector("#chat-date").textContent = date;

  renderMessages(chatTrace);
  renderLinkedKnowledge(chatTrace, knowledgePoints);
  renderGeneratedQuestions(chatTrace, questions);
}

function renderNotFound(message) {
  document.querySelector("#chat-title").textContent = "Chat trace not found";
  document.querySelector("#chat-date").textContent = message;
}

async function startChatDetailPage() {
  try {
    const chatId = getChatIdFromUrl();

    if (!chatId) {
      renderNotFound("Add an id query parameter, for example: chat.html?id=chat-python-001");
      return;
    }

    const chatTraces = await loadJson(dataFiles.chatTraces);
    const questions = await loadJson(dataFiles.questions);
    const knowledgePoints = await loadJson(dataFiles.knowledge);
    const chatTrace = findById(chatTraces, chatId);

    if (!chatTrace) {
      renderNotFound("No chat trace exists with id: " + chatId);
      return;
    }

    renderChatDetail(chatTrace, questions, knowledgePoints);
  } catch (error) {
    renderNotFound(error.message + ". Use a local static server so fetch() can read JSON.");
  }
}

startChatDetailPage();
