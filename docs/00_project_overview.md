# Project Overview

## Name

`ai-memory-palace-learning-trace`

## Goal

Build a personal AI memory palace learning trace system for organizing knowledge, questions, and chat-based learning history.

The system helps a learner answer:

- What do I know?
- What does this idea depend on?
- What should I learn next?
- Which questions exposed weak understanding?
- Which chat traces helped form or revise this knowledge?

## Core Libraries

### 1. Main Knowledge Point Library

The central library. Each knowledge point represents one concept, method, distinction, or mental model.

Knowledge points are not stored as a flat list only. They include context fields:

- `prerequisiteIds`
- `nextIds`
- `relatedIds`
- `learningPathIds`
- `level`

### 2. Question Note Library

Stores questions, mistakes, prompts, exercises, and review notes.

Question notes link back to one or more knowledge points.

### 3. Chat Trace Library

Stores meaningful AI conversation traces that influenced learning.

Chat traces link back to knowledge points and question notes where useful.

## Design Principle

The main knowledge page should feel like a map of learning context, not a file folder.

Each knowledge point should show:

- Its position in a learning path
- What must be learned before it
- What becomes possible after it
- Nearby related ideas
- Questions connected to it
- Chat traces that shaped it

## Current Skeleton Boundary

This repository currently provides only the initial static skeleton.

Not included yet:

- Chat import
- Search
- Editing UI
- Local storage
- Database
- Backend service
