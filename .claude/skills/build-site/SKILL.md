---
name: build-site
description: Build the 3 final client-ready designs from the user's picks (numbers from the shortlist or design ids), apply the brief's colours, typography and animation choice, rewrite the text for the brand, check the build and deliver them (HTML files or a new Lovable project, per engine.config.json delivery). Use when the user sends their 3 picks.
---
# Build the final designs

Follow CLAUDE.md "Talking to the user". Only after the user picked from the shown 10.

0. Silently: `npm run -s sync`. Picks given as numbers map to ranks in `showcase/src/shortlists/<slug>.json` (item `rank` -> `id`).
1. `npm run -s site -- new <slug> --pick <id1>,<id2>,<id3>` (pick order = option order). Full pages: option 1 at `/`, others `/option-2`, `/option-3`, with the floating Designs switcher added automatically. Brief colours, fonts and `animations: none` are applied automatically; picks are saved to memory. `--fill` only if the user asks for a complete page from sections.
2. Extra colour work only if a pick clashes with the brand: `npm run -s site -- theme <slug> --recolor violet:emerald` (light touch).
3. Copy: `npm run -s site -- copy <slug>` prints `{brief, sections:{key:text}}`. Write ONLY changed keys to `sites/<slug>/.engine/copy.out.json` `{"key":"new text"}`: brand voice, similar length, facts from the brief only (no invented numbers, awards or quotes; testimonial names generic like "Client name"); replace the template's brand name everywhere. Then `npm run -s site -- copy-apply <slug>`.
3b. Photos for the brand: `npm run -s site -- images <slug>` lists every photo (file, size, hint). Write `sites/<slug>/.engine/images.json` `{"<file>": "2-3 search words"}` matching the business and each photo's role (hero/banner: the service in action; cards: each service; team: people with the product/customers; avatars: portraits). Then `npm run -s site -- images-apply <slug>` (Openverse photos licensed for commercial use, cropped to the same size, credited). Re-run with other words for any "keep" lines. If the image host is unreachable, keep the template photos and say so in one line.
4. `npm run -s site -- check <slug>` must PASS; on FAIL fix only the reported file (max 2 tries).
5. Deliver per `delivery` in `engine.config.json`:
   - `html`: `npm run -s export -- <slug> --single` (self-contained files: images and scripts inside). Send the files in `output/<slug>/final-single/` (index.html, option-2.html, option-3.html, IMAGE-CREDITS.txt) with SendUserFile if available; otherwise say "Open output/<slug>/final-single/index.html".
   - `lovable`: needs the client's Lovable repo (the user creates a blank Lovable project and connects GitHub). If not given yet, ask for it in Requirements. Add the repo with push access, then `npm run -s push -- sites/<slug> --repo owner/name` (if it reports newer Lovable edits: `npm run -s pull -- sites/<slug>` first).
6. Silently commit + release. Reply in 2-4 short lines: the 3 designs are ready, how to view them (open the file or Lovable link; the Designs button bottom right switches options), then
   **Requirements**
   - Nothing more needed. Ask for changes any time.

Optional polish only when asked or a check finds a problem: `/mobile-native` (phone fixes), `/apple-design` (motion feel).
