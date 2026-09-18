"use client";

import ProjectCard from "@/components/ProjectCard";
import SectionShell from "@/components/SectionShell";
import {
  projectFilters,
  projectMatchesFilter,
  projects,
  projectsSection,
  type ProjectFilterId,
} from "@/data/projects";
import { useMemo, useState } from "react";

export default function ProjectsSection() {
  const [filter, setFilter] = useState<ProjectFilterId>("all");

  const visibleProjects = useMemo(
    () => projects.map((p, index) => ({ project: p, index })),
    [],
  );

  return (
    <SectionShell
      id="projects"
      shape="projects"
      minH="min-h-0"
      className="!pb-20 !pt-16 md:!pt-20"
    >
      <div className="max-w-3xl">
        <p
          className="text-xs font-medium uppercase tracking-[0.35em] text-neutral-500"
          data-reveal
        >
          {projectsSection.label}
        </p>
        <h2
          className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 md:text-[2.75rem] md:leading-tight"
          data-reveal
        >
          {projectsSection.title}
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-600 md:text-base" data-reveal>
          {projectsSection.description}
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2 md:mt-10" data-reveal>
        {projectFilters.map((f) => {
          const active = filter === f.id;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={`rounded-full px-4 py-2 text-xs font-medium transition md:text-sm ${
                active
                  ? "bg-neutral-900 text-white shadow-sm"
                  : "bg-transparent text-neutral-600 hover:bg-white/80 hover:text-neutral-900"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-5 md:mt-10 md:grid-cols-2 md:gap-6">
        {visibleProjects.map(({ project, index }) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            visible={projectMatchesFilter(project, filter)}
          />
        ))}
      </div>

      <div className="mt-12 flex flex-wrap items-end justify-between gap-6 border-t border-neutral-200/90 pt-6 text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-400">
        <p className="flex items-center gap-3">
          <span className="h-px w-8 bg-neutral-300" />
          {projectsSection.footerNote}
        </p>
        <div className="text-right">
          <p className="flex items-center justify-end gap-3">
            <span className="hidden h-px w-24 bg-neutral-300 sm:block" />
            {String(projects.length).padStart(2, "0")} projects
          </p>
          <p className="mt-2 text-[11px] normal-case tracking-normal text-neutral-500">
            {projectsSection.tagline}
          </p>
        </div>
      </div>

      <p
        className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 text-[10px] font-medium uppercase tracking-[0.35em] text-neutral-300 [writing-mode:vertical-rl] lg:block"
        aria-hidden
      >
        Build · Explore · Learn · Repeat
      </p>
    </SectionShell>
  );
}
