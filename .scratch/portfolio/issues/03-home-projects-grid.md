# 03 — Home: Projects grid

Status: done

## Context

The home page needs a grid of 4 project cards below the Bio/Hero section. Each card links to its case study detail page.

## Card structure

Each card shows:
1. **Name** + **Year** (aligned left and right on the same line)
2. **Stack tags** (mono font, comma-separated or pill-style)
3. **Short description** (2 lines max, truncated with ellipsis if needed)
4. **Status badge** — one of: `production`, `in progress`, `open source`

## Projects (placeholder content)

| Slug | Name | Year | Stack | Status |
|------|------|------|-------|--------|
| `rely-v2` | rely v2 | 2025 | Next.js, Go, WebSockets | production |
| `safe` | Safe | 2023 | React, WebRTC, Multi-tenant | production |
| `sorolla` | Sorolla | 2023 | React, npm, TypeScript | open source |
| `loadzone` | Loadzone | 2025 | Next.js, Supabase | in progress |

Stack and descriptions are placeholders — fill with lorem-style text that matches the real narrative tone.

## Scope

- Create a `<ProjectCard>` component
- Create a grid section in the home page (below Bio/Hero)
- Grid: 2 columns on desktop, 1 column on mobile
- Each card is a link to `/projects/[slug]`
- Cards use the existing design tokens (borders, text, spacing)
- Status badge uses mono font and a subtle style (border + text, no heavy fills)

## Acceptance criteria

- [ ] 4 project cards render in a 2-column grid on desktop
- [ ] Cards collapse to 1 column on mobile
- [ ] Each card links to `/projects/[slug]` (pages don't exist yet — 404 is acceptable)
- [ ] Status badges are visually distinct per status
- [ ] Card hover state provides clear affordance (border color change, subtle lift, etc.)
