# PayFlux  (software-fintech)
A product site for a consumer or SMB banking app that needs to feel trustworthy and calm yet current. The idea is one green: a deep bottle green for authority, a lime highlight for optimism, and everything else neutral paper and white, so the data visualisations in a single green ramp become the decoration.

## Type
- Display: Stack Sans Headline at weight 400 (not bold), H1 64/68 with -1% tracking (56, 48 on smaller screens), H2 48/56, H4 32, card titles 20-24. Very tight word spacing gives the headlines a dense, engineered look.
- Body: Stack Sans Text at 200-300 weight, 20/28 lead and 16/24 body, which reads airy and premium against the regular-weight headings; 500 for values and emphasis.
- Labels: Fragment Mono 12px uppercase with a small green square bullet, used as section eyebrows; 10px uppercase sans for micro labels.
- Extra display sizes (88 and 256px) are reserved for inner pages and big numerals.

## Colour
- Canvas #f7f6f5 warm paper; cards pure white with no border and no shadow, separated only by the paper gap.
- Ink #1e1e1e with 64% and 32% opacity steps for muted and faint text.
- Brand green #1c6353 (deep #0a4533) owns the hero gradient, the featured pricing card, chart fills, icons and the logo; lime #c8f366 is used sparingly: announcement bar, glow in the hero, bright end of the stat card gradient.
- Dark sections are never flat: green cards carry a lime-to-green radial gradient from one corner.

## Layout and spacing
- Almost full-bleed: 32px side gutters on a 1440 canvas, content columns left aligned for statement sections and centred for section intros.
- 120px vertical section padding; hero 208px top padding under an absolute header with an announcement strip.
- Bento: two wide cards over three narrow ones, all 20px radius, data viz in the top 60% and title + two-line text at the bottom-left.
- Stats: four equal tall cards with the number top-left and caption bottom-left (or flipped on alternate cards), last card in green gradient.
- Buttons: small 8px-radius rectangles, white on green and translucent white secondary; dark ink buttons on paper.

## Sections (homepage, in order)
1. Hero: centred mono eyebrow chip, two-line headline, light subhead, two buttons, then a large photoreal hand holding a phone rising out of the gradient, with two frosted stat chips (rating, users) floating left and right and a slow vertical loop.
2. Logos: single-row ticker of grey logos on paper.
3. About: left-aligned three-line statement headline, then a 4-up stat card row with alternating number/caption placement and one green gradient card.
4. Features: centred intro, bento of five white cards each with its own micro visual (dotted world map with connection arcs, line chart grid with tooltip, stacked transaction toasts, heatmap, security orbit).
5. App overview: sticky phone on one side, numbered feature list on the other; screens switch through scroll-target variants as each item reaches the viewport.
6. Integration: app icons orbiting a central logo tile on concentric rings, plus a dotted globe; communicates a connected ecosystem without text-heavy cards.
7. How it works: three interactive step cards in a carousel with arrows, big mono step numbers on top.
8. Insights: three chart cards (bars, columns, gauges) in a carousel.
9. Download app: split with a phone render and store badges.
10. Pricing: three plans, the third fully green with white text, toggle above.
11. Testimonials: two ticker rows of quote cards moving in opposite directions.
12. Blog: three photo cards in a carousel.
13. FAQ: centred title with a single-column accordion of white rows.
14. CTA: green-gradient band with a phone in hand and store badges, then a light footer with newsletter field.

## Motion
- 24 appear effects: fade up from y 150, spring duration 1s, bounce 0, on mount; long, smooth rises that make each section arrive as a block.
- Loop: hero stat chips float y 40 on a 3s linear mirror loop, paused offscreen.
- Tickers at velocity 40 for logos and two testimonial rows, slowing on hover.
- Sticky app overview with 4 scroll-target variant changes (threshold 0.5, replay), the most engaging moment on the page.
- Smooth-scroll component in the layout template.

## Phone
- Single column; bento cards stack full width, stats become a 2x2 grid then single cards, sticky overview becomes a sequence of phone + text blocks, carousels stay swipeable. H1 drops to 48px, labels to 10px. Header becomes logo + menu with dark drawer.

## Signature moments
- The green-to-paper hero gradient with the floating phone and frosted chips.
- Micro data visualisations inside every card, all drawn in one green ramp.
- The sticky phone that changes screen as you scroll the feature list.

## Borrow
- Regular-weight headlines paired with ultra-light body for a premium fintech voice.
- Paper background with borderless white cards: depth without shadows.
- One brand hue expressed as a data-viz ramp instead of multiple accent colours.
- Mono eyebrow labels with a square bullet as a quiet system marker.

## Avoid
- The page is very long (19k px) with three carousels; trim to the strongest sections when reusing.
- Hand-holding-phone hero shots are common in fintech; swap for a more ownable visual.
- Lime is close to the fashionable fintech default; keep it as a highlight only.
