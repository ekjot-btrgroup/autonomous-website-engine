---
name: visual-qa
description: Run visual and technical QA on an assembled homepage.
---
# Visual QA
1. Run static checks and framework build first.
2. Launch isolated local preview.
3. Capture desktop (1440px), tablet (768px) and mobile (390px) screenshots where supported.
4. Inspect screenshots and browser console/network errors.
5. Check overflow, image loading, font loading, hierarchy, spacing, contrast, interaction and responsive reflow.
6. Fix only evidenced issues; maximum two repair cycles by default.
7. Save qa-report.json with passed, failed, skipped and unverified checks.
8. Never claim production readiness without test evidence.
