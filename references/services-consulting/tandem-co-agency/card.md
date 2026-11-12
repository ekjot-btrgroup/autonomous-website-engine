# Tandem & Co  (services-consulting)
A solo or boutique strategy consultancy site for founders that wants to feel like a sharp product launch rather than a suit-and-tie firm. Everything sits on near-black with quiet type, and the drama comes from one generative hero, studio object renders and scroll choreography.

## Type
- Switzer throughout: H1 46px/100% weight 500, tracking -0.02em; H2 36px/1.1 weight 400; H3 24px weight 300 at -0.04em; body 14px/1.2 regular in grey.
- The key move: every headline is one sentence where the second half switches to neutral-400 grey, so the hierarchy lives inside the sentence.
- Instrument Serif appears only at 14px for "+ Label" eyebrows, the plan-name toggle and thin oversized stat numerals (93+, 120+, 120%), giving a small editorial counterpoint.

## Colour
- neutral-950 #0a0a0a page, neutral-900/800 for cards, 6% white borders.
- White for the first half of headlines and active items, neutral-400/500 for the greyed tails and body.
- Cyan accent #21d2ed exists as a token but is barely used; the site is effectively monochrome with imagery carrying colour.

## Layout and spacing
- 1200 canvas, 24px side padding, 112px vertical section padding, 56px between header block and content.
- Most sections: header block (eyebrow, two-tone H2, 2-3 line grey intro at about 400px wide) top left, content below; some centred at an 800px column (testimonial, pricing, FAQ).
- 20px radius on image cards and process cards, hairline 1px row dividers in pricing and FAQ, no shadows.

## Sections (homepage, in order)
1. Hero: full-bleed animated dot-matrix (Unicorn Studio) field, big left-aligned two-tone headline, availability line, and a small dark "latest article" card with thumbnail docked bottom right.
2. About and stats: statement headline plus paragraph, then a 2-column grid of four ruled stat rows with thin serif numerals.
3. Services: tall sticky layout, service names listed on the left (active one white, others grey), square 3D render cards in the middle and description plus uppercase deliverables list on the right; scroll-target variants switch the active name.
4. Process: three tall 20px-radius cards with blurred monochrome texture backgrounds, "+ 01" serif index, title and short copy at the top.
5. Insights: one large square card left, stacked cards right, title and two-line summary beneath each image.
6. Testimonial: centred column, "In their words" serif label left, large quote with a 1px vertical rule, small avatar byline, outlined client logo boxes.
7. Manifesto band: full-width cinematic night photo with a sticky counting stat (120%) and a two-tone statement overlay, background video.
8. Pricing: serif plan toggle (active white, other grey) centred, description, ruled list of inclusions, price line.
9. Case studies: card grid.
10. FAQ: centred 800px column, ruled rows with thin plus icons.

## Motion
- Text effect on every H2: line-by-line reveal from y 10px with 5px blur, tween 0.3s ease [0.44,0,0.56,1].
- Hero items appear with spring 1s bounce 0.2 after a 1.1s delay.
- Sticky positioning (8 nodes) for the services index and the manifesto stat; scroll-target variant switching in services; smooth scroll component; animated counter.

## Phone
Single column at 24px padding; hero headline about 40px over the dot field; stats stack as ruled rows with large serif numbers; services lose the sticky index and become stacked image plus text blocks. Menu collapses to a "MENU" label.

## Signature moments
- Two-tone sentences as headlines.
- The generative dot-matrix hero.
- Sticky service index lighting up while 3D renders scroll by.

## Borrow
- Grey-tail headline technique for calm hierarchy without size jumps.
- Serif micro-labels and serif numerals inside an all-grotesk system.
- Sticky index plus scrolling media plus deliverables list for service pages.

## Avoid
- Heavy embeds make the desktop page slow (full-page capture timed out); prefer a lighter shader or static image.
- Body text at 14px grey on black is low contrast; lift to neutral-300 for client work.
- Mixed 'I' and 'we' voice in the template copy.
