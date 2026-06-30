# 01 — Fix syntax error in page.tsx

Status: done

## Context

`app/page.tsx` line 13 has invalid JSX: `size={18/travel 15 -64}`. This blocks the build entirely.

## Scope

- Fix the broken JSX expression on the `<Mountains>` icon
- Remove the `travel` reference (appears to be leftover debug text)
- Verify the app builds and renders after the fix

## Acceptance criteria

- [ ] `pnpm build` succeeds with no errors
- [ ] Home page renders without runtime errors
- [ ] Mountains icon displays at a reasonable size (e.g. `size={18}`)
