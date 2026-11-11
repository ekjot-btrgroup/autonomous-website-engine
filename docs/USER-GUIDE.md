# User guide: from design library to a client's Lovable site

You never run commands yourself. You talk to Claude in a chat on this repo, and Claude runs the scripts. Each step below says what you do and what Claude does.

## Part A: one-time setup (about 10 minutes)

1. **Keep this GitHub repo private.** It stores your design library.
2. **Create the showcase project in Lovable.**
   - Create a new Lovable project (name it, for example, "Design Showcase"). One prompt such as "blank project" is enough.
   - Open the project's GitHub settings and connect it. Lovable creates a repo, for example `your-org/design-showcase`.
   - Publish the project once and copy its URL (for example `https://design-showcase.lovable.app`).
   - Tell Claude: *"The showcase repo is your-org/design-showcase and its URL is https://design-showcase.lovable.app."*
   - Claude adds the repo to the chat, saves the URL in `engine.config.json` and pushes the showcase. Lovable shows it a few seconds later.

## Part B: add designs (any time; one chat at a time)

1. Upload the designs into the chat: folders, .zip files, or single `.tsx` / `.html` files. React + Tailwind sections (21st.dev, shadcn, Lovable-made) work best.
2. Say: *"Add these designs."*
3. Claude:
   - imports them, keeping every original untouched in `library/originals/`;
   - test-builds the showcase and opens every design in a headless browser to catch crashes;
   - fixes small problems (missing default data, custom Tailwind settings) and converts HTML/Vue/Svelte designs into React once;
   - tags each design by its traits (layout, style, feel, media, motion), never by industry;
   - pushes the showcase. Every design gets a live page: `<showcase URL>/d/<design-id>`.
4. Browse everything at `<showcase URL>/`, with search and filters.

## Part C: a new website (any number of chats in parallel)

1. Say: *"New website for <brand>."* Claude asks three things at most:
   1. **Animations:** none, subtle or rich?
   2. **Colours:** your brand colours, "choose for me", or "keep the designs' colours"?
   3. **Brand brief:** name, what they do, who it is for, the feel, sections you want (optional), facts to use.
2. Claude turns your answers into `briefs/<slug>.json`, runs the matching algorithm over the whole library ([ALGORITHM.md](ALGORITHM.md)) and replies with:
   - the top 10 designs, each with a short reason and a live link;
   - one pick page: `<showcase URL>/s/<slug>`.
3. Open the pick page. Each design shows live at desktop and mobile size. Tick 3, press **Copy**, and paste the copied line into the chat. It looks like: `Build site serene-spa with designs: a, b, c`.
4. Create the client's Lovable project the same way as the showcase: new project, then connect GitHub. Tell Claude the repo name.
5. Claude:
   - copies your 3 designs into `sites/<slug>/`, in page order;
   - applies your colours, and turns animations off if you said "none";
   - rewrites the text from your brief (brand voice, no invented facts);
   - test-builds the site and pushes it to the client's repo. Lovable shows it, ready to share.
   - If you want the rest of the page filled automatically with matching sections, say *"complete the page"* (this uses `--fill`).

## Part D: teach it your taste (any time)

Just say it in plain words; Claude saves it as memory:
- *"The serene hero is perfect for spas and hotels."*
- *"Never use that pricing table for law firms."*
- *"For luxury brands I prefer serif type, dark schemes and split layouts; avoid gradients."*

Your picks are remembered automatically, so the next brief of the same kind starts closer to your taste. To keep things varied:
- designs used in recent sites lose points;
- every shortlist keeps 2 places for designs you have never seen;
- old memories fade over about 6 months.

Ask *"What have you learned?"* to see it (Claude runs `npm run remember -- list`).

## Part E: after the site is in Lovable

- Edit freely in Lovable. If you later ask Claude to change that site, Claude first pulls your Lovable edits back, so nothing is overwritten. The push command refuses to overwrite them.
- Each chat works on its own branch. Merge each chat's branch into `main` (ask Claude to open a pull request), and start new chats from `main` so they see the latest library and memory.

## Costs at a glance
- **Claude:**
  - Matching, building, testing and pushing are scripts, at zero tokens.
  - Each new design costs one small tagging step, once.
  - Each site costs a short brief, a short copy rewrite, and short replies.
- **Lovable:**
  - Code arrives through GitHub, so no Lovable AI credits are used.
  - Creating a new project may use one prompt.

## Troubleshooting
| Message | Meaning |
|---|---|
| `needs_conversion` | HTML/Vue/Svelte design; Claude converts it once |
| `needs_attention` | Works but has a note (for example a custom Tailwind animation to merge) |
| `renders nothing` / `runtime error` | Needs sample data; Claude adds default props |
| `Lovable repo has commits made after our last push` | You edited in Lovable; Claude pulls first |
| Push failed in a cloud chat | The Lovable repo must be added to the chat with push access |
