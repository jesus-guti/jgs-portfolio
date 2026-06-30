# Context

## Fonts

- **`sans`**: Geist Sans (body, headings, captions)
- **`mono`**: Geist Mono (code blocks)

## Type scale

| Token | Size | Line-height | Font |
|-------|------|-------------|------|
| `text-heading-display` | 22px | 1.3 | sans |
| `text-heading-section` | 18px | 1.4 | sans |
| `text-body` | 14px | 1.6875 | sans |
| `text-caption` | 13px | 1.5 | sans |
| `text-code` | 14px | 1.6875 | mono |

## Color tokens

### Surface

| Token | Value |
|-------|-------|
| `surface-root` | `hsl(0, 9%, 7%)` |

### Text

| Token | Value |
|-------|-------|
| `text-strong` | `hsl(0, 15%, 94%)` |
| `text-default` | `hsl(0, 4%, 71%)` |
| `text-weak` | `hsl(0, 2%, 49%)` |
| `text-weaker` | `hsl(0, 3%, 28%)` |

### Border

| Token | Value |
|-------|-------|
| `border-general` | `hsl(0, 3%, 28%)` |
| `border-special` | `hsl(0, 4%, 23%)` |

## Spacing

| Token | Value |
|-------|-------|
| `spacing-container-px` | 64px |
| `spacing-section-py` | 80px |
| `spacing-grid-gap` | 64px |

## Products

- **rely v2** — Refactor of the original rely production interface. Next.js + Go backend, multi-tenant, multi-site, hub/agent architecture, no-code flow system, real-time websockets, touch-first UI for factory floors.
- **Safe** — Workplace safety product built from scratch. Multi-camera real-time monitoring, multi-tenant, tunnel-based private network access, event history, audits, and reporting.
- **Sorolla** — React component library for image/video annotation (b-box, segmentation, OBB). Published to npm as part of the siali-toolkit monorepo.
- **Loadzone** — SaaS for youth football academies. Training load logging and wellness tracking for small clubs and lower-division academies. Own product, in production with real users.

## Project card

Each card in the home grid shows:

1. **Name** + **Year** (aligned left and right)
2. **Stack tags** (mono font, comma-separated)
3. **Short description** (2 lines max)
4. **Status badge** (`production` / `in progress` / `open source`)

Clicking the card navigates to the case study detail page.

## Home page sections

1. **Bio / Hero** — Who you are, what you do, social links (GitHub, LinkedIn, Email)
2. **Projects** — Grid of 4 project cards (rely v2, Safe, Sorolla, Loadzone)
3. **1-Week Projects** — Dense changelog-style list (landing pages, vision projects, consulting work)

## Case study structure

Each project detail page follows five blocks:

1. **Header** — Name, role, stack, year, status (production / in progress)
2. **Problem** — What existed, why it was a problem, what pressure existed (startup, deadlines)
3. **Decisions** — 2-3 key technical decisions with their trade-offs (why X and not Y)
4. **Result** — What was achieved, what's in production, what was learned
5. **Artifacts** — Screenshots, code snippets, diagrams (woven into previous sections or grouped at the end)

## Page structure

### `/`

Outer bordered container (`border-general`, 1080px max-width) containing:

- **Header**: full-width, `border-b` (`border-general`), `py-8`, `px-[--spacing-container-px]`, internal content aligned with sections
- **Content sections**: each with `px-[--spacing-container-px] py-[--spacing-section-py]`

### `/projects/[slug]`

Single-column layout, max-width 720px, centered. Five blocks stacked vertically: Header, Problem, Decisions, Result, Artifacts (inline within text flow, full-width).
