# Website engine: rules for Claude (keep this file short; it loads every turn)

All designs live in ONE Lovable **showcase** project. Brief -> algorithm picks 10 (live links) -> user picks ~3 -> those go into a NEW Lovable project for that client (`sites/<slug>/`, pushed via GitHub). Docs: `README.md`, `docs/USER-GUIDE.md`, `docs/ALGORITHM.md`.

## Spend tokens only on judgement
Scripts do all deterministic work and print compact output. Use `npm run -s <script>`.
Claude only: tags designs from summaries, writes briefs, picks colours when asked, writes copy as JSON, records feedback, converts non-React designs, fixes flagged designs.

## Hard rules
- Judge a design mainly by style and feel (layout, style, 6 feel axes, media, motion). `origin` = the niche its demo content targets: record it (<=2), it is a minor signal.
- Admin dashboard edits (`showcase/src/overrides/`, admin memory events) always win over Claude's tags. Never overwrite or delete them.
- Never read `showcase/src/designs/*/code/` or `sites/*/src/sections/` unless converting or fixing that one flagged design.
- Never read `library/originals/` except to convert a `needs_conversion` design. Never edit originals; never delete designs.
- Design look stays as-is: colours/typography change only when the brief asks, lightly.
- Copy changes go through `site -- copy` / `copy-apply`, never by hand-editing components.
- The user picks designs. Never build a site before the user sends their picks.
- When the user says a design suits/does not suit something, or states a taste ("no gradients for law firms"), record it with `npm run -s remember` (see `/shortlist` step 7). Never edit `memory/` by hand.
- A site chat touches only `briefs/<slug>.json`, `showcase/src/shortlists/<slug>.json`, `sites/<slug>/**`, `memory/events/*`.
- Library changes (`npm run add`, tagging, conversions) happen in one chat at a time.
- No screenshots, subagents or Lovable AI messages unless the user asks or a skill says so.
- No secrets in the repo.
- Start of every task: `npm run -s sync` (pulls main: dashboard edits, other chats' work).
- End of every task: commit, then `npm run -s release -- "<one-line summary>"`. It merges into `main` and writes `docs/releases/` notes. The user authorised this: do not ask. On conflict it pushes nothing; run `npm run sync`, resolve, release again.

## Workflows (load the skill)
- New designs -> `/add-designs`
- User wants a website / gives a brief -> `/shortlist` (asks 3 questions: animations, colours, brand brief)
- User sends "Build site <slug> with designs: a, b, c" -> `/build-site`

`npm run status` shows everything. `npm run remember -- list` shows what has been learned. `npm run releases` lists what went to main.
