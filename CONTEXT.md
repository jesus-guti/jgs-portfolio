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

## Audience

- **Hiring Manager**: The person whose ten-second judgment the site is built for. A Design Engineer / Product Designer-who-codes hiring manager. The first ten seconds are **employment work** (production systems shipped in a company), then craft. The outcome being sought is a better employed IC at a product company.
_Avoid_: Recruiter-in-general, “everyone”, freelance/client buyer, founder-looking-for-users

## Work origin

- **Employment work**: Products shipped inside a company (rely v2, Rely Cloud, Safe, Sorolla). Proof of collaboration, constraints, and production systems that are not yours alone. This is the Home hook. Home names the products, not the employer brand.
_Avoid_: Client work, agency work (unless that is actually true), leading Home with the employer logo/name

- **Personal product**: A product you own end to end. Loadzone is the only one on the site today. It is evidence of ownership and craft, not the job being applied for.
_Avoid_: Side project (implies disposable), hobby, using Loadzone as the ten-second hook

## Products

- **rely v2** — Employment work. Refactor of the original rely production interface. Next.js + Go backend, multi-tenant, multi-site, hub/agent architecture, no-code flow system, real-time websockets, touch-first UI for factory floors. Honest live claim: in production on factory floors, multi-tenant / multi-site — no factory or user count. Public product site: `https://relyqa.com/` (linked from the case, not as a substitute for it). Do not cite marketing inspection counts as a personal result. This is the employment case written before contact.

**rely v2 thesis** (case + Home navigation target): A Hub of Stations: live Preview with an OK/KO on the piece, and a Recipe graph engineers deploy to the floor.

**rely v2 Decisions** (written, in order):
1. The Station is the product (Hub list → floor Preview — not a model zoo)
2. A Recipe is a graph you deploy (Evaluación writes station status; canvas draft is not runtime)
3. Overlays are the operator language (same picture on Preview and review)

Analytics stays as a proof screenshot, not a chapter. Role on the case: Frontend Lead & Product Designer.

- **Safe** — Employment work. Workplace safety (PRL) on existing CCTV: real-time risk events, audits and reporting, tunnel-based private network access. Live product: `https://www.safehs.ai/`. No case page. Do not cite marketing headcounts (people protected, events detected) as a personal result.
- **Sorolla** — Employment work. React component library for image/video annotation (b-box, segmentation, OBB). Published to npm as part of the siali-toolkit monorepo. It began as the Rely Cloud labeller.
- **Rely Cloud** — Employment work, 2023. Sits on Home directly after rely v2. No case page and no Decisions section. In-house multi-tenant platform that 200 organizations use to label images and train computer-vision models. Stack: React, TypeScript, Vite, MobX, FastAPI (Python), ClearML. Home entry is a bold lead, three highlights, and a collapsible context. Plain React with Vite, not Next, because the backend was already FastAPI.
- **Loadzone** — Personal product, 2026. Early-stage data app for Tercera División football clubs in Cantabria. Honest live claim: all 5 clubs approached so far have committed; the product is still being built. Own product. No Decisions section. Home and case use a bold lead, three highlights, and a collapsible context. Status reads `in progress`.

**Loadzone thesis** (case + Home): Early-stage data app for those clubs. Spreadsheet habits became a simple interface, the data model matches their real volume (around 1,000×1,000 records), and it was built end to end through the first clubs using it.

The Streak Cromo stays as a proof visual. Its on-card language follows the page locale. Injuries and the setup checklist stay as proof screenshots, not chapters.

## Project card

**Employment work** on Home: the hook. Order: rely v2, Rely Cloud, Safe, Sorolla. rely navigates to its case; the case links out to `https://relyqa.com/`. Rely Cloud is an entry on Home, not a case. Safe navigates to the live product (`https://www.safehs.ai/`), not a case. Sorolla is not a link until a real case exists.

**Loadzone** on Home: Personal product card with a Streak Cromo thumbnail, after Employment work. The Cromo is the only Home visual. Loadzone navigates. It is not the ten-second hook.

## Home

The first viewport is identity, not biography: name in chrome, compact photo, title, one thesis line, compact contact. The three-paragraph bio is not on Home.

1. **Hero** — Who you are in one glance (Frontend & Product Engineering + employment thesis). Loadzone is not in the one-liner.
2. **Employment work** — rely v2, Rely Cloud, Safe, Sorolla; the hook
3. **Personal product** — Loadzone + Streak Cromo; ownership and craft, not the job pitch
4. **1-Week Projects** — Dense list after the two origin blocks; does not compete with them. The Storyblok row names the live rely and Safe marketing sites; it does not replace the employment cards.

## Case study

**rely v2** is the employment case. Honest Result: in production on factory floors, multi-tenant / multi-site. Real captures: Preview, Hub Stations, Recipe flow, Overlays; Analytics is proof, not a chapter. Public site `https://relyqa.com/` is linked from the case. Safe has no case — the Home card goes to `https://www.safehs.ai/`. Sorolla has no detail route until a loop asks.

**Loadzone** leads with the bold thesis, three highlights, and a collapsible context. The **Streak Cromo** stays on the page. Status: `in progress`. No Decisions section. Remaining screenshots are proof.

**About** (`/about`): the longer biography. Not on Home. Employer brand may appear here, not on Home.

**Hero thesis** (Home, under the title): Interfaces and product systems shipped under real constraints — factory floors, production teams.

**Public URL:** Canonical `https://jesusguti.dev/`. Apex only; `www` redirects.

**Open Graph:** employment thesis. Not the Streak Cromo.

**LinkedIn (one English profile):** Headline Frontend & Product Engineering. About opens with the Hero thesis. Featured is the canonical site URL only — not Loadzone, not the rely case.

**First message:** English, 8–12 lines, one URL (Home), no PDF. Same body both tracks; only the role name changes. Opens with employment; one line on Loadzone as personal product.

Other case studies are not published as pages until written.

## Page structure

### `/`

Outer bordered container (`border-general`, 1080px max-width). Home: compact Hero, Employment work, Personal product, 1-Week Projects.

### `/about`

Longer biography (the three paragraphs removed from Home).

### `/projects/loadzone`

Thesis + Streak Cromo above the fold; then at most three Decisions and proof artifacts.

### `/projects/rely-v2`

Employment case. Thesis + Preview above the fold; three Decisions; honest Result; proof captures (Hub, Recipe, Overlays, Analytics).

Safe and Sorolla have no detail routes until a real case exists.
