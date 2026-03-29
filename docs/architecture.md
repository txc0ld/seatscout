# Architecture

Current as of **March 28, 2026**.

## Overview

SeatScout is a Next.js App Router application with a client-heavy seat-mapping shell. It ships a curated venue atlas and derives all seat-map and section-detail behavior locally in the browser.

There is no backend, no API contract, and no runtime AI dependency in the current architecture.

## Main Modules

### `app/layout.tsx`

Owns:

- root HTML shell
- global metadata
- favicon and viewport settings
- global stylesheet import

### `app/page.tsx`

Owns:

- the App Router entry point
- mounting the client-side SeatScout shell into the default route

### `src/App.jsx`

Owns:

- homepage flow
- guided atlas entry points
- filter state
- venue-detail routing through local view state inside the client shell
- geolocation request flow
- reveal and entrance motion helpers

Key UI surfaces:

- hero
- quick-start journeys
- nearby venues
- coverage summary
- featured spotlight
- atlas command bar
- venue profile
- section inspector

### `src/data/venues.js`

Owns:

- raw curated venue records
- deterministic section generation
- continent grouping
- nearby venue calculation
- section-detail narrative generation

Key exports:

- `venues`
- `featuredVenues`
- `geography`
- `getNearbyVenues(position, limit)`
- `formatDistance(distanceKm)`
- `buildSectionDetail(section, venue)`

### `src/styles.css`

Owns:

- global tokens and layout rhythm
- glass surfaces and sticky navigation
- responsive breakpoints
- hover and reveal motion
- venue-map presentation

## Data Flow

1. `rawVenues` are curated manually.
2. `buildVenueProfile()` adds `slug` and generated `sections`.
3. `app/page.tsx` mounts the client application shell.
4. The app derives filtered venue lists from local UI state.
5. Selecting a venue switches the app into the venue-detail view.
6. Selecting a section updates the section inspector and row-band guidance.

## Routing Model

The application now uses Next.js App Router at the framework level, but the product flow inside the main client shell is still local-state based rather than URL-route based. This keeps the current experience simple while leaving room for future deep-linking. It also means:

- direct deep links do not yet exist
- browser history is not route-aware
- future venue pages may benefit from moving to URL-backed routing within the Next app

## Geolocation

The nearby flow uses the browser geolocation API and computes venue proximity using haversine distance. If permission is denied or unsupported, the rest of the atlas remains fully functional.

## Verification Model

The primary repository check today is:

```bash
npm run build
```

Manual browser checks are still important because the app is interaction-heavy and visually responsive.
