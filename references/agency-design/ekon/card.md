# Ekon  (agency-design)

A branding studio site built from nothing but black, white opacity steps and one grotesk. Everything is uppercase and tightly tracked; the only colour on the page comes from the project photography. Calm, confident and easy to rebuild, but it relies on motion to feel premium.

## Type
- One family, Switzer. H1 700 at 60px, -0.04em, 1.2 leading; H2 600 at 45px uppercase, -0.02em; H3 30px, H4 22px, H5 16px, all 600 uppercase.
- Body P1 500 at 18px, 1.4 leading, -0.01em; small labels P4 600 at 14px uppercase.
- Hierarchy is done with opacity, not size: tokens run White 100, 80, 70, 50, 40, 30, 10 and 5%.
- Responsive: H1 60 / 48 / 35, H2 45 / 40 / 30.

## Colour
- Background pure #000 on every section, ink #FFF, muted text around 50% white (#808080), row rules at 10% white.
- No accent hue at all. Buttons are solid white with black uppercase label, 5px radius.
- Warmth arrives only through photography (ochre dust, sage hills, red stripes).

## Layout and spacing
- 1200 frame, 30px side margins, 80px top and bottom padding per section, so the black reads as one continuous sheet.
- Every section header uses the same unit: big uppercase title, a two-line grey intro under it, small white button pinned right on the same baseline band.
- Services split roughly 45/55: numbered title left, a 2 x 2 grid of uppercase tags and a grey paragraph right, 1px hairlines between rows.
- Testimonials in a 3-column grid with small square avatar, uppercase name, quoted grey paragraph. FAQ splits title left, accordion right.

## Sections (homepage, in order)
1. Preloader (wordmark centred on black) handing over to the hero: full-bleed image, H1 and bottom text row with a live clock.
2. Manifesto: one long paragraph lit word by word on scroll, then a 4-up stat row with big figure and tiny grey label.
3. Works: header unit plus a horizontally draggable ticker of landscape project cards (year small, title large, inside the image bottom left).
4. Services: numbered ledger of four disciplines with tag grids and descriptions.
5. Testimonials: three quotes in columns.
6. FAQ: six accordion rows on the right half.
7. Footer as CTA: uppercase three-line pitch, white button, link columns, a bottom meta row (copyright, city, local time, credit) and a giant cropped wordmark.

## Motion
- Hero image appear on mount: from opacity 0 and scale 1.2, spring 3s, bounce 0, delay 1.55s (waits for the preloader).
- Text effect by word: opacity 0, y 10px, blur 10px, spring 1.5s, 0.1s between words, starting at 1.5s.
- Hero parallax speed 120. Smooth scroll component across the site; fixed nav with a blur gradient strip.
- Scroll highlight on the manifesto paragraph (words step from dim to white as you scroll).
- Works ticker velocity 40, slows to 50% on hover, draggable.
- Card hover: y -8px, opacity 0.85, spring 0.5s, bounce 0.2. Cursor image trail on each service row.
- 36 appear effects in total: almost every block fades up as it enters.

## Phone
- Single column throughout; stats become a 2 x 2 grid; the ticker shows one card at a time.
- Service rows stack: title, tag grid, then paragraph. Testimonials stack with avatar above name.
- Footer link groups stack and the giant wordmark stays cropped at the bottom edge.

## Signature moments
- The scale-down hero reveal after the preloader: slow, heavy and cinematic.
- The scroll-lit manifesto paragraph as the first thing under the hero.
- Uppercase project titles set directly on photography in the ticker.
- The numbered service ledger with tag grid and hairlines.
- Oversized wordmark sliced by the page bottom.

## Borrow
- Opacity token ladder for hierarchy on a single-colour dark page.
- The repeated section header unit (title, intro, right button) for rhythm.
- Ledger-style services with a tag grid between title and description.
- Live local time in the footer meta row for a studio feel.

## Avoid
- The static capture shows only the preloader in the hero; make sure the real hero has a strong image and headline without depending on the loader.
- Pure black everywhere with no surface change gets monotonous over long pages; add one tonal break or an image band.
- Generic studio copy and sample stats; write from the brief only.
- Service descriptions that repeat the same sentence shape in every row.
