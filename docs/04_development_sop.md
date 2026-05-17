# Development SOP

## Guiding Rules

- Keep the project static.
- Use only HTML, CSS, JavaScript, and JSON.
- Do not add React.
- Do not add other frameworks.
- Do not add a backend.
- Do not add a database.
- Keep data files readable and editable by hand.
- Preserve the three-library design:
  - Main knowledge points
  - Question notes
  - Chat traces

## Trilingual Data Rules

Use trilingual objects for display fields in knowledge points, question notes, and learning paths.

Required language keys:

- `zh`
- `ja`
- `en`

Do not store a knowledge point title, subject, category, summary, or keywords as a single-language field.

Do not use translated text for relationships. Relationships must use stable IDs.

## Development Steps

1. Update data shape documentation before changing JSON fields.
2. Keep sample data small and representative.
3. Preserve stable IDs when renaming or translating display titles.
4. Validate JSON after editing data files.
5. Check that all required trilingual fields include `zh`, `ja`, and `en`.
6. Keep UI behavior simple until the trilingual data model is stable.

## File Responsibilities

### `src/index.html`

Owns the static page structure.

### `src/css/style.css`

Owns visual layout and styling.

### `src/js/*.js`

Owns data loading and simple rendering.

### `data/knowledge.json`

Owns main knowledge point data and typed relationships.

### `data/questions.json`

Owns separated question notes and their links to knowledge points and chat traces.

### `data/chat_traces.json`

Owns chat history traces and original message language metadata.

### `data/learning_paths.json`

Owns ordered paths of knowledge point IDs.

## Current Development Limits

Do not implement these features in this revision:

- Language switcher UI
- Chat import
- Search
- Backend sync
- Database persistence
- Framework migration

## Manual QA Checklist

After data changes:

- Confirm all four JSON files are valid.
- Confirm knowledge point display fields use `{ zh, ja, en }`.
- Confirm question note titles and answer summaries use `{ zh, ja, en }`.
- Confirm question notes use `relatedKnowledgeIds`.
- Confirm learning paths use `nodes` as knowledge point IDs.
- Confirm chat messages include `messageId`, `role`, `content`, and `language`.
- Confirm relationships use stable IDs, not translated text.
