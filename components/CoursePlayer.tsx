"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import {
  PlayCircle,
  CheckCircle2,
  Lock,
  FileText,
  Radio,
  ExternalLink,
  ArrowRight,
  ArrowLeft,
  Target,
  Send,
  Award,
  PartyPopper,
  ListChecks,
  BookOpen,
} from "lucide-react";
import { Shell, PhaseBadge } from "@/components/ui";
import programs from "@/lib/curriculum";
import type { Week } from "@/lib/curriculum";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";

export function CoursePlayer({ slug, weekId }: { slug: string; weekId?: string }) {
  const store = useStore();
  const router = useRouter();
  const program = programs.find((p) => p.slug === slug);

  if (!program) {
    return (
      <Shell>
        <div className="container-x py-24 text-center text-zinc-400">Program not found.</div>
      </Shell>
    );
  }

  const week =
    program.weeks.find((w) => w.id === weekId) ??
    program.weeks.find((w) => !store.isWeekComplete(slug, w.id)) ??
    program.weeks[0];

  const comp = store.programCompletion(slug);
  const unlocked = store.isWeekUnlocked(slug, week.index);

  return (
    <Shell>
      <div className="container-x grid gap-8 py-8 lg:grid-cols-[300px_1fr]">
        {/* Sidebar */}
        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <Link href={`/programs/${slug}`} className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Program overview
          </Link>
          <h2 className="mt-4 font-serif text-xl font-semibold text-white">{program.name}</h2>
          <div className="mt-3 flex items-center gap-3">
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
              <div className="h-full rounded-full bg-brand-500 transition-all" style={{ width: `${comp.pct}%` }} />
            </div>
            <span className="text-xs text-zinc-500">{comp.done}/{comp.total}</span>
          </div>

          <nav className="mt-5 space-y-1">
            {program.weeks.map((w) => {
              const done = store.isWeekComplete(slug, w.id);
              const isUnlocked = store.isWeekUnlocked(slug, w.index);
              const active = w.id === week.id;
              return (
                <button
                  key={w.id}
                  disabled={!isUnlocked}
                  onClick={() => router.push(`/learn/${slug}/${w.id}`)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition",
                    active && "bg-brand-500/15 ring-1 ring-inset ring-brand-500/30",
                    !active && isUnlocked && "hover:bg-white/[0.04]",
                    !isUnlocked && "cursor-not-allowed opacity-50"
                  )}
                >
                  {done ? (
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                  ) : isUnlocked ? (
                    <PlayCircle className={cn("h-4 w-4 shrink-0", active ? "text-brand-300" : "text-zinc-500")} />
                  ) : (
                    <Lock className="h-4 w-4 shrink-0 text-zinc-600" />
                  )}
                  <span className="min-w-0 flex-1">
                    <span className={cn("block truncate", active ? "font-medium text-white" : "text-zinc-300")}>
                      Wk {w.index}: {w.theme}
                    </span>
                  </span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Main */}
        <div>
          {!unlocked ? (
            <LockedWeek slug={slug} week={week} />
          ) : (
            <WeekContent slug={slug} week={week} program={program} />
          )}
        </div>
      </div>
    </Shell>
  );
}

function LockedWeek({ slug, week }: { slug: string; week: Week }) {
  const program = programs.find((p) => p.slug === slug)!;
  const prev = program.weeks.find((w) => w.index === week.index - 1);
  return (
    <div className="card grid place-items-center p-16 text-center">
      <span className="grid h-16 w-16 place-items-center rounded-2xl bg-white/[0.04]">
        <Lock className="h-7 w-7 text-zinc-500" />
      </span>
      <h2 className="mt-5 font-serif text-2xl font-semibold text-white">Week {week.index} is locked</h2>
      <p className="mt-2 max-w-md text-zinc-400">
        Complete <span className="text-white">Week {prev?.index}: {prev?.title}</span> — watch the
        lesson and submit the exercise — to unlock this week.
      </p>
      {prev && (
        <Link href={`/learn/${slug}/${prev.id}`} className="btn-primary mt-6">
          Go to Week {prev.index} <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}

function WeekContent({
  slug,
  week,
  program,
}: {
  slug: string;
  week: Week;
  program: (typeof programs)[number];
}) {
  const store = useStore();
  const wp = store.weekProgress(slug, week.id);
  const complete = store.isWeekComplete(slug, week.id);
  const [activeVideo, setActiveVideo] = useState(0);
  const [draft, setDraft] = useState(wp.submissionText ?? "");

  useEffect(() => {
    setDraft(store.weekProgress(slug, week.id).submissionText ?? "");
    setActiveVideo(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [week.id]);

  const nextWeek = program.weeks.find((w) => w.index === week.index + 1);
  const programComplete = store.isProgramComplete(slug);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-sm text-zinc-500">
          <span>{program.name}</span>
          <span>·</span>
          <span>Week {week.index} of {program.weekCount}</span>
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <h1 className="font-serif text-3xl font-semibold tracking-tight text-white">{week.title}</h1>
          <PhaseBadge phase={week.phase} />
          {complete && (
            <span className="chip bg-emerald-400/10 text-emerald-300 ring-emerald-400/20">
              <CheckCircle2 className="h-3.5 w-3.5" /> Completed
            </span>
          )}
        </div>
        <p className="mt-3 max-w-3xl text-zinc-400">{week.summary}</p>
      </div>

      {/* Video player */}
      <div className="card overflow-hidden">
        <div className="relative aspect-video w-full bg-gradient-to-br from-ink-800 to-ink-950">
          <div className="grid h-full place-items-center">
            <div className="text-center">
              <PlayCircle className="mx-auto h-16 w-16 text-white/80" />
              <p className="mt-3 text-sm text-zinc-400">{week.videos[activeVideo]?.title}</p>
              <p className="text-xs text-zinc-600">Pre-recorded lesson · {week.videos[activeVideo]?.durationMin} min</p>
            </div>
          </div>
          <span className="absolute left-4 top-4 chip bg-black/40 text-white ring-white/10">
            {activeVideo + 1} / {week.videos.length}
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.06] p-4">
          <p className="text-sm text-zinc-400">{week.videos[activeVideo]?.description}</p>
          <button
            onClick={() => store.markVideoWatched(slug, week.id)}
            disabled={wp.videoWatched}
            className={wp.videoWatched ? "btn-ghost" : "btn-primary"}
          >
            {wp.videoWatched ? (
              <><CheckCircle2 className="h-4 w-4" /> Watched</>
            ) : (
              <><CheckCircle2 className="h-4 w-4" /> Mark as watched</>
            )}
          </button>
        </div>
      </div>

      {/* Video playlist */}
      <div className="card p-5">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-white">
          <PlayCircle className="h-4 w-4 text-brand-400" /> Lessons
        </h3>
        <div className="mt-3 space-y-1">
          {week.videos.map((v, i) => (
            <button
              key={v.title}
              onClick={() => setActiveVideo(i)}
              className={cn(
                "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition",
                i === activeVideo ? "bg-white/[0.06]" : "hover:bg-white/[0.03]"
              )}
            >
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-white/5 text-xs text-zinc-400">
                {i + 1}
              </span>
              <span className="flex-1 text-zinc-200">{v.title}</span>
              <span className="text-xs text-zinc-500">{v.durationMin}m</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Objectives */}
        <div className="card p-5">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-white">
            <Target className="h-4 w-4 text-brand-400" /> Learning objectives
          </h3>
          <ul className="mt-3 space-y-2.5">
            {week.objectives.map((o) => (
              <li key={o} className="flex items-start gap-2.5 text-sm text-zinc-300">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" /> {o}
              </li>
            ))}
          </ul>
        </div>

        {/* Readings */}
        <div className="card p-5">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-white">
            <BookOpen className="h-4 w-4 text-brand-400" /> Curated resources
          </h3>
          <ul className="mt-3 space-y-2">
            {week.readings.map((r) => (
              <li key={r.url}>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-lg border border-white/[0.06] bg-ink-950/40 px-3 py-2.5 transition hover:border-brand-500/40"
                >
                  <span className="chip shrink-0 bg-white/5 text-zinc-400 ring-white/10">{r.type}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm text-zinc-200">{r.label}</span>
                    <span className="block text-xs text-zinc-500">{r.source}</span>
                  </span>
                  <ExternalLink className="h-4 w-4 shrink-0 text-zinc-500 group-hover:text-brand-300" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Live session */}
      {week.liveSession && (
        <div className="card flex flex-col items-start gap-4 border-emerald-500/20 bg-emerald-500/[0.04] p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-500/15 text-emerald-300">
              <Radio className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-wider text-emerald-300/80">{week.liveSession.cadence}</p>
              <p className="font-medium text-white">{week.liveSession.title}</p>
              <p className="text-sm text-zinc-400">{week.liveSession.description}</p>
            </div>
          </div>
          <Link href="/live" className="btn-ghost shrink-0">
            <Radio className="h-4 w-4" /> Live schedule
          </Link>
        </div>
      )}

      {/* Exercise */}
      <div className="card p-6">
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-gold-500" />
          <h3 className="font-serif text-xl font-semibold text-white">Weekly exercise</h3>
          {wp.exerciseSubmitted && (
            <span className="chip bg-emerald-400/10 text-emerald-300 ring-emerald-400/20">
              <CheckCircle2 className="h-3.5 w-3.5" /> Submitted
            </span>
          )}
        </div>
        <p className="mt-3 font-medium text-white">{week.exercise.title}</p>
        <p className="mt-1 text-sm text-zinc-400">{week.exercise.prompt}</p>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-white/[0.06] bg-ink-950/40 p-4">
            <p className="text-xs uppercase tracking-wider text-zinc-500">Deliverable</p>
            <p className="mt-1 text-sm text-zinc-300">{week.exercise.deliverable}</p>
            <p className="mt-2 text-xs text-zinc-500">Estimated: {week.exercise.estMinutes} min</p>
          </div>
          <div className="rounded-xl border border-white/[0.06] bg-ink-950/40 p-4">
            <p className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-zinc-500">
              <ListChecks className="h-3.5 w-3.5" /> Grading rubric
            </p>
            <ul className="mt-1.5 space-y-1">
              {week.exercise.rubric.map((r) => (
                <li key={r} className="flex items-start gap-2 text-sm text-zinc-300">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold-500" /> {r}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-4">
          <label className="text-xs uppercase tracking-wider text-zinc-500">Your submission</label>
          <textarea
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            rows={5}
            placeholder="Paste your work, a link to your deliverable, or your written response…"
            className="input mt-2 resize-y"
          />
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <button
              onClick={() => store.submitExercise(slug, week.id, draft)}
              disabled={!draft.trim()}
              className="btn-primary"
            >
              <Send className="h-4 w-4" /> {wp.exerciseSubmitted ? "Update submission" : "Submit exercise"}
            </button>
            {wp.submittedAt && (
              <span className="text-xs text-zinc-500">
                Submitted {new Date(wp.submittedAt).toLocaleDateString()} · auto-graded in prototype
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Completion / next */}
      {complete ? (
        <div className="card border-emerald-500/25 bg-emerald-500/[0.05] p-6">
          <div className="flex items-start gap-3">
            <PartyPopper className="h-6 w-6 shrink-0 text-emerald-400" />
            <div className="flex-1">
              <h3 className="font-serif text-lg font-semibold text-white">Week {week.index} complete!</h3>
              {nextWeek ? (
                <p className="mt-1 text-sm text-zinc-400">
                  Week {nextWeek.index}: {nextWeek.title} is now unlocked.
                </p>
              ) : programComplete ? (
                <p className="mt-1 text-sm text-zinc-400">
                  You finished the entire program. Your certificate is ready.
                </p>
              ) : null}
            </div>
            {nextWeek ? (
              <Link href={`/learn/${slug}/${nextWeek.id}`} className="btn-primary shrink-0">
                Next week <ArrowRight className="h-4 w-4" />
              </Link>
            ) : (
              <Link href={`/certificate/${slug}`} className="btn-gold shrink-0">
                <Award className="h-4 w-4" /> Get certificate
              </Link>
            )}
          </div>
        </div>
      ) : (
        <div className="card flex items-center gap-3 p-5 text-sm text-zinc-400">
          <Lock className="h-4 w-4 text-zinc-500" />
          Complete both steps — watch the lesson and submit the exercise — to unlock Week {week.index + 1}.
        </div>
      )}
    </div>
  );
}
