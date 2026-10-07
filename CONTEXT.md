# Context

## Fonts

- **`sans`**: Geist Sans (body, headings, captions)
- **`mono`**: Geist Mono (code blocks, stack tags, status, years)

## Type scale

| Token | Size | Line-height | Font |
|-------|------|-------------|------|
| `text-heading-display` | 22px | 1.3 | sans |
| `text-heading-section` | 15px | 1.4 | sans |
| `text-body` | 14px | 1.6 | sans |
| `text-caption` | 13px | 1.5 | sans |
| `text-code` | 13px | 1.5 | mono |

## Color tokens

### Light (default)

| Token | Value |
|-------|-------|
| `surface-root` | `#ffffff` |
| `text-strong` | `hsl(220, 14%, 8%)` |
| `text-default` | `hsl(220, 6%, 32%)` |
| `text-weak` | `hsl(220, 5%, 46%)` |
| `text-weaker` | `hsl(220, 6%, 62%)` |
| `border-general` | `hsl(220, 10%, 90%)` |
| `border-special` | `hsl(220, 10%, 94%)` |
| `accent` | `#1a73e8` |
| `accent-hover` | `#1558d6` |

### Dark (`html[data-theme="dark"]`)

| Token | Value |
|-------|-------|
| `surface-root` | `hsl(222, 14%, 6%)` |
| `text-strong` | `hsl(220, 20%, 96%)` |
| `text-default` | `hsl(220, 8%, 74%)` |
| `text-weak` | `hsl(220, 6%, 58%)` |
| `text-weaker` | `hsl(220, 6%, 42%)` |
| `border-general` | `hsl(222, 8%, 18%)` |
| `border-special` | `hsl(222, 8%, 14%)` |
| `accent` | `#8ab4f8` |
| `accent-hover` | `#aecbfa` |

## Spacing

| Token | Value |
|-------|-------|
| `spacing-container-px` | 64px |
| `spacing-section-py` | 40px |
| `spacing-grid-gap` | 40px |

## Audience

- **Hiring Manager**: Product-company hiring manager judging a Senior Product Engineer IC. First ten seconds are employment work (Rely), then craft. Outcome: better employed IC at a product company.
_Avoid_: Recruiter-in-general, freelance/client buyer, founder-looking-for-users

## Work origin

- **Employment work**: Products shipped inside a company (rely v2, Safe, Sorolla). Proof of collaboration, constraints, and production systems. Home hook.
_Avoid_: Client work, agency work, leading Home with the employer logo/name

- **Personal product**: Loadzone. Ownership and craft, not the job being applied for.
_Avoid_: Side project as the ten-second hook

## Products

- **rely v2** — Employment work. Next.js + Go, multi-tenant Hub of Stations, Recipe graph (Flow), real-time websockets, touch-first UI for factory floors. Honest live claim: in production on factory floors, multi-tenant / multi-site — no factory or user count. Public site: `https://relyqa.com/`. Role on the case: Frontend Lead & Product Designer.

**rely v2 thesis**: A Hub of Stations: live Preview with an OK/KO on the piece, and a Recipe graph engineers deploy to the floor.

**rely v2 Decisions**:
1. The Station is the product
2. A Recipe is a graph you deploy
3. Overlays are the operator language

- **Safe** — Employment work. Workplace safety on CCTV. Live product: `https://www.safehs.ai/`. No case page.
- **Sorolla** — Employment work. React annotation library (bbox, segmentation, OBB). Open source. No detail route until a case exists.
- **Loadzone** — Personal product. One club, live with academy staff and players. Thesis: staff wellness/load scan + one-question player check-in; Streak Cromo as habit identity.

## Home

First viewport: identity (compact), role **Senior Product Engineer**, employment thesis, contact. Rely must be visible without scrolling on a 1280×800 laptop.

1. **Hero** — Name in chrome, compact photo, role, thesis, contact. No Loadzone in the one-liner.
2. **Employment work** — rely v2, Safe, Sorolla as an editorial list (not decorative cards). Rely is the only accent-colored name.
3. **Personal product** — Loadzone + small Cromo. After employment.

No 1-Week Projects on Home.

## Case study

**rely v2** is the employment case. **Loadzone** is the personal case. Safe and Sorolla have no detail routes until written.

**About** (`/about`): how you work; Siali may appear; Porco plane is a quiet footer signature after the bio.

**Hero thesis**: Interfaces and product systems shipped under real constraints — factory floors, production teams.

**Public URL:** `https://jesusguti.dev/`

**Open Graph:** employment thesis. Not the Cromo. Not the plane.

## Page structure

### `/`

Outer bordered container (`border-general`, 1080px). Home: compact Hero, Employment work, Personal product.

### `/about`

How you work + bio. Plane at the end.

### `/projects/loadzone`

Thesis + Streak Cromo above the fold; three Decisions; proof artifacts.

### `/projects/rely-v2`

Employment case. Thesis + Preview; three Decisions; Result; proof captures.
