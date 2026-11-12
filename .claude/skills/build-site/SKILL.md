---
name: build-site
description: Turn the user's 3 picks (numbers from the 10 designs) into the final client-ready designs - a deeper polish round, critic review, then delivery as HTML files or a new Lovable project per engine.config.json delivery. Use when the user sends their 3 picks.
---
# 3 picks -> final designs

Follow CLAUDE.md "Talking to the user". Only after the user picked from the 10 shown. This skill authorises
subagents (design-builder, design-critic) and reading screenshots. If the `design-builder` / `design-critic` agent types are not
available, use general-purpose agents told to read and follow `.claude/agents/design-builder.md` / `design-critic.md`.

0. Silently: `npm run -s sync`. Picks are design numbers (folders `sites/<slug>/designs/NN-*`).
1. **Polish in parallel:** launch 3 `design-builder` agents (mode `polish`, slug, n) with these notes plus the
   design's latest `reports/<slug>/NN-critique.md`: tighten copy to the brief, final photo choices, phone feel
   (`/mobile-native` rules), motion feel (`/apple-design` rules, within the animation answer), accessibility
   (contrast, focus, alt, reduced motion), image weight (no photo over ~350 KB), every placeholder clearly marked.
2. `npm run -s review -- <slug> --only a,b,c`, then one `design-critic` agent for the 3. Fix anything below
   pass with a `design-builder` (mode `fix`). Everything must be `ok` and `pass`.
3. `npm run -s final -- <slug> --picks a,b,c --single` (records the picks in memory).
4. Deliver per `delivery` in `engine.config.json`:
   - `html`: send the files in `output/<slug>/final-single/` (one self-contained file per design) and
     `output/<slug>/<slug>-final.zip` with SendUserFile if available; otherwise say "Open output/<slug>/final/index.html".
   - `lovable`: needs the client's Lovable project repo (the user creates a blank Lovable project connected to
     GitHub). If not given yet, ask for it in Requirements. Add the repo with push access, then
     `npm run -s push -- sites/<slug>/final --repo owner/name`. Never send Lovable AI messages (credits).
5. Silently commit + release. Reply in 2-4 short lines: the 3 designs are ready, how to view them (open the
   file or Lovable link; the Designs button bottom right switches between them), any details the client must
   still supply (placeholders), then
   **Requirements**
   - Nothing more needed. Ask for changes any time.

Change requests later: apply with a `design-builder` (mode `fix`) on that design, review, `npm run -s final` again.
