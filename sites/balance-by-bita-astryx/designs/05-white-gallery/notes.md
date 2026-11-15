# 05 White Gallery · notes

Concept: Astryx Neutral at its most minimal. White walls, one typeface (Figtree 400/500/600), large framed
still-life plates with gallery wall labels, quiet black type. Motion level 1: no entrance animation; only the
FAQ plus/minus (175ms) and button colour changes, disabled under prefers-reduced-motion.

## Section plan (direction order)
1. hero · label line, h1 "Enhance what's there. Leave the rest.", intro + two CTAs, collage of three framed plates
   (plaster head / white flowers / calla in sunlight) staggered across 5/4/3 columns with wall-label captions I-III.
2. about · designed portrait placeholder frame + first-person story from the brief, signature line, three ruled values.
3. services · three-column treatment gallery (image, title, one line, ruled MetadataList of products/areas).
4. pricing · ruled price table grouped by category, per unit / syringe / vial / session, prices as placeholders.
5. process · muted band: heading + still life left, four ruled numbered steps right.
6. faq · native details/summary accordion in ruled rows (weddings, peels, facials, lashes, Accutane, bruising).
7. testimonials · three ruled quote slots (one large), all placeholders.
8. contact · MetadataList (status dot, phone, email, address, hours, visits) + Book / Call buttons.
9. waitlist · muted rounded panel, StatusDot "Chicago: waitlist open", name/email/interest form (mailto).
Footer · monochrome (inverted) with hours as a MetadataList, legal line.

## Signature moments
- Hero collage of three framed images with a short black headline and gallery wall labels.
- Treatments as a three-column gallery with captions, then a ruled price list.
- Monochrome footer with hours as an Astryx MetadataList.

## Placeholders the client must supply
- Portrait of Bita; all prices and the consultation fee; street address; FAQ answers (weddings, peels, facials,
  lashes, Accutane, aftercare detail); three real patient quotes with initial, treatment and source;
  medical oversight / licence line; booking link (CTA currently emails) and waitlist tool connection.

## Astryx mapping
- Tokens: :root declares --color-background-body/-surface/-card/-muted/-inverted, --color-text-primary/-secondary/
  -accent, --color-accent, --color-accent-muted, --color-on-accent, --color-border, --color-border-emphasized,
  --color-success, --spacing-0-5..12 (+ --spacing-section), --radius-none/inner/element/container/page/full (Neutral
  values .375/.625/.75/1.75rem), --font-size-xs..9xl, --duration-*, --ease-*, --focus-outline-*, --shadow-low/med/high.
  Component rules use only these variables.
- Header: Button (primary, pill), menu button with aria-expanded (Astryx Button secondary).
- Hero: Text display-1 (clamp 5xl to 9xl), Button primary + secondary, Card-like frames (radius-inner, background-muted).
- About: List/Item ruled rows for values; placeholder frame on background-muted with border.
- Services: Card gallery (allowed for galleries) with MetadataList (dl) captions.
- Pricing: Table with ruled rows, grouped by rowgroup headers, tabular numbers.
- Process: List/Item numbered ruled rows on background-muted.
- FAQ: Accordion (details/summary), ruled rows, icon transition --duration-fast / --ease-standard.
- Testimonials: blockquote figures with border-emphasized top rules.
- Contact: MetadataList (dl) + StatusDot (--color-success).
- Waitlist: StatusDot, TextInput / Select (radius-element, border), Button primary; panel radius-page.
- Footer: background-inverted, MetadataList hours, StatusDot.
- Focus: :focus-visible outline uses --focus-outline-width/style/color/offset (inverted colour in footer).
- Hover styles only inside @media (hover:hover).
