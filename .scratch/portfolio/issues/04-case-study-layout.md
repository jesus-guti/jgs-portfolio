# 04 — Case study layout

Status: done

## Context

All 4 case study pages share the same layout. This issue creates the reusable container and typography structure that issues #05–#08 will populate with content.

## Layout

- Single column, `max-width: 720px`, centered
- Same bordered container as the home page (`border-general`, `max-w-[1080px]`)
- Content area with `px-container-px py-section-py`
- Back link to home at the top (e.g. "← Projects")

## Typography structure

The 5 blocks map to semantic HTML:

1. **Header** — `<h1>` for project name, meta row (role, stack, year, status badge)
2. **Problem** — `<h2>` + paragraphs
3. **Decisions** — `<h2>` + numbered or titled subsections
4. **Result** — `<h2>` + paragraphs
5. **Artifacts** — Full-width image/code containers that break out of the 720px constraint (or stay within it — decision during implementation)

## Scope

- Create `app/projects/[slug]/page.tsx` with the layout shell
- Create a shared layout component or template that all 4 case studies reuse
- Placeholder content for each block (lorem ipsum styled correctly)
- Route: `/projects/[slug]`
- All 4 slugs render the same layout with different placeholder data

## Acceptance criteria

- [ ] `/projects/rely-v2` renders with the case study layout
- [ ] All 5 blocks are visible with placeholder content
- [ ] Typography hierarchy is clear (h1 > h2 > body > caption)
- [ ] Back link navigates to `/`
- [ ] Layout is responsive on mobile
- [ ] Code blocks (if any) use mono font and appropriate styling
