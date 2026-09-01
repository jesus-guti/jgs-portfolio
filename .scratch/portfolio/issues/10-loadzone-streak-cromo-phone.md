# 10 — Loadzone case study: phone-frame Streak Cromo

**Status:** done
**Labels:** Feature · plan:auto · risk:low
**Blocked by:** None — can start immediately

`plan:auto` · `risk:low` · area: jgs-portfolio/projects/loadzone

## What Jesús asked

> no me gusta prefiero que sea interactivo y hacemos un marco como de movil para que se vea que es otra aplicaicon y que se veria en el movil, porta un cromom y prepara el texto y la explicacion de esa parte
> /issue-forge

(Prior turn rejected screenshots / a four-card still row.)

## What I understand

On `/projects/loadzone`, add a **Decisions** slice (copy) plus an **Artifacts** demo: a CSS **phone device frame** that reads as a different app (player check-in, not the portfolio logbook), containing **one** production-like **Streak Cromo** with pointer/touch tilt. Short grill confirmed: not a full Racha sheet mock, not a tier switcher, not four cards.

**Assumptions taken**
- Tracker is this repo’s `.scratch/portfolio/issues/` (portfolio work). LoadZone Linear was not the destination; Linear MCP was also unavailable.
- Seed **Player** only (silhouette or invented adult face). No academy photos, no live player tokens, no iframe of `apps/player`.
- Wow tier: **Esmeralda** (holo, clearly “material evolved”, not Diamante spark which can look noisy in a dark logbook). Distinct club crest + name + optional POR/DEF/MED/DEL + dorsal.
- Port by copying/adapting `streak-cromo.tsx`, `streak-cromo.css`, pointer-tilt hook, and `apps/player/public/cromo/` textures into the portfolio as a **local demo island** — do not add `@repo/*` or a LoadZone package dependency.
- Case-study prose in **English** (portfolio convention). Strings *inside* the cromo stay product Spanish abbreviations (e.g. MED) as in LoadZone.
- Phone chrome is a simple bezel + home indicator, light player-app surface inside, so the foil reads as “another product.” Honor `prefers-reduced-motion` (static paint, no tilt/loop).
- Replace or add one **Decisions** item; leave other Loadzone placeholders unless they collide with this section.

## What to build

Visitor on `/projects/loadzone` reads why Recoverable Streak + Streak Cromo exist, then can tilt **one** cromo inside a mobile frame.

**Ship this decision copy** (edit for voice, keep facts):

**Title:** Recoverable Streak and the Streak Cromo

Amateur academies do not need a shame calendar. A Recoverable Streak only moves on days the Player was actually expected to check in: a non-cancelled Session they are on, with PRE/POST DailyEntry. Days without that Session neither increment nor break the count. The Streak Cromo is the identity that grows with that habit — club crest, optional playing line and shirt number, team rank as ink, chrome that changes with the streak. Material names stay off the card; the foil is the reward. It is not a staff Wellness card and not a FIFA-style stat dump.

**Demo:** Device frame around a single Esmeralda cromo. Pointer/touch tilt + sleeve glare as in player production. Reduced motion: still card.

Source of truth in LoadZone (copy, do not import the app): `apps/player/app/[token]/components/streak-cromo.tsx`, `streak-cromo.css`, tilt hook, `apps/player/public/cromo/`. Domain: Recoverable Streak / Streak Cromo in LoadZone `CONTEXT.md`.

## No-goals

- Do not change LoadZone `apps/player` production.
- Do not iframe a tokenized player URL or ship real Player photos.
- Do not embed four cromos, a rarity switcher, gyro opt-in, or the full Racha sheet (week row, streak pill).
- Do not restyle the portfolio logbook to match player sage chrome outside the device frame.
- Do not fill the rest of the Loadzone case study (problem / other decisions / result) unless required for layout.

## Acceptance criteria

- [x] `/projects/loadzone` shows the English Recoverable Streak + Streak Cromo decision (facts above, not lorem).
- [x] Below (or inline in Artifacts) a phone-like frame contains exactly one interactive Streak Cromo; the frame reads as a separate mobile app.
- [x] Pointer or touch over the cromo tilts / shines; `prefers-reduced-motion` is static.
- [x] Demo data is a seed identity, not a real academy Player.
- [x] No LoadZone runtime dependency and no player token in the portfolio app.

## Blocked by

- None — can start immediately
