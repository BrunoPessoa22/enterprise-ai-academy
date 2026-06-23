"use client";

import Link from "next/link";
import {
  ArrowRight,
  PlayCircle,
  Flame,
  Trophy,
  CalendarDays,
  Radio,
  CheckCircle2,
  Lock,
  BookOpen,
  Award,
} from "lucide-react";
import { Shell, ProgressRing, PhaseBadge, Stat } from "@/components/ui";
import programs from "@/lib/curriculum";
import { useStore } from "@/lib/store";
import { brand } from "@/lib/brand";

export default function DashboardPage() {
  const store = useStore();
  const { learnerName, enrolled, primaryProgram, ready } = store;

  if (!ready) return <Shell><div className="container-x py-24 text-zinc-500">Loading…</div></Shell>;

  const primary = programs.find((p) => p.slug === primaryProgram) ?? programs[0];
  const comp = store.programCompletion(primary.slug);

  // Find the current (first incomplete unlocked) week.
  const currentWeek =
    primary.weeks.find((w) => !store.isWeekComplete(primary.slug, w.id)) ?? primary.weeks[primary.weeks.length - 1];

  const enrolledPrograms = enrolled
    .map((s) => programs.find((p) => p.slug === s))
    .filter(Boolean) as typeof programs;

  const completedWeeksTotal = enrolledPrograms.reduce(
    (s, p) => s + store.programCompletion(p.slug).done,
    0
  );
  const certs = enrolledPrograms.filter((p) => store.isProgramComplete(p.slug));

  // Upcoming live sessions across enrolled programs.
  const liveSessions = enrolledPrograms
    .flatMap((p) =>
      p.weeks
        .filter((w) => w.liveSession)
        .map((w) => ({ program: p.name, slug: p.slug, week: w.index, session: w.liveSession! }))
    )
    .slice(0, 4);

  return (
    <Shell>
      <section className="container-x py-12">
        {/* Greeting */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Welcome back</p>
            <h1 className="mt-2 font-serif text-4xl font-semibold tracking-tight text-white">
              Hello, {learnerName.split(" ")[0]}.
            </h1>
            <p className="mt-2 text-zinc-400">
              You're enrolled at {brand.demoCompany}. Keep your streak alive — one week at a time.
            </p>
          </div>
          <Link href={`/learn/${primary.slug}`} className="btn-primary">
            <PlayCircle className="h-4 w-4" /> Resume {primary.name}
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat label="Current streak" value="5 days" sub="Personal best: 12" icon={<Flame className="h-4 w-4" />} />
          <Stat label="Weeks completed" value={completedWeeksTotal} sub={`Across ${enrolledPrograms.length} programs`} icon={<CheckCircle2 className="h-4 w-4" />} />
          <Stat label="Certificates" value={certs.length} sub="Earned & verifiable" icon={<Trophy className="h-4 w-4" />} />
          <Stat label="Active program" value={`${Math.round(comp.pct)}%`} sub={primary.name} icon={<BookOpen className="h-4 w-4" />} />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          {/* Continue learning */}
          <div className="space-y-6">
            <div className="card p-6">
              <div className="flex items-center justify-between">
                <h2 className="font-serif text-xl font-semibold text-white">Continue where you left off</h2>
                <span className="text-sm text-zinc-500">{comp.done}/{comp.total} weeks</span>
              </div>
              <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-center">
                <ProgressRing value={comp.pct} size={84} stroke={7} />
                <div className="min-w-0 flex-1">
                  <PhaseBadge phase={currentWeek.phase} />
                  <p className="mt-2 text-xs uppercase tracking-wider text-zinc-500">
                    {primary.name} · Week {currentWeek.index}
                  </p>
                  <h3 className="mt-1 font-serif text-lg font-semibold text-white">{currentWeek.title}</h3>
                  <p className="mt-1 line-clamp-2 text-sm text-zinc-400">{currentWeek.summary}</p>
                </div>
                <Link href={`/learn/${primary.slug}/${currentWeek.id}`} className="btn-primary shrink-0">
                  Go <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* My programs */}
            <div className="card p-6">
              <h2 className="font-serif text-xl font-semibold text-white">My programs</h2>
              <div className="mt-4 space-y-3">
                {enrolledPrograms.map((p) => {
                  const c = store.programCompletion(p.slug);
                  const done = store.isProgramComplete(p.slug);
                  return (
                    <div key={p.slug} className="flex items-center gap-4 rounded-xl border border-white/[0.06] bg-ink-950/40 p-4">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <p className="truncate font-medium text-white">{p.name}</p>
                          <span className="chip bg-white/5 text-zinc-400 ring-white/10">{p.level}</span>
                        </div>
                        <div className="mt-2 flex items-center gap-3">
                          <div className="h-1.5 w-40 overflow-hidden rounded-full bg-white/10">
                            <div className="h-full rounded-full bg-brand-500" style={{ width: `${c.pct}%` }} />
                          </div>
                          <span className="text-xs text-zinc-500">{c.done}/{c.total}</span>
                        </div>
                      </div>
                      {done ? (
                        <Link href={`/certificate/${p.slug}`} className="btn-gold shrink-0 px-3 py-2 text-xs">
                          <Award className="h-3.5 w-3.5" /> Certificate
                        </Link>
                      ) : (
                        <Link href={`/learn/${p.slug}`} className="btn-ghost shrink-0 px-3 py-2 text-xs">
                          Continue
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
              <Link href="/programs" className="mt-4 inline-flex items-center gap-1.5 text-sm text-brand-300 hover:text-brand-200">
                Browse more programs <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right rail */}
          <div className="space-y-6">
            {/* Up next path */}
            <div className="card p-6">
              <h2 className="font-serif text-xl font-semibold text-white">Your path</h2>
              <p className="mt-1 text-sm text-zinc-500">{primary.name}</p>
              <div className="mt-4 space-y-1">
                {primary.weeks.slice(0, 6).map((w) => {
                  const done = store.isWeekComplete(primary.slug, w.id);
                  const unlocked = store.isWeekUnlocked(primary.slug, w.index);
                  return (
                    <Link
                      key={w.id}
                      href={unlocked ? `/learn/${primary.slug}/${w.id}` : "#"}
                      className={`flex items-center gap-3 rounded-lg px-2 py-2 text-sm ${
                        unlocked ? "hover:bg-white/[0.04]" : "cursor-not-allowed opacity-60"
                      }`}
                    >
                      {done ? (
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                      ) : unlocked ? (
                        <PlayCircle className="h-4 w-4 shrink-0 text-brand-400" />
                      ) : (
                        <Lock className="h-4 w-4 shrink-0 text-zinc-600" />
                      )}
                      <span className={done ? "text-zinc-500" : "text-zinc-200"}>
                        Week {w.index}: {w.theme}
                      </span>
                    </Link>
                  );
                })}
                {primary.weeks.length > 6 && (
                  <p className="px-2 pt-1 text-xs text-zinc-600">+ {primary.weeks.length - 6} more weeks</p>
                )}
              </div>
            </div>

            {/* Live sessions */}
            <div className="card p-6">
              <div className="flex items-center justify-between">
                <h2 className="font-serif text-xl font-semibold text-white">Upcoming live</h2>
                <Radio className="h-4 w-4 text-emerald-400" />
              </div>
              <div className="mt-4 space-y-3">
                {liveSessions.map((l, i) => (
                  <div key={i} className="rounded-xl border border-white/[0.06] bg-ink-950/40 p-3">
                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                      <CalendarDays className="h-3.5 w-3.5" /> {l.session.cadence}
                    </div>
                    <p className="mt-1 text-sm font-medium text-white">{l.session.title}</p>
                    <p className="text-xs text-zinc-500">{l.program}</p>
                  </div>
                ))}
              </div>
              <Link href="/live" className="mt-4 inline-flex items-center gap-1.5 text-sm text-brand-300 hover:text-brand-200">
                View live schedule <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}
