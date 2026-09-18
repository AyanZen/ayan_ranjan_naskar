"use client";

import ProjectPreview from "@/components/ProjectPreview";
import Bezel from "@/components/ui/Bezel";
import ArrowUpRight from "@/components/ui/ArrowUpRight";
import {
  formatProjectNumber,
  primaryProjectHref,
  type Project,
} from "@/data/projects";
import Image from "next/image";

type ProjectCardProps = {
  project: Project;
  index: number;
  visible: boolean;
};

export default function ProjectCard({
  project,
  index,
  visible,
}: ProjectCardProps) {
  const isDark = project.theme === "dark";
  const href = primaryProjectHref(project);
  const number = formatProjectNumber(index);

  return (
    <Bezel
      as="article"
      data-category={project.category}
      data-visible={visible ? "true" : "false"}
      className={`project-card group motion-premium hover:-translate-y-0.5 ${visible ? "" : "hidden"}`}
      innerClassName={`flex min-h-[260px] flex-col overflow-hidden md:min-h-[280px] md:flex-row md:items-stretch ${
        isDark ? "bezel-inner-dark bg-neutral-950 text-white" : "bezel-inner--muted"
      }`}
    >
      <div className="flex flex-1 flex-col p-6 md:p-8 md:pr-4">
        <p
          className={`text-sm tabular-nums ${isDark ? "text-neutral-500" : "text-neutral-400"}`}
        >
          {number}
        </p>
        <h3 className="mt-3 text-xl font-semibold tracking-tight md:text-2xl">
          {project.title}
        </h3>
        <p
          className={`mt-3 max-w-md text-sm leading-relaxed ${isDark ? "text-neutral-400" : "text-neutral-600"}`}
        >
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-6">
          <ul className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
                  isDark
                    ? "bg-white/10 text-neutral-300"
                    : "bg-white/90 text-neutral-600 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)]"
                }`}
              >
                {tag}
              </li>
            ))}
          </ul>

          {href ? (
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`group/icon flex h-10 w-10 shrink-0 items-center justify-center rounded-full motion-premium active:scale-95 ${
                isDark
                  ? "bg-white/10 hover:bg-white/15"
                  : "bg-white shadow-[var(--shadow-ambient-sm)] hover:shadow-[var(--shadow-ambient)]"
              }`}
              aria-label={`Open ${project.title}`}
            >
              <ArrowUpRight className="h-4 w-4 motion-premium group-hover/icon:translate-x-0.5 group-hover/icon:-translate-y-0.5" />
            </a>
          ) : (
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-full opacity-40 ${
                isDark ? "bg-white/10" : "bg-white"
              }`}
              aria-hidden
            >
              <ArrowUpRight className="h-4 w-4 opacity-60" />
            </span>
          )}
        </div>
      </div>

      <div className="relative flex min-h-[180px] flex-1 items-center justify-center overflow-hidden p-4 md:max-w-[46%] md:p-6">
        <div className="project-card__preview w-full max-w-[240px] motion-premium md:-rotate-6 md:group-hover:-rotate-3 md:group-hover:scale-[1.03]">
          {project.image ? (
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-[var(--shadow-ambient-sm)]">
              <Image
                src={project.image}
                alt=""
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 240px, 280px"
              />
            </div>
          ) : (
            <ProjectPreview type={project.preview} tilted />
          )}
        </div>
      </div>
    </Bezel>
  );
}
