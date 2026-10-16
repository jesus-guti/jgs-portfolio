# Polish Portfolio Works Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restore the concise home thesis, add visible contact and leadership signals, clarify bilingual portfolio copy, and make PR #1 ready for review.

**Architecture:** Keep all editable copy in the English and Spanish dictionaries, including the new Rely leadership section and contact labels. Make only minimal layout changes in the Home and Rely pages: enlarge the existing lightbox photo, render text contact links, and render the new leadership block.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS, JSON dictionaries, ESLint.

## Global Constraints

- Preserve the exact original thesis and meta descriptions supplied by the user.
- Write sober, clear English and Spanish without inventing metrics or a CV asset.
- Keep Zolara as an undated one-week project, and retain its factual scope.
- Translate the Spanish production badge to `en producción`.
- Do not add dependencies or unrelated cleanup.
- Update PR #1 on the existing branch using mattpocock `pr` style and mark it ready only after lint and build pass.

---

### Task 1: Update bilingual copy

**Files:**
- Modify: `lib/i18n/dictionaries/en.json`
- Modify: `lib/i18n/dictionaries/es.json`

**Interfaces:**
- Produces: `home.leadership`, `home.contacts`, and `rely.leadership` dictionary fields consumed by pages.

- [x] **Step 1: Restore the thesis and metadata descriptions**

Set the English values to:

```json
"description": "Interfaces and product systems shipped under real constraints — factory floors, production teams.",
"thesis": "Interfaces and product systems shipped under real constraints — factory floors, production teams."
```

Set the Spanish values to:

```json
"description": "Interfaces y sistemas de producto entregados bajo restricciones reales — plantas de fábrica, equipos de producción.",
"thesis": "Interfaces y sistemas de producto entregados bajo restricciones reales — plantas de fábrica, equipos de producción."
```

- [x] **Step 2: Add clear leadership, contact, and Rely management copy**

Add exact fields for a home leadership line, human-readable Email and LinkedIn labels, and a Rely `How I lead` section. Mention the internship and frontend-team responsibilities as supplied, without adding counts, outcomes, or process claims beyond the requested facts.

- [x] **Step 3: Polish facts and jargon**

Keep Zolara’s one-week, Sorolla-based bacteria detection and approximately €300,000 project-sales facts. Keep Sorolla’s “built alone” claim. Ensure English Cromo copy remains English, translate the Spanish badge to `en producción`, and phrase technical concepts in plain language where they appear.

- [x] **Step 4: Validate JSON**

Run:

```bash
node -e "JSON.parse(require('node:fs').readFileSync('lib/i18n/dictionaries/en.json')); JSON.parse(require('node:fs').readFileSync('lib/i18n/dictionaries/es.json'))"
```

Expected: exit code 0.

### Task 2: Render the revised Home and Rely content

**Files:**
- Modify: `app/[lang]/page.tsx`
- Modify: `app/[lang]/projects/rely-v2/page.tsx`

**Interfaces:**
- Consumes: the new dictionary fields from Task 1.
- Produces: visible contact calls to action, a larger profile photo, and a Rely leadership section.

- [x] **Step 1: Enlarge the existing profile image**

Change the displayed `next/image` dimensions from 48×48 to 112×112 while retaining the existing `ImageLightbox`, rounded presentation, source image, and alt text.

- [x] **Step 2: Replace icon-only contact controls with visible contact calls to action**

Render the email address as the Email link text and `LinkedIn` as the LinkedIn link text near the Home heading. Do not render a CV link because no supported CV asset exists in the repository.

- [x] **Step 3: Render the home leadership line**

Place `home.leadership` below the role and above the thesis using the existing caption typography and tokens.

- [x] **Step 4: Render the Rely leadership section**

Add a section between Decisions and Result:

```tsx
<section className="mb-12">
  <h2 className="mb-3 text-heading-section font-semibold text-text-strong">
    {rely.leadership.title}
  </h2>
  <p className="text-body text-text-default">{rely.leadership.content}</p>
</section>
```

- [x] **Step 5: Run typecheck**

Run:

```bash
npx tsc --noEmit
```

Expected: exit code 0.

### Task 3: Fix the existing lint failure and verify

**Files:**
- Modify: `app/components/site-menu.tsx`

**Interfaces:**
- Preserves: menu closes when navigation changes and when the Escape key is pressed.

- [x] **Step 1: Inspect the menu effect**

Read `app/components/site-menu.tsx` and identify the synchronous state update in the pathname effect reported by ESLint.

- [x] **Step 2: Apply the smallest behavior-preserving fix**

Use navigation-derived rendering or an event-driven close action that does not synchronously call a state setter from an effect body. Do not alter menu semantics or styling.

- [x] **Step 3: Run full verification**

Run:

```bash
npm run lint
npm run build
```

Expected: both commands exit 0.

### Task 4: Capture evidence and update PR #1

**Files:**
- Modify: `docs/superpowers/plans/2026-10-16-polish-portfolio-works.md`

**Interfaces:**
- Produces: a pushed, review-ready PR #1 with copy and verification evidence.

- [x] **Step 1: Capture local screenshots**

Capture English Home and Rely screenshots from the local development server, including the larger profile photo, contact calls to action, Home leadership line, and Rely `How I lead` section.

- [x] **Step 2: Commit and push**

Run:

```bash
git add app/[lang]/page.tsx app/[lang]/projects/rely-v2/page.tsx app/components/site-menu.tsx lib/i18n/dictionaries/en.json lib/i18n/dictionaries/es.json docs/superpowers/plans/2026-10-16-polish-portfolio-works.md
git commit -m "Polish portfolio works presentation"
git push -u origin cursor/portfolio-works-copy-3cda
```

Expected: commit and push succeed.

- [x] **Step 3: Update PR in mattpocock `pr` format and mark ready**

Update PR #1’s body using only:

```markdown
## Summary: ...
## Evidence: ...
## Merge Danger: ...
```

Include build and lint outputs, visual evidence, absence of a CV asset, and the one-way/two-way and blast-radius assessment. Set the draft state to false.

## Self-Review

1. Spec coverage: Task 1 restores both original thesis and metadata values, polishes EN/ES copy, translates the production badge, and preserves Zolara and Sorolla facts. Task 2 covers photo, visible contact calls to action, Home leadership, and Rely leadership. Task 3 handles the lint prerequisite. Task 4 covers evidence, PR body, and readiness.
2. Placeholder scan: no placeholders, TODOs, or undefined implementation steps remain.
3. Type consistency: Task 1 defines the dictionary fields consumed in Task 2; both locale files must contain the same shape because the Spanish dictionary is typed against the English one.
