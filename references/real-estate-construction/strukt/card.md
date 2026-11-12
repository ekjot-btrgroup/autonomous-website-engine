# STRUKT  (real-estate-construction)
A general contractor site styled like an engineering drawing: monospace spec labels, ruler ticks, tabular stats and a single safety-red accent, set against cinematic dusk site photography. It reads as precise and accountable, which is exactly the promise a builder needs to make.

## Type
- Display: Switzer 500. Hero 90px, tracking -0.05em, leading 0.98 (64 tablet, 42 phone). H2 46px, tracking -0.035em, leading 1.12. CTA headline 74px.
- Every big heading is split in two tones: the first clause solid (ink or white), the continuation in mid grey (#8a8a8a). This creates hierarchy inside a single sentence.
- Body: Inter 400, 16 to 18px, tracking -0.01em, leading 1.4, in #4a4a4a.
- Labels, buttons, nav counts and stats: IBM Plex Mono 500 uppercase 12px, +0.02em. Big numbers in Plex Mono too: 120px numerals at -0.06em with a 51px red unit, 80px review score, 160px year numerals.
- Footer ends with a 274px wordmark at -0.075em, cropped by the page bottom.

## Colour
- White, soft grey (#f2f2f2) and near-black (#131313) bands alternate: hero image, white about, grey services, dark projects and review, white FAQ, grey news, dark CTA and footer.
- Ink #000 for type on light, white with 62 to 75 percent opacity tiers on dark.
- Accent #ff2600 only on small things: label dots, the estimate button, arrow squares, numbering, units. A green "live" dot for availability.
- Glass panels (rgba 38,38,38,0.8 with blur) for the nav pills and floating cards over photos.

## Layout and spacing
- Hero sits inside a 10px white frame with 10px radius, so the photo reads as a framed plate.
- Nav: logo in a dark glass pill left, links in a dark glass pill (with a mono count badge on services), red estimate button with a white arrow square right.
- 26px side gutters and 140px vertical padding per section; about uses a 1/3 label, 2/3 statement split.
- Cards: 10px radii, hairline borders, no shadows; buttons are 4 to 6px radius with an arrow square on the right.
- Logo strip as a ruled 5-cell table with each wordmark in a different type style.

## Sections (homepage, in order)
1. Hero: framed dusk crane photo, two-tone headline top-left, small "we are" chip top-right; bottom-left intro and two buttons; bottom-right a white contact card (avatar, role, live availability, dark booking bar with red tab); a mono spec row and a ruler tick edge along the bottom.
2. Logos: centred mono chip and a ruled table of five partner wordmarks, ticker on narrow screens.
3. About: mono label left, large two-tone statement right; then a grey stat card (98 with red percent, comparison bars versus industry average, two small stats) beside a large site photo with a dark quote overlay.
4. Services: split header with a mono "all services" button; four portrait image cards with mono index numbers, title, two lines of copy and a round black arrow.
5. Projects (dark): split header, asymmetric grid with one tall feature image and two stacked images, each with name and mono location/year.
6. Process (dark): four numbered steps in red mono with short copy under a hairline.
7. Review: full-bleed crane-and-birds photo with parallax, a huge mono score bottom-left and a glass quote card bottom-right.
8. FAQ: two-column, heading and phone CTA with red round icon left, accordion right.
9. News: three cards with a red category chip on the image, mono date and read time, title, "read article" link.
10. CTA: dark rounded panel, two-tone 74px headline, contact links left, estimate form with underlined inputs right.
11. Footer: dark, split two-tone headline with estimate button, link columns, then the oversized cropped wordmark.

## Motion
- Headlines reveal word by word: rise 25px from 5px blur, tween 0.6s, ease [0.22,1,0.36,1], 0.03s stagger.
- Hero image settles from scale 1.04 to 1 over 1.2s with the same ease; hero photo also has parallax speed 80.
- Review section: in-view transform that moves layers from -60px to 60px for depth.
- Logo ticker at velocity 50; 30 appear effects and 17 text effects overall: a choreographed but disciplined page.

## Phone
Hero keeps the frame with a 42px headline; spec row wraps to two lines; service and news cards stack; projects become a single column; the CTA form drops under the headline; the footer wordmark scales down.

## Signature moments
- Two-tone headlines everywhere.
- Ruler ticks and mono spec rows that make the hero feel like a drawing title block.
- The stat card with a giant numeral, red percent and comparison bars.
- The cropped mega wordmark closing the page.

## Borrow
- Two-tone sentence headlines for hierarchy without size changes.
- Mono label system (12px uppercase) as the connective tissue across sections.
- One hot accent rationed to dots, numbers and arrow squares.
- Framed hero plate with glass nav pills and a live-availability contact card.

## Avoid
- Template-seller widgets (unlock templates, get template) float over the hero; they are not part of the design.
- The 98 percent and similar stats are demo numbers; never reuse figures without the client's facts.
- Very dense hero (headline, chip, two buttons, card, spec row, ruler); trim one element when adapting.
