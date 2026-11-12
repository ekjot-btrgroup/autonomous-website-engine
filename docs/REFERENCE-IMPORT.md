# Importing Framer templates as references

The user's Framer workspace "Moodboard" holds the reference templates. Each one is read (never changed) through
the Framer connector and stored in `references/<industry>/<slug>/`. References teach proportion, rhythm, type,
colour, imagery and motion. Their text, images and code are never copied into client work.

## Per template
1. `open_project` with the project id (Framer MCP). Keep the session handle.
2. `exec` the program in `engine/framer/extract.js` (pass the file's full text as `program`). It is read-only:
   the result must show `"changedNodeCount":0`. Never call anything that edits, publishes or creates branches.
3. Write the returned `result` object (exactly as returned, valid JSON) to
   `/tmp/claude-0/-home-user/d109ccdc-a55d-57f0-af36-78b179f1364d/scratchpad/refs/<slug>.json`.
4. Look at the two screenshots the exec returned (desktop full page and phone) and decide the industry folder:
   `<category>-<sub>` from `knowledge/industries/taxonomy.json` (e.g. `health-therapy`, `software-saas`,
   `hospitality-hotels`). Pick the closest; use `also` for others it suits.
5. `cd /home/user/autonomous-website-engine && npm run -s refs -- save <json> --industry <category-sub>`
   (add `--name <slug>` only if the cleaned title is poor). It downloads screenshots and cuts section images.
6. Look at 2-4 of the most distinctive section images in `references/<industry>/<slug>/sections/` if the full-page
   screenshot is too small to judge details (hero, the most unusual section, cards).
7. Write `meta.json` and `card.md` in the same folder (formats below). Be specific and visual; write about
   patterns and craft, not about the template's own words. No em dashes.

## meta.json
```json
{
  "name": "Therapist",
  "industry": "health-therapy",
  "also": ["health-wellness", "services-consulting"],
  "summary": "Calm, paper-toned practice site with arched photo frames and a quiet serif voice.",
  "style": ["warm-organic", "editorial", "minimal"],
  "feel": { "tone": 2, "energy": 1, "luxury": 3, "density": 2, "warmth": 5, "modernity": 3 },
  "scheme": "light",
  "hue": "green",
  "palette": { "bg": "#f5f1ea", "surface": "#ece5da", "ink": "#22302a", "muted": "#56615b", "accent": "#335a4d", "line": "#d8cfc2" },
  "fonts": { "display": "Source Serif 4", "body": "Inter", "class": "serif", "pairing": "light serif display, neutral sans for UI and labels" },
  "hero": "split-image-right",
  "sections": ["hero", "services", "process", "pricing", "about", "faq", "cta"],
  "motion": 2,
  "signature": ["arched image masks repeated across hero, cards and portrait", "hairline-ruled 3-step process with large serif numerals"],
  "imagery": "warm natural-light interiors, AI-staged rooms, arched crops",
  "layout_grid": "1120px content, 40px side padding, 96px section padding, 3-column cards",
  "quality": 4
}
```
- `style` (1-3, most important first): editorial, minimal, swiss, bold-graphic, brutalist, luxury, warm-organic,
  playful, technical, corporate-clean, retro, futuristic-dark, glassy, maximal, cinematic, collage, soft-pastel,
  monochrome, handcrafted.
- `feel` 1-5: tone (1 serious, 5 playful), energy (1 calm, 5 loud), luxury (1 budget, 5 premium), density
  (1 airy, 5 packed), warmth (1 cool, 5 warm), modernity (1 classic, 5 cutting-edge).
- `scheme`: light, dark, mixed (big dark and light blocks), colour (a saturated colour dominates).
- `hue`: main colour family: neutral, black, green, teal, blue, purple, pink, red, orange, yellow, brown.
- `hero`: split-image-right, split-image-left, full-bleed-image, full-bleed-video, centered-type, big-type-editorial,
  product-shot, collage, card-stack, asymmetric, dashboard-mock.
- `sections`: homepage section kinds in order: navbar is implied; use hero, logos, services, features, process,
  stats, about, team, portfolio, gallery, testimonials, pricing, menu, rooms, listings, products, blog, faq,
  contact, booking, newsletter, cta, footer (footer implied).
- `motion` 1-5 from the effects counts and samples (1 static, 3 tasteful reveals, 5 heavy scroll choreography).
- `quality` 1-5: honest craft level (5 = agency-grade, would show a client as-is).

## card.md
```
# <Name>  (<industry>)
<2-3 sentence concept: who it is for and the idea that makes it feel the way it does>

## Type
display / body / label fonts with sizes, weights, tracking, leading, how hierarchy is built, responsive sizes

## Colour
how each palette colour is used (backgrounds, text, accent only on CTAs, dark bands...)

## Layout and spacing
grid, content width, section padding rhythm, alignment habits, image ratios and masks, radius, borders, shadows

## Sections (homepage, in order)
1. Hero: composition, what is on the left/right, CTA style, supporting details
2. ...
(one line or two per section: the pattern and what makes it good)

## Motion
effects with real values from effectSamples (e.g. fade-up 12px, 0.6s, ease [0.22,1,0.36,1], in-view 15%),
hover behaviours, sticky/ticker/parallax use

## Phone
how the layout collapses, nav pattern, type scaling

## Signature moments
the 2-4 details a visitor remembers

## Borrow
patterns worth reusing in new designs (structure and craft, not content)

## Avoid
weak spots or things that would look templated if reused as-is
```
