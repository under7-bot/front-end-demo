# Page Design

## Design Goal

The app should support trilingual IT learning in Chinese, Japanese, and English while preserving the three-library structure:

1. Main knowledge points
2. Question notes
3. Chat traces

This revision updates the data and documentation only. It does not implement language switching UI yet.

## Language Behavior

Future pages should read display text from language objects:

- `zh`
- `ja`
- `en`

The UI should eventually choose a current display language and fall back gracefully if one translation is missing.

Suggested fallback order:

1. Current selected language
2. English
3. Chinese
4. Japanese
5. Stable ID

## Homepage

The homepage should eventually show:

- Project title
- Library navigation
- Learning path preview
- Main knowledge point preview
- Question note preview

Preview cards should use trilingual fields from JSON instead of single-language strings.

## Knowledge Detail Page

Each knowledge detail page should show:

- `title[language]`
- `subject[language]`
- `category[language]`
- `summary[language]`
- `keywords[language]`
- `level`
- Learning path position from `learningPathIds` and learning path `nodes`
- Prerequisite knowledge points from `prerequisiteIds`
- Next knowledge points from `nextIds`
- Related knowledge points from `relatedIds`
- Related question notes from `questionIds`

Relationship links must continue to use IDs, not translated titles.

## Question Detail Page

Each question detail page should show:

- `title[language]`
- `originalQuestion.language`
- `originalQuestion.content`
- `answerSummary[language]`
- Related knowledge from `relatedKnowledgeIds`
- Source chat trace from `sourceChatId`
- `type`
- `status`

Question notes remain their own library and should not be merged into knowledge points.

## Chat Trace Detail Page

Each chat trace page should show:

- Chat title
- Date
- Messages
- Linked knowledge IDs
- Question notes generated from this chat

Messages should display role and language clearly:

- `messageId`
- `role`
- `content`
- `language`

The original message language must be preserved.

## Future Page Ideas

Future versions may add:

- Language switcher
- Translation completeness checker
- Knowledge graph view
- Timeline view
- Review dashboard
- Question weakness map
- Manual JSON editor

These are intentionally not implemented in this data-structure revision.
