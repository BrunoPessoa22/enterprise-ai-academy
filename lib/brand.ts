// ── BRAND CONFIG ──────────────────────────────────────────────────────────
// Single source of truth for white-labeling this prototype.
// Change these values to rebrand the entire platform for a different client.

export const brand = {
  name: "Meridian",
  productName: "Meridian Enterprise AI Academy",
  shortName: "Meridian",
  tagline: "Bring an AI-first culture to every team.",
  subtagline:
    "Executive-grade AI education for the enterprise — cohort programs, hands-on labs, and an analytics console that proves adoption.",
  // The fictional client company used throughout the admin/learner demo.
  demoCompany: "Northwind Industries",
  accreditedBy: "Meridian Institute of Applied AI",
  supportEmail: "academy@meridian.example",
  // Visual identity (Tailwind tokens live in tailwind.config.ts).
  accent: "#5b6cff",
} as const;

export type Brand = typeof brand;
