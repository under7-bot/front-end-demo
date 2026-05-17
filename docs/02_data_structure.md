# Data Structure

## Files

```text
data/
  knowledge.json
  questions.json
  chat_traces.json
  learning_paths.json
```

## Knowledge Point Shape

```json
{
  "id": "kp_memory_palace_basics",
  "title": "Memory Palace Basics",
  "summary": "A spatial method for placing ideas in memorable locations.",
  "level": 1,
  "tags": ["memory", "learning"],
  "prerequisiteIds": [],
  "nextIds": ["kp_learning_trace"],
  "relatedIds": ["kp_spaced_review"],
  "learningPathIds": ["path_personal_ai_learning_system"],
  "questionIds": ["q_memory_palace_vs_notes"],
  "chatTraceIds": ["chat_initial_system_design"],
  "memoryPalace": {
    "location": "Entrance hall",
    "imageCue": "A bright doorway with labeled rooms",
    "sensoryCue": "Footsteps echoing through a quiet hall"
  }
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

Use stable IDs instead of titles for relationships.

Good:

```json
"prerequisiteIds": ["kp_memory_palace_basics"]
```

Avoid:

```json
"prerequisites": ["Memory Palace Basics"]
```

Stable IDs make it easier to rename titles without breaking relationships.
