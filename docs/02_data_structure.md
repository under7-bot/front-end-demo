# Data Structure

## Files

```text
data/
  knowledge.json
  questions.json
  chat_traces.json
  learning_paths.json
```

## Language Object

Use this structure for trilingual display fields:

```json
{
  "zh": "中文内容",
  "ja": "日本語の内容",
  "en": "English content"
}
```

Use this structure for trilingual keyword arrays:

```json
{
  "zh": ["函数", "返回值"],
  "ja": ["関数", "戻り値"],
  "en": ["function", "return value"]
}
```

## Knowledge Point Shape

```json
{
  "id": "python-function",
  "title": {
    "zh": "Python 函数",
    "ja": "Python の関数",
    "en": "Python Function"
  },
  "subject": {
    "zh": "Python 编程",
    "ja": "Python プログラミング",
    "en": "Python Programming"
  },
  "category": {
    "zh": "编程基础",
    "ja": "プログラミング基礎",
    "en": "Programming Fundamentals"
  },
  "summary": {
    "zh": "可复用的代码块，可以接收输入并返回结果。",
    "ja": "入力を受け取り、結果を返せる再利用可能なコードのまとまり。",
    "en": "A reusable block of code that can accept inputs and return a result."
  },
  "keywords": {
    "zh": ["函数", "参数", "返回值"],
    "ja": ["関数", "引数", "戻り値"],
    "en": ["function", "parameter", "return value"]
  },
  "level": 1,
  "prerequisiteIds": [],
  "nextIds": [],
  "relatedIds": [],
  "learningPathIds": ["path_python_function_basics"],
  "questionIds": ["q-return-output"],
  "chatTraceIds": ["chat-python-001"]
}
```

## Question Note Shape

```json
{
  "id": "q-return-output",
  "title": {
    "zh": "返回值和打印输出",
    "ja": "戻り値と表示出力",
    "en": "Return Value vs Printed Output"
  },
  "originalQuestion": {
    "language": "zh",
    "content": "为什么 Python 函数打印了结果，但后面不能继续使用这个结果？"
  },
  "answerSummary": {
    "zh": "print 只是显示内容，return 会把值交回调用者。",
    "ja": "print は表示するだけで、return は呼び出し元へ値を返します。",
    "en": "print only displays content, while return gives a value back to the caller."
  },
  "relatedKnowledgeIds": ["python-function"],
  "sourceChatId": "chat-python-001",
  "type": "概念辨析",
  "status": "待复习"
}
```

## Learning Path Shape

```json
{
  "id": "path_python_function_basics",
  "title": {
    "zh": "Python 函数基础",
    "ja": "Python 関数の基礎",
    "en": "Python Function Basics"
  },
  "description": {
    "zh": "学习函数、参数和返回值的基础路径。",
    "ja": "関数、引数、戻り値を学ぶ基礎パス。",
    "en": "A foundation path for functions, parameters, and return values."
  },
  "nodes": ["python-function"]
}
```

## Chat Trace Shape

```json
{
  "id": "chat-python-001",
  "title": "Python return value discussion",
  "date": "2026-05-17",
  "linkedKnowledgeIds": ["python-function"],
  "questionIds": ["q-return-output"],
  "messages": [
    {
      "messageId": "msg-001",
      "role": "user",
      "content": "为什么函数 print 了结果，但我不能继续使用？",
      "language": "zh"
    }
  ]
}
```

## Relationship Fields

### `prerequisiteIds`

Knowledge points that should be understood before this one.

### `nextIds`

Knowledge points that naturally follow this one.

### `relatedIds`

Nearby ideas that are useful to compare or connect.

### `learningPathIds`

Learning paths that include this knowledge point.

### `level`

Suggested learning depth or difficulty.

Recommended scale:

- `1`: Foundation
- `2`: Working understanding
- `3`: Applied practice
- `4`: Advanced synthesis
- `5`: Expert-level refinement

## Linking Strategy

Use stable IDs instead of translated titles for relationships.

Good:

```json
"relatedKnowledgeIds": ["python-function"]
```

Avoid:

```json
"relatedKnowledge": ["Python Function", "Python 函数", "Python の関数"]
```

Stable IDs make it possible to rename or improve translations without breaking relationships.
