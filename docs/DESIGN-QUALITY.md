# Design quality bar

Every design must look like a senior designer made it for this one client. The references in `references/`
show the level: match their craft, never their content. Builders follow this file; critics score against it.

## Craft rules
**Concept first.** One idea drives type, colour, layout, imagery and motion (the direction's `concept`).
The direction's 2-3 `signature` moments must be clearly visible; they are what the client remembers.

**Typography**
- The direction's two fonts only (Google Fonts, `display=swap`). Body 16-18px, line-height 1.5-1.7, measure 45-75ch.
- At most 6 font sizes on the page. Clear scale: display 2.8-5x body on desktop. Fluid sizes with `clamp()`.
- Large display text: tracking -0.01em to -0.03em, line-height 1.0-1.15. Small uppercase labels: +0.06em to +0.12em.
- `text-wrap: balance` on headings, `pretty` on paragraphs. Smart quotes and apostrophes. Tabular numbers for prices and stats.

**Grid and spacing**
- One content width for the whole page (1120-1280px) with consistent side padding (20-24px phone, 32-48px desktop).
- A spacing scale (e.g. 4, 8, 12, 16, 24, 32, 48, 64, 96, 128) used everywhere. Section padding consistent
  (about 96-160px desktop, 64-96px phone) unless a section is deliberately full-bleed.
- Text edges line up across sections. Alignment is a decision (left or centred), held for the whole page.

**Colour**
- One dominant colour with a sharp accent. Accent only on key actions and highlights (roughly 60/30/10).
- Body text contrast 7:1 or better, secondary text 4.5:1 or better. Never grey text on a photo without a scrim.
- No blue-to-purple "AI" gradients, no rainbow accents, no neon glows unless the direction is built on them.

**Imagery**
- Real, relevant photography with one consistent treatment (ratio family, crop, colour mood, masks or frames),
  or custom SVG artwork where photos would feel generic. No random stock, no mismatched lighting.
- Every image has explicit width/height, meaningful `alt`, `loading="lazy"` below the fold.

**Components**
- Radius scale consistent and concentric (inner radius smaller than outer). Buttons: clear primary vs secondary,
  16-24px horizontal padding, 44px+ tap height on phone. Hairline borders (1px, low-contrast line colour);
  shadows subtle and layered, or none.
- Navigation simple and recognisable; on phone a real menu button (`aria-expanded`), not hidden links.

**Sections**
- Each section earns its place for this business (the industry recipe and the brief decide). Vary layouts:
  never three identical card grids in a row; alternate dense and airy sections.
- The hero says what the business is, for whom, and the next step, in under 3 seconds.
- Footer: real contact details from the brief, small legal line, no lorem.

**Motion** (match the brief's animation answer and the direction's `motion` level)
- Purposeful: reveal on scroll (opacity + 8-24px translate), 0.4-0.8s, ease `cubic-bezier(.22,1,.36,1)`,
  stagger 60-90ms. Hover states on all interactive elements. At most one bold signature motion.
- Always honour `prefers-reduced-motion: reduce` (no movement, content visible immediately).
- Content must be visible without JavaScript (reveal classes added by script, not hidden in CSS by default).

**Copy**
- Written for this brand from the brief's facts: concrete, short, in their voice. Headlines usually 3-8 words.
- No invented numbers, awards, reviews or client logos. Where proof is needed, use a clearly marked
  placeholder ("[Client quote to be supplied]") or a section that needs no fake proof.
- Banned phrases and tells: `knowledge/anti-slop.json` (`npm run slop` must report 0 errors).

**Technical**
- One `index.html` per design with inline CSS and a small inline script; no frameworks, no CDNs except Google
  Fonts. Works from `file://`. Semantic landmarks, one `h1`, skip link, visible focus styles.
- No horizontal scrolling at 390, 820 or 1440px. `npm run review` must report `ok`.

## Critic checklist (score 1-5 each; pass = no item below 3 and average 4+)
1. Concept: one clear idea, signature moments visible
2. Fit: right for this business, audience and industry recipe
3. Hierarchy: the eye knows where to go in every section
4. Typography: scale, pairing, measure, rhythm
5. Grid and spacing: consistent width, edges, padding rhythm
6. Colour: dominant + accent discipline, contrast
7. Imagery: relevant, consistent treatment, no stock feel
8. Components: buttons, cards, nav, forms feel crafted and consistent
9. Phone: designed for the phone, not squeezed
10. Motion: tasteful, matches the brief, reduced-motion safe
11. Copy: specific and human, no slop, no fake proof
12. Originality: does not look like a template or like the other 9 designs
