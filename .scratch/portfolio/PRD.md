# PRD: Portfolio MVP

## Vision

Personal portfolio built as a **Technical Logbook**. Not a design showcase — a honest, minimal record of real engineering work under startup pressure. Inspired by Takuya Matsuyama's site and OpenCode's documentation aesthetic.

## Stack

- Next.js (App Router)
- Base UI (unstyled, accessible)
- Tailwind CSS v4 (CSS-based config)
- Dark theme, thin borders, Geist Sans + Geist Mono

## Design principles

- **Invisible Design** — details that only someone with a good eye will notice
- **Vertical slicing** — each feature shipped end-to-end before moving to the next
- **Radical simplicity** — no gradients, no complex animations, just typography and structure

## Projects (4 main + 1 section)

| Project | Status | Key narrative |
|---------|--------|---------------|
| rely v2 | production | Next.js + Go, multi-tenant, websockets, no-code flows, touch UI |
| Safe | production | Real-time multi-camera monitoring, tunnel-based network access |
| Sorolla | open source | npm library, monorepo, reusable annotation component |
| Loadzone | in progress | Own SaaS product, football academies, training + wellness |
| 1-Week Projects | various | Dense changelog list — landings, vision projects, consulting |

## Home page structure

1. **Bio / Hero** — Name, title, location, 3 paragraphs, social links (GitHub, LinkedIn, Email)
2. **Projects** — Grid of 4 cards (name, year, stack tags, 2-line description, status badge)
3. **1-Week Projects** — Dense list, each entry: year, problem, stack, duration

## Case study structure (single column, 720px max-width)

1. Header — Name, role, stack, year, status
2. Problem — Context, pressure, what existed before
3. Decisions — 2-3 key technical decisions with trade-offs
4. Result — What was achieved, what's in production
5. Artifacts — Screenshots, code snippets, diagrams (inline, full-width)

## Content strategy

All case study content starts as **placeholder/lorem ipsum**. Real content will be filled in later, project by project.

## Execution order

```
#01 Fix syntax error in page.tsx (blocks build)
#02 Home: Bio/Hero refinement (social links, avatar)
#03 Home: Projects grid (4 cards with placeholders)
#04 Case study layout (single column container, 720px)
#05 Case study: rely v2
#06 Case study: Safe
#07 Case study: Sorolla
#08 Case study: Loadzone
#09 Home: 1-Week Projects section
```
