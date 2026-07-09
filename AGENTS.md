<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Agent skills

### Issue tracker

Issues and PRDs live as markdown files under `.scratch/<feature-slug>/`. See `docs/agents/issue-tracker.md`.

### Triage labels

Uses the default five canonical labels. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context repo — one `CONTEXT.md` + `docs/adr/` at the repo root. See `docs/agents/domain.md`.

## Project context

Source of truth: `CONTEXT.md`. When editing UI, content, or data, keep these rules in mind.

### Design system

Use the existing CSS theme tokens in `app/globals.css`. Do not hard-code colors, font sizes, or spacing values inline.

- **Fonts**: `font-sans` (Geist Sans) for body, headings, captions. `font-mono` (Geist Mono) for code blocks and stack tags.
- **Type scale**: `text-heading-display`, `text-heading-section`, `text-body`, `text-caption`, `text-code`.
- **Colors**: `surface-root`, `text-strong`, `text-default`, `text-weak`, `text-weaker`, `border-general`, `border-special`.
- **Spacing**: `spacing-container-px` (64px), `spacing-section-py` (80px), `spacing-grid-gap` (64px).

### Products

The portfolio covers four products. Use these names and descriptions when generating or updating content:

- **rely v2** — Refactor of the original rely production interface. Next.js + Go backend, multi-tenant, multi-site, hub/agent architecture, no-code flow system, real-time websockets, touch-first UI for factory floors.
- **Safe** — Workplace safety product built from scratch. Multi-camera real-time monitoring, multi-tenant, tunnel-based private network access, event history, audits, and reporting.
- **Sorolla** — React component library for image/video annotation (b-box, segmentation, OBB). Published to npm as part of the siali-toolkit monorepo.
- **Loadzone** — SaaS for youth football academies. Training load logging and wellness tracking for small clubs and lower-division academies. Own product, in production with real users.

### Page patterns

#### `/` (home)

Outer bordered container (`border-general`, max-width 1080px) containing:

1. **Header** — full-width, `border-b border-general`, `py-8`, `px-[--spacing-container-px]`. Internal content aligns with sections.
2. **Bio / Hero** — who you are, what you do, social links (GitHub, LinkedIn, Email).
3. **Projects** — grid of four project cards (rely v2, Safe, Sorolla, Loadzone).
4. **1-Week Projects** — dense changelog-style list (landing pages, vision projects, consulting work).

#### Project card

Each card in the home grid shows:

1. **Name** + **Year** aligned left and right.
2. **Stack tags** in mono font, comma-separated.
3. **Short description** (2 lines max).
4. **Status badge** — one of `production`, `in progress`, `open source`.

Clicking a card navigates to `/projects/[slug]`.

#### `/projects/[slug]` (case study)

Single-column layout, max-width 720px, centered. Five blocks stacked vertically:

1. **Header** — name, role, stack, year, status.
2. **Problem** — what existed, why it was a problem, what pressure existed (startup, deadlines).
3. **Decisions** — 2–3 key technical decisions with trade-offs (why X and not Y).
4. **Result** — what was achieved, what's in production, what was learned.
5. **Artifacts** — screenshots, code snippets, diagrams (inline within text flow, full-width).

### Content conventions

- Status badges must use exactly: `production`, `in progress`, `open source`.
- Stack tags use `font-mono` and are comma-separated.
- Case-study copy should be concise and fit the single-column 720px reading width.
- Prefer `next/link` for internal navigation and `next/image` for optimized images.

### Component library

Reusable components live in `app/components/`. Key components:

- **`Button`** — Neobrutalist style with thick borders, hard shadows, and press animation. Variants: `default` (blue), `reverse` (white), `neutral` (gray). Sizes: `sm`, `md`, `lg`.
- **`Ruler`** — Abstract measuring ruler with tick marks. Use in bio section for technical drawing aesthetic. Props: `orientation`, `length`, `tickInterval`, `majorTickInterval`.
- **`SectionIntersection`** — Decorative corner detail with diagonal stripes and diamond marker. Place at section corners. Props: `position` (top-left, top-right, bottom-left, bottom-right).
- **`GridBackground`** — Fading grid pattern for section backgrounds. Props: `gridSize`, `fadeIntensity`.
- **`ProjectCard`** — Card for project grid with name, year, stack tags, description, and status badge.

### Visual language

- **Section separators**: Each section has `border-b border-border-general`. Corners feature `SectionIntersection` details (diagonal stripes + diamond markers).
- **Bio section**: Features `GridBackground` with radial fade, vertical `Ruler` components on sides (desktop only), and neobrutalist `Button` components for social links.
- **Neobrutalist buttons**: 2px solid borders, 4px hard shadows, translate animation on hover/active. Use `neutral` variant for dark theme consistency.
- **Typography**: Use `text-heading-display` for bio name (22px), `text-heading-section` for section titles (18px).
