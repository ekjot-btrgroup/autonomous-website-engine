---
name: design-assembly
description: Assemble a homepage using the user's selected design IDs and company brief.
---
# Design assembly
1. Read brief.json and selection.json.
2. Load only selected source designs plus a small number of compatible supporting sections.
3. Detect and choose output framework based on source compatibility and project constraints.
4. Create a page plan and shared design tokens.
5. Adapt selected sections while preserving their distinctive layout and interaction patterns.
6. Fill missing sections with compatible library designs; create new code only when necessary.
7. Keep all output in projects/<slug>/output and never modify library originals.
8. Record source design IDs for every section.
9. Build and run automated checks.
