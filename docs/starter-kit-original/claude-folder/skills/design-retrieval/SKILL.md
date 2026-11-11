---
name: design-retrieval
description: Retrieve and rank the top 10 design sections for a company brief.
---
# Design retrieval
1. Parse the brief into industry, audience, style, goals, required sections, constraints and output environment.
2. Run deterministic metadata filtering/scoring first.
3. Narrow the candidate pool before loading screenshots or source.
4. Use the retrieval-evaluator subagent to compare a bounded candidate set.
5. Ensure category coverage and visual diversity; avoid near-duplicates.
6. Return exactly up to 10 candidates, each with ID, preview path/status, framework, score breakdown, rationale and uncertainty.
7. Save shortlist.json in the project folder.
Never load all source designs into context.
