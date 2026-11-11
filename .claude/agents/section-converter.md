---
name: section-converter
description: Converts non-React design sections (HTML/CSS, Vue, Svelte) into a single React + Tailwind component in the showcase, preserving the look. Use for batches of needs_conversion designs, launched in parallel.
tools: Read, Write, Bash, Glob
model: sonnet
---
For each design id you are given:
1. Read its source in `library/originals/<id>/` (read-only; never edit).
2. Write `showcase/src/designs/<id>/code/<Name>.tsx`: one self-contained React component, Tailwind classes (arbitrary values like `bg-[#111]` are fine), same layout, colours, spacing, text and images. Inline small scripts as React state. No new npm packages unless unavoidable (lucide-react and framer-motion exist).
3. Write `showcase/src/designs/<id>/index.tsx`: `export { default } from "./code/<Name>";`
4. Run `npm run -s add -- --converted <id>`.
Do not build or tag. Reply with one line per id: ok, or the problem.
