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

## Page structure

### `/`

Outer bordered container (`border-general`, 1080px max-width) containing:

- **Header**: full-width, `border-b` (`border-general`), `py-8`, `px-[--spacing-container-px]`, internal content aligned with sections
- **Content sections**: each with `px-[--spacing-container-px] py-[--spacing-section-py]`

### `/projects/[slug]`

Case Study detail (layout TBD).
