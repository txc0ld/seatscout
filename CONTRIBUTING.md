# Contributing

## Scope

SeatScout is a frontend-first repository. Contributions should stay focused on:

- venue atlas quality
- seat-map and section-detail behavior
- UI clarity and responsiveness
- documentation and verification

Avoid unrelated cleanup in the same change.

## Local Setup

Validated on Node `25.6.0` and npm `11.8.0`.

```bash
npm install
npm run dev
```

Before opening a change, run:

```bash
npm run build
```

## Working Rules

- Preserve the existing visual identity unless the task explicitly changes it
- Prefer small, reviewable diffs
- Update docs when product behavior, setup, or architecture changes
- Keep venue facts sourceable and internally consistent
- Do not add runtime dependencies casually

## Data Changes

When editing [`src/data/venues.js`](./src/data/venues.js):

- keep naming, country, region, and venue type consistent with nearby records
- preserve deterministic section generation
- prefer official venue, operator, league, or published venue-guide sources
- add `sourceRefs` when you tighten or add venue facts

See [docs/data-atlas.md](./docs/data-atlas.md) for more detail.

## Framework Notes

- The repository now runs on Next.js App Router
- The current product shell in [`src/App.jsx`](./src/App.jsx) remains a client component
- Venue flow is still local-state based inside that shell, even though the framework is now Next.js

## Pull Requests

Every PR should include:

- a short summary of what changed
- the user-facing impact
- verification commands run
- updated docs when relevant

Use the repository pull request template and keep the branch scoped to one concern.
