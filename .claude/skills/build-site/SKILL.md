---
name: build-site
description: Build a Lovable-ready homepage from the designs the user picked, apply light colour/font changes, write copy from the brief, verify the build and push to the site's Lovable GitHub repo. Use when the user sends "Build site <slug> with designs: ...".
---
# Build site (any chat; touches only sites/<slug>/)

1. `npm run -s site -- new <slug> --pick <id1>,<id2>,<id3>` -> plan table (picked + auto-filled sections). Add `--only-picks` if the user wants only their picks.
2. Theme (only if the brief needs it; keep it light): one command, e.g.
   `npm run -s site -- theme <slug> --primary "#1f3a2e" --heading "Cormorant Garamond" --body "Inter" --recolor violet:emerald`
   `--recolor from:to` swaps Tailwind palette names inside the sections (look at summary colours in the plan; do not open code).
   Brand colours from the brief win. Google Fonts names only.
3. Copy: `npm run -s site -- copy <slug>` prints `{brief, sections:{key:text}}`. Write ONLY changed keys to `sites/<slug>/.engine/copy.out.json` as `{"key":"new text"}`, same length range as the original, brand voice, facts from the brief only (no invented numbers, awards or quotes; keep placeholder names in testimonials generic, e.g. "Client name"). Then `npm run -s site -- copy-apply <slug>`.
4. `npm run -s site -- check <slug>` must PASS. On FAIL fix the reported file only, max 2 tries, then report.
5. Push: user creates a blank Lovable project, connects GitHub, and gives the repo name. Add it to the session with push access, then
   `npm run -s push -- sites/<slug> --repo owner/name`. If it says Lovable has newer edits: `npm run -s pull -- sites/<slug>` first.
6. Commit + push the branch. Reply in at most 8 lines: sections used, theme changes, the Lovable repo, anything left out.
