"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import programs from "@/lib/curriculum";

// ── Types ───────────────────────────────────────────────────────────────────
export type Role = "learner" | "admin";

interface WeekProgress {
  videoWatched: boolean;
  exerciseSubmitted: boolean;
  submissionText?: string;
  submittedAt?: string;
  completedAt?: string;
}

type ProgramProgress = Record<string, WeekProgress>; // weekId -> progress

interface StoreState {
  role: Role;
  learnerName: string;
  enrolled: string[]; // program slugs
  primaryProgram: string; // slug used on dashboard
  progress: Record<string, ProgramProgress>; // slug -> weekId -> progress
}

interface StoreApi extends StoreState {
  ready: boolean;
  setRole: (r: Role) => void;
  setPrimaryProgram: (slug: string) => void;
  enroll: (slug: string) => void;
  markVideoWatched: (slug: string, weekId: string) => void;
  submitExercise: (slug: string, weekId: string, text: string) => void;
  resetProgress: () => void;
  // selectors
  weekProgress: (slug: string, weekId: string) => WeekProgress;
  isWeekComplete: (slug: string, weekId: string) => boolean;
  isWeekUnlocked: (slug: string, weekIndex: number) => boolean;
  programCompletion: (slug: string) => { done: number; total: number; pct: number };
  isProgramComplete: (slug: string) => boolean;
}

const STORAGE_KEY = "meridian.v1";

const defaultState: StoreState = {
  role: "learner",
  learnerName: "Alex Morgan",
  enrolled: ["9-week-applied-ai", "6-week-foundations"],
  primaryProgram: "9-week-applied-ai",
  progress: {},
};

// Seed a believable starting point so the demo looks alive on first load.
function seed(state: StoreState): StoreState {
  const seeded = structuredClone(state);
  const prog = programs.find((p) => p.slug === state.primaryProgram);
  if (prog) {
    seeded.progress[prog.slug] = seeded.progress[prog.slug] ?? {};
    // Complete the first 3 weeks of the primary program.
    prog.weeks.slice(0, 3).forEach((w) => {
      seeded.progress[prog.slug][w.id] = {
        videoWatched: true,
        exerciseSubmitted: true,
        submissionText:
          "Submitted during onboarding. (Demo content — replace with your own work.)",
        submittedAt: "2026-06-10T10:00:00.000Z",
        completedAt: "2026-06-10T10:30:00.000Z",
      };
    });
  }
  return seeded;
}

const StoreContext = createContext<StoreApi | null>(null);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<StoreState>(defaultState);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        setState(JSON.parse(raw));
      } else {
        const seeded = seed(defaultState);
        setState(seeded);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(seeded));
      }
    } catch {
      setState(seed(defaultState));
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state, ready]);

  const api = useMemo<StoreApi>(() => {
    const weekProgress = (slug: string, weekId: string): WeekProgress =>
      state.progress[slug]?.[weekId] ?? { videoWatched: false, exerciseSubmitted: false };

    const isWeekComplete = (slug: string, weekId: string) => {
      const wp = weekProgress(slug, weekId);
      return wp.videoWatched && wp.exerciseSubmitted;
    };

    const isWeekUnlocked = (slug: string, weekIndex: number) => {
      if (weekIndex <= 1) return true;
      const prog = programs.find((p) => p.slug === slug);
      if (!prog) return false;
      const prev = prog.weeks.find((w) => w.index === weekIndex - 1);
      if (!prev) return false;
      return isWeekComplete(slug, prev.id);
    };

    const programCompletion = (slug: string) => {
      const prog = programs.find((p) => p.slug === slug);
      if (!prog) return { done: 0, total: 0, pct: 0 };
      const done = prog.weeks.filter((w) => isWeekComplete(slug, w.id)).length;
      const total = prog.weeks.length;
      return { done, total, pct: total ? (done / total) * 100 : 0 };
    };

    const isProgramComplete = (slug: string) => {
      const c = programCompletion(slug);
      return c.total > 0 && c.done === c.total;
    };

    const update = (fn: (s: StoreState) => void) =>
      setState((prev) => {
        const next = structuredClone(prev);
        fn(next);
        return next;
      });

    return {
      ...state,
      ready,
      setRole: (r) => update((s) => void (s.role = r)),
      setPrimaryProgram: (slug) =>
        update((s) => {
          s.primaryProgram = slug;
          if (!s.enrolled.includes(slug)) s.enrolled.push(slug);
        }),
      enroll: (slug) =>
        update((s) => {
          if (!s.enrolled.includes(slug)) s.enrolled.push(slug);
        }),
      markVideoWatched: (slug, weekId) =>
        update((s) => {
          s.progress[slug] = s.progress[slug] ?? {};
          const wp = s.progress[slug][weekId] ?? { videoWatched: false, exerciseSubmitted: false };
          wp.videoWatched = true;
          if (wp.videoWatched && wp.exerciseSubmitted && !wp.completedAt)
            wp.completedAt = new Date().toISOString();
          s.progress[slug][weekId] = wp;
        }),
      submitExercise: (slug, weekId, text) =>
        update((s) => {
          s.progress[slug] = s.progress[slug] ?? {};
          const wp = s.progress[slug][weekId] ?? { videoWatched: false, exerciseSubmitted: false };
          wp.exerciseSubmitted = true;
          wp.submissionText = text;
          wp.submittedAt = new Date().toISOString();
          if (wp.videoWatched && wp.exerciseSubmitted && !wp.completedAt)
            wp.completedAt = new Date().toISOString();
          s.progress[slug][weekId] = wp;
        }),
      resetProgress: () => {
        const seeded = seed(defaultState);
        setState(seeded);
      },
      weekProgress,
      isWeekComplete,
      isWeekUnlocked,
      programCompletion,
      isProgramComplete,
    };
  }, [state, ready]);

  return <StoreContext.Provider value={api}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within StoreProvider");
  return ctx;
}
