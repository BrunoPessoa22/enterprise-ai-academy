import Link from "next/link";
import { Home, Compass } from "lucide-react";
import { Shell } from "@/components/ui";

export default function NotFound() {
  return (
    <Shell>
      <section className="container-x grid place-items-center py-32 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-2xl bg-brand-500/10 text-brand-300">
          <Compass className="h-7 w-7" />
        </span>
        <h1 className="mt-6 font-serif text-5xl font-semibold text-white">Page not found</h1>
        <p className="mt-3 max-w-md text-zinc-400">
          That page doesn't exist in this prototype. Let's get you back on track.
        </p>
        <div className="mt-7 flex gap-3">
          <Link href="/" className="btn-primary"><Home className="h-4 w-4" /> Home</Link>
          <Link href="/programs" className="btn-ghost">Browse programs</Link>
        </div>
      </section>
    </Shell>
  );
}
