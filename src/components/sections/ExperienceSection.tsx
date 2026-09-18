import SectionShell from "@/components/SectionShell";

const items = [
  {
    role: "Software Engineer (Learning & Projects)",
    org: "Independent",
    period: "2023 — Present",
    detail:
      "Building full stack applications, exploring AI/ML, and shipping portfolio-grade products.",
  },
  {
    role: "Full Stack Development",
    org: "Personal & academic work",
    period: "2022 — Present",
    detail:
      "React, Next.js, Node.js, and databases — from auth flows to dashboards and APIs.",
  },
];

export default function ExperienceSection() {
  return (
    <SectionShell id="experience" minH="min-h-0" className="border-t border-neutral-200/80">
      <p className="text-xs font-medium uppercase tracking-[0.35em] text-neutral-500" data-reveal>
        Experience
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl" data-reveal>
        Where I&apos;ve been building.
      </h2>
      <ul className="mt-10 space-y-8">
        {items.map((item) => (
          <li
            key={item.role}
            className="rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-sm"
            data-reveal
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold text-neutral-900">{item.role}</h3>
              <span className="text-sm text-neutral-500">{item.period}</span>
            </div>
            <p className="mt-1 text-sm font-medium text-neutral-600">{item.org}</p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">{item.detail}</p>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
