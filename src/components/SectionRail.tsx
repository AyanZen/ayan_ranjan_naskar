"use client";

const items = ["01", "02", "03", "04", "05", "06"];

export default function SectionRail() {
  return (
    <aside
      className="section-rail fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-4 text-[11px] font-medium tabular-nums tracking-widest text-neutral-400 lg:flex lg:right-8"
      aria-hidden
    >
      <span className="mb-1 h-8 w-px bg-neutral-300" />
      {items.map((num) => (
        <span
          key={num}
          className="section-rail__item relative py-0.5 transition-colors duration-300"
          data-section={num}
        >
          {num}
        </span>
      ))}
    </aside>
  );
}
