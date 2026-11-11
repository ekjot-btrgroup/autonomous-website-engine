# Autonomous Website Engine (Lovable edition)

Turns a library of coded **website sections** (React + Tailwind) into client homepages in **Lovable**, with very low Claude usage.

```
incoming/ ──npm run add──▶ library/originals/<id>/   (untouched originals)
                          showcase/src/designs/<id>/  (normalised, live in the Lovable showcase)
brief ──npm run shortlist──▶ showcase /s/<slug>        (top 10, live previews, you tick 3, press Copy)
picks ──npm run site──▶ sites/<slug>/                  (Lovable-ready app) ──npm run push──▶ that site's Lovable repo
```

## Why it is cheap
| Step | Who does it | Claude tokens |
|---|---|---|
| Import, normalise imports, detect npm packages, find duplicates | script | 0 |
| Build test + browser render test of every design | script | 0 |
| Tag a design (category, style, industry, quality) | Claude, from a ~70-token summary, once per design | small |
| Rank the library for a brief, top 10 with reasons | script | 0 |
| Show the 10 live designs, let you pick | Lovable showcase page | 0 |
| Assemble the site, install, compile | script | 0 |
| Colours + fonts | Claude picks values, script applies | tiny |
| Copy | Claude rewrites a JSON list of strings, script writes them into the code | small |
| Push to Lovable | script, via GitHub | 0 (no Lovable credits) |

Claude never reads component code during normal work. Parallel subagents are used only for big batches (over 40 designs to tag, or several designs to convert).

## One-time setup
1. **Showcase project in Lovable:** create a new Lovable project, open GitHub in its settings, connect it. Lovable creates a repo such as `your-org/design-showcase`. Give Claude that repo name.
2. Make sure this repo is **private** (it stores your design library).
3. Optional for local use: Node 20+, Git. Run `npm test`.

## Everyday use (messages to send Claude)
1. **Add designs:** upload them (folders, .zip or .tsx files) and say *"Add these designs."* Claude imports, tests, tags and pushes the showcase.
2. **New website:** paste the brief and say *"Shortlist designs for this brief."* Claude replies with a link `/s/<slug>` in your showcase.
3. **Pick:** open the link, tick 3, press **Copy**, paste the copied line (`Build site <slug> with designs: a, b, c`) into the chat.
4. **Site in Lovable:** create a new Lovable project for the client, connect GitHub, and give Claude the repo name. Claude builds, tests and pushes. Open it in Lovable.

To change a site later in Claude, Claude first pulls your Lovable edits (`npm run pull`), so nothing made in Lovable is overwritten. The push command refuses to overwrite Lovable edits.

## 10 sites in 10 chats, one repo
Each site chat only writes `briefs/<slug>.json`, `showcase/src/shortlists/<slug>.json` and `sites/<slug>/`, so chats never conflict. IDs are content hashes, so nothing is numbered centrally. Each cloud chat works on its own branch; merge each chat's branch (PR) into `main` when done. Start new chats from `main` so they see the latest library.
Add designs in one chat at a time (it edits shared files: `showcase/package.json`, `showcase/tailwind.config.ts`).

## Commands
| Command | What it does |
|---|---|
| `npm run add` | Import everything in `incoming/` (`--offline`, `--keep`, `--converted <id>`) |
| `npm run showcase:check -- --smoke` | Install + build the showcase, then render every design in a headless browser; marks broken ones |
| `npm run tag -- queue / apply <file> / list` | Tagging round trip (`--limit 40 --offset 0` for batches) |
| `npm run shortlist -- <slug>` | Rank the library for `briefs/<slug>.json`, write the showcase shortlist |
| `npm run site -- new <slug> --pick a,b,c` | Plan and assemble `sites/<slug>/` (`--only-picks`, `--force`) |
| `npm run site -- theme <slug> --primary "#hex" --heading "Font" --body "Font" --recolor blue:emerald` | Light colour and font changes |
| `npm run site -- copy <slug>` / `copy-apply <slug>` | Text round trip (Claude edits `.engine/copy.out.json`) |
| `npm run site -- check <slug>` | npm install + build |
| `npm run push -- <showcase or sites/slug> --repo owner/name` | Push to the Lovable GitHub repo (repo remembered afterwards) |
| `npm run pull -- sites/<slug>` | Bring Lovable edits back |
| `npm run status` | Overview |
| `npm test` | Engine tests |

## Folder map
- `incoming/` drop zone (not committed)
- `library/originals/<id>/` exact copies of your designs (never edited)
- `showcase/` the Lovable showcase app; `src/designs/<id>/` (index.tsx, code/, meta.json), `src/shortlists/<slug>.json`
- `briefs/<slug>.json` client briefs (`_template.json` shows the fields)
- `sites/<slug>/` one Lovable app per client; `.engine/` holds the plan and sync state (never pushed to Lovable)
- `templates/` base Lovable app (Vite, React 18, TypeScript, Tailwind 3, shadcn/ui) and the showcase pages
- `engine/` scripts; `knowledge/vocabulary.json` the tag words; `.claude/` skills and agents
- `docs/starter-kit-original/` the original starter kit, kept for reference

## Known limits
- Designs that need props or data render blank; the render test flags them and Claude adds default props once.
- Tailwind v4-only designs and custom `tailwind.config` snippets need a one-time manual merge (flagged automatically).
- HTML, Vue and Svelte designs need a one-time conversion by Claude before they can be shortlisted.
- Ranking is only as good as the tags; untagged designs rank on a guessed category.
- Pushing from a Claude cloud chat needs the Lovable repo added to that chat with push access.
- Lovable's GitHub sync behaviour (default branch only, sync speed) is controlled by Lovable.
