---
name: add-designs
description: Import new design sections from incoming/ into the library and Lovable showcase, tag them cheaply, and push the showcase. Use when the user adds or uploads designs.
---
# Add designs (library chat; one chat at a time)

0. `npm run -s sync` (latest main: admin dashboard edits, other chats' work).
1. Copy the user's uploads (they arrive under `/root/.claude/uploads/...`) into `incoming/` with `cp`: zips, folders or single .tsx/.jsx/.html files. Do not open or unzip them yourself; one zip may hold many designs and the script splits it.
2. `npm run -s add` -> table of ids, format, status, issues.
3. `npm run -s showcase:check -- --smoke` -> build + render test; broken designs get marked.
4. Fix only flagged designs, smallest change, in `showcase/src/designs/<id>/` (never in originals):
   - `has tailwind.config`: merge its keyframes/animation/colors into `showcase/tailwind.config.ts` `extend`.
   - `missing @/...`: create the file in the design's `code/` folder or add the shadcn component to `showcase/src/components/ui/`.
   - `renders nothing` / `runtime error ... undefined`: give the component default props in `index.tsx` (copy sample data from the design's demo if any).
   - `needs_conversion` (HTML/Vue/Svelte): 1-5 designs -> convert yourself; more -> spawn `section-converter` agents in ONE message, max 4, ~5 designs each. Output: `code/<Name>.tsx` + `index.tsx` default export, Tailwind classes, same look. Then `npm run -s add -- --converted <id>` per design.
   Re-run step 3 until clean. Leave a design flagged (and tell the user) after 2 failed fixes.
5. Tag: `npm run -s tag -- queue` -> write one JSON array to `.cache/tags.json` -> `npm run -s tag -- apply .cache/tags.json`.
   Tag from the summary only. Judge mainly by style and feel: layout, style, the 6 feel axes 1-5, media, goals, quality. Add `origin` (<=2 niches the demo copy is written for); it is a minor signal, so the layout stays usable for any niche. Scheme, typography, motion and image need default from code; set them only to correct the guess. Designs the admin already edited keep the admin's values. Over 40 untagged: save batches with `npm run -s tag -- queue --limit 40 --offset 0 > .cache/tag-batch-1.txt` (offset 40, 80, ...); spawn one `design-tagger` agent per batch file in ONE message (max 4), each writing `.cache/tags-N.json`; then apply each file.
6. Only if `lovable.enabled` is true in `engine.config.json`: `npm run -s push -- showcase` (first time: `--repo owner/name` of the showcase's Lovable GitHub repo; add it to the session with push access first). When the user gives the showcase's published URL, save it as `showcase_url` in `engine.config.json`.
7. Commit, then `npm run -s release -- "<summary>"` (merges to main; no approval needed). Report: added, flagged (with reason), tagged, showcase link (`showcase_url` in `engine.config.json`).
