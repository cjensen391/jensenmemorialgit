# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start        # Dev server
npm run build    # Production build
npm test         # Run tests (Jest + React Testing Library)
npx tsc --noEmit # Type-check without building
```

## Architecture

React 18 + TypeScript SPA built with Create React App. React Router v6 handles client-side routing from `App.tsx`:

- `/` → `Home.tsx`
- `/clife` → `Gallery.tsx` (photo gallery with lightbox)
- `/where` → `Where.tsx`
- `/memorial` → `Memorial.tsx`

`Navbar.tsx` renders on all routes via `App.tsx`'s layout.

### Styling

**Bootstrap 4** is the primary styling framework, loaded via CDN in `public/index.html`. Tailwind CSS is configured in `tailwind.config.js` but minimally used — prefer Bootstrap classes for consistency.

### Gallery

`Gallery.tsx` uses `react-photo-album` for the grid layout and `yet-another-react-lightbox` for the modal viewer. Photos are imported as local assets from `src/components/media/`. Photo metadata (dimensions, captions) is hardcoded in the component's photo array.

### Images

Import images directly in components (not via public folder). Dimensions must be specified in the photo array for `react-photo-album` to compute layout correctly.
