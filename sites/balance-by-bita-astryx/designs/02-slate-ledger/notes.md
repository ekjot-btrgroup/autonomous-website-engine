# 02 Slate Ledger: notes

Concept: precise and transparent. Astryx Stone slate neutrals, a numbered treatment index and a price ledger that
reads like a clear medical menu. Plum (#6d3550) only on key actions, numbers and placeholders.
Fonts: Montserrat (display, 500) + Figtree (body). Motion: none beyond ~175ms state changes (FAQ plus icon, button
colour), all off under prefers-reduced-motion. h1: "Nothing hidden. Nothing overdone."

## Section plan (direction order)
1. Hero (slate band): oversized statement left, Treatment index 01-03 right (ruled rows linking to each group).
   Photo bridge: wide glass-and-light still life overlapping the band edge, with the StatusDot row on it.
2. Services: label/h2/lead header, orb still life left, numbered list right; fillers as a 7-area ruled grid.
3. Pricing: Astryx Table, columns per unit / syringe / vial / session, group rows 00-03, placeholder amounts;
   stacks into labelled rows on phone. Three ruled notes below.
4. Process: four numbered steps in a ruled ledger + hours/appointment strip.
5. About: "Portrait to be supplied" slate frame (grid + face-oval line art), first-person story, 5-step path list,
   signature line, three values.
6. FAQ: timing questions (weddings, peels/facials, lashes, Accutane, bruising/aftercare, first visit) as a ruled
   accordion (details/summary), prism photo.
7. Testimonials: three ruled theme rows using the brief's phrases as excerpts; full quotes are placeholders.
8. Waitlist: stones photo panel, StatusDot "Chicago: priority waitlist open", name/email/interest form (mailto).
9. Contact: CTA + ruled definition list of facts; slate footer with wordmark.

Signature moments: hero treatment index; the price ledger Table; StatusDot rows (hero photo, waitlist, contact).
Extra: "A+" larger-text toggle in the nav (nod to the current site's low-vision accessibility menu).

## Placeholders left for the client
- All prices, consultation fee, and confirmation of each row's billing basis
- Bita's portrait; online booking link; street address
- FAQ answers for weddings, peels/facials, lashes, Accutane, bruising/aftercare
- Full patient quotes with initial, treatment and review source
- Medical oversight, licence details, privacy notice

## Astryx mapping
- Tokens: --color-background-body/-surface/-muted/-inverted, --color-text-primary/-secondary/-accent,
  --color-accent/-accent-muted/--color-on-accent, --color-border/-border-emphasized, --color-success,
  --spacing-0-5 ... --spacing-12 (+ --spacing-section = 2.5 x spacing-12), --radius-inner/-element/-container/-page/-full
  (Stone values .25/.5/.75/1.5rem), --font-size-sm/base/lg/xl/3xl/6xl/10xl (h1/h2 via clamp on the 1.2 scale),
  --shadow-low/med/high (ink-tinted), --duration-fast + --ease-standard, --focus-outline-width/style/color/offset.
- Hero: inverted surface tokens; index = List/Item rows; buttons = Button primary (light on inverted) + secondary.
- Photo bridge: --radius-container, --shadow-high; StatusDot (dot + label) x2.
- Services: section header pattern; List/Item numbered rows; fillers as a Table-like ruled grid; spec as dl.
- Pricing: Table (thead, rowgroup headers in --color-accent-muted, tabular numerals), no cards.
- Process: ruled ledger columns; StatusDot "By appointment only".
- About: inverted placeholder frame; ordered List; values in a 3-column ruled row.
- FAQ: Accordion via details/summary, plus icon rotates in --duration-fast; focus-visible outline.
- Testimonials: ruled List rows (no badges, no stars).
- Waitlist: TextInput/Select fields on inverted surface, Button; StatusDot.
- Contact: ruled definition List; StatusDots. Hover styles only inside @media (hover:hover).
