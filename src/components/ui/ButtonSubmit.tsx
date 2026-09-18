"use client";

import ArrowUpRight from "@/components/ui/ArrowUpRight";

export default function ButtonSubmit({
  children,
  disabled,
  className = "",
}: {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`group inline-flex w-auto max-w-full shrink-0 items-center gap-4 rounded-full bg-neutral-900 py-2 pl-6 pr-2 text-sm font-medium text-white shadow-[var(--shadow-ambient-sm)] motion-premium hover:bg-neutral-800 active:scale-[0.98] disabled:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500 ${className}`}
    >
      <span className="whitespace-nowrap text-white">{children}</span>
      {!disabled && (
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-700/90 text-white motion-premium group-hover:bg-neutral-600">
          <ArrowUpRight className="h-4 w-4 motion-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-105" />
        </span>
      )}
    </button>
  );
}
