# 09 — Home: 1-Week Projects section

Status: done

## Context

The home page needs a third section below the Projects grid: a dense, changelog-style list of short consulting/side projects completed in roughly one week.

## Depends on

- #03 (Projects grid — this section goes below it)

## List structure

Each entry is a single line:

```
Year — Project name. Short description. Stack. Duration.
```

Example entries (placeholder — real content TBD):

```
2024 — Landing page for [Client]. Storybook + Tailwind. 5 days.
2024 — Egg grading vision system. Python + OpenCV. 7 days.
2024 — Racing exercise tracking. Pose estimation models. 6 days.
```

## Scope

- Create a "1-Week Projects" section below the Projects grid
- Section header with title and optional one-line description
- Dense list using mono font for metadata (year, duration) and sans for description
- Separated from the Projects grid by a border-top
- Placeholder entries (3-5 items with lorem-style descriptions matching the real project types)

## Acceptance criteria

- [ ] Section renders below the Projects grid
- [ ] Each entry is a single readable line
- [ ] Mono font used for year and duration
- [ ] Section is visually distinct from the Projects grid (border separator)
- [ ] Responsive on mobile (lines may wrap but remain readable)
