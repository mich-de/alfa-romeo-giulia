# IMPLEMENTATION PLAN: Vite + React Migration

## Goal
Convert the existing static Alfa Romeo Giulia website (Vanilla HTML/CSS/JS) into a modern Component-Based architecture utilizing React and Vite for bundling and dev server, resolving the maintainability bottlenecks of a single oversized index.html.

## 1. Environment & Setup
- Initialize Vite React project footprint.
- Establish `run.bat` for local standard execution in Windows environments.
- Configure `vite.config.js` with `base: '/alfa-romeo-giulia/'` to align with the GH Pages root subpath.

## 2. Assembling File Structures
- **Global Assets**: Move `images`, `wallpapers`, and `manuale` from root to `/public/`.
- **Global Styles**: Adopt `style.css` globally.

## 3. Structural Re-Write (React Components)
Deconstruct `legacy/index.html` logic into standard `.jsx` layouts:
- `<App />`: The core layout container.
- `<Navigation />`: The header and responsive burger menu hook.
- `<Hero />`: The ken-burns carousel using functional React intervals.
- `<TechnicalSpecs />`: Technical specification blocks.
- `<Upgrades />`: Hardware and Software upgrade cards.
- `<Maintenance />`: Checklist system coupled with LocalStorage state plus the priority filters.
- `<Gallery />` & `<Lightbox />`: Image presentation integrated directly with React State.
- `<Reviews />`: Community insights section.
- `<Footer />` & Scroll-to-top implementations hooked via `useEffect`.

## 4. Finalizing
- Verify functionality of all local interactions.
- Provide Github Actions strategy for continuous deployment to `gh-pages` branch.
