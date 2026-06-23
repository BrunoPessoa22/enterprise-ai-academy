import { cn } from "@/lib/utils";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function ProgressRing({
  value,
  size = 56,
  stroke = 5,
  label,
}: {
  value: number; // 0-100
  size?: number;
  stroke?: number;
  label?: string;
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (Math.min(100, Math.max(0, value)) / 100) * c;
  return (
    <div className="relative grid place-items-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} stroke="currentColor" strokeWidth={stroke} className="text-white/10" fill="none" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke="currentColor"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          className="text-brand-500 transition-all duration-700"
          fill="none"
        />
      </svg>
      <span className="absolute text-xs font-semibold text-white">
        {label ?? `${Math.round(value)}%`}
      </span>
    </div>
  );
}

const phaseStyles: Record<string, string> = {
  Diagnose: "text-sky-300 bg-sky-400/10 ring-sky-400/20",
  Personalize: "text-violet-300 bg-violet-400/10 ring-violet-400/20",
  Scale: "text-emerald-300 bg-emerald-400/10 ring-emerald-400/20",
};

export function PhaseBadge({ phase }: { phase: string }) {
  return <span className={cn("chip", phaseStyles[phase] ?? "text-zinc-300 bg-white/5 ring-white/10")}>{phase}</span>;
}

export function Stat({
  label,
  value,
  sub,
  icon,
}: {
  label: string;
  value: React.ReactNode;
  sub?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="card p-5">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">{label}</span>
        {icon && <span className="text-brand-400">{icon}</span>}
      </div>
      <div className="mt-2 font-serif text-3xl font-semibold text-white">{value}</div>
      {sub && <div className="mt-1 text-xs text-zinc-500">{sub}</div>}
    </div>
  );
}
