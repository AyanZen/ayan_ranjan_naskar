import ArrowUpRight from "@/components/ui/ArrowUpRight";

export default function ConnectButton({
  href,
  className = "",
  label = "Let's talk",
}: {
  href: string;
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={href}
      className={`cta-link group inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-2.5 text-sm font-medium text-neutral-900 motion-premium hover:shadow-[var(--shadow-ambient)] active:scale-[0.98] ${className}`}
      style={{
        boxShadow:
          "var(--shadow-ambient-sm), inset 0 0 0 1px rgba(0, 0, 0, 0.06)",
      }}
    >
      {label}
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/[0.05] motion-premium group-hover:translate-x-0.5 group-hover:-translate-y-px">
        <ArrowUpRight className="h-3.5 w-3.5 text-neutral-900" />
      </span>
    </a>
  );
}
