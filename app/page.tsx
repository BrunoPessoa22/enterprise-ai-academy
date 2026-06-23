import Link from "next/link";
import {
  ArrowRight,
  PlayCircle,
  CalendarCheck,
  Radio,
  BarChart3,
  Award,
  Lock,
  Sparkles,
  Stethoscope,
  UserCog,
  Rocket,
  Quote,
  CheckCircle2,
} from "lucide-react";
import { Shell, PhaseBadge } from "@/components/ui";
import { brand } from "@/lib/brand";
import programs from "@/lib/curriculum";

const features = [
  { icon: PlayCircle, title: "On-demand video library", desc: "Pre-recorded, broadcast-quality lessons learners watch on their schedule. Resume where they left off." },
  { icon: CalendarCheck, title: "Weekly applied exercises", desc: "Every week ends with a real deliverable graded against a clear rubric — learning by doing, not watching." },
  { icon: Lock, title: "Sequential unlocking", desc: "Week N stays locked until Week N-1 is complete. A guided path that guarantees mastery before progression." },
  { icon: Radio, title: "Live cohort classes", desc: "Scheduled live sessions with faculty and peers — Q&A, office hours, and group critique built in." },
  { icon: BarChart3, title: "Company analytics console", desc: "Admins see exactly who is watching, submitting, and engaging — by team, by program, in real time." },
  { icon: Award, title: "Verifiable certificates", desc: "Learners earn a downloadable, accredited certificate on completion. Proof of capability, not attendance." },
];

const methodology = [
  { name: "Diagnose", icon: Stethoscope, tagline: "Assess literacy, map workflows, find the use cases", desc: "We baseline each team's AI fluency and surface the highest-leverage opportunities before anyone writes a prompt." },
  { name: "Personalize", icon: UserCog, tagline: "Hands-on skills tailored to each role", desc: "Learners build with AI against their own workflows — marketers, engineers, and operators each get a relevant track." },
  { name: "Scale", icon: Rocket, tagline: "Embed, measure, and govern adoption org-wide", desc: "Deploy what works, prove ROI, set guardrails, and turn early wins into a durable AI-first culture." },
];

export default function HomePage() {
  return (
    <Shell>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-x grid items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
          <div className="animate-fade-up">
            <span className="chip bg-brand-400/10 text-brand-300 ring-brand-400/20">
              <Sparkles className="h-3.5 w-3.5" /> Enterprise AI enablement, accredited
            </span>
            <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl">
              Bring an AI-first culture to <span className="text-brand-400">every team.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
              {brand.productName} is the executive-grade learning platform that takes your entire
              workforce from AI-curious to AI-capable — with cohort programs, hands-on labs, live
              faculty, and an analytics console that proves adoption.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/programs" className="btn-primary">
                Explore programs <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/dashboard" className="btn-ghost">
                <PlayCircle className="h-4 w-4" /> Enter the learner demo
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-zinc-500">
              <Metric value="4" label="program lengths" />
              <Metric value="45+" label="weekly modules" />
              <Metric value="94%" label="completion rate" />
              <Metric value="3-phase" label="methodology" />
            </div>
          </div>

          <div className="animate-fade-up [animation-delay:120ms]">
            <HeroCard />
          </div>
        </div>

        {/* Trust strip */}
        <div className="border-y border-white/[0.06] bg-ink-950/40">
          <div className="container-x flex flex-col items-center gap-4 py-6 sm:flex-row sm:justify-between">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-600">
              Methodology benchmarked against the world's best
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 font-serif text-sm text-zinc-500">
              <span>MIT Sloan Exec Ed</span>
              <span>Stanford Online</span>
              <span>Harvard Business School</span>
              <span>DeepLearning.AI</span>
              <span>Wharton</span>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section id="methodology" className="container-x py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">The Methodology</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-white">
            Diagnose → Personalize → Scale
          </h2>
          <p className="mt-4 text-zinc-400">
            Tools don't change culture — a system does. Every {brand.name} program runs on the same
            three-phase model, proven to move organizations from pilots to permanent capability.
          </p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {methodology.map((m, i) => (
            <div key={m.name} className="card card-hover p-7">
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500/10 text-brand-300">
                  <m.icon className="h-5 w-5" />
                </span>
                <span className="font-serif text-5xl font-semibold text-white/5">0{i + 1}</span>
              </div>
              <PhaseBadge phase={m.name} />
              <h3 className="mt-3 font-serif text-xl font-semibold text-white">{m.tagline}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-white/[0.06] bg-ink-950/40">
        <div className="container-x py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">Everything in one platform</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-white">
              Built for how enterprises actually learn
            </h2>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="card card-hover p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500/10 text-brand-300">
                  <f.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-white">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs preview */}
      <section className="container-x py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="eyebrow">The Programs</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-white">
              Four tracks. One culture shift.
            </h2>
            <p className="mt-4 text-zinc-400">
              From a six-week literacy primer to an eighteen-week organizational transformation —
              pick the depth that matches your ambition.
            </p>
          </div>
          <Link href="/programs" className="btn-ghost">
            View all programs <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p) => (
            <Link key={p.slug} href={`/programs/${p.slug}`} className="card card-hover group flex flex-col p-6">
              <span className="chip w-fit bg-white/5 text-zinc-300 ring-white/10">{p.level}</span>
              <h3 className="mt-4 font-serif text-xl font-semibold text-white">{p.name}</h3>
              <p className="mt-1 text-sm text-brand-300">{p.weekCount} weeks</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400 line-clamp-4">{p.outcome}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-white transition group-hover:gap-2.5">
                See curriculum <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="container-x pb-24">
        <div className="card relative overflow-hidden p-10 sm:p-14">
          <Quote className="absolute right-8 top-8 h-24 w-24 text-white/[0.03]" />
          <p className="max-w-3xl font-serif text-2xl font-medium leading-snug text-white sm:text-3xl">
            "We tried lunch-and-learns and a tool license. Nothing stuck. {brand.name} gave us a
            system — and a dashboard that finally showed leadership where adoption was real."
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-brand-500/15 font-semibold text-brand-200">
              AO
            </div>
            <div>
              <p className="font-medium text-white">Amara Okafor</p>
              <p className="text-sm text-zinc-500">VP Product, {brand.demoCompany}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-24">
        <div className="card flex flex-col items-center gap-6 overflow-hidden p-12 text-center">
          <h2 className="max-w-2xl font-serif text-4xl font-semibold tracking-tight text-white">
            Ready to make your company AI-first?
          </h2>
          <p className="max-w-xl text-zinc-400">
            Walk the full prototype — enroll as a learner, complete a week, earn a certificate, then
            switch to the admin console to see the company view.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/programs" className="btn-primary">
              Browse programs <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/admin" className="btn-gold">
              <BarChart3 className="h-4 w-4" /> Open admin console
            </Link>
          </div>
        </div>
      </section>
    </Shell>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <span className="flex items-baseline gap-1.5">
      <span className="font-serif text-xl font-semibold text-white">{value}</span>
      <span className="text-xs text-zinc-500">{label}</span>
    </span>
  );
}

function HeroCard() {
  const p = programs[1]; // Applied AI for Teams
  return (
    <div className="card relative overflow-hidden p-6 shadow-soft">
      <div className="flex items-center justify-between">
        <span className="chip bg-emerald-400/10 text-emerald-300 ring-emerald-400/20">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Live cohort
        </span>
        <span className="text-xs text-zinc-500">Week 4 of {p.weekCount}</span>
      </div>
      <h3 className="mt-4 font-serif text-2xl font-semibold text-white">{p.name}</h3>
      <p className="mt-1 text-sm text-zinc-400">{p.weeks[3].title}</p>

      <div className="mt-5 aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-ink-800 to-ink-950">
        <div className="grid h-full place-items-center">
          <PlayCircle className="h-14 w-14 text-white/80" />
        </div>
      </div>

      <div className="mt-5 space-y-2.5">
        {p.weeks.slice(0, 4).map((w, i) => (
          <div key={w.id} className="flex items-center gap-3 text-sm">
            {i < 3 ? (
              <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
            ) : (
              <PlayCircle className="h-4 w-4 shrink-0 text-brand-400" />
            )}
            <span className={i < 3 ? "text-zinc-500 line-through" : "text-zinc-200"}>
              Week {w.index}: {w.theme}
            </span>
          </div>
        ))}
        <div className="flex items-center gap-3 text-sm text-zinc-600">
          <Lock className="h-4 w-4 shrink-0" />
          <span>Week 5 — unlocks on completion</span>
        </div>
      </div>
    </div>
  );
}
