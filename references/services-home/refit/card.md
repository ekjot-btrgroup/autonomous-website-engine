# Refit  (services-home)
A renovation and home-improvement contractor site that leans on interior photography and a near-black frame to look more like a design studio than a builder. Plain, light geometric type and lots of white space keep it calm; the depth comes from a sticky case-study stack.

## Type
- Manrope only. H1 58px weight 500, tracking -1px, leading 1.2 (51px tablet, 34px phone).
- Section titles 50px 500 (tracking -0.8px, leading 1.1), sub-heads 42px; accordion titles 22px; stat titles 20px 600.
- Intro paragraphs 22px weight 400 with 1.5 leading in light grey on dark, mid grey on light; body 18px.
- Labels are tiny dark pill badges (14px) centred above every section heading.
- Large thin-looking numerals for stats (count up from zero).

## Colour
- Near-black #101014 for the hero, one case-study card, the contact panel and the footer; white and #fafafa for the rest.
- Pale blue-grey (#e9ecf2) as the alternate case-study card surface.
- Text greys #3d3d47 and #d0d1db; hairlines #e6e6e6. No brand accent: buttons are dark pills with a white circular arrow, or white on dark.

## Layout and spacing
- 1440px canvas, 80px side padding, about 150px between sections, centred headers (badge, H3, intro line).
- Hero split 50/50: text column bottom-aligned on the left, tall photo panel on the right running under the transparent nav, with a review chip (stars and quote) overlapping its lower left.
- 10px radii on images and cards, 16px on large panels, no shadows.
- Stats in a 4-column row with no boxes, only numerals, title and two-line caption.

## Sections (homepage, in order)
1. Hero: dark, "available for work" pill, three-line headline, intro, dark pill CTA with arrow; right half a tall kitchen photo; floating review card.
2. About: badge and 3-line heading left, long intro paragraph right; then a horizontal image ticker gallery; then the 4 stats.
3. Services: light grey band, centred header; left a large photo, right an accordion of six services with line icons, plus/close toggles and hairline separators.
4. Our work: three wide case-study cards (image left, title, paragraph, tag chips, client quote with avatar right) stacked with sticky positioning; each scales to 0.9 as the next covers it; cards alternate grey and black.
5. Testimonials: centred header, review card ticker.
6. FAQs: sticky left column (badge, heading, line, button) with an accordion on the right.
7. Contact: dark panel, heading, intro and contact rows left; light form card right.
8. Footer: dark, logo left, two short link columns right.

## Motion
- Hero headline animates per character: rise 10px, spring stiffness 400 damping 40, 0.05s stagger, on mount.
- Appear effects are opacity-only springs (stiffness 250, damping 80).
- Case studies: sticky stack plus a scroll-target transform from scale 1 to 0.9 as the following card enters.
- Gallery and testimonials run as tickers; stats count up.

## Phone
Hero photo moves above the text; headline 34px; stats stack in one column; case-study cards stack image over text without the sticky effect; accordions keep their structure.

## Signature moments
- The sticky case-study deck receding to 90 percent scale.
- Split hero where the photo panel hosts the navigation links.
- Line-icon accordion paired with a swapping photo.

## Borrow
- Scale-down sticky stack for portfolio or case studies.
- Bottom-aligned hero copy against a full-height image column.
- Numerals-only stats row with no card chrome.

## Avoid
- Counters show 0 until animated; static exports must show final values.
- The image ticker and testimonial ticker render empty in captures; give them fallbacks.
- Long stretches of white between sections can feel empty; tighten when reused.
- Template promo widgets (remix, new template) are not part of the design.
