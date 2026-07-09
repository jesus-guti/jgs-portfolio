# Project rules for jgs-portfolio

This is a Next.js 16.2 + Tailwind CSS v4 portfolio site. Source of truth for content and design is `CONTEXT.md`.

## Design system

All styling must use the theme tokens defined in `app/globals.css`. Never hard-code colors, font sizes, or spacing.

- Fonts: `font-sans` (Geist Sans) for body/headings/captions; `font-mono` (Geist Mono) for code blocks and stack tags.
- Type scale: `text-heading-display`, `text-heading-section`, `text-body`, `text-caption`, `text-code`.
- Colors: `surface-root`, `text-strong`, `text-default`, `text-weak`, `text-weaker`, `border-general`, `border-special`.
- Spacing: `spacing-container-px` (64px), `spacing-section-py` (80px), `spacing-grid-gap` (64px).

## Content conventions

- Status badges must be exactly: `production`, `in progress`, `open source`.
- Stack tags are comma-separated and rendered in `font-mono`.
- Project names: rely v2, Safe, Sorolla, Loadzone.
- Use `next/link` for internal navigation and `next/image` for images.

## Page patterns

### Home (`/`)

Outer bordered container (`border-general`, max-width 1080px) with:

1. Header — full-width, `border-b border-general`, `py-8`, `px-[--spacing-container-px]`.
2. Bio / Hero.
3. Projects grid of four cards.
4. 1-Week Projects changelog list.

### Project card

Each card shows: Name + Year (left/right), stack tags (mono, comma-separated), short description (2 lines max), status badge. Click navigates to `/projects/[slug]`.

### Case study (`/projects/[slug]`)

Single-column layout, max-width 720px, centered. Five blocks: Header, Problem, Decisions, Result, Artifacts.

## General

- Read `node_modules/next/dist/docs/` if Next.js APIs from training data do not match.
- Keep case-study copy concise and readable at 720px width.

## Components

Reusable components in `app/components/`:

- **`Button`** — Neobrutalist style (2px borders, 4px hard shadows, press animation). Variants: `default`, `reverse`, `neutral`.
- **`Ruler`** — Technical drawing ruler with tick marks. Use in bio section.
- **`SectionIntersection`** — Diagonal stripes + diamond marker at section corners.
- **`GridBackground`** — Grid pattern with radial fade for section backgrounds.
- **`ProjectCard`** — Project grid card with name, year, stack, description, status.

## Visual language

- Section borders: `border-b border-border-general` with `SectionIntersection` at corners.
- Bio section: `GridBackground` + vertical rulers (desktop) + neobrutalist buttons.
- Neobrutalist buttons: thick borders, hard shadows, translate on hover/active. Use `neutral` variant for dark theme.
