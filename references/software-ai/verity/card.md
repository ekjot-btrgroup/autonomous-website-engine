# Verity  (software-ai)

A disciplined dark SaaS page for an AI agent product. Everything sits on near-black with hairline borders; the only drama is one cyan light-band shader and the product UI itself. It feels calm and expensive because it never raises its voice: one weight, one accent, one radius.

## Type
- One family, Onest, nearly always at 400. Heading 1 60px, -0.04em, 1.05 leading (48 / 46 on smaller breakpoints). Heading 2 48px with the same tracking (40 / 38).
- Two-tone headings: the first line in white, the second line in #B0B0B0, so every header reads as statement plus qualifier.
- Body Large 18px / 1.4, Body Medium 16px / 1.45 in grey. Buttons 15px 500.
- Eyebrow: 12px 500 uppercase, 0.06em tracking, in cyan, with a small pill dot before it.

## Colour
- Background #0D0D0F, surfaces #111113 and #141416, borders white at 6%, secondary text #B0B0B0.
- Single accent cyan #21D2ED used only for eyebrows, icon strokes, a NEW badge and the shader glow.
- Primary button solid white with dark label; secondary button transparent with a 1px white-12% outline. A faint noise layer sits over the whole page.

## Layout and spacing
- 1200 frame, 40px sides, 96px top and bottom padding on every section, 64px from header to content.
- Section headers are left aligned (eyebrow, two-line H2); only the hero, process title and pricing are centred.
- Cards are 16px radius, 1px hairline border, no shadow, 24px inner padding, icons in 40px rounded tiles.
- Benefits use a 2-column grid of six cards plus one tall card on the right that spans all rows and holds the CTA.

## Sections (homepage, in order)
1. Hero: pill announcement badge, two-line centred H1, two-line subline, white and outline buttons, shader glow bottom right.
2. Logo ticker with a small caption.
3. Three feature cards, each with a mini UI mock on top and title plus line below.
4. Use cases: accordion-style tab list left, large dashboard table right, both in one bordered panel.
5. How it works: three step cards staggered in height with step label, title and line.
6. Benefits bento with tall shader CTA card.
7. Comparison: two columns, dim list with crosses versus highlighted list with the brand mark and checks.
8. Testimonials carousel of quote cards, then three big metrics split by vertical dividers.
9. Integrations: copy left, three rows of logo tiles scrolling as tickers on the right.
10. Pricing: monthly and yearly switch, three plan cards with the middle one flagged, small trust ticker under.
11. FAQ: two-column accordion.
12. Final CTA panel with two-line headline and button, then a four-column footer.

## Motion
- Appear: opacity 0, y 12px, spring 1.2s, bounce 0.1, 0.4s delay, on most headers and cards (28 in total).
- Hero container fades to 50% opacity as you scroll past it (scroll-target style transform, spring stiffness 360, damping 60) and its background has parallax speed 80.
- Logo and integration rows run as tickers at velocity 24, not draggable.
- The bands shader animates slowly behind the hero and in the benefits CTA card.

## Phone
- Single column; nav collapses to logo plus menu. H1 drops to 46px and stays two lines.
- Use-case tabs stack above the dashboard; benefits become a single column with the shader card last.
- Pricing cards stack with the switch kept on top; comparison columns stack.

## Signature moments
- Cyan light-band shader as the only bright thing on the page.
- White then grey two-line headings as a system.
- Product table mock framed beside a tab list instead of feature icons.
- Comparison block that literally dims the alternative.

## Borrow
- Two-tone heading pattern for clear hierarchy without extra sizes.
- One accent used only for small signals, letting the UI carry colour.
- Tall CTA card inside a bento grid to end a feature section.
- Noise overlay to keep a flat dark background from looking digital-flat.

## Avoid
- The shader cards render empty in a static capture; always give them a gradient fallback.
- Sample metrics, testimonials and integration logos are placeholders; never reuse figures without facts from the brief.
- Twelve sections of identical 96px rhythm gets long; merge or cut for smaller products.
