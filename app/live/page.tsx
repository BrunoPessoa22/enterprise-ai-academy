import {
  Radio,
  Calendar,
  Clock,
  Video,
  Users,
  PlayCircle,
  ArrowRight,
} from "lucide-react";
import { Shell } from "@/components/ui";
import programs from "@/lib/curriculum";

const upcoming = [
  { date: "Thu, Jun 25", time: "16:00 GMT", title: "Prompt Engineering Clinic", program: "Applied AI for Teams", host: "Dr. Lena Park", seats: 38, featured: true },
  { date: "Fri, Jun 26", time: "15:00 GMT", title: "From Pilot to Production: Governance Q&A", program: "AI Transformation", host: "Marcus Webb", seats: 52 },
  { date: "Tue, Jun 30", time: "17:00 GMT", title: "Building Your First Agent — Live Lab", program: "AI Builders", host: "Priya Raman", seats: 24 },
  { date: "Thu, Jul 02", time: "16:00 GMT", title: "AI for Non-Technical Teams: Office Hours", program: "AI Foundations", host: "Sofia Alvarez", seats: 60 },
  { date: "Fri, Jul 03", time: "15:30 GMT", title: "RAG Architecture Deep-Dive", program: "AI Builders", host: "Daniel Cho", seats: 30 },
];

const recordings = [
  { title: "What 'AI-first' actually means", program: "AI Foundations", duration: "48 min", views: 312 },
  { title: "Designing prompts that survive production", program: "Applied AI for Teams", duration: "62 min", views: 274 },
  { title: "Measuring AI ROI without vanity metrics", program: "AI Transformation", duration: "55 min", views: 198 },
  { title: "Evals & guardrails for internal tools", program: "AI Builders", duration: "71 min", views: 156 },
];

export default function LivePage() {
  const featured = upcoming.find((u) => u.featured)!;
  const liveCount = programs.reduce((s, p) => s + p.weeks.filter((w) => w.liveSession).length, 0);

  return (
    <Shell>
      <section className="container-x py-12">
        <div className="max-w-3xl">
          <p className="eyebrow">Live & cohort</p>
          <h1 className="mt-3 font-serif text-5xl font-semibold tracking-tight text-white">
            Live classes
          </h1>
          <p className="mt-4 text-lg text-zinc-400">
            On-demand video gets you the fundamentals. Live sessions get you unstuck — faculty Q&A,
            hands-on labs, and group critique with your cohort. {liveCount} live sessions across all
            programs.
          </p>
        </div>

        {/* Featured live */}
        <div className="mt-10 card overflow-hidden">
          <div className="grid lg:grid-cols-[1.3fr_1fr]">
            <div className="relative aspect-video bg-gradient-to-br from-brand-900/50 to-ink-950 lg:aspect-auto">
              <div className="grid h-full place-items-center p-10">
                <div className="text-center">
                  <span className="chip mx-auto bg-emerald-400/10 text-emerald-300 ring-emerald-400/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Next live
                  </span>
                  <PlayCircle className="mx-auto mt-4 h-16 w-16 text-white/80" />
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="text-xs uppercase tracking-wider text-brand-300">{featured.program}</p>
              <h2 className="mt-2 font-serif text-2xl font-semibold text-white">{featured.title}</h2>
              <div className="mt-4 space-y-2 text-sm text-zinc-400">
                <p className="flex items-center gap-2"><Calendar className="h-4 w-4 text-brand-400" /> {featured.date}</p>
                <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-brand-400" /> {featured.time}</p>
                <p className="flex items-center gap-2"><Users className="h-4 w-4 text-brand-400" /> Hosted by {featured.host} · {featured.seats} enrolled</p>
              </div>
              <button className="btn-primary mt-6">
                <Video className="h-4 w-4" /> Add to calendar
              </button>
            </div>
          </div>
        </div>

        {/* Schedule */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-white">Upcoming schedule</h2>
            <div className="mt-5 space-y-3">
              {upcoming.map((u) => (
                <div key={u.title} className="card card-hover flex items-center gap-5 p-5">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-brand-500/10 text-center">
                    <span className="text-[10px] uppercase text-brand-300">{u.date.split(",")[0]}</span>
                    <span className="font-serif text-lg font-semibold leading-none text-white">
                      {u.date.split(" ")[2]}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-wider text-zinc-500">{u.program}</p>
                    <p className="font-medium text-white">{u.title}</p>
                    <p className="text-sm text-zinc-500">
                      {u.time} · {u.host} · {u.seats} enrolled
                    </p>
                  </div>
                  <button className="btn-ghost shrink-0">
                    <Radio className="h-4 w-4" /> Join
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Recordings */}
          <div>
            <h2 className="font-serif text-2xl font-semibold text-white">Session recordings</h2>
            <div className="mt-5 space-y-3">
              {recordings.map((r) => (
                <div key={r.title} className="card card-hover flex items-center gap-4 p-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-white/[0.04]">
                    <PlayCircle className="h-5 w-5 text-brand-300" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-white">{r.title}</p>
                    <p className="text-xs text-zinc-500">{r.program} · {r.duration} · {r.views} views</p>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-zinc-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}
