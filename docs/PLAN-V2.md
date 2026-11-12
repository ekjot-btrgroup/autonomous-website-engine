# Plan v2: reference-built design system (decided 2026-11-12)

**Decision:** approach **B**. The user's Framer templates are *references*, not outputs. They become a design
system (tokens + section variants + industry recipes); each brief gets 10 new designs composed from it.
Cost is not a constraint: quality rules below are mandatory ("no template look, no AI slop").

## Pipeline
| Stage | What | Who | Status |
|---|---|---|---|
| 0. References | Framer projects read through the Framer connector (layer tree, styles, components, appear / scroll / hover effects, saved as `framer.xml` + `effects.json`), plus their published link -> `npm run capture` -> `references/<industry>/<slug>/` (dna.json, thumb, mobile, section crops). Never keeps text, images or code. | script | **built** |
| 1a. Tokens | Type pairings, palettes, spacing, shape and motion presets derived from all dna.json files | script + Claude review | next |
| 1b. Section variants | `system/sections/<kind>/<variant>/`: React + Tailwind, content via props, look via CSS variables; meta lists kind, layout, feel axes, industries, image slots and the reference ids that inspired it. Built by builder agents from section crops (proportions, rhythm), original code only. Each variant passes `npm run slop` and a visual critic at 1440 / 768 / 390. | agents | next (needs references) |
| 1c. Industry recipes | `knowledge/industries/<industry>.md` (format in that folder's README). Missing industry: research 4-6 real sites + guides first. | Claude | format ready |
| 2. 10 directions | Per brief: 10 written art directions (concept, tokens, section plan with variant ids, 2-3 signature moments, photo direction, copy voice). Diversity check rejects near-duplicates. | Claude + script | next |
| 3. Compose + review | Script composes 10 pages; Claude writes copy JSON; slop check; screenshots; critic pass; contact sheet with one-line reasons. | script + agents | next |
| 4. Final 3 | User picks 3 -> deep polish (second critic round, mobile feel, motion, accessibility, speed, final photos) -> HTML files or a new Lovable project. | agents + script | reuse export/site |

## The 10 must be truly different (user rule, 2026-11-12)
Checked by script on the 10 art directions before building, and again on the screenshots:
- **Colour:** no two share a palette; at least 3 dark or colour-led schemes and 3 light ones; at least 6 different main hue families (neutral counts as one).
- **Typography:** no two share a heading font; mix of serif, sans, display and mono-accent pairings across the set.
- **Style:** at least 6 different style families (e.g. editorial, minimal, bold-graphic, warm-organic, luxury, playful, brutalist, technical).
- **Layout:** at least 6 different hero layouts; no two pages with the same section order.
- **Motion:** spread from calm to expressive, matched to the brief's animation answer.
All 10 still fit the industry recipe and the brief.

## Quality rules (all stages)
- Every design starts from an art direction; default looks (blue-purple gradients, centred "Unlock your potential" hero, emoji icons, identical card grids, Inter everywhere) are banned unless the direction justifies them.
- Copy is specific to the brief; no invented numbers, reviews or awards (marked placeholders instead). Banned phrases: `knowledge/anti-slop.json`.
- `npm run slop -- <path>` must show 0 errors before anything is shown to the user.
- Visual review at desktop, tablet and phone by a separate critic (hierarchy, spacing rhythm, type scale, contrast, alignment, originality, slop list); fix and re-check until it passes.
- Photos chosen per section and treated to match the direction, or custom SVG art where photos would feel generic.
- The user's picks and notes ("too corporate", "love this layout") go to memory and steer the next briefs.

## Waiting on the user
1. Framer templates per industry as Framer projects (user's choice, 2026-11-12). The connector reads only the project open in Framer with the MCP plugin running, so import is one project at a time: user opens it, says "next", Claude reads it. Also needs each project's published link for screenshots.
2. Licence status (purchased / free): recorded per reference with `--licence`.
3. Decided: homepage only.
4. Optional: Unsplash API key for better photos.

## Network note (cloud edition)
Framer sites are blocked by this cloud environment's network policy. When links arrive, allow the exact hosts
(`<name>.framer.website` per template, plus `framerusercontent.com`, `framer.com`, `fonts.gstatic.com`), or run
`npm run capture -- --batch <file>` on a computer with normal internet and commit `references/`.

## Clean-up when the system is live
Delete the 120 uiuxlabz designs (`showcase/src/designs`, `test-templates/uiuxlabz`) from main and the local
branch; they stay recoverable through git history.
