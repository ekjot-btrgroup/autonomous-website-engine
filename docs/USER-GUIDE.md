# User guide: from design library to a client's Lovable site

You never run commands yourself. You talk to Claude in a chat on this repo, and Claude runs the scripts. Each step below says what you do and what Claude does.

## Quick test without Lovable (current mode)
Lovable is parked (`lovable.enabled: false` in `engine.config.json`). To test the engine:
1. Open a **new chat** on this repo and upload one or more zips. A zip may hold 10 or 20 designs (one folder per design, or one file per design). Say: *"Add these designs."*
2. Say: *"New website for <brand>."* Answer the 3 questions (animations, colours, brand brief).
3. Claude replies with the top 10. Each design gets a one-line reason it fits your client, and you also get a **contact sheet** image: every design rendered live at desktop and mobile size.
4. Reply *"Build site <slug> with designs: a, b, c"*. Claude builds `sites/<slug>/` and checks that it compiles. The Lovable push is skipped while Lovable is parked.
5. Optional: ask *"Show me the showcase live"*. Claude runs `npm run showcase:serve` and opens it as a preview in the Claude app.

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
   - tags each design mainly by style and feel (layout, style, six feel sliders, media, motion), plus the niche it is currently built for as a small extra signal;
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

## Part D2: manage designs yourself in the admin dashboard

Open `<showcase URL>/admin`:
- Switch between grid and list view.
- Open any design to change its tags, feel sliders, current niche, hidden/pinned status and use-case notes.
- Saves are free: no Lovable credits, no Claude tokens.
- Claude picks up your edits at the start of its next task.

Setup and details: [ADMIN-DASHBOARD.md](ADMIN-DASHBOARD.md).

## Part E: after the site is in Lovable

- Edit freely in Lovable. If you later ask Claude to change that site, Claude first pulls your Lovable edits back, so nothing is overwritten. The push command refuses to overwrite them.
- Each chat works on its own branch. At the end of every task Claude merges it into `main` automatically and writes a release note in `docs/releases/`. Every chat starts by pulling `main`, so it sees the latest library, memory and your dashboard edits.
- To bring something back:
  - Ask Claude *"restore the release about X"*, or run `npm run releases` to find it.
  - A whole release: `git checkout -b restore-x <merge commit>`.
  - One feature: `git cherry-pick <commit>`.
  - Undo a release: `git revert -m 1 <merge commit>`.
  - Details: [releases/README.md](releases/README.md).

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
