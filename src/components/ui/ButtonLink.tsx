import ArrowUpRight from "@/components/ui/ArrowUpRight";
import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "dark" | "ghost";

type ButtonLinkProps = {
  href: string;
  children?: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
  iconOnly?: boolean;
  "aria-label"?: string;
};

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  external,
  iconOnly,
  "aria-label": ariaLabel,
}: ButtonLinkProps) {
  const isHash = href.startsWith("#");
  const isExternal = external ?? href.startsWith("http");

  if (iconOnly) {
    const iconShell =
      variant === "dark"
        ? "bg-neutral-900 text-white hover:bg-neutral-800"
        : "border border-neutral-200/90 bg-white text-neutral-900 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:border-neutral-300 hover:shadow-md";

    const iconBtn = (
      <span
        className={`cta-link group inline-flex h-12 w-12 items-center justify-center rounded-full motion-premium active:scale-[0.96] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400 ${iconShell} ${className}`}
      >
        <ArrowUpRight className="h-4 w-4" />
      </span>
    );

    if (isHash) {
      return (
        <a href={href} aria-label={ariaLabel} className="inline-flex shrink-0">
          {iconBtn}
        </a>
      );
    }
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
          className="inline-flex shrink-0"
        >
          {iconBtn}
        </a>
      );
    }
    return (
      <Link href={href} aria-label={ariaLabel} className="inline-flex shrink-0">
        {iconBtn}
      </Link>
    );
  }

  if (variant === "dark") {
    const darkBtn = (
      <span
        className={`cta-link group inline-flex w-auto max-w-full shrink-0 items-center gap-4 rounded-full bg-neutral-900 py-2 pl-6 pr-2 text-sm font-medium text-white shadow-[var(--shadow-ambient-sm)] motion-premium hover:bg-neutral-800 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500 ${className}`}
      >
        <span className="whitespace-nowrap text-white">{children}</span>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-700/90 text-white motion-premium group-hover:bg-neutral-600">
          <ArrowUpRight className="h-4 w-4 motion-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-105" />
        </span>
      </span>
    );

    if (isHash) {
      return (
        <a href={href} aria-label={ariaLabel} className="inline-flex shrink-0">
          {darkBtn}
        </a>
      );
    }
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
          className="inline-flex shrink-0"
        >
          {darkBtn}
        </a>
      );
    }
    return (
      <Link href={href} aria-label={ariaLabel} className="inline-flex shrink-0">
        {darkBtn}
      </Link>
    );
  }

  const lightShell =
    variant === "ghost"
      ? "border-neutral-200/80 bg-transparent text-neutral-800 hover:border-neutral-300 hover:bg-white/90"
      : "border-neutral-200/90 bg-white text-neutral-900 shadow-[0_4px_22px_rgba(0,0,0,0.06)] hover:border-neutral-300 hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)]";

  const lightBtn = (
    <span
      className={`cta-link group inline-flex w-auto max-w-full shrink-0 items-center gap-3 rounded-full border py-2.5 pl-5 pr-2.5 text-sm font-medium motion-premium active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400 ${lightShell} ${className}`}
    >
      <span className="whitespace-nowrap text-neutral-900">{children}</span>
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-800 motion-premium group-hover:bg-neutral-200/90">
        <ArrowUpRight className="h-3.5 w-3.5 motion-premium group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105" />
      </span>
    </span>
  );

  if (isHash) {
    return (
      <a href={href} aria-label={ariaLabel} className="inline-flex shrink-0">
        {lightBtn}
      </a>
    );
  }
  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className="inline-flex shrink-0"
      >
        {lightBtn}
      </a>
    );
  }
  return (
    <Link href={href} aria-label={ariaLabel} className="inline-flex shrink-0">
      {lightBtn}
    </Link>
  );
}
