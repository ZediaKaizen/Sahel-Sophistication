# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## The Sahel Initiative (`artifacts/sahel-initiative`)

React 19 + Vite + Tailwind CSS v4 + Framer Motion multi-page website.

### Pages & Routes
- `/` — Home: cinematic hero, impact stats, mission teaser, projects preview, testimonial, CTA
- `/about` — About: full mission, Why Water, How It Works, volunteer callout
- `/our-projects` — Projects: grid of 3 real projects with photos, excerpts + "View project" links
- `/our-projects/:slug` — Project detail: hero, stats strip, long-form body, photo gallery, lightbox, CTA
  - Slugs: `kiru-medile-tiga`, `jirgabawa`, `kawo-mariri`
- `/blog` — Blog: post cards with real cover images
- `/support-us` — Support Us: interactive donation widget (amount picker + custom input)
- `/contact` — Contact: contact form + contact info

### Shared components
- `src/components/Navbar.tsx` — sticky frosted-glass nav with real logo + wouter Links + mobile hamburger
- `src/components/Footer.tsx` — full-width footer with logo + links + contact info
- `src/lib/animations.tsx` — shared Framer Motion variants (`fadeUp`, `staggerContainer`) + `CountUp`

### Logo files (in `public/`)
- `/logo-light.png` — white text + coloured drops — use on dark backgrounds (nav, footer)
- `/logo-dark.png` — dark text + coloured drops — use on light/white backgrounds

### Routing
- Uses `wouter` — `<Link>` for all internal nav, `<Switch>`/`<Route>` in App.tsx
- `ScrollToTop` component in App.tsx resets scroll position on route change
