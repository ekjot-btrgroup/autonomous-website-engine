# Test run: the whole system in a fresh chat (Sonnet, low effort)

Goal: prove the engine works end to end with the 120 uiuxlabz full-page templates, build one client site into a NEW Lovable project, and measure the tokens used. Zero Lovable AI credits.

## Before you start (you)
1. Merge state: everything is already on `main`.
2. Lovable for the client site (the only manual step): create a blank Lovable project (for example "Test Client Site"), open its GitHub settings, connect GitHub, and note the repo name Lovable creates (`owner/name`). Do not prompt Lovable's AI after that (that would spend credits).
3. Start a new Claude chat on `ekjot-btrgroup/autonomous-website-engine` with **Sonnet** at **low** effort. The "Website Engine" or Default environment both work.

## Messages to send (copy them one by one)
1. `Read docs/TEST-RUN.md and docs/PROJECT-STATE.md, then confirm the library status (npm run status).`
2. `New website for <your test brand>.` Answer the 3 questions it asks (animations, colours, brand brief).
3. Look at the contact sheet image it sends (10 designs, each with a one-line reason). Reply: `Build site <slug> with designs: <id1>, <id2>, <id3>`.
4. When it asks for the Lovable repo: `The Lovable repo is <owner/name>.`
5. `Write the test report.`

## What the test chat must do (instructions for Claude)
- Follow CLAUDE.md and the skills (`/shortlist`, `/build-site`). `lovable.showcase` is false: never push the showcase; `lovable.sites` is true: push the client site to the repo the user gives (add it to the session with push access first).
- After EVERY reply, report usage with `npm run -s usage` (see CLAUDE.md), so the user sees tokens and cost per message.
- On `Write the test report`, create `docs/test-runs/<YYYY-MM-DD>-<slug>.md` with:
  - Result per step: library status, brief, shortlist (+ why lines), contact sheet, site build (`site -- check` PASS/FAIL), push to Lovable (commit id), each marked PASS / FAIL / SKIPPED with one line of evidence.
  - Usage table: one row per user message (output tokens, new input, cached input, cost) from the usage lines, plus the session total; Lovable credits used (should be 0).
  - Problems seen and suggestions (max 8 bullets).
  - Then commit and `npm run -s release -- "Test run <slug>"`.

## What "successful" means
| Check | Pass when |
|---|---|
| Library | `npm run status` shows 120 page designs, all tagged |
| Shortlist | 10 designs, every one with a one-line why that mentions the client |
| Contact sheet | `reports/<slug>/shortlist.png` sent to the user, renders real pages |
| Site | `sites/<slug>/` built, `npm run site -- check <slug>` PASS, first pick at `/`, others at `/option-2`, `/option-3` |
| Lovable | the client repo has the engine's commit; Lovable shows the site (user confirms) |
| Cost | tokens per message reported; 0 Lovable credits |
