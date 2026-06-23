"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Mail,
  Clock,
  CheckCircle2,
  Lock,
  PlayCircle,
  FileText,
  TrendingUp,
  Send,
} from "lucide-react";
import { Shell, ProgressRing, Stat } from "@/components/ui";
import { employees, statusColor } from "@/lib/org";
import programs from "@/lib/curriculum";
import { initials, cn } from "@/lib/utils";

export default function EmployeeDetail({ id }: { id: string }) {
  const emp = employees.find((e) => e.id === id);
  if (!emp) return notFound();

  const program = programs.find((p) => p.slug === emp.programSlug)!;
  const pctVal = emp.weeksTotal ? Math.round((emp.weeksCompleted / emp.weeksTotal) * 100) : 0;

  return (
    <Shell>
      <section className="container-x py-12">
        <Link href="/admin" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white">
          <ArrowLeft className="h-4 w-4" /> Admin console
        </Link>

        {/* Header */}
        <div className="mt-6 card p-7">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-brand-500/15 font-serif text-xl font-semibold text-brand-200">
                {initials(emp.name)}
              </span>
              <div>
                <h1 className="font-serif text-3xl font-semibold text-white">{emp.name}</h1>
                <p className="text-zinc-400">{emp.role} · {emp.department}</p>
                <span className={cn("chip mt-2 ring-1", statusColor[emp.status])}>{emp.status}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ProgressRing value={pctVal} size={72} stroke={6} />
              <button className="btn-ghost">
                <Mail className="h-4 w-4" /> Send nudge
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat label="Program" value={<span className="text-xl">{emp.programName}</span>} />
          <Stat label="Weeks done" value={`${emp.weeksCompleted}/${emp.weeksTotal}`} icon={<CheckCircle2 className="h-4 w-4" />} />
          <Stat label="Exercises" value={`${emp.exercisesSubmitted}/${emp.exercisesTotal}`} icon={<FileText className="h-4 w-4" />} />
          <Stat label="Hours watched" value={`${emp.hoursWatched}h`} icon={<Clock className="h-4 w-4" />} />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* Week progress */}
          <div className="card p-6">
            <h2 className="font-serif text-xl font-semibold text-white">Week-by-week progress</h2>
            <div className="mt-4 space-y-1.5">
              {program.weeks.map((w) => {
                const done = w.index <= emp.weeksCompleted;
                const current = w.index === emp.weeksCompleted + 1 && emp.status !== "Not started";
                return (
                  <div
                    key={w.id}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm",
                      current && "bg-brand-500/10 ring-1 ring-inset ring-brand-500/20"
                    )}
                  >
                    {done ? (
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                    ) : current ? (
                      <PlayCircle className="h-4 w-4 shrink-0 text-brand-400" />
                    ) : (
                      <Lock className="h-4 w-4 shrink-0 text-zinc-600" />
                    )}
                    <span className={cn("flex-1", done ? "text-zinc-500" : "text-zinc-200")}>
                      Week {w.index}: {w.title}
                    </span>
                    {done && <span className="text-xs text-emerald-400/80">Complete</span>}
                    {current && <span className="text-xs text-brand-300">In progress</span>}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Activity / submissions */}
          <div className="space-y-6">
            <div className="card p-6">
              <h2 className="flex items-center gap-2 font-serif text-xl font-semibold text-white">
                <TrendingUp className="h-5 w-5 text-brand-400" /> Engagement
              </h2>
              <dl className="mt-4 space-y-3 text-sm">
                <Row label="Last active" value={emp.lastActiveDays === 0 ? "Today" : `${emp.lastActiveDays} days ago`} />
                <Row label="Avg session" value="34 min" />
                <Row label="On-time submissions" value={`${Math.round((emp.exercisesSubmitted / Math.max(1, emp.weeksCompleted)) * 100)}%`} />
                <Row label="Cohort percentile" value={emp.status === "Ahead" ? "Top 15%" : emp.status === "At risk" ? "Bottom 25%" : "Median"} />
              </dl>
            </div>

            <div className="card p-6">
              <h2 className="flex items-center gap-2 font-serif text-xl font-semibold text-white">
                <Send className="h-5 w-5 text-gold-500" /> Recent submissions
              </h2>
              <div className="mt-4 space-y-3">
                {program.weeks.slice(0, Math.min(3, emp.weeksCompleted)).reverse().map((w) => (
                  <div key={w.id} className="rounded-xl border border-white/[0.06] bg-ink-950/40 p-3">
                    <p className="text-xs text-zinc-500">Week {w.index}</p>
                    <p className="text-sm font-medium text-white">{w.exercise.title}</p>
                    <span className="chip mt-1.5 bg-emerald-400/10 text-emerald-300 ring-emerald-400/20">
                      <CheckCircle2 className="h-3.5 w-3.5" /> Graded · Pass
                    </span>
                  </div>
                ))}
                {emp.weeksCompleted === 0 && (
                  <p className="text-sm text-zinc-500">No submissions yet.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-zinc-500">{label}</dt>
      <dd className="font-medium text-white">{value}</dd>
    </div>
  );
}
