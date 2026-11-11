# Claude Sonnet Website Engine — Starter Kit

## Product definition
A local-first design retrieval and website generation system for mixed-format coded website sections.

**Flow:** 500+ source designs -> ingestion/indexing -> brief-based retrieval -> top 10 visual shortlist -> user selects ~3 -> Claude assembles a homepage -> automated QA.

The local dashboard is intentionally separate from Claude. Browsing screenshots and selecting designs should not consume model credits.

## Requirements
- Claude Code with Sonnet selected.
- Node.js 20+ recommended.
- Git.
- Optional: Playwright browser installation for screenshot automation.
- Optional: local embedding runtime later; not required for the first 10-design challenge.

## Folder guide
- `incoming-designs/`: drop your original design folders here.
- `design-library/`: generated index, metadata, previews and preserved originals.
- `engine/`: local indexing, ranking and dashboard scripts.
- `.claude/`: skills and subagent definitions.
- `knowledge/`: design evaluation principles.
- `briefs/`: company briefs.
- `projects/`: generated website projects.
- `tests/`: benchmark briefs and evaluation rubric.

## Initial setup
1. Open this directory in Claude Code.
2. Select Claude Sonnet.
3. Paste `MASTER-PROMPT.md` into the chat and let Claude implement/verify the repository.
4. Put 10 design folders in `incoming-designs/`.
5. Ask Claude to run the blind ingestion challenge.
6. Run:
   ```bash
   npm install
   npm run ingest
   npm run shortlist -- --brief briefs/example-architecture.json
   npm run dashboard
   ```
7. Open the local URL printed by the dashboard script.
8. Select ~3 designs. The dashboard writes `projects/<brief-slug>/selection.json` (implementation task for Claude to complete).
9. Ask Claude to generate the homepage using that selection.

## Mixed-format warning
No single generic renderer can safely preview arbitrary code from every framework. The ingestion engine detects likely format and identifies an adapter requirement. Static HTML/CSS can often be rendered directly. Framework projects need isolated temporary workspaces with their own dependencies and build commands. Framer-specific source may not be independently runnable outside its intended environment. Claude must report preview status honestly.

## GitHub recommendation
Use a **private** GitHub repository. Git is useful for rollback, change history and backup. Start local; create a remote and push only after reviewing `.gitignore` and confirming no confidential or licensed assets are included. Never commit secrets, `.env`, customer data or credentials.

## Security
Treat supplied code as untrusted. Do not execute it in your main development environment with access to personal files, SSH keys, browser profiles or API credentials. Use an isolated preview environment/container with restricted filesystem and network access. Review dependency install scripts before running them.

## Cost policy
- Static extraction and ranking are scripts.
- Claude is used for uncertain classification, design reasoning and code adaptation.
- Ingest once; cache by file hash.
- Retrieve metadata first; read only top candidates' source.
- Preview browsing and selection are local and model-free.
- Sonnet only; no Opus.
