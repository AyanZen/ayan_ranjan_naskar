"use client";

import SectionShell from "@/components/SectionShell";
import Bezel from "@/components/ui/Bezel";
import { skillGroups, skillIconUrl } from "@/data/skills";

function SkillCard({ icon, name }: { icon: string; name: string }) {
  return (
    <Bezel
      as="li"
      className="skill-card motion-premium hover:-translate-y-0.5 active:scale-[0.99]"
      innerClassName="flex flex-col items-center justify-center gap-3 px-3 py-5"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={skillIconUrl(icon)}
        alt=""
        width={32}
        height={32}
        className="skill-card__icon !h-8 !w-8 object-contain"
      />
      <span className="text-center text-xs font-medium text-neutral-700">{name}</span>
    </Bezel>
  );
}

export default function SkillsSection() {
  return (
    <SectionShell id="skills" shape="skills" minH="min-h-0" className="!py-16 md:!py-20">
      <div className="max-w-4xl lg:max-w-5xl">
        <div>
          <div className="max-w-xl">
            <p
              className="text-xs font-medium uppercase tracking-[0.35em] text-neutral-500"
              data-reveal
            >
              03 / Skills &amp; tools
            </p>
            <h2
              className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl"
              data-reveal
            >
              Tools I work with.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-neutral-600 md:text-base" data-reveal>
              Technologies and tools I use to turn ideas into reality.
              <br className="hidden sm:block" />
              Always learning, always exploring.
            </p>
          </div>

          <div className="mt-10 space-y-8">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-400">
                  {group.label}
                </p>
                <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  {group.items.map((item) => (
                    <SkillCard key={item.name} icon={item.icon} name={item.name} />
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-200/90 pt-6 text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-400">
            <p className="flex items-center gap-3">
              <span className="hidden h-px w-16 bg-neutral-300 sm:block" />
              Better tools · Brighter ideas
            </p>
            <p>Always a student</p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
