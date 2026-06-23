# Meridian — Enterprise AI Academy (Prototype)

A clickable, white-label prototype of a B2B AI-education platform — the kind of
executive-grade learning experience companies use to bring an AI-first culture to
every team (benchmarked against MIT Sloan / Stanford / HBS exec-ed).

> **Prototype only.** No backend, no real auth, no payments. All state (enrollment,
> progress, submissions, certificates) lives in the browser via `localStorage`.

## What's inside

| Area | Route | Highlights |
| --- | --- | --- |
| Marketing site | `/` | Hero, methodology, features, program catalog, testimonial |
| Program catalog | `/programs` | Four tracks built on the **Diagnose → Personalize → Scale** method |
| Program detail | `/programs/[slug]` | Full week-by-week curriculum, phases, enroll & start |
| Learner dashboard | `/dashboard` | Progress rings, streaks, "continue learning", live schedule, certificates |
| Course player | `/learn/[slug]/[weekId]` | Pre-recorded video, lessons, readings, **graded weekly exercise**, **sequential unlocking** |
| Live classes | `/live` | Upcoming cohort sessions + recordings |
| Admin console | `/admin` | Company adoption analytics — engagement charts, completion by dept, employee table |
| Employee detail | `/admin/employees/[id]` | Per-employee week progress, submissions, engagement |
| Certificate | `/certificate/[slug]` | Accredited, downloadable/printable certificate (unlocks on completion) |

## The methodology

Every program runs on a three-phase model:

1. **Diagnose** — baseline AI literacy, map workflows, prioritize use cases.
2. **Personalize** — role-specific, hands-on building against real work.
3. **Scale** — deploy, measure ROI, govern, and embed an AI-first culture.

Programs: **6-week Foundations**, **9-week Applied AI for Teams**, **12-week AI Builders**,
**18-week AI Transformation** — 45 fully-written weekly modules in total.

## Key interactions to try

- Enroll in a program, open a week, **mark the video watched** and **submit the exercise** —
  the next week unlocks. Locked weeks can't be skipped.
- Complete every week of a program to unlock the **certificate** (Download / Print).
- Toggle **Learner / Admin** in the top-right to switch personas.

## White-labeling

Edit `lib/brand.ts` to rebrand (name, taglines, demo company, accreditor). Colors live in
`tailwind.config.ts`.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build / deploy

Static export (`output: 'export'`) → deploys to GitHub Pages via `.github/workflows/deploy.yml`
on every push to `main`.

```bash
npm run build      # outputs ./out
```

Built with Next.js 15 (App Router) · TypeScript · Tailwind CSS · Recharts · Lucide.
