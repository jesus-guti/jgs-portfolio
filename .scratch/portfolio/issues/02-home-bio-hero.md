# 02 — Home: Bio/Hero refinement

Status: done

## Context

The Bio/Hero section exists in `app/page.tsx` but needs refinement:
- Social links (GitHub, LinkedIn, Email) need better visual weight and hierarchy
- The initials avatar ("JG") could be replaced with the profile photo (`public/jesus-profile.jpeg`) or kept as-is — decision pending during implementation
- The `ThemeToggle` component exists but is unused — decide whether to integrate it or remove it
- The empty `<nav>` element should either be populated or removed

## Scope

- Improve social links: larger icons, more spacing, or a different layout that gives them more presence without creating a separate section
- Clean up unused elements (empty nav, unused ThemeToggle)
- Optionally use `jesus-profile.jpeg` instead of initials avatar
- Ensure responsive behavior on mobile (current `px-container-px: 64px` may be too wide on small screens)

## Acceptance criteria

- [ ] Social links are visually prominent and clearly clickable
- [ ] No dead/unused elements remain in the Bio section
- [ ] Bio section renders correctly on mobile (≤ 640px)
- [ ] No layout shift or overflow issues
