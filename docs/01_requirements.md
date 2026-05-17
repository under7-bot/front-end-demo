# Requirements

## Functional Requirements

### Main Knowledge Point Library

The system must display knowledge points with contextual relationships.

Each knowledge point must support:

- `id`
- `title`
- `summary`
- `level`
- `tags`
- `prerequisiteIds`
- `nextIds`
- `relatedIds`
- `learningPathIds`
- `questionIds`
- `chatTraceIds`
- `memoryPalace`

### Question Note Library

The system must store question notes with links to knowledge points.

Each question note should support:

- `id`
- `title`
- `question`
- `answerDraft`
- `status`
- `knowledgePointIds`
- `source`
- `createdAt`
- `updatedAt`

### Chat Trace Library

The system must store chat trace summaries with links to knowledge points and question notes.

Each chat trace should support:

- `id`
- `title`
- `summary`
- `model`
- `source`
- `knowledgePointIds`
- `questionIds`
- `createdAt`

### Learning Paths

The system must store learning paths that arrange knowledge points into meaningful sequences.

Each learning path should support:

- `id`
- `title`
- `description`
- `knowledgePointIds`
- `goal`

## Non-Functional Requirements

- Static files only
- Human-readable JSON
- No framework dependency
- No build step required
- Data should remain easy to edit by hand
- App should work as a simple browser-based prototype

## Out of Scope For Initial Skeleton

- Chat import
- Search
- User accounts
- Server-side sync
- Database storage
- Full CRUD editor
- AI model integration
