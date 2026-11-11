# Credit efficiency rules

- Primary model: Claude Sonnet.
- Do not use Opus.
- Use local scripts for discovery, hashing, static extraction, registry updates, deterministic ranking, dashboard serving and tests.
- Use cache keys based on content hashes.
- Do not send the 500-design library to Claude. Retrieve metadata first.
- Narrow candidates in stages: metadata filter -> deterministic ranking -> bounded semantic/visual review -> top 10.
- Only inspect source files for top candidates and selected components.
- Keep agent outputs structured and concise.
- Delegate only non-overlapping tasks.
- Use local image embeddings only if metadata/keyword retrieval demonstrably underperforms; do not add paid embedding APIs by default.
- Dashboard browsing must not call Claude.
- Use a maximum of two visual repair cycles unless the user changes the limit.
