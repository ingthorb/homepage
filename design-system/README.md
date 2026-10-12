# Portfolio design system

The homepage redesign applies the [UI UX Pro Max skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/tree/main/.claude/skills/ui-ux-pro-max), read on 12 October 2026, to the existing React 17 app.

## Direction

The skill's `personal portfolio` design-system search recommended an individual, editorial portfolio with strong typography, visible structure, high contrast, and a clear progression toward contact. Its initial `developer portfolio editorial` search returned documentation-oriented patterns, which were rejected as a poor fit. The final palette and typography are deliberate adaptations for this personal portfolio rather than a verbatim generated preset.

- Warm ivory background, forest text and sections, lime accents. Semantic color tokens live in `src/App.css`.
- Locally hosted Open Sans for readable body copy and navigation; Libre Baskerville italic for expressive headings. No font-service request is required.
- One primary heading, meaningful section headings, and a logical reading order: introduction → projects → about → experience → contact.
- Six projects, with category filters and expandable feature lists. The covers are decorative illustrations, not screenshots or product logos.
- Native expandable career entries keep the timeline easy to scan without losing descriptions.
- A visible email link and direct GitHub/LinkedIn links provide useful actions without a contact form backend.

## Interaction and accessibility

Use semantic links, buttons, navigation and details/summary elements. Preserve visible focus, 44px control targets, a skip link, a mobile menu with expanded state and Escape handling, and a polite filter result count. Decorative SVGs are hidden from assistive technology. Anchor navigation works without custom scrolling scripts, and smooth scrolling respects reduced motion.

Check widths of 375, 768, 1024 and 1440 CSS pixels. Content and technology labels must reflow; avoid fixed heights for text. Keep project descriptions, source links, groups and illustration keys in `public/resumeData.json`.

The optional weather effects and old jQuery page scripts are no longer part of the page. The existing GA4 tag remains in `public/index.html`; the duplicate Universal Analytics initialization is removed. Unused legacy component/assets remain available in the repository but are not loaded by the redesigned page.
