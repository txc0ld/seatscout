# SeatScout

SeatScout is a glass-forward Next.js seat-mapping app for major stadiums and arenas. It helps fans browse venues, inspect bowl layouts, and compare section quality before buying tickets.

## Current Snapshot

Current as of **March 28, 2026**.

- 49 curated venues
- 1,319 generated section profiles
- 17 countries across 7 continents
- 16 United States venues
- 17 Australia venues, including every state and territory capital city market
- 11 featured venue profiles on the homepage

## Product Highlights

- Searchable global venue atlas with live filtering by continent, venue type, and sort order
- Guided entry paths for common journeys such as nearby venues, USA coverage, Australia coverage, and indoor arenas
- Interactive venue detail pages with bowl maps, section inspection, ratings, pros and tradeoffs, and row-band guidance
- Deterministic local venue dataset with no runtime AI dependency
- Responsive glass-style UI built on the existing SeatScout visual identity

## Tech Stack

- Next.js 16 App Router
- React 19
- React DOM 19
- TypeScript 6 baseline
- Validated locally on Node `25.6.0` and npm `11.8.0`

## Getting Started

```bash
npm install
npm run dev
```

Open the local app served by Next.js, then use the home hero or atlas controls to move into venue detail pages.

## Scripts

```bash
npm run dev
npm run build
npm run start
```

## Repository Structure

```text
app/
  layout.tsx            Next.js root layout and metadata
  page.tsx              App Router entry point
src/
  App.jsx               Client application shell and UI flow
  data/venues.js        Curated venue atlas and generated section data
  styles.css            Global presentation layer and responsive UI system
public/
  favicon.svg          App icon
docs/
  architecture.md      App structure and UI/data flow
  data-atlas.md        Venue atlas model, sourcing, and update guidance
.github/
  workflows/ci.yml     Build verification on GitHub Actions
next.config.ts         Next.js framework config
tsconfig.json          TypeScript project config
```

## Data Model

The venue atlas lives in [`src/data/venues.js`](./src/data/venues.js).

- `venues` exposes the full derived venue list
- `featuredVenues` drives the homepage spotlight and rotating hero
- `geography` groups venue coverage by continent and country
- `getNearbyVenues()` uses lat/lng plus haversine distance for location-based discovery
- `buildSectionDetail()` turns deterministic seat metadata into user-facing section guidance

The dataset is curated rather than exhaustive. The current focus is strong United States and Australia coverage, with global anchor venues across the rest of the atlas.

## Documentation

- [Architecture](./docs/architecture.md)
- [Data atlas](./docs/data-atlas.md)
- [Contributing](./CONTRIBUTING.md)
- [Security policy](./SECURITY.md)

## Verification

Latest local validation for this published state:

```bash
npm run build
```

Manual browser verification was also completed on desktop and mobile layouts on March 28, 2026.

## Roadmap

- Continue widening United States market density
- Backfill `sourceRefs` across older venue records
- Expand hidden venue metadata for future purchase-path integrations
- Add optional tests around atlas filtering and venue detail routing

## Notes

- The app intentionally preserves the existing SeatScout palette and typography defined during the original frontend-polish pass through the Next.js migration.
- There is no backend in this repository. All venue and seat-map behavior ships from the local curated atlas.
