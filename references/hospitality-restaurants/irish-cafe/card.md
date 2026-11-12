# Irish Cafe  (hospitality-restaurants)
A neighbourhood coffee house site for cafes, bakeries and casual restaurants that want to feel cosy but current. The trick is a clash of voices: a wide modern grotesk for headings against a soft text serif for everything else, all floating on a butter-cream page with moody, amber-lit photography, so it reads both crafted and friendly.

## Type
- Display: Clash Display. H1 88px / 110% / 600 (72 tablet, 44 phone); H2 52px / 115% / 500 (44, 32); H3 32px; dish names 28px / 500; prices 20px / 600.
- Body: Fraunces 400, 16 to 18px, -0.02em, 160% leading, warm brown #553c2d.
- Labels: Fraunces 13px with +1.2px tracking, used in outlined pill eyebrows.
- Buttons and nav links are also set in the serif, so only headings and numbers use the grotesk; that split is the whole personality.
- Headings centred with a one-line centred serif subline underneath; numbers in stats use the serif large (100K+, 4.8 style).

## Colour
- Page butter cream #ffebc7; cards and image trays tan #f4d8b3; hairlines in espresso at 15% opacity.
- Ink near-black brown #261912 for headings, mid brown #553c2d for body.
- Primary buttons filled espresso #3d291e with cream text; secondary buttons cream with a thin brown border.
- Dark sections are photographic only (hero video, CTA photo), never flat dark fills.
- Full dark mode exists: tokens flip to near-black #160e09 page with cream ink.

## Layout and spacing
- 1200px canvas, 40px side padding, 80px vertical section padding, 48px from header block to content.
- Almost everything centred: pill eyebrow, H2, subline, content, single centred button below.
- Radius 40px on cards and trays, 12px on small images inside, fully round on avatars and pills.
- No shadows at all; separation comes from tan fills and 1px translucent borders. Four backdrop blurs (nav and glass chips).
- Image ratios: 4:5 portrait dish cards, wide 2.3:1 gallery stage, mixed masonry in the about tray.

## Sections (homepage, in order)
1. Hero: full-bleed cafe video under a dark overlay, nav on top, giant two-line grotesk headline bottom left, short serif paragraph and two pill buttons bottom right.
2. Signature dishes: centred header, three tall rounded photo cards with a caption pill at the bottom of each, running as a draggable ticker, single centred button.
3. Gallery: centred header, one wide rounded photo stage with a row of small thumbnail tabs bottom right to switch the image.
4. About: left a tan tray holding a three-image masonry, right pill eyebrow, H2, paragraph, two stat counters and two buttons.
5. Locations: three wide photo cards with a small country tag, city name in grotesk below, centred button.
6. Testimonials: four round portraits on tan discs strung along a dashed sine-wave line with coffee-bean nodes, below a bordered quote bar with prev and next arrows.
7. Blogs: one featured post (image left with date chip, text right) above three smaller post cards with author and read time.
8. CTA: full-width rounded photo panel with a centred frosted cream card holding eyebrow, H2, paragraph and button.
9. Footer: three columns (quick links in bordered rows with arrow circles, utility links, newsletter input), then a huge gradient wordmark fading to the page colour.

## Motion
- Images enter by scaling from 1.1 to 1 with fade, 0.4s tween, ease [0.12,0.23,0.5,1], 0.2s delay.
- Hero headline animates per character: from opacity 0, x -10px, y 10px, blur 5px; 0.4s, 0.04s stagger, ease [0.44,0,0.56,1].
- Dish cards run on a ticker at velocity 40, slowing 20% on hover, draggable.
- Coffee-bean nodes on the testimonial path rotate 360 degrees in a 3s loop.
- Parallax speed 80 on the hero video; smooth scroll; sparkle particles drift inside the filled buttons.
- 36 appear effects, mostly scale-fades on images and cards.

## Phone
Stacks to one column. Hero headline drops to 44px above the paragraph and stacked buttons. Ticker becomes a single swipeable column of dish cards; about tray sits above the copy; the wave testimonial shrinks to two portraits. Nav collapses to wordmark plus menu button.

## Signature moments
- The dashed wave of portraits and spinning beans.
- Tan trays framing photo groups like a printed menu.
- Grotesk headlines over serif everything else.
- Fading giant wordmark in the footer.

## Borrow
- Pairing a wide display grotesk with a body serif for a hospitality brand that should feel modern but warm.
- Framing image groups in a padded tinted tray with a large outer radius and smaller inner radius.
- A playful illustrated connector (dashed path with themed nodes) to turn plain testimonials into a moment.
- Thumbnail tabs on a single wide gallery image instead of a grid.
- Butter-cream page with photographic dark blocks only.

## Avoid
- Every section is centred with the same pill, heading, subline, button stack; break the symmetry somewhere.
- Cream on cream (page vs tan cards) is low contrast for borders and secondary buttons.
- The hero headline is a pun; any reuse needs a straight, brand-led line.
- Sparkle particles in buttons can feel gimmicky outside a playful brand.
