# PRD: Launch

Status: ready-for-agent

## Problem Statement

The search OS is locked: a better employed IC at a product company, not freelance. The live Home still leads with Loadzone, the employment thesis still lands on a football SaaS, rely has no case, OG would share the Cromo, and `jesusguti.dev` is not on the site yet. A hiring manager cannot be contacted against the map.

## Solution

Ship the public site to the launch bar: Home is employment-first, rely v2 has a real case the Home card navigates to, the share card is the employment thesis, and the canonical hostname is live. Then humans contact. Safe and Sorolla stay cards.

## User Stories

1. As a hiring manager, I want Home to tell me in ten seconds that this person ships product interfaces in production teams, so that I do not read them as a founder or freelancer.
2. As a hiring manager, I want Employment work before Personal product, so that rely / Safe / Sorolla are the hook.
3. As a hiring manager, I want the Hero one-liner to name factory floors and production teams, so that Loadzone is not the punchline.
4. As a hiring manager, I want Loadzone still visible as a Personal product with the Streak Cromo, so that I see ownership and craft without thinking that is the job being applied for.
5. As a hiring manager, I want 1-Week Projects after the two origin blocks, so that side volume does not compete with employment work.
6. As a hiring manager, I want Home to name products, not the employer brand, so that the pitch is shipped work.
7. As a hiring manager, I want to open rely v2 from Home, so that employment work has a case I can review before a call.
8. As a hiring manager, I want that case to state an honest Result I could ask about in interview (in production on factory floors, multi-tenant / multi-site, no counts), so that I trust the rest of the page.
9. As a hiring manager, I want at most three Decisions on rely, so that I can read it at 720px without a novel.
10. As a hiring manager, I do not want invented rely screenshots, so that proof stays honest.
11. As a hiring manager, I want Safe and Sorolla visible but not fake-linked, so that I see the résumé of company work without empty cases.
12. As a hiring manager, I want Loadzone to remain a real case, so that the Personal product block still has somewhere to go.
13. As someone pasting `https://jesusguti.dev/` into Slack or LinkedIn, I want the share card to be the employment thesis, so that the Cromo does not re-sell Loadzone as the site.
14. As a hiring manager following the first-message URL, I want the canonical apex hostname to resolve, so that www and the bare domain are the same site.
15. As the candidate, I want DNS and Vercel to be the last slice, so that the public hostname is not pointed at a Loadzone-first Home.
16. As the candidate, I want this PRD not to include contacting companies, salary talk, or Safe/Sorolla cases, so that launch stays shippable.

## Implementation Decisions

- New feature directory: this PRD’s issues. Search-ready stays a locked map; do not reopen its grilling.
- Home section order and thesis copy come from the glossary, not from a redesign.
- Project cards stay the existing employment-card pattern. Only rely gains a navigation target, when its case exists.
- The rely case follows the Loadzone case shape (header, thesis, ≤3 Decisions, Result) without requiring artifacts. Proof screenshots are omitted until real ones exist.
- rely Decisions copy is HITL: not locked on the map; do not invent interview-defensible prose in an AFK pass.
- Open Graph is metadata (title/description, no Cromo image). A custom still is not required for launch.
- Canonical URL is `https://jesusguti.dev/` apex; www redirects. Deploy is HITL (human owns DNS/Vercel).
- Safe, Sorolla, About employer-brand copy, LinkedIn edits, and first-message sending are out of this PRD.

## Testing Decisions

- Test what a hiring manager sees, not file structure.
- Seams: Home (`/`), the rely case route, document metadata when the origin URL is fetched, the canonical hostname once deployed.
- A slice is done when that seam is demoable in the browser (or, for deploy, in a real browser against the public host).
- Do not add a test harness for copy. Visual/browser check is the prior art in this repo.

## Out of Scope

- Contacting companies, interviewing, salary, take-home vs live-coding
- Safe / Sorolla case pages
- Redesigning Home, cutting 1-Week, adding employer brand to Home
- Inventing rely screenshots
- LinkedIn profile edits and sending first messages
- US-only or consultancy targets

## Further Notes

Glossary: root `CONTEXT.md`. Map that locked this: `.scratch/search-ready/map.md`.
