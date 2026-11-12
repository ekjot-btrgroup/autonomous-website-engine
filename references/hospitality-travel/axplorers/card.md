# Axplorers  (hospitality-travel)
A bespoke luxury travel agency site for planners who sell made-to-measure journeys rather than packages off a shelf. The feel comes from one tight warm palette (paper, sand, espresso, a single gold) and golden-hour photography, so the whole page reads like a well-lit travel journal; a soft serif carries the romance while a rounded sans keeps forms and data crisp.

## Type
- Display: Parastoo 500, a soft bookish serif. H1 96px / 0.9 leading / -0.03em; H2 64px / 0.95 / -0.02em; H3 44px; H4 30px for card titles. Responsive steps 96 > 78 > 64 (H1) and 64 > 52 > 44 (H2).
- A separate "Display" statement style at 72px / 1.1 leading for the centred about sentence, dropping hard to 30px on phone.
- Body: Google Sans Flex 400 to 500, 14px small, ~16px large, 22px extra large for pull quotes and service intros, leading 1.5 to 1.6.
- Eyebrow: 12px, 600, uppercase, +0.06em, gold, always sitting under a small line icon.
- Buttons use the serif at 700, 20px, which gives CTAs a stationery feel instead of a UI feel.
- Hierarchy trick: the last word of each H2 is set in gold (sometimes italic serif), so every section header ends on the accent.

## Colour
- Page background warm paper #efe8d9; cards and buttons use sand #ebdec7 with a slightly darker #d8c8ac hairline border.
- Ink espresso #2a241e for headings, warm grey #6f665c for body.
- Gold #b2894c only on eyebrows, accent words and icons; never as a big fill.
- Near-black #161311 for the hero and for the dark photo cards; the CTA banner is a dark photo panel too, giving three dark punctuation points down a light page.
- Overlays use white at 10 to 24% for glass borders and fills on top of photos.

## Layout and spacing
- 1200px canvas, 40px side padding, uniform 80px top and bottom section padding; headers left aligned with a pill button flush right on the same baseline.
- Card grids are 3 columns with ~20px gaps; cards have 20px radius, buttons are fully rounded pills with a 1px border and a soft drop shadow.
- Photo cards are tall portrait (roughly 3:4) with a bottom-to-black gradient for legible text.
- Glass surfaces: 2 backdrop blurs (hero form and progressive blur under the fixed navbar).
- Radii scale: 12px inputs, 20px cards, 40px large panels and pills.

## Sections (homepage, in order)
1. Hero: full-bleed video at golden hour with dark overlay, transparent nav on top, big two-line serif headline bottom left with a short sans subline, then a full-width frosted enquiry bar (four labelled glass fields plus a sand submit pill). Strong because the conversion tool lives inside the hero image.
2. About: centred eyebrow and icon, then a three-line display sentence with pill-shaped photo capsules dropped between words, a short centred paragraph and a single pill button.
3. Packages: left header with gold end word, "view all" pill right; three dark photo cards with a glass price chip, title, two-line description, rating and duration pills and a full-width sand button.
4. Services: split layout, left a stacked list of four services separated by hairlines (serif title, small sans description, "learn more" link), right a tall parallax still-life image with a floating glass caption chip.
5. Destinations: same header pattern, three portrait photo cards with a small category chip top left and title and blurb bottom left.
6. Stats: left H2 with right-aligned paragraph, then a wide parallax group photo with rounded corners, then four animated counters in a row with tiny icons and hairline dividers.
7. Testimonials: three columns: a giant 4.9 rating with stars and note, a central portrait parallax image, and a column of three quotes in 22px sans with names in small caps.
8. Journal: one featured post (wide image left, serif title right with author avatar) above three smaller cards with date, title and author chip.
9. CTA: dark full-bleed photo banner with rounded corners, eyebrow, serif headline with italic gold word, one paragraph and a sand pill button.
10. Footer: newsletter on the left with a pill input, three link columns, then an oversized wordmark in gold gradient serif that bleeds off the bottom.

## Motion
- Hero image scales from 1.1 to 1 with opacity, 0.8s tween, ease [0.12,0.23,0.5,1], 0.2s delay, on mount.
- Headlines use a word-by-word text effect: from opacity 0, y 30px, x -5px, blur 4px; 0.6s per word, 0.07s stagger, 0.3s start delay.
- 47 appear effects in total: nearly every block fades up on scroll in sequence.
- Parallax at speed 80 on the hero video and on the three large editorial images (services, stats, testimonials).
- Smooth scroll component, progressive blur under the fixed navbar, animated number counters.

## Phone
Single column throughout. The enquiry form stacks into full-width fields under the headline. Display statement drops to 30px and the photo capsules shrink with it. Card grids become stacked full-width cards; services list sits above its image. Nav collapses to logo plus menu overlay.

## Signature moments
- Photo capsules embedded inside the about sentence.
- Glass enquiry bar sitting on the video hero.
- Gold final word on every heading.
- Oversized gradient wordmark sinking into the footer.

## Borrow
- Inline image capsules in a centred statement to make a values line feel crafted.
- Conversion form inside the hero as a frosted strip, not a separate section.
- One warm accent used only on small typographic moments, with three dark photo blocks to pace a light page.
- Serif button labels for a hospitality voice.
- Header row pattern: eyebrow with icon, H2 left, pill link right.

## Avoid
- The page repeats the same three-card photo grid for packages, destinations and journal; vary at least one when reusing.
- Every section has identical 80px padding and the same header layout, which gets monotonous by the middle of the page.
- Small grey body text on sand has low contrast; darken it.
- Heavy word-by-word blur reveals on every headline feel slow if overused.
