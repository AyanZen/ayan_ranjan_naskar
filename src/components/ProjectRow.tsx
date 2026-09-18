"use client";

import ProjectPreview from "@/components/ProjectPreview";
import ArrowUpRight from "@/components/ui/ArrowUpRight";
import { primaryProjectHref, type Project } from "@/data/projects";
import Image from "next/image";

export default function ProjectRow({ project }: { project: Project }) {
  const href = primaryProjectHref(project) ?? "#";

  return (
    <article className="project-card group relative overflow-hidden rounded-2xl border border-neutral-200/90 bg-[#f7f8fa] transition duration-300 hover:border-neutral-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="grid gap-0 md:grid-cols-[minmax(0,340px)_1fr]"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 md:aspect-auto md:min-h-[220px]">
          {project.image ? (
            <Image
              src={project.image}
              alt=""
              fill
              className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
              sizes="340px"
            />
          ) : (
            <div className="absolute inset-3 overflow-hidden rounded-xl">
              <ProjectPreview type={project.preview} />
            </div>
          )}
        </div>

        <div className="relative flex flex-col p-6 md:p-8">
          <span className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-800 transition group-hover:border-neutral-300">
            <ArrowUpRight className="h-4 w-4" />
          </span>
          <h3 className="pr-12 text-xl font-semibold tracking-tight text-neutral-900 md:text-2xl">
            {project.title}
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-600">
            {project.description}
          </p>
          <ul className="mt-auto flex flex-wrap gap-2 pt-6">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-md bg-white px-2.5 py-1 text-[11px] font-medium text-neutral-600 ring-1 ring-neutral-200/80"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </a>
    </article>
  );
}
