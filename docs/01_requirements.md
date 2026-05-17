# Requirements

## Functional Requirements

### Supported Languages

The system must support trilingual IT learning content:

- `zh`: Chinese
- `ja`: Japanese
- `en`: English

Knowledge points, question notes, and learning paths must not be modeled as single-language text.

### Main Knowledge Point Library

The system must display knowledge points with contextual relationships.

Each knowledge point must support:

- `id`
- `title`: `{ "zh": "", "ja": "", "en": "" }`
- `subject`: `{ "zh": "", "ja": "", "en": "" }`
- `category`: `{ "zh": "", "ja": "", "en": "" }`
- `summary`: `{ "zh": "", "ja": "", "en": "" }`
- `keywords`: `{ "zh": [], "ja": [], "en": [] }`
- `level`
- `prerequisiteIds`
- `nextIds`
- `relatedIds`
- `learningPathIds`
- `questionIds`
- `chatTraceIds`
- `memoryPalace`

### Question Note Library

The system must store question notes separately from knowledge points.

Each question note must support:

- `id`
- `title`: `{ "zh": "", "ja": "", "en": "" }`
- `originalQuestion`: `{ "language": "", "content": "" }`
- `answerSummary`: `{ "zh": "", "ja": "", "en": "" }`
- `relatedKnowledgeIds`
- `sourceChatId`
- `type`
- `status`
- `createdAt`
- `updatedAt`

`type` and `status` can remain Chinese strings for now.

### Chat Trace Library

The system must store chat trace summaries with links to knowledge points and question notes.

Each chat trace must support:

- `id`
- `title`
- `date`
- `summary`
- `model`
- `source`
- `linkedKnowledgeIds`
- `questionIds`
- `messages`
- `createdAt`

Each message must support:

- `messageId`
- `role`
- `content`
- `language`

Messages preserve their original language instead of being forced into a shared display language.

### Learning Paths

The system must store learning paths that arrange knowledge points into meaningful sequences.

Each learning path must support:

- `id`
- `title`: `{ "zh": "", "ja": "", "en": "" }`
- `description`: `{ "zh": "", "ja": "", "en": "" }`
- `goal`: `{ "zh": "", "ja": "", "en": "" }`
- `nodes`

`nodes` must remain an ordered array of knowledge point IDs.

## Non-Functional Requirements

- Static files only
- Human-readable JSON
- HTML, CSS, JavaScript, and JSON only
- No React
- No framework dependency
- No backend
- No database
- No build step required
- Data should remain easy to edit by hand

## Out of Scope For This Revision

- Language switcher UI
- Chat import
- Search
- User accounts
- Server-side sync
- Database storage
- Full CRUD editor
- AI model integration
