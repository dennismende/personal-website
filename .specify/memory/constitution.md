<!--
Sync Impact Report
- Version change: (none) → 1.0.0
- Modified principles: n/a (initial ratification)
- Added sections: Core Principles (I-V), Technology & Design Constraints,
  Development Workflow, Governance
- Removed sections: none
- Templates requiring updates:
  - .specify/templates/plan-template.md ⚠ pending manual review (verify it
    references this constitution's testing gate)
  - .specify/templates/tasks-template.md ⚠ pending manual review (verify task
    generation includes a test-authoring task before implementation tasks)
- Follow-up TODOs:
  - TODO(RATIFICATION_DATE): original project start date unknown; using the
    date this constitution was first authored (2026-10-09) as the ratification
    date since no earlier record exists.
-->

# Personal Website Constitution

## Core Principles

### I. Content Lives in Sanity, Code Renders It
Blog posts, CV entries, and other editorial content are authored in Sanity
Studio as the single source of truth. Application code (`components/`,
`app/`) MUST treat Sanity data as untrusted, variably-formatted input and
render it defensively — including handling malformed or inconsistently
authored content (e.g. literal numbered-list text instead of real list
blocks) rather than assuming perfectly structured Portable Text. Hardcoded
page copy belongs in code only for structural/UI text (labels, navigation,
CTAs), never for editorial content that should be editable without a deploy.

### II. Test-First for New Functionality (NON-NEGOTIABLE)
Every new feature, bug fix, or non-trivial refactor MUST have automated
tests. Tests are written before or alongside the implementation and MUST
fail prior to the fix/feature landing, then pass after. This project
currently has no test runner configured — introducing a feature or fix
without first adding one (recommended: Vitest for unit/component logic,
Playwright for critical user flows such as blog rendering and the contact
form) is a constitution violation, not a future nice-to-have. Pure styling
tweaks with no logic are exempt but MUST still be verified visually and via
`npm run build`.

### III. Type Safety and Static Verification
TypeScript `strict` mode stays enabled; `any` is permitted only at
well-isolated CMS/third-party integration boundaries (e.g. Portable Text
value shapes) and MUST be narrowed or commented with a reason. Every change
MUST pass `npx tsc --noEmit` and `npm run lint` before being considered
complete. `npm run build` MUST succeed before merge/deploy — it is the
cheapest integration test this project has and catches Next.js/Sanity
schema mismatches that unit tests may miss.

### IV. Design System Consistency
Visual changes MUST reuse the existing design tokens defined in
`app/globals.css` (`--color-background`, `--color-primary`, `--color-heading`,
etc.) and Tailwind utility conventions already established in the codebase
(e.g. `prose` typography classes for long-form content, `lucide-react` icons
for inline bullets/markers elsewhere in the site). New ad-hoc colors, fonts,
or spacing scales require explicit justification in the plan/spec, not silent
introduction during implementation.

### V. Small, Verifiable, Deployable Increments
Work is scoped so each change can be built, tested, and deployed
independently. Commits MUST be buildable (`npm run build` green) and
pushed to `main` only when verification (tests, typecheck, lint, build)
passes. Deployment is via Vercel's GitHub integration triggered by push to
`main` — there is no staging gate, so broken `main` is broken production.
Large features are decomposed into incremental PRs/commits rather than one
large unreviewed change.

## Technology & Design Constraints

- Framework: Next.js (App Router), TypeScript, React Compiler enabled.
- Styling: Tailwind CSS v4 (`@theme`/`@plugin` directives in
  `app/globals.css`), `@tailwindcss/typography` for long-form content.
- Content/CMS: Sanity.io (`next-sanity`, Portable Text via
  `components/RichTextComponents.tsx`); schema changes live in
  `sanity/schemaTypes/`.
- Icons: `lucide-react` exclusively, matching existing usage (CV/About
  pages) — no mixing icon libraries.
- Hosting/CI: Vercel auto-deploy from GitHub `main`; no custom CI pipeline
  exists yet. Adding one (lint + typecheck + test + build on PR) is an
  approved future improvement, not currently required to exist, but any
  Spec Kit plan introducing automated tests SHOULD also wire them into a
  GitHub Actions workflow so they run pre-merge, not just locally.

## Development Workflow

- All planning, specification, and implementation work for this repository
  follows the Spec Kit (github/spec-kit) process: `/speckit.constitution`
  (this document) → `/speckit.specify` → `/speckit.plan` → `/speckit.tasks`
  → `/speckit.implement` → `/speckit.converge`, using the `opencode`
  integration already installed under `.opencode/commands/`.
- Every feature or fix of non-trivial size gets a spec under
  `.specify/` artifacts before code is written; trivial one-line fixes
  (typos, copy corrections) may skip the full flow but still require the
  verification gate below.
- Verification gate before any commit is proposed as "done": `npx tsc
  --noEmit`, `npm run lint`, relevant automated tests, and `npm run build`
  must all pass.
- Commits and pushes to `main` happen only after the verification gate
  passes and, for anything beyond trivial fixes, after the user has
  reviewed the result.

## Governance

This constitution supersedes ad-hoc practices for all Spec Kit artifacts
(specs, plans, tasks) produced in this repository. Amendments require:
1. A documented reason for the change (what broke, what was missing).
2. An update to this file via `/speckit.constitution` with a Sync Impact
   Report describing what changed.
3. A version bump following semantic versioning: MAJOR for removing/
   redefining a principle, MINOR for adding a principle or materially
   expanding guidance, PATCH for wording/clarification only.

All Spec Kit plans and tasks MUST verify compliance with these principles
before implementation begins and again before marking work complete. Any
deviation (e.g. skipping tests for a specific change) MUST be explicitly
called out and justified in the relevant spec/plan rather than silently
ignored.

**Version**: 1.0.0 | **Ratified**: 2026-10-09 | **Last Amended**: 2026-10-09
