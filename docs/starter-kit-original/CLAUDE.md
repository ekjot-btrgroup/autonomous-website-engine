# Project rules — Autonomous Website Design Engine

## Objective
Discover, preview, shortlist and assemble coded website section designs into coherent homepages using Claude Sonnet.

## Core rules
- Preserve all user source designs; originals are immutable.
- Mixed formats are supported through explicit detection and adapters, not by pretending all code is interchangeable.
- Search the registry before opening source code.
- Load only shortlisted source code into context.
- Actual previews only; label unavailable previews clearly.
- User selects approximately 3 of the top 10. Do not bypass this checkpoint.
- Detect output framework; do not assume React.
- Use scripts for deterministic work.
- Use Sonnet; do not use Opus.
- Keep the main agent in control.
- Never expose secrets or commit them.
- Keep generation output under `projects/`.
- QA results must distinguish passed, failed, skipped and unverified.

## Before changing code
Inspect the relevant files and existing conventions. Avoid broad rewrites. Run the narrowest relevant tests.

## Definition of done
A task is complete only when implementation, verification, documentation and known limitations are reported.
