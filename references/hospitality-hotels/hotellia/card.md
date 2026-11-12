# Hotellia  (hospitality-hotels)
A boutique seaside hotel site for small Mediterranean or resort properties. Its idea is a printed-brochure severity: everything square, a cool light grey page with white cards, and every heading in uppercase Baskerville, so the warm terracotta photography does all the emotional work.

## Type
- Display: Libre Baskerville 400, uppercase. H1 80px (48 tablet, 40 phone) used as a giant wordmark; H2 40px / -0.04em (32, 26) for centred section titles; H4 20px uppercase for card titles.
- Pull text: Instrument Serif 32px uppercase for quotes in the review slider.
- Body: Inter 16px / 1.2 and 14px / -0.02em, black; captions Manrope 12px.
- Hierarchy is simple and repetitive: centred uppercase H2, one or two lines of centred Inter beneath, then content.

## Colour
- Page light grey #f2f2f2; cards and panels pure white; text pure black.
- Forest green #1c3d2d only for the footer block, where the wordmark repeats in white.
- Hairlines #ebebeb; no other accent colour. Black pill button on white card for offer CTAs.

## Layout and spacing
- 1200px canvas, only 20px side gutters so cards run almost edge to edge.
- 64px section padding and 64px between header and content, used identically everywhere.
- 0px radius on everything, 2 subtle shadows total, no borders: separation is white card on grey.
- Common card: white row with title left, square image centre, text right (3 columns).

## Sections (homepage, in order)
1. Hero: full-bleed pool photograph framed by an architectural overhang; tiny white captions bottom left and right; the hotel name in giant uppercase serif bleeding off the bottom edge. Hero is sticky and the page scrolls over it.
2. Promo strip: ticker of small sale cards alternating with the logo on grey.
3. Dining: centred header, two large photo cards side by side with small captions bottom left.
4. Experiences: four full-width white rows (label, image, paragraph) that stick and stack as you scroll.
5. Rooms: two-column grid of room photos with uppercase name and short centred description beneath; one orphan card on the last row.
6. Offers: horizontal white cards with title, text and black pill button left and a landscape photo right.
7. Reviews: white panel with a large uppercase serif quote, name line and dot pagination.
8. Manager note: white letter card with the logo, greeting, three paragraphs and a handwritten signature.
9. FAQ: rows of questions with plus icons on white, separated by hairlines.
10. Footer: forest green block with an uppercase statement, contact and links, and the giant wordmark again.

## Motion
- Hero image settles from scale 1.1 to 1 over 2s with ease [0.6,-0.01,0.3,0.99].
- Hero is sticky; a scroll-target transform moves elements up 300px as the next section arrives, creating a curtain reveal.
- Experience rows use position sticky to stack.
- Promo strip ticker at velocity 50, slowing 10% on hover.
- Only 5 appear effects; the page relies on scroll mechanics rather than fades.

## Phone
Hero wordmark shrinks to 40px and still bleeds at the bottom. Rows collapse to single column: label, image, text. Rooms show one card per row with price. Navigation is logo, bell icon and a white Menu pill.

## Signature moments
- The oversized cropped wordmark at top and bottom.
- Sticky stacking experience cards.
- The signed manager letter.

## Borrow
- Using the brand name as a cropped giant headline in hero and footer.
- Sticky stacked full-width rows to present 3 to 5 offerings with rhythm.
- A personal signed note section to add warmth to a minimal layout.
- Square photography on a grey page for a clean, gallery-like feel.

## Avoid
- Every heading uppercase and centred becomes monotonous; vary alignment or case.
- Plain Inter body with 1.2 leading feels cramped for paragraphs; open to 1.5.
- Section padding is uniform and small for a luxury brand; add more air around hero transitions.
- The two-column rooms grid leaves an orphan card; plan counts or use three columns.
- Very little colour; risk of looking unfinished without strong photography.
