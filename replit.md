# Ready Desk Services — Landing Page

## Overview

This is a landing page website for **Ready Desk Services, LLC**, a company offering paralegal, transcription, and web design services. The application is a single-page marketing site with a contact inquiry form that stores submissions in a PostgreSQL database. The design uses a warm, professional aesthetic with sand/espresso/gold color tones, serif headings (Cormorant Garamond), and smooth scroll animations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework:** React 18 with TypeScript, bundled by Vite
- **Routing:** Wouter (lightweight client-side router) — currently just `/` (landing page) and a 404 fallback
- **UI Components:** shadcn/ui (new-york style) built on Radix UI primitives with Tailwind CSS
- **Animations:** Framer Motion for scroll-reveal effects and transitions
- **Forms:** react-hook-form with Zod validation via @hookform/resolvers
- **Data Fetching:** TanStack React Query for API mutations (contact form submission)
- **Icons:** Lucide React
- **Fonts:** Cormorant Garamond (headings) and Lato (body), loaded via Google Fonts in index.css

### Backend
- **Framework:** Express 5 running on Node.js with TypeScript (via tsx)
- **API Pattern:** A single REST endpoint — `POST /api/inquiries` for contact form submissions
- **Route Definitions:** Shared route contracts in `shared/routes.ts` with Zod schemas for input validation and response types
- **Dev Server:** Vite dev server runs as middleware in development; static files served from `dist/public` in production
- **Build:** Custom build script (`script/build.ts`) using Vite for client and esbuild for server, outputting to `dist/`

### Shared Code
- `shared/schema.ts` — Drizzle ORM table definitions and Zod insert schemas (single source of truth for types)
- `shared/routes.ts` — API route contracts with path, method, and validation schemas

### Data Storage
- **Database:** PostgreSQL via `DATABASE_URL` environment variable
- **ORM:** Drizzle ORM with `drizzle-zod` for automatic Zod schema generation from table definitions
- **Schema:** Single table `inquiries` with columns: `id` (serial PK), `name` (text), `email` (text), `message` (text), `createdAt` (timestamp)
- **Migrations:** Managed via `drizzle-kit push` (schema-push approach, no migration files needed)
- **Storage Layer:** `server/storage.ts` defines an `IStorage` interface with a `DatabaseStorage` implementation

### Key Design Decisions
1. **Monorepo structure** — Client (`client/`), server (`server/`), and shared code (`shared/`) in one repo with path aliases (`@/`, `@shared/`)
2. **Schema-first approach** — Database schema in `shared/schema.ts` generates both TypeScript types and Zod validators, shared between frontend and backend
3. **No authentication** — This is a public-facing landing page with no user accounts
4. **CSS Variables for theming** — Custom color palette defined as HSL CSS variables in `index.css`, integrated with Tailwind

## External Dependencies

- **PostgreSQL** — Primary database, connected via `DATABASE_URL` environment variable, using `pg` (node-postgres) driver with connection pooling
- **Google Fonts** — Cormorant Garamond and Lato font families loaded via CDN
- **Replit Plugins** — `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, and `@replit/vite-plugin-dev-banner` for development tooling (conditionally loaded)