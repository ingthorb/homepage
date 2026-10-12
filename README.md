# Ingþór Birkir Árnason — Homepage

React portfolio with professional experience and personal projects: DeckMate, PadelHub, and ChessAITutor.

## Development

Use **Node.js 22**. The version is configured in `.nvmrc`, `package.json`, and `netlify.toml`.

```sh
nvm install
nvm use
npm ci
npm start
```

If a hosted agent environment explicitly selects Node.js 16, change its runtime setting to Node.js 22 and rebuild the environment. Repository configuration applies when the environment honors `.nvmrc`.

## Checks

```sh
CI=true npm test -- --watchAll=false --runInBand
npm run build
```

The production build is written to `build/`. Netlify uses Node.js 22 and the build command in `netlify.toml`.

## Content

Edit `public/resumeData.json` for the biography, experience, skills, and project cards. Page metadata is in `public/index.html`.

Career details were checked against [LinkedIn](https://www.linkedin.com/in/ingthorb/) on 12 October 2026, including NOVA Iceland from October 2024, Swisscom through September 2024, and earlier employment dates. The existing education and AWS certification entries are retained. The former Swiss street address, phone number, and old downloadable CV link were replaced with the current city, email, and LinkedIn profile.

Project descriptions were checked against the live sites and local project documentation:

- [DeckMate](https://www.deckmate.io/): invite-only trips, person cards, random draws, challenges, and private moments; React/TypeScript web, Express/Supabase backend, and native iOS/Android clients. Native clients are described as project work, without claiming App Store availability.
- [PadelHub](https://padelhub.is/): tournament pairing and scoring, private groups, sessions, and standings; Next.js, Prisma, and PostgreSQL.
- [ChessAITutor](https://chessaitutor.net/): AI opponents at three levels, interactive lessons, and chess puzzles; Next.js, React, and chess.js.
- [Bilabud.is](https://bilabud.is/): Icelandic RC vehicle store with product categories, search, special offers, stock information, and a shopping basket; description checked against the live site.
- [Gluggasalan.is](https://www.gluggasalan.is/): client website for a window supplier in Selfoss, listed on LinkedIn for February–June 2025.
- Travelade remains listed as earlier professional work.

## Weather and analytics

The header keeps the original photograph taken in Bern. Optional weather animation now follows Reykjavík. Set `REACT_APP_API` to your WeatherAPI key in a local environment file to enable it; without a key, weather requests are skipped. Client-side environment variables are public in the compiled app.

The existing Google Analytics integration is retained.

[![Netlify Status](https://api.netlify.com/api/v1/badges/915cc68a-93af-4f91-b0b0-caafb56668f7/deploy-status)](https://app.netlify.com/sites/dainty-kleicha-cba9e5/deploys)
