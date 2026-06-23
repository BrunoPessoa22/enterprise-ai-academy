"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Download, ShieldCheck, Lock, ArrowRight, Award } from "lucide-react";
import { Shell } from "@/components/ui";
import { Logo } from "@/components/Logo";
import programs from "@/lib/curriculum";
import { useStore } from "@/lib/store";
import { brand } from "@/lib/brand";

function certId(slug: string, name: string) {
  const base = (slug + name).split("").reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7);
  const hex = base.toString(16).toUpperCase().padStart(8, "0");
  return `MRD-${hex.slice(0, 4)}-${hex.slice(4, 8)}`;
}

export default function Certificate({ slug }: { slug: string }) {
  const store = useStore();
  const program = programs.find((p) => p.slug === slug);
  if (!program) return notFound();

  const complete = store.isProgramComplete(slug);
  const comp = store.programCompletion(slug);
  const name = store.learnerName;
  const id = certId(slug, name);

  if (!store.ready) {
    return <Shell><div className="container-x py-24 text-zinc-500">Loading…</div></Shell>;
  }

  if (!complete) {
    return (
      <Shell>
        <section className="container-x py-16">
          <Link href={`/learn/${slug}`} className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Back to course
          </Link>
          <div className="mt-8 card grid place-items-center p-16 text-center">
            <span className="grid h-16 w-16 place-items-center rounded-2xl bg-white/[0.04]">
              <Lock className="h-7 w-7 text-zinc-500" />
            </span>
            <h1 className="mt-5 font-serif text-3xl font-semibold text-white">Certificate locked</h1>
            <p className="mt-2 max-w-md text-zinc-400">
              Finish all {comp.total} weeks of <span className="text-white">{program.name}</span> to
              unlock your accredited certificate. You're {comp.done} of {comp.total} weeks in.
            </p>
            <div className="mt-5 h-2 w-64 overflow-hidden rounded-full bg-white/10">
              <div className="h-full rounded-full bg-brand-500" style={{ width: `${comp.pct}%` }} />
            </div>
            <Link href={`/learn/${slug}`} className="btn-primary mt-6">
              Continue learning <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </Shell>
    );
  }

  return (
    <Shell>
      <section className="container-x py-12">
        <div className="no-print flex flex-wrap items-center justify-between gap-3">
          <Link href="/dashboard" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Dashboard
          </Link>
          <div className="flex items-center gap-3">
            <span className="chip bg-emerald-400/10 text-emerald-300 ring-emerald-400/20">
              <ShieldCheck className="h-3.5 w-3.5" /> Verified · {id}
            </span>
            <button onClick={() => window.print()} className="btn-gold">
              <Download className="h-4 w-4" /> Download / Print
            </button>
          </div>
        </div>

        {/* Certificate sheet */}
        <div className="mt-8 flex justify-center">
          <div className="print-sheet relative w-full max-w-4xl overflow-hidden rounded-2xl border border-gold-500/30 bg-gradient-to-br from-ink-900 to-ink-950 p-10 shadow-soft sm:p-14">
            {/* Ornamental corners */}
            <div className="pointer-events-none absolute inset-4 rounded-xl border border-gold-500/20" />
            <div className="pointer-events-none absolute inset-6 rounded-lg border border-gold-500/10" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <Logo />
                <span className="font-serif text-xs uppercase tracking-[0.2em] text-gold-500">
                  Certificate of Completion
                </span>
              </div>

              <div className="mt-12 text-center">
                <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">This certifies that</p>
                <h1 className="mt-4 font-serif text-5xl font-semibold tracking-tight text-white">
                  {name}
                </h1>
                <div className="mx-auto mt-4 h-px w-48 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
                <p className="mt-6 text-zinc-400">has successfully completed the program</p>
                <h2 className="mt-2 font-serif text-3xl font-semibold text-gold-400">{program.name}</h2>
                <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-500">
                  A {program.weekCount}-week {program.level.toLowerCase()} program covering{" "}
                  {program.weeks.length} modules across the Diagnose → Personalize → Scale
                  methodology, including {program.weeks.length} graded applied exercises.
                </p>
              </div>

              <div className="mt-14 flex items-end justify-between gap-6">
                <div className="text-center">
                  <p className="font-serif text-lg text-white">June 2026</p>
                  <div className="mt-1 h-px w-32 bg-white/15" />
                  <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">Date issued</p>
                </div>

                <div className="grid h-20 w-20 place-items-center rounded-full border-2 border-gold-500/40">
                  <Award className="h-9 w-9 text-gold-500" />
                </div>

                <div className="text-center">
                  <p className="font-serif text-lg italic text-white">Dr. E. Vance</p>
                  <div className="mt-1 h-px w-32 bg-white/15" />
                  <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">Dean, {brand.accreditedBy}</p>
                </div>
              </div>

              <div className="mt-10 flex items-center justify-center gap-2 text-xs text-zinc-600">
                <ShieldCheck className="h-3.5 w-3.5" />
                Verification ID {id} · Accredited by the {brand.accreditedBy}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}
