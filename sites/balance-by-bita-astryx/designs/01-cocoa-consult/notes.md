# 01 Cocoa Consult: notes

Concept: a warm consultation room on paper. Astryx Chocolate (light) tokens, cream surfaces, and a booking card
that sits in the hero like a calm appointment slip. Animations: none (only ~175ms state changes, off under reduced motion).

## Section plan (direction order)
1. hero: split, copy left ("First, we simply talk."), clay-vessel still life right, consultation slip card overlapping the photo.
2. about: muted rounded panel, portrait placeholder frame, founder note set in Fraunces italic, three values as ruled rows.
3. services: three grouped Astryx List blocks (neuromodulators, fillers, biostimulators/regenerative) with ruled rows and unit type.
4. process: heading + ceramics photo left, four numbered steps as ruled rows right.
5. pricing: Astryx Table in a card, grouped rows, unit column, price placeholders, consultation-fee note.
6. testimonials: three placeholder quote figures (first one inverted cocoa), no invented reviews.
7. faq: timing questions (weddings, peels, facials, lashes, Accutane, bruising) as ruled accordion rows; pampas photo.
8. waitlist: inverted cocoa card with botanic photo, StatusDot "Chicago: patient waitlist open", short form (mailto).
9. contact: CTA buttons + ruled details list (phone, email, hours, address placeholder); footer with text-size toggle (echoes the current site's low-vision menu).

## Signature moments
- Hero consultation slip (Card on --color-background-card, dashed tear line, hours, phone, the one CTA).
- Treatments as three grouped List blocks with ruled rows, not repeated cards.
- Founder note in Fraunces italic beside a portrait placeholder frame.

## Placeholders the client must supply
- Portrait of Bita; all prices; consultation fee/credit; street address; patient reviews (initial, treatment, source);
  FAQ timing answers; medical director, licence and privacy details; booking link if online booking exists (CTAs use phone).

## Astryx mapping
- Tokens: :root declares --color-background-body/surface/card/muted/inverted, --color-text-primary/secondary/accent,
  --color-accent(-muted), --color-on-accent, --color-border(-emphasized), --color-success, --spacing-0-5..12 (+ --spacing-section),
  --radius-inner/element/container/page/full (Chocolate values), --font-size-base..8xl (1.2 scale), --duration-fast*,
  --ease-standard/exit, --focus-outline-*, --shadow-low/med/high (ink-tinted). Component rules use only these variables.
- Header: Button (primary), menu button with aria-expanded; hover inside @media (hover:hover); focus-visible outline tokens.
- Hero: Text display-1 (clamp to --font-size-8xl), StatusDot, Button primary/secondary, Card (slip) with --shadow-high, --radius-container.
- About: Card-like muted page panel (--radius-page), Text display-2, List (values, ruled rows).
- Services: List/Item x3 inside Cards (--color-background-card, --radius-container), StatusDot (accent) + Link.
- Process: ordered List with ruled rows, image at --radius-container.
- Pricing: Table (thead label role, grouped rows, tabular numbers), placeholder text in supporting role.
- Testimonials: Card x3 (one on --color-background-inverted).
- FAQ: Accordion (details/summary) in ruled rows, icon rotates at --duration-fast.
- Waitlist: inverted Card, StatusDot (--color-success), TextInput/Select (--radius-element, --size-tap), Button.
- Contact: description List (ruled rows), Buttons; footer ToggleButton group (aria-pressed) for text size.

## Fix round (polish)
- Treatments: three borderless Astryx List columns with a 2px emphasised top rule; unit labels removed (units live only in Pricing).
- Type scale cut to 6 sizes (base, lg, xl, 2xl, display-2, display-1); quote line-heights via --line-height-quote.
- Waitlist: image fills the panel height (no dead space), privacy line under the button, styled select.
- Testimonials header centred; hero photo warmed to match the set.
