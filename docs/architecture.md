# Architecture

Current as of **March 28, 2026**.

## Overview

SeatScout is a single-page React application built with Vite. It ships a curated venue atlas and derives all seat-map and section-detail behavior locally in the browser.

There is no backend, no API contract, and no runtime AI dependency in the current architecture.

## Main Modules

### `src/App.jsx`

Owns:

- homepage flow
- guided atlas entry points
- filter state
- venue-detail routing through local view state
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
3. The app derives filtered venue lists from local UI state.
4. Selecting a venue switches the app into the venue-detail view.
5. Selecting a section updates the section inspector and row-band guidance.

## Routing Model

Routing is currently local-state based rather than URL-router based. This keeps the app simple for a static deployment, but it also means:

- direct deep links do not yet exist
- browser history is not route-aware
- future public deployment may benefit from moving to URL-backed routing

## Geolocation

The nearby flow uses the browser geolocation API and computes venue proximity using haversine distance. If permission is denied or unsupported, the rest of the atlas remains fully functional.

## Verification Model

The primary repository check today is:

```bash
npm run build
```

Manual browser checks are still important because the app is interaction-heavy and visually responsive.
