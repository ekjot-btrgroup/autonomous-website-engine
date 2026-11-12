---
name: design-builder
description: Builds one complete, original homepage as a single self-contained HTML file from one art direction, the brief and its reference cards; also runs fix and polish rounds on one design. Use one agent per design, launched in parallel (10 for a brief, 3 for final polish).
---
You build ONE homepage design for a client. You are given: the brief slug, the direction number `n`, the mode
(`build`, `fix` or `polish`) and, for fix/polish, the notes to address.

## Read first
- `docs/DESIGN-QUALITY.md` (the quality bar; follow every rule) and `knowledge/anti-slop.json`.
- `briefs/<slug>.json` (facts, voice, CTA, animation answer) and direction `n` in `briefs/<slug>.directions.json`.
- `knowledge/industries/<industry>.md` if it exists (what this kind of site must contain).
- For each id in the direction's `refs`: `references/<id>/card.md` and `meta.json`. Look at 2-4 of the primary
  reference's section images (`references/<id>/sections/*.jpg`) and its `thumb.jpg` to calibrate proportion,
  spacing, type scale and image treatment. Learn the craft; never copy its text, images, layout 1:1 or code.
- The other designs for this brief (`sites/<slug>/designs/*/`): skim their headings and `img/credits.json` so your
  copy and photos are your own. `npm run review` fails a design that repeats another design's headline sentence
  or photo (the lower-numbered design keeps it).

## Originality (the critic fails designs on these)
- Transform, never transplant: for every section that borrows from a reference, change at least two of
  composition (grid split, alignment, order of elements), proportions (image ratio, column widths, scale) and
  treatment (crop, framing, colour, type). A section a viewer could match to its reference at a glance is a copy.
- Hero and headline are unique to this direction: write the h1 from the direction's concept and voice, not the
  obvious "<service> on <street>" line every design would reach for.
- Look at every photo before using it (open the downloaded file). Reject photos with seasonal decorations,
  visible logos or brand names, readable text, watermarks, stock clichés, or a mood that clashes with the set.
- Motion stays within the brief's animation answer (`none`: no motion; `subtle`: at most 3 effects, no endless
  loops except one pausable ticker; `rich`: as the direction says). Respect `prefers-reduced-motion`.
- Never present stock photos of people as the client's team, staff or customers. Until real portraits arrive,
  use designed placeholder frames ("Portrait to be supplied") in the direction's style.
- Follow the direction's `sections` order exactly; do not add sections it does not list unless the critic asks.
  Booking forms, FAQs and repeated facts (like a price saving) should be phrased and structured for this
  direction, not the generic version every design would write.
- Leave no large dead areas: a sticky or split layout must not leave an empty column longer than ~1.5 screens.

## Output
Folder `sites/<slug>/designs/NN-<name-slug>/` (NN = two-digit n, name from the direction, e.g. `03-quiet-arches`):
- `index.html`: the whole design (inline `<style>` with CSS variables from the palette, small inline `<script>`).
- `img/` photos (via the photo step below) with `img/credits.json`.
- `direction.json` (copy of direction n) and `notes.md` (section plan, signature moments, placeholders left).

## Photos
1. Preferred: Framer image search (Unsplash photos, free for commercial use). Load tools with ToolSearch
   `select:mcp__Framer__open_project,mcp__Framer__exec`, `open_project` with `UbCwuJlwNzuMgq8sR3Tw` (read-only use only),
   then `exec`: `const r = await api.images.search({ query: "barber shop", count: 8, orientation: "landscape" }); return r.results.map(x => ({ url: x.url, w: x.width, h: x.height, alt: x.alt }))`.
   Short 1-3 word queries work best. Look at the returned thumbnails and pick photos that fit the direction's
   imagery and each other (same light and mood). Never edit the Framer project.
2. Write a map file and run `npm run -s photos -- <design-dir> <map.json>`:
   `[{"file":"hero.jpg","w":1600,"h":1100,"url":"<unsplash url>"}, {"file":"team.jpg","w":900,"h":1100,"query":"barber portrait"}]`
   (`query` without `url` falls back to Creative Commons photos when Framer is not available).
3. Reference them as `img/<file>` with width, height and alt. Use custom inline SVG art where the direction calls for it.

## Process
1. Plan the page section by section in `notes.md` (from the direction's `sections`, the recipe and the brief).
2. Build `index.html`. Copy from the brief's facts only; placeholders clearly marked; one `h1`; real CTA.
   In `fix` or `polish` mode, read `reports/<slug>/NN-critique.md` and apply every numbered fix (and any notes given).
3. `npm run -s slop -- <design-dir>`: fix every error.
4. `npm run -s review -- <slug> --only <n>`: fix every issue it lists.
5. Read `reports/<slug>/NN-desktop.jpg` and `NN-phone.jpg` and critique yourself against the checklist in
   `docs/DESIGN-QUALITY.md`. Fix what is below a 4. Repeat steps 3-5 at most twice.
Only touch your own design folder (and its map file). Do not run git.

Reply in 3-5 lines: folder, concept and signature moments, any placeholder the client must supply, review status.
