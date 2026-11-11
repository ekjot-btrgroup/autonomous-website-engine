# Start Here — Claude Sonnet Website Engine

This kit bootstraps a local, autonomous website design discovery and generation system.

## Your decisions already built into this kit
- Design inputs: mixed code formats.
- Library contents: individual website sections, not complete pages.
- Output framework: detect from the selected source designs and project constraints.
- Initial challenge: you supply 10 real designs. Claude must classify them without being told what they are best for.
- At scale: support 500+ designs.
- Human checkpoint: the local dashboard presents the top 10; you choose approximately 3. Everything before and after that checkpoint is automated.

## Quick start
1. Extract this ZIP.
2. Open the extracted folder in Claude Code.
3. Use Claude Sonnet.
4. Paste the full contents of `MASTER-PROMPT.md` into the Claude Code conversation.
5. Let Claude inspect the repository and complete the bootstrap tasks.
6. Put your 10 original design folders into `incoming-designs/`. Do not rename or rewrite their source files.
7. Ask Claude: `Run the design ingestion workflow on incoming-designs. Preserve originals. Treat this as a blind classification challenge.`
8. Start the local registry/dashboard using the commands Claude confirms in `README.md`.
9. Submit a company brief through the dashboard or `briefs/`.
10. Review the 10 candidates, choose your 3, and let Claude continue with assembly.

## Important limitations
A mixed-format source library cannot be rendered universally by one generic script. HTML/CSS can often be previewed directly; React, Vue, Svelte, Framer exports, Web Components and framework-specific code may need isolated preview adapters and dependencies. The system must detect formats and create adapters incrementally. It must never claim a preview is real if it is only a placeholder.

Do not provide Claude with credentials. Do not run untrusted design code with access to your personal files or secrets. Use an isolated workspace/container for unfamiliar code.
