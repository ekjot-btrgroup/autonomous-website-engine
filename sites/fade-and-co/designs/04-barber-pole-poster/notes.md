# 04 Barber Pole Poster: Fade & Co

Concept: the shop's front window as a screen-printed street poster. Deep red paper, cream ink, heavy Anton
headlines, yellow stickers slapped on top. Photos are treated one way only: black-and-white, high contrast,
either printed straight onto the red (two-colour screenprint), stuck on as hand-cut polaroids, or cut out
(real alpha cut-outs, no blend modes) and laid on flat red panels.

## Section plan
1. Nav: wordmark with a small barber-pole mark, five anchors, yellow "Book a chair". Phone: menu button + full panel.
2. Hero (collage): masthead strip (address / hours / walk-ins), poster h1 "Cuts £24. Beards £12. No fuss."
   (last line yellow), one line on what we do, Book a chair + See prices. Right: big two-colour printed profile,
   hand-cut polaroid of a barber at work, three yellow stickers (walk-ins till 12, cut + beard £32, Tue-Sat 9-7).
3. Ticker (yellow, tilted): the only moving element; 60s loop, pauses on hover/focus, off for reduced motion.
4. Pricing (cream paper): "What it costs." Price board with dotted leaders, "Saves £4" burst on the combo
   (24 + 12 - 32), shave row carries a round "Ask in shop" sticker and an upright small-caps placeholder note.
5. Services (red): "Cut. Trim. Shave." Lead "Pick one. Or pair the cut with a beard trim and keep four quid."
   Left: large hand-cut polaroid for the cut. Right: beard trim and hot-towel shave as cut-out head-and-shoulders
   portraits on flat red panels inside paper frames, the heads breaking the top edge by 24px.
6. Ticker 2 (cream on red): static and tilted, used as a divider.
7. Team (oxblood): "Who's holding the clippers." Three height-chart mugshot cards with silhouettes;
   on phones a horizontal scroll-snap row (78% cards) instead of a 1,350px stack.
8. Gallery (red): "Fresh off the chair." Six pinned black-and-white prints with tape.
9. Booking (cream paper): "Save me a chair." Request form (white card, oxblood border and offset shadow,
   yellow submit, yellow "Walk-ins before noon" burst on the corner) beside "Before you come in" Q&A
   answered from brief facts only.
10. Visit (red): "12 King Street, Leeds." contact list, directions, hanging hours sign, static barber pole.
11. Footer (oxblood): full-width SVG wordmark, small links, legal line.

## Signature moments
- Hero collage: printed profile + hand-cut polaroid + yellow stickers that slap on at load (60ms stagger).
- Tilted ticker bands between sections (one moving and pausable, one static).
- Cut-out portraits on flat red in services; height-chart mugshots in team.

## Motion (brief answer: subtle)
Three effects only: sticker slap on load, scroll reveals, one pausable ticker. No other loops (barber pole is
static). All motion is off under prefers-reduced-motion.

## Placeholders the client must supply
- Phone number, email address, company number / VAT line.
- Hot-towel shave price.
- Barber names, specialities and portraits (team section uses silhouettes).
- Photos are Unsplash stand-ins (two cut out by us): swap for the shop's own work when available.
- Booking form is front-end only: connect to the shop's booking system or inbox.

## Type and colour
Anton (display, uppercase) + Archivo (body; expanded width for labels). Red #8f1d17 dominant, cream #fff8ee,
yellow #f4c430 kept for stickers, prices, the moving ticker and action buttons. Oxblood #2b0a08 for team/footer
and as ink on yellow. Placeholders are upright (no italics).
