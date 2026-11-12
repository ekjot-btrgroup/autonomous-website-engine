---
name: shortlist
description: Turn a brand brief into 10 new, distinct, client-ready homepage designs built from the reference library (Framer templates), each with a one-line reason, then let the user pick 3. Handles the brief and the 3 questions (animations, colours, typography) in strict order. Use when the user gives a brief or asks for a website.
---
# Brief -> 10 designs

Follow CLAUDE.md "Talking to the user". Steps run in order; keep anything the user gives early. Quality first:
every design must pass `docs/DESIGN-QUALITY.md`. This skill authorises subagents (design-builder, design-critic)
and reading screenshots. If the `design-builder` / `design-critic` agent types are not
available, use general-purpose agents told to read and follow `.claude/agents/design-builder.md` / `design-critic.md`.

0. Silently: `npm run -s sync`.
1. **Brief received.** Reply only: "I have noted the company brief and have last 3 questions."
   **Requirements**
   - Animations: none, subtle or rich?
   - Colours: your brand colours, or "choose for me"?
   - Typography: font names, or "choose for me"?
   (List only what is still unanswered. If the brief lacks something essential, such as what the business does
   or where it is, ask for it in Requirements too.)
2. **Answers received.** Write `briefs/<slug>.json` (format: `briefs/_template.json`). `industry` = closest
   `<category>-<sub>` in `knowledge/industries/taxonomy.json`. `feel` = your 1-5 reading. `facts` only from the
   user; never invent. Brand colours/fonts given: put them in `colors` / `fonts` (`{primary, accent}`, `{heading, body}`).
3. **Industry knowledge.** If `knowledge/industries/<industry>.md` is missing: research 4-6 strong real sites in
   this industry plus 1-2 guides (web search / web-fetch agent), add what the references in that industry show
   (`npm run -s refs -- list --industry <industry>`), and write the recipe (format in `knowledge/industries/README.md`).
4. `npm run -s refs -- match <slug>`: 10 diverse references ranked for this brief. Read the `card.md` and
   `meta.json` of each (and of any other reference you want to borrow from).
5. **10 art directions** in `briefs/<slug>.directions.json` (array of 10, fields listed at the top of
   `engine/directions.mjs`). Each one: a named concept for THIS client, 1 primary reference (+0-2 secondary),
   its own palette (hex, contrast-safe), its own Google Fonts pairing, hero layout, section order from the
   recipe and brief, motion level within the animation answer, 2-3 signature moments, imagery direction and a
   one-line `why` for this client (max ~20 words, honest). Brand colours given: every direction uses them, with
   different roles, neutrals and backgrounds. Run `npm run -s directions -- check <slug>` and fix until OK.
6. **Build in parallel:** launch 10 `design-builder` agents in one message (mode `build`, slug, direction n),
   in the background. Wait for all 10.
7. `npm run -s review -- <slug>`. Then launch 4-5 `design-critic` agents in parallel (2-3 designs each, never
   the builder). For every design with verdict `fix`, or `FIX` in the review: send its critique to a
   `design-builder` (mode `fix`). Repeat review + critique once more for those. A design still failing after
   2 rounds: one more round on its Blocking fixes (the critic's round-3 rule) if no item is below 3, otherwise
   rebuild it from a revised direction (a different primary reference when the critic says it copies one).
   Never show the user a design that has not passed.
8. `npm run -s review -- <slug> --gallery`. Send `reports/<slug>/designs.png` with SendUserFile (render) and
   `output/<slug>/<slug>-designs.zip` (attach) if that tool exists; otherwise say
   "Open output/<slug>/designs/index.html". Silently commit + release.
9. Reply: one line per design, `1. <Name>: <why>` (10 lines), nothing else, then
   **Requirements**
   - Your 3 picks: reply with their numbers (for example 2, 5, 7)
10. Feedback any time: a taste ("more editorial", "no dark designs for clinics") ->
    `npm run -s remember -- --for "<industry or kind of brief>" --prefer "<words>" --avoid "<words>"` (omit `--for` for all briefs).
    Reply "Noted." plus Requirements.
