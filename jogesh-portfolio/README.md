# Jogesh Kumar Sharma — Portfolio

A calm, winter-themed ("Glacia") personal portfolio for a PL-300 certified Data Analyst &
Power BI Developer. Built with **Next.js (App Router), TypeScript, Tailwind CSS v4, Framer
Motion, and Lucide**. Light-first frosted-glass design with an "arctic night" dark mode,
fully responsive, and accessible (keyboard + reduced-motion).

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit the content

Everything the site shows — profile, tools, dashboards, experience, skills, education — lives
in **`lib/data.ts`**. Change it there; the components just render.

## Deploy (Render, free static site)

The site is a static export (`next.config.ts` sets `output: "export"`), so it deploys as a
free Render Static Site. `render.yaml` is included:

1. Push this repo to GitHub.
2. Render dashboard → **New → Blueprint** → pick the repo (reads `render.yaml`), or
   **New → Static Site** with build `npm ci && npm run build` and publish dir `out`.
3. Every push to `main` auto-deploys.

## Add a résumé download

Drop your PDF at `public/resume.pdf`, then set `PROFILE.resumeUrl = "/resume.pdf"` in
`lib/data.ts`.
