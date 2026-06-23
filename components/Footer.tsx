import Link from "next/link";
import { Logo } from "./Logo";
import { brand } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/[0.06]">
      <div className="container-x flex flex-col items-start justify-between gap-8 py-12 sm:flex-row">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 text-sm text-zinc-500">{brand.subtagline}</p>
          <p className="mt-4 text-xs text-zinc-600">
            Prototype — demonstration only. No live payments or accounts.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-12 text-sm sm:grid-cols-3">
          <FooterCol
            title="Platform"
            items={[
              ["Programs", "/programs"],
              ["My Learning", "/dashboard"],
              ["Live Classes", "/live"],
            ]}
          />
          <FooterCol
            title="For Companies"
            items={[
              ["Admin Console", "/admin"],
              ["Methodology", "/programs#methodology"],
              ["Certificates", "/dashboard"],
            ]}
          />
          <FooterCol
            title="Institute"
            items={[
              ["Accreditation", "/programs"],
              ["Faculty", "/programs"],
              ["Contact", "/programs"],
            ]}
          />
        </div>
      </div>
      <div className="border-t border-white/[0.06]">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-zinc-600 sm:flex-row">
          <span>© 2026 {brand.accreditedBy}. All rights reserved.</span>
          <span>Accredited by the {brand.accreditedBy}</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div>
      <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-400">{title}</h4>
      <ul className="space-y-2">
        {items.map(([label, href]) => (
          <li key={label}>
            <Link href={href} className="text-zinc-500 transition hover:text-zinc-200">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
