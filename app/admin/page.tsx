"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";
import {
  Users,
  Activity,
  GraduationCap,
  AlertTriangle,
  Clock,
  TrendingUp,
  Search,
  ArrowUpRight,
  Download,
} from "lucide-react";
import { Shell, Stat } from "@/components/ui";
import { employees, activeTrend, deptCompletion, orgStats, statusColor } from "@/lib/org";
import { brand } from "@/lib/brand";
import { initials, cn } from "@/lib/utils";

const FILTERS = ["All", "Ahead", "On track", "At risk", "Not started"] as const;

export default function AdminPage() {
  const stats = orgStats();
  const depts = deptCompletion();
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [q, setQ] = useState("");

  const rows = employees
    .filter((e) => (filter === "All" ? true : e.status === filter))
    .filter((e) => (q ? (e.name + e.role + e.department).toLowerCase().includes(q.toLowerCase()) : true));

  return (
    <Shell>
      <section className="container-x py-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Admin Console</p>
            <h1 className="mt-2 font-serif text-4xl font-semibold tracking-tight text-white">
              {brand.demoCompany}
            </h1>
            <p className="mt-2 text-zinc-400">
              Adoption analytics across {stats.enrolled} enrolled employees and 4 active programs.
            </p>
          </div>
          <button className="btn-ghost">
            <Download className="h-4 w-4" /> Export report
          </button>
        </div>

        {/* KPI grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
          <Stat label="Enrolled" value={stats.enrolled} icon={<Users className="h-4 w-4" />} />
          <Stat label="Active (7d)" value={stats.active} sub={`${Math.round((stats.active / stats.enrolled) * 100)}% of seats`} icon={<Activity className="h-4 w-4" />} />
          <Stat label="Avg completion" value={`${stats.avgCompletion}%`} icon={<TrendingUp className="h-4 w-4" />} />
          <Stat label="Completed" value={stats.completed} sub="full programs" icon={<GraduationCap className="h-4 w-4" />} />
          <Stat label="Hours watched" value={`${stats.totalHours}h`} icon={<Clock className="h-4 w-4" />} />
          <Stat label="At risk" value={stats.atRisk} sub="need a nudge" icon={<AlertTriangle className="h-4 w-4" />} />
        </div>

        {/* Charts */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <div className="card p-6">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-lg font-semibold text-white">Weekly engagement</h2>
              <span className="text-xs text-zinc-500">Active learners vs. submissions</span>
            </div>
            <div className="mt-4 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={activeTrend} margin={{ left: -20, right: 8, top: 8 }}>
                  <defs>
                    <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#5b6cff" stopOpacity={0.4} />
                      <stop offset="100%" stopColor="#5b6cff" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#d9b26a" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="#d9b26a" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" vertical={false} />
                  <XAxis dataKey="week" stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={{
                      background: "#16171f",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 12,
                      color: "#fff",
                      fontSize: 12,
                    }}
                  />
                  <Area type="monotone" dataKey="active" stroke="#5b6cff" strokeWidth={2} fill="url(#g1)" name="Active" />
                  <Area type="monotone" dataKey="submissions" stroke="#d9b26a" strokeWidth={2} fill="url(#g2)" name="Submissions" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="card p-6">
            <h2 className="font-serif text-lg font-semibold text-white">Completion by department</h2>
            <div className="mt-4 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={depts} layout="vertical" margin={{ left: 24, right: 16 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" horizontal={false} />
                  <XAxis type="number" domain={[0, 100]} stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} unit="%" />
                  <YAxis type="category" dataKey="dept" stroke="#a1a1aa" fontSize={12} tickLine={false} axisLine={false} width={80} />
                  <Tooltip
                    cursor={{ fill: "rgba(255,255,255,0.03)" }}
                    contentStyle={{
                      background: "#16171f",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 12,
                      color: "#fff",
                      fontSize: 12,
                    }}
                  />
                  <Bar dataKey="completion" radius={[0, 6, 6, 0]} unit="%">
                    {depts.map((d, i) => (
                      <Cell key={i} fill={d.completion >= 60 ? "#5b6cff" : d.completion >= 35 ? "#d9b26a" : "#f59e0b"} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Employee table */}
        <div className="mt-6 card overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.06] p-5">
            <h2 className="font-serif text-lg font-semibold text-white">Employees</h2>
            <div className="flex flex-wrap items-center gap-2">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search…"
                  className="input w-48 py-2 pl-9"
                />
              </div>
              <div className="flex items-center gap-1 rounded-xl border border-white/10 bg-ink-900 p-0.5 text-xs">
                {FILTERS.map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={cn(
                      "rounded-lg px-2.5 py-1.5 font-medium transition",
                      filter === f ? "bg-brand-500 text-white" : "text-zinc-400 hover:text-white"
                    )}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-sm">
              <thead>
                <tr className="border-b border-white/[0.06] text-left text-xs uppercase tracking-wider text-zinc-500">
                  <th className="px-5 py-3 font-medium">Employee</th>
                  <th className="px-5 py-3 font-medium">Program</th>
                  <th className="px-5 py-3 font-medium">Progress</th>
                  <th className="px-5 py-3 font-medium">Exercises</th>
                  <th className="px-5 py-3 font-medium">Last active</th>
                  <th className="px-5 py-3 font-medium">Status</th>
                  <th className="px-5 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {rows.map((e) => {
                  const pctVal = e.weeksTotal ? Math.round((e.weeksCompleted / e.weeksTotal) * 100) : 0;
                  return (
                    <tr key={e.id} className="border-b border-white/[0.04] transition hover:bg-white/[0.02]">
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-3">
                          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-500/15 text-xs font-semibold text-brand-200">
                            {initials(e.name)}
                          </span>
                          <div>
                            <p className="font-medium text-white">{e.name}</p>
                            <p className="text-xs text-zinc-500">{e.role} · {e.department}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-3.5 text-zinc-300">{e.programName}</td>
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 w-24 overflow-hidden rounded-full bg-white/10">
                            <div className="h-full rounded-full bg-brand-500" style={{ width: `${pctVal}%` }} />
                          </div>
                          <span className="text-xs text-zinc-500">{e.weeksCompleted}/{e.weeksTotal}</span>
                        </div>
                      </td>
                      <td className="px-5 py-3.5 text-zinc-300">{e.exercisesSubmitted}/{e.exercisesTotal}</td>
                      <td className="px-5 py-3.5 text-zinc-400">
                        {e.lastActiveDays === 0 ? "Today" : `${e.lastActiveDays}d ago`}
                      </td>
                      <td className="px-5 py-3.5">
                        <span className={cn("chip ring-1", statusColor[e.status])}>{e.status}</span>
                      </td>
                      <td className="px-5 py-3.5 text-right">
                        <Link href={`/admin/employees/${e.id}`} className="inline-flex items-center gap-1 text-xs text-brand-300 hover:text-brand-200">
                          View <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Shell>
  );
}
