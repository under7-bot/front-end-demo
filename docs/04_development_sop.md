# Development SOP

## Guiding Rules

- Keep the project static.
- Use only HTML, CSS, JavaScript, and JSON.
- Do not add frameworks.
- Do not add a backend.
- Do not add a database.
- Keep data files readable and editable by hand.

## Development Steps

1. Update data shape documentation before changing JSON fields.
2. Keep sample data small and representative.
3. Preserve stable IDs when renaming display titles.
4. Keep UI behavior simple until the data model is stable.
5. Validate JSON after editing data files.

## File Responsibilities

### `src/index.html`

Owns the static page structure.

### `src/css/style.css`

Owns visual layout and styling.

### `src/js/app.js`

Owns data loading and simple rendering.

### `data/*.json`

Owns the editable learning content.

## Current Development Limits

Do not implement these features in the skeleton:

- Chat import
- Search
- Backend sync
- Database persistence
- Framework migration

## Manual QA Checklist

After changes:

- Open `src/index.html`.
- Confirm the page loads.
- Confirm all four JSON files are valid.
- Confirm knowledge points show context fields.
- Confirm question notes and chat traces link by IDs.
