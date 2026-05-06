# React Mini Projects (Vite + React Router)

Deployed: `https://react-mini-projs-cohort.vercel.app/`

## Routes

This app is an SPA using React Router. The home page (`/`) shows a UI with links to all routes.

| Path | What it shows |
|---|---|
| `/` | Home (route picker UI) |
| `/quote` | Quote |
| `/jokes` | Jokes |
| `/cats` | Random Cat |
| `/meals` | Meals Listing |
| `/users` | Random User |
| `/youtube` | YouTube Lists |

Unmatched routes render an in-app 404 page.

## Local dev

From `mini-projects/`:

- Install deps: `npm i`
- Start dev server: `npm run dev`

## Deployment note (Vercel)

Directly opening a route like `/youtube` works after refresh because `vercel.json` rewrites all paths to `index.html` (SPA fallback).
