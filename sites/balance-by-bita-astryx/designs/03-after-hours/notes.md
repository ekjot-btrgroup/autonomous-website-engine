# 03 After Hours: notes

Concept: Astryx Chocolate in dark mode. Deep plum-brown page (#1a1214), caramel-gold accent (#d4a06a), low-key
side-lit florals, Crimson Text display over Poppins light body. Quiet luxury evening mood; no motion except a
175ms open state on the FAQ collapsible and the menu (both off under reduced motion).

## Section plan (direction order)
1. Hero: full-bleed side-lit lily (mirrored so the bloom sits right), scrim to the left; h1 "Your own features,
   beautifully lit."; promise and credential in one line; primary "Book a consultation", secondary "See treatments
   and prices"; StatusDot row (Sandy Springs hours, Chicago waitlist open).
2. About: designed portrait frame (inset gold hairline, "Portrait of Bita / To be supplied"), "Hi, I'm Bita!",
   founder story from the brief, ruled fact rows (credential, training, focus, who I treat).
3. Testimonials: muted band, three ruled columns (one wide), clearly marked placeholder quotes on the brief's themes.
4. Signature pull line: centred "You, with the cherry on top." with a cherry glyph between hairlines.
5. Services: peony photo left, three ruled groups right (Neuromodulators / Dermal fillers / Biostimulators and
   regenerative), each with an italic verb (soften, shape, renew) and its products or areas.
6. Process: four steps on a gold hairline with dots and roman numerals (consultation, plan, treatment, aftercare).
7. Pricing: Astryx Table, priced per unit / syringe / vial / session; amounts are placeholders.
8. FAQ: timing questions (weddings, peels, facials, lashes, Accutane, bruising) in a collapsible list; hydrangea photo.
9. Waitlist: hellebore band with scrim, StatusDot "Chicago: waitlist open", name + email form.
10. Contact: ruled rows for phone, email, hours, studio; footer with results-vary line.

## Signature moments
- Full-bleed dark lily hero with the promise set large in Crimson Text.
- "You, with the cherry on top" as a centred pull line between testimonials and treatments.
- FAQ collapsible, the only motion: 175ms open.
- Header "A+" larger-text toggle (keeps the current site's low-vision help).

## Placeholders the client must supply
Portrait of Bita; licence state and number; trainer's name; three patient quotes (initials, treatment) and review
source link; all prices and the consultation fee; FAQ timing answers (weddings, peels, facials, lashes, Accutane,
bruising detail); online booking link; street address; medical director and licence line for the footer.

## Astryx mapping
- Token layer: :root declares --color-background-body/surface/card/muted/inverted, --color-text-primary/secondary/
  accent, --color-accent(-muted), --color-on-accent, --color-border(-emphasized), --color-success, --spacing-0-5 to
  --spacing-12 (+ section multiples), --size-element-*, --radius-inner/element/container/page/full (Chocolate
  values), --shadow-low/med/high, --duration-fast*/medium/slow/exit, --ease-standard/entrance/move/exit,
  --focus-outline-width/style/color/offset, --font-size-sm..9xl (1.2 scale continued). All component rules use them.
- Header: Button (primary), icon Button (menu, aria-expanded; text size, aria-pressed), menu panel with --shadow-high.
- Hero: Button primary + secondary, StatusDot (--color-success open, --color-accent waitlist), --font-size-display.
- About: Card-like frame (--radius-container, --radius-inner inner hairline), List/Item ruled rows.
- Testimonials: --color-background-muted band, ruled columns (no cards), --font-size-2xl/3xl quotes.
- Pull line: --font-size-display, --color-text-accent, hairline rules (--border-width, --color-border-emphasized).
- Services: List groups with --color-border-emphasized top rules; image frame --radius-container.
- Process: ordered List with --size-dot markers on a ruled line.
- Pricing: Table (thead/tbody, ruled rows, tabular numbers), category rows as Table section headers.
- FAQ: Collapsible (button aria-expanded + region; grid-rows transition --duration-fast --ease-standard).
- Waitlist: StatusDot, TextInput fields (--radius-element, --size-tap), Button primary.
- Contact/footer: List/Item rows, link focus via --focus-outline-*.
- Rules held: hover only inside @media (hover:hover); :focus-visible outline tokens; prefers-reduced-motion removes
  all transitions; no badges.
