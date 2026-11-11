---
name: design-ingestion
description: Ingest new mixed-format coded website sections into the local design library. Use when the user adds designs or requests an index refresh.
---
# Design ingestion
1. Run the discovery/hash script.
2. Inspect newly discovered designs using the library-analyst subagent in small batches.
3. Preserve originals; never rewrite source files.
4. Generate metadata using only evidence from source and rendered previews.
5. Detect framework/dependencies; identify adapter needs.
6. Create actual previews where safe and technically possible.
7. Validate responsive behaviour when runnable.
8. Update registry idempotently; cache by content hash.
9. Report counts: discovered, unchanged, duplicates, analysed, previewed, adapter-needed, failed.
Do not ask the user to label the blind test designs. Do not claim universal preview support.
