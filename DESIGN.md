# Design

<!-- impeccable:design-schema 1 -->

## Direction

**Station sheet.** A white reading surface with a single Google-blue ink (`#1a73e8`). Cold dark twin. Editorial density of a technical note, not a poster. Precision over decoration — Emil Kowalski craft without copying a specific site.

## Modes

- Home: Experience (artifact leads; interface recedes)
- Case studies: Read
- About: Read + quiet signature (plane)

## Color

### Light (default)

| Role | Value | Use |
|------|-------|-----|
| surface-root | `#ffffff` | Page ground |
| text-strong | `hsl(220 14% 8%)` | Name, titles, thesis |
| text-default | `hsl(220 6% 32%)` | Body |
| text-weak | `hsl(220 5% 46%)` | Meta, stack, captions |
| text-weaker | `hsl(220 6% 62%)` | Inactive controls |
| border-general | `hsl(220 10% 90%)` | Section rules |
| border-special | `hsl(220 10% 94%)` | Soft dividers |
| accent | `#1a73e8` | Links, focus, Rely name, production |
| accent-hover | `#1558d6` | Hover |

### Dark

| Role | Value |
|------|-------|
| surface-root | `hsl(222 14% 6%)` |
| text-strong | `hsl(220 20% 96%)` |
| text-default | `hsl(220 8% 74%)` |
| text-weak | `hsl(220 6% 58%)` |
| text-weaker | `hsl(220 6% 42%)` |
| border-general | `hsl(222 8% 18%)` |
| border-special | `hsl(222 8% 14%)` |
| accent | `#8ab4f8` |
| accent-hover | `#aecbfa` |

No second accent. No gradient fills. No hard neobrutalist shadows.

## Typography

Geist Sans for reading. Geist Mono for year, stack, status, language codes.

| Token | Size / LH | Use |
|-------|-----------|-----|
| text-heading-display | 22px / 1.3 | Case titles |
| text-heading-section | 15px / 1.4 | Section labels / project names |
| text-body | 14px / 1.6 | Body |
| text-caption | 13px / 1.5 | Meta |
| text-code | 13px / 1.5 | Mono meta |

## Spacing

- Container max 1080px; case column 720px; about 640px
- Horizontal padding: 24px mobile, 64px desktop (`spacing-container-px`)
- Home block gap ~40px; list row padding 20–24px
- Section separators: 1px hairlines, not cards

## Layout principles

- Left-aligned composition; no centered hero poster
- Employment list, not card grid; Rely is the only blue name on Home
- Loadzone after employment; Cromo small, never OG
- Remove GridBackground, SectionIntersection, Ruler from the critical path
- Remove 1-Week Projects from Home

## Motion

- Link/row hover → accent in 120ms ease
- Pressable controls: `scale(0.97)` on `:active`, 160ms ease-out
- Theme swap: instant token swap (no animated flash)
- Plane: one settle <700ms ease-out, then still; no auto-rotate loop; `prefers-reduced-motion` → static / no WebGL intro
- Lightbox: opacity 160ms ease-out

## Anti-patterns

- Neobrutalism (hard offset shadows, thick borders, decorative corners)
- Purple/indigo AI defaults; cream + terracotta; broadsheet hairlines as identity
- Plane or Cromo in first viewport
- Apple / IBM alternate font themes
- Marketing metrics on cases
