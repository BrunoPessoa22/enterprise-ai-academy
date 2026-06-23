import Link from "next/link";
import { ArrowRight, Clock, Layers, Target, Users, Stethoscope, UserCog, Rocket } from "lucide-react";
import { Shell, PhaseBadge } from "@/components/ui";
import programs from "@/lib/curriculum";
import { brand } from "@/lib/brand";

const phaseIcon: Record<string, typeof Stethoscope> = {
  Diagnose: Stethoscope,
  Personalize: UserCog,
  Scale: Rocket,
};

export default function ProgramsPage() {
  return (
    <Shell>
      <section className="container-x py-16">
        <div className="max-w-3xl">
          <p className="eyebrow">Catalog</p>
          <h1 className="mt-3 font-serif text-5xl font-semibold tracking-tight text-white">
            Programs
          </h1>
          <p className="mt-4 text-lg text-zinc-400">
            Every track is built on the {brand.name} {""}
            <span className="text-white">Diagnose → Personalize → Scale</span> methodology. Choose
            the depth that fits your organization's ambition and timeline.
          </p>
        </div>

        {/* Methodology band */}
        <div id="methodology" className="mt-12 grid gap-4 md:grid-cols-3">
          {(["Diagnose", "Personalize", "Scale"] as const).map((phase) => {
            const Icon = phaseIcon[phase];
            const copy = {
              Diagnose: "Baseline AI literacy, map real workflows, and prioritize the highest-leverage use cases.",
              Personalize: "Role-specific, hands-on building so every learner applies AI to their own work.",
              Scale: "Deploy, measure ROI, govern responsibly, and embed an AI-first culture org-wide.",
            }[phase];
            return (
              <div key={phase} className="card p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-500/10 text-brand-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <PhaseBadge phase={phase} />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{copy}</p>
              </div>
            );
          })}
        </div>

        {/* Program cards */}
        <div className="mt-14 grid gap-6">
          {programs.map((p) => (
            <div key={p.slug} className="card card-hover p-7">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="chip bg-white/5 text-zinc-300 ring-white/10">{p.level}</span>
                    {p.tags.slice(0, 3).map((t) => (
                      <span key={t} className="chip bg-brand-400/10 text-brand-300 ring-brand-400/20">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h2 className="mt-4 font-serif text-3xl font-semibold text-white">{p.name}</h2>
                  <p className="mt-2 text-zinc-400">{p.heroSummary}</p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <Meta icon={Clock} label="Duration" value={`${p.weekCount} weeks`} />
                    <Meta icon={Layers} label="Modules" value={`${p.weeks.length} weekly modules`} />
                    <Meta icon={Users} label="Audience" value={p.audience} />
                    <Meta icon={Target} label="Outcome" value={p.outcome} />
                  </div>
                </div>

                <div className="flex shrink-0 flex-col items-stretch gap-3 lg:w-56">
                  {p.phases.map((ph) => (
                    <div key={ph.name} className="rounded-xl border border-white/[0.06] bg-ink-950/40 p-3">
                      <div className="flex items-center justify-between">
                        <PhaseBadge phase={ph.name} />
                        <span className="text-xs text-zinc-500">{ph.weeks}</span>
                      </div>
                      <p className="mt-1.5 text-xs text-zinc-400">{ph.tagline}</p>
                    </div>
                  ))}
                  <Link href={`/programs/${p.slug}`} className="btn-primary mt-1">
                    View curriculum <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Shell>
  );
}

function Meta({ icon: Icon, label, value }: { icon: typeof Clock; label: string; value: string }) {
  return (
    <div className="flex items-start gap-2.5">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
      <div>
        <p className="text-xs uppercase tracking-wider text-zinc-500">{label}</p>
        <p className="text-sm text-zinc-300">{value}</p>
      </div>
    </div>
  );
}
