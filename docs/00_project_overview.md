# Project Overview

## Name

`ai-memory-palace-learning-trace`

## Goal

Build a personal AI memory palace learning trace system for learning IT knowledge in three languages:

- `zh`: Chinese
- `ja`: Japanese
- `en`: English

The system organizes knowledge points, question notes, and chat traces while preserving the learning context around each concept.

The system helps a learner answer:

- What do I know in Chinese, Japanese, and English?
- What does this idea depend on?
- What should I learn next?
- Which questions exposed weak understanding?
- Which chat traces helped form or revise this knowledge?
- How do the same IT concepts appear across languages?

## Core Libraries

### 1. Main Knowledge Point Library

The central library. Each knowledge point represents one IT concept, method, distinction, or mental model.

Knowledge points are not single-language notes. Display text must support Chinese, Japanese, and English.

Each knowledge point keeps contextual relationship fields:

- `prerequisiteIds`
- `nextIds`
- `relatedIds`
- `learningPathIds`
- `level`

### 2. Question Note Library

Stores questions, mistakes, prompts, exercises, and review notes.

Question notes stay separated from knowledge points. They link back to knowledge points by ID through `relatedKnowledgeIds`.

Question notes support trilingual titles and answer summaries. The original question preserves its original language with:

- `language`
- `content`

### 3. Chat Trace Library

Stores meaningful AI conversation traces that influenced learning.

Chat traces link back to knowledge points and question notes where useful. Chat messages preserve the original message language for each message.

## Design Principle

The main knowledge page should feel like a map of learning context, not a file folder.

Each knowledge point should show:

- Its trilingual title, subject, category, summary, and keywords
- Its position in one or more learning paths
- What must be learned before it
- What becomes possible after it
- Nearby related ideas
- Questions connected to it
- Chat traces that shaped it

## Current Boundary

This repository remains a static HTML, CSS, JavaScript, and JSON project.

Not included yet:

- Language switcher UI
- Chat import
- Search
- Editing UI
- Local storage
- Database
- Backend service
