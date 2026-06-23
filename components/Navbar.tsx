"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LayoutGrid, GraduationCap, Radio, ShieldCheck, Menu, X, UserCog, User } from "lucide-react";
import { Logo } from "./Logo";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";

const links = [
  { href: "/programs", label: "Programs", icon: GraduationCap },
  { href: "/dashboard", label: "My Learning", icon: LayoutGrid },
  { href: "/live", label: "Live Classes", icon: Radio },
  { href: "/admin", label: "Admin Console", icon: ShieldCheck },
];

export function Navbar() {
  const pathname = usePathname();
  const { role, setRole } = useStore();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-ink-950/80 backdrop-blur-xl">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <Link href="/" aria-label="Home">
            <Logo />
          </Link>
          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => {
              const active = pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition",
                    active ? "bg-white/[0.06] text-white" : "text-zinc-400 hover:text-white"
                  )}
                >
                  <l.icon className="h-4 w-4" />
                  {l.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <RoleSwitch role={role} setRole={setRole} />
          <button
            className="btn-ghost px-2.5 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/[0.06] lg:hidden">
          <nav className="container-x grid gap-1 py-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-300 hover:bg-white/[0.06]"
              >
                <l.icon className="h-4 w-4" />
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function RoleSwitch({ role, setRole }: { role: string; setRole: (r: "learner" | "admin") => void }) {
  return (
    <div className="flex items-center rounded-xl border border-white/10 bg-ink-900 p-0.5 text-xs">
      <button
        onClick={() => setRole("learner")}
        className={cn(
          "flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 font-medium transition",
          role === "learner" ? "bg-brand-500 text-white" : "text-zinc-400 hover:text-white"
        )}
      >
        <User className="h-3.5 w-3.5" /> Learner
      </button>
      <button
        onClick={() => setRole("admin")}
        className={cn(
          "flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 font-medium transition",
          role === "admin" ? "bg-brand-500 text-white" : "text-zinc-400 hover:text-white"
        )}
      >
        <UserCog className="h-3.5 w-3.5" /> Admin
      </button>
    </div>
  );
}
