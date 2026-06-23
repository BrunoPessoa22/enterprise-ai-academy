import { brand } from "@/lib/brand";
import { cn } from "@/lib/utils";

export function Logo({ className, mark = true }: { className?: string; mark?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      {mark && (
        <span className="relative grid h-8 w-8 place-items-center rounded-lg bg-brand-500 shadow-glow">
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none">
            <path
              d="M12 2.5 3.5 7v10L12 21.5 20.5 17V7L12 2.5Z"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
            <path d="M12 2.5v19M3.5 7l8.5 5 8.5-5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          </svg>
        </span>
      )}
      <span className="font-serif text-lg font-semibold tracking-tight text-white">
        {brand.name}
      </span>
    </span>
  );
}
