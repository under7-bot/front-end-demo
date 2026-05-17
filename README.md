# ai-memory-palace-learning-trace

A personal AI memory palace learning trace system built with HTML, CSS, JavaScript, and JSON only.

This repository is an initial project skeleton. It separates learning material into three linked libraries:

- Main knowledge point library
- Question note library
- Chat trace library

The main knowledge point library is designed to show context around each knowledge point, including prerequisites, next steps, related ideas, learning paths, and difficulty level.

## Tech Constraints

- HTML
- CSS
- JavaScript
- JSON
- No React
- No backend
- No database
- No frameworks

## Project Structure

```text
ai-memory-palace-learning-trace/
  README.md
  docs/
    00_project_overview.md
    01_requirements.md
    02_data_structure.md
    03_page_design.md
    04_development_sop.md
  src/
    index.html
    css/
      style.css
    js/
      app.js
  data/
    knowledge.json
    questions.json
    chat_traces.json
    learning_paths.json
```

## Current Scope

This skeleton includes:

- Static page layout
- Placeholder rendering for the three libraries
- Sample JSON data
- Data relationships between knowledge points, questions, chat traces, and learning paths

This skeleton does not include:

- Chat import
- Search
- Persistence beyond static JSON files
- Authentication
- Backend APIs

## Run Locally

Open `src/index.html` in a browser.

Some browsers restrict local `fetch()` calls from `file://`. If JSON loading is blocked, run any simple static file server from the project root and open `/src/index.html`.
