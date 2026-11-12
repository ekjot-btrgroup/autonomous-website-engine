# Makro  (software-fintech)
A finance-clarity tool for founders and small teams, presented as calm and trustworthy rather than flashy. The page lives on a cool misted blue-grey, uses one light grotesk at a single weight, and lets soft UI cards drift on gradient panels. One acid-lime accent acts like a highlighter pen and keeps it from feeling corporate.

## Type
- Inter Display at weight 400 only, everywhere. Hierarchy comes from size and tight tracking: H1 jumbo 88 (72, 48) at -0.04em, H1 64, H2 56 (48, 36), H3 36, H4 32; body 18/1.5 at 75% ink; small 14 and 12.
- One word in many H2s sits on an acid-lime rounded highlight block, like a marker stroke.
- Small rounded label chips with a tiny icon above every heading.
- A handwritten script appears once as a tiny note; use sparingly or not at all.

## Colour
- Ground #ebeff5 (cool blue-grey) and white surfaces; ink #242426 with 75, 50 and 25% steps.
- Accent acid lime #d9ff5c: arrow squares in buttons, word highlights, active dots, one full testimonial card.
- Supporting muted pastels used as panel gradients: slate blue #58718a, blush #fae9e6, coral #e0c5b6, lilac grey #d9d5dc. They give the bento a misty, photographic softness.
- A charcoal #35363b slab for the testimonials block and buttons.

## Layout and spacing
- 1200 canvas, 40px side padding, 24px gaps. Section padding is mostly 0; vertical rhythm comes from tall sections with sticky interiors and lots of empty air.
- Hero: copy left (chip, two-line H1, two-line body, button plus avatar cluster with a small trust line), cut-out portrait right bleeding to the edge; a big framed dashboard overlaps the bottom.
- Bento: 3 columns of tall 24px-radius panels in alternating slate gradients and white, each with a chip, centred title, one line and a floating UI fragment.
- Buttons: charcoal pill with a lime square arrow block on the left, label right. A fixed checkout pill and a template "options" switcher are present (template chrome).

## Sections (homepage, in order)
1. Hero: floating minimal nav; split copy and portrait; oversized dashboard card with sidebar, chart and KPI tiles rising out of a white fade.
2. Logos: a single soft rounded strip of grey client marks with a small case-study link.
3. About: centred one-sentence statement revealed word by word, three small benefit items, then four large sticky feature rows (half visual panel, half copy) that stack and swap while scrolling.
4. Bento: centred chip, H2 and subline; 3-column grid of gradient panels (categorised spending, bank sync toast, AI insights with orbiting icons and a big +% figure, upcoming bills carousel, invoice status chips, anomaly alert).
5. Gallery: a scroll-driven showcase of product screens (renders blank in static capture).
6. Pricing: H2 with highlighted word, three plan cards with plus-list features, an enterprise row with button.
7. Testimonials: dark rounded slab; carousel of wide case cards (lime and blush) with logo, portrait, quote and two data lines; arrow buttons and progress line.
8. FAQ: H2 with highlight; side category list and accordion; a contact card with a portrait.
9. Blog: left-aligned H2 and button; three image cards with category chips and dates.
10. CTA and footer: centred headline over a dashboard image, then link columns and a giant cropped wordmark at the bottom.

## Motion
- 57 appear effects: rise 48px with a slight 1deg skew on a 1s spring with 0.2 bounce; feels like paper settling.
- Word-by-word statement reveal (24px rise, 0.6s spring).
- 12 scroll-target style transforms in the hero (portrait and dashboard drift apart; elements fade and drop 139px as you leave).
- 5 sticky feature rows; scroll-variant switching on the nav (dark or light) and a fixed background that changes per section.
- Two tickers (logos), a physics component and rotating icon circles in the bento. Lenis smooth scroll.

## Phone
- Hero stacks: chip, H1 at 48, body, button, then the portrait and a shortened dashboard. Sticky feature rows become a plain stack. Bento becomes one column of tall panels. Pricing and case cards stack.

## Signature moments
- Lime arrow square fused to a dark pill button.
- Highlighter-marked word in each H2.
- Misty gradient panels with floating white UI paper.
- Giant cropped wordmark closing the footer.

## Borrow
- A single-weight grotesk with tight tracking for a quiet, expensive feel.
- One loud accent used only as a highlighter and button key.
- Sticky feature rows that swap while scrolling to tell a product story without a long page of cards.
- Soft pastel gradients behind product fragments instead of hard shadows.

## Avoid
- Remove the template's hero-options switcher, remix badge and fixed checkout pills.
- Dashboard figures, client marks and testimonials are placeholders; never ship fake numbers or names.
- Very long page (over 16000px); trim sticky sections and the gallery for a real brand.
- Lime on white fails contrast for text; keep it as a fill behind dark text only.
