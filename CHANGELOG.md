# CHANGELOG

This file documents planned and completed changes for the repository.

## Agent instructions
- DO NOT add new entries under `## Version history` unless explicitly asked to.
- DO keep a running list of changes under `## WIP`
  - Combine and summarize entries as you go.  Limit yourself to around five (5) entries about work-in-progress
  - Keep each bullet point brief.  One or two brief sentences/fragments, no huge paragraphs
  - Purpose is to SUMMARIZE.  Git history will give plenty of finer detail.

## WIP
### vX.X.X
- Scaffolded minimal Next.js dev site; added manifests and app scaffold.
- Implemented typed theming pipeline (`theme.ts` → `scripts/build-theme.ts` → `public/theme.css`) and generated CSS.
- Switched to `@noahwright/design`, installed dependencies, and verified ESM-only usage.
- Added `about`, `contact`, and `projects` pages and navigation links on the home page.
- Verified build and served a production preview at `http://localhost:3000`; preserved `AGENTS.md`.

## Version history

### v0.1.0 — Initial commit
- Initial scaffold for a minimal developer site:
  - Add Next.js (App Router) scaffold consuming `@noahwright/design` components.
  - Implement typed theming pipeline: `theme.ts` → `scripts/build-theme.ts` → `public/theme.css`.
  - Include minimal `app/layout.tsx`, `app/page.tsx`, and build scripts; preserve existing `AGENTS.md`.
  - Add package manifest and scripts (`dev`, `build`, `start`, `build:theme`).
  - Verified build and generated `public/theme.css`.