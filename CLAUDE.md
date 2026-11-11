# Website engine: rules for Claude (keep this file short; it loads every turn)

Design sections (React + Tailwind) -> one Lovable **showcase** app -> brief -> top 10 at `/s/<slug>` -> user picks ~3 -> `sites/<slug>/` -> pushed to that site's Lovable GitHub repo.

## Spend tokens only on judgement
Scripts do all deterministic work and print compact output. Use `npm run -s <script>`.
Claude only: tags designs from summaries, writes briefs, chooses colours/fonts, writes copy as JSON, converts non-React designs, fixes flagged designs.

## Hard rules
- Never read `showcase/src/designs/*/code/` or `sites/*/src/sections/` unless converting or fixing that one flagged design.
- Never read `library/originals/` except to convert a `needs_conversion` design.
- Never edit `library/originals/`; never delete designs.
- Design look stays as-is: change colours/typography only when the brief needs it, lightly (`npm run site -- theme`).
- Copy changes go through `site -- copy` / `copy-apply`, never by hand-editing components.
- User picks designs. Never build a site before the user sends their picks.
- A chat that builds a site touches only `briefs/<slug>.json`, `showcase/src/shortlists/<slug>.json`, `sites/<slug>/**`.
- Library changes (`npm run add`, tagging, conversions) happen in one chat at a time.
- No screenshots, subagents or Lovable AI messages unless the user asks or a skill says so.
- No secrets in the repo. Commit and push to the session branch at the end of every task.

## Workflows (load the skill)
- New designs in `incoming/` -> `/add-designs`
- Brief from user -> `/shortlist`
- User sends "Build site <slug> with designs: a, b, c" -> `/build-site`

`npm run status` shows everything. Vocabulary for tags: `knowledge/vocabulary.json`.
