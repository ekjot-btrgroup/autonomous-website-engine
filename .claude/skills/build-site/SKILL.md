---
name: build-site
description: Copy the user's picked designs into a new Lovable-ready project, apply the brief's colours/fonts/animation choice, write copy from the brief, verify the build and push to the client's Lovable GitHub repo. Use when the user sends "Build site <slug> with designs: ...".
---
# Build site (any chat; touches only sites/<slug>/)

0. `npm run -s sync` (latest main: admin dashboard edits, other chats' work).
1. `npm run -s site -- new <slug> --pick <id1>,<id2>,<id3>`
   Uses only the picks, in page order. Brief `colors`, `fonts` and `animations: none` are applied automatically, and the picks are saved to memory.
   Add `--fill` only if the user asks for a complete page (best match for every other brief section).
2. Extra colour work only if the picked designs clash with the brand: `npm run -s site -- theme <slug> --recolor violet:emerald` (Tailwind palette swap inside the sections). Keep changes light.
3. Copy: `npm run -s site -- copy <slug>` prints `{brief, sections:{key:text}}`. Write ONLY changed keys to `sites/<slug>/.engine/copy.out.json` as `{"key":"new text"}`. Rules: brand voice, similar length to the original, facts from the brief only (no invented numbers, awards or quotes; testimonial names become generic like "Client name"). Then `npm run -s site -- copy-apply <slug>`.
4. `npm run -s site -- check <slug>` must PASS. On FAIL fix only the reported file, max 2 tries, then report.
5. Only if `lovable.sites` is true (otherwise stop after step 4 and say the site is ready in `sites/<slug>/`). New Lovable project: the user creates a blank Lovable project, connects GitHub (Lovable makes the repo) and tells you the repo `owner/name`. Add it to the session with push access, then `npm run -s push -- sites/<slug> --repo owner/name`.
   If it says Lovable has newer edits: `npm run -s pull -- sites/<slug>` first.
6. Commit, then `npm run -s release -- "Site <slug>"`. Reply in at most 8 lines: sections used, colours/fonts/animation applied, the Lovable repo, anything left out.
