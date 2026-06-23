"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  PlayCircle,
  FileText,
  Radio,
  Target,
  Clock,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Shell, PhaseBadge } from "@/components/ui";
import programs from "@/lib/curriculum";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";

export default function ProgramDetail({ slug }: { slug: string }) {
  const program = programs.find((p) => p.slug === slug);
  const { enrolled, setPrimaryProgram, programCompletion } = useStore();

  if (!program) return notFound();
  const isEnrolled = enrolled.includes(program.slug);
  const comp = programCompletion(program.slug);

  const totalVideos = program.weeks.reduce((s, w) => s + w.videos.length, 0);
  const totalMinutes = program.weeks.reduce(
    (s, w) => s + w.videos.reduce((a, v) => a + v.durationMin, 0),
    0
  );
  const liveCount = program.weeks.filter((w) => w.liveSession).length;

  return (
    <Shell>
      <section className="container-x py-12">
        <Link href="/programs" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white">
          <ArrowLeft className="h-4 w-4" /> All programs
        </Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          {/* Left: header + curriculum */}
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="chip bg-white/5 text-zinc-300 ring-white/10">{program.level}</span>
              {program.tags.map((t) => (
                <span key={t} className="chip bg-brand-400/10 text-brand-300 ring-brand-400/20">
                  {t}
                </span>
              ))}
            </div>
            <h1 className="mt-4 font-serif text-5xl font-semibold tracking-tight text-white">
              {program.name}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-zinc-400">{program.heroSummary}</p>

            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm text-zinc-400">
              <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-brand-400" /> {program.weekCount} weeks</span>
              <span className="flex items-center gap-2"><PlayCircle className="h-4 w-4 text-brand-400" /> {totalVideos} videos · {Math.round(totalMinutes / 60)}h</span>
              <span className="flex items-center gap-2"><Radio className="h-4 w-4 text-brand-400" /> {liveCount} live sessions</span>
              <span className="flex items-center gap-2"><Target className="h-4 w-4 text-brand-400" /> {program.weeks.length} graded exercises</span>
            </div>

            {/* Phases */}
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {program.phases.map((ph) => (
                <div key={ph.name} className="card p-4">
                  <PhaseBadge phase={ph.name} />
                  <p className="mt-2 text-sm font-medium text-white">{ph.tagline}</p>
                  <p className="mt-1 text-xs text-zinc-500">{ph.weeks}</p>
                </div>
              ))}
            </div>

            {/* Curriculum */}
            <h2 className="mt-12 font-serif text-2xl font-semibold text-white">Curriculum</h2>
            <p className="mt-1 text-sm text-zinc-500">
              {program.weekCount} weeks · one unlock at a time. Each week ends with a graded deliverable.
            </p>
            <div className="mt-6 space-y-3">
              {program.weeks.map((w) => (
                <details key={w.id} className="card group overflow-hidden">
                  <summary className="flex cursor-pointer list-none items-center gap-4 p-5">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-500/10 font-serif text-sm font-semibold text-brand-200">
                      {w.index}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <PhaseBadge phase={w.phase} />
                        <span className="text-xs text-zinc-500">{w.videos.length} videos</span>
                      </div>
                      <p className="mt-1 truncate font-medium text-white">{w.title}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-zinc-500 transition group-open:rotate-90" />
                  </summary>
                  <div className="border-t border-white/[0.06] px-5 py-5">
                    <p className="text-sm text-zinc-400">{w.summary}</p>
                    <div className="mt-4 grid gap-1.5">
                      {w.videos.map((v) => (
                        <div key={v.title} className="flex items-center gap-2.5 text-sm text-zinc-300">
                          <PlayCircle className="h-4 w-4 shrink-0 text-brand-400" />
                          <span className="flex-1">{v.title}</span>
                          <span className="text-xs text-zinc-500">{v.durationMin}m</span>
                        </div>
                      ))}
                      <div className="flex items-center gap-2.5 text-sm text-zinc-300">
                        <FileText className="h-4 w-4 shrink-0 text-gold-500" />
                        <span className="flex-1">Exercise: {w.exercise.title}</span>
                        <span className="text-xs text-zinc-500">{w.exercise.estMinutes}m</span>
                      </div>
                      {w.liveSession && (
                        <div className="flex items-center gap-2.5 text-sm text-zinc-300">
                          <Radio className="h-4 w-4 shrink-0 text-emerald-400" />
                          <span className="flex-1">Live: {w.liveSession.title}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* Right: sticky enroll card */}
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <div className="card p-6 shadow-soft">
              <div className="aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-brand-900/40 to-ink-950">
                <div className="grid h-full place-items-center">
                  <PlayCircle className="h-14 w-14 text-white/80" />
                </div>
              </div>
              <p className="mt-5 text-xs uppercase tracking-wider text-zinc-500">Outcome</p>
              <p className="mt-1 text-white">{program.outcome}</p>

              {isEnrolled && comp.done > 0 && (
                <div className="mt-5 rounded-xl border border-white/[0.06] bg-ink-950/40 p-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zinc-400">Your progress</span>
                    <span className="font-medium text-white">{comp.done}/{comp.total} weeks</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-brand-500" style={{ width: `${comp.pct}%` }} />
                  </div>
                </div>
              )}

              <div className="mt-5 space-y-2.5">
                <Link
                  href={`/learn/${program.slug}`}
                  onClick={() => setPrimaryProgram(program.slug)}
                  className="btn-primary w-full"
                >
                  {isEnrolled ? "Continue learning" : "Enroll & start"} <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/dashboard" className="btn-ghost w-full">
                  Go to my dashboard
                </Link>
              </div>

              <ul className="mt-6 space-y-2.5 text-sm text-zinc-400">
                {[
                  "Self-paced, on-demand video",
                  "Weekly graded exercises",
                  "Live cohort sessions",
                  "Accredited certificate on completion",
                ].map((b) => (
                  <li key={b} className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" /> {b}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center gap-2 rounded-xl bg-brand-500/5 p-3 text-xs text-brand-200">
                <Sparkles className="h-4 w-4 shrink-0" />
                Prototype: enrollment and progress are stored locally in your browser.
              </div>
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}
