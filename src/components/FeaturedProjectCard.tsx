"use client";

import ProjectPreview from "@/components/ProjectPreview";
import ArrowUpRight from "@/components/ui/ArrowUpRight";
import { primaryProjectHref, type Project } from "@/data/projects";
import Image from "next/image";

export default function FeaturedProjectCard({ project }: { project: Project }) {
  const href = primaryProjectHref(project) ?? "#";

  return (
    <article className="project-card group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
        {project.image ? (
          <Image
            src={project.image}
            alt=""
            fill
            className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 360px"
          />
        ) : (
          <div className="absolute inset-2 overflow-hidden rounded-xl">
            <ProjectPreview type={project.preview} />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-neutral-900">{project.title}</h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-neutral-600">
          {project.description}
        </p>
        <div className="mt-4 flex items-end justify-between gap-3">
          <ul className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag) => (
              <li
                key={tag}
                className="rounded-md bg-neutral-100 px-2 py-0.5 text-[11px] text-neutral-600"
              >
                {tag}
              </li>
            ))}
          </ul>
          <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-200 text-neutral-800 transition hover:border-neutral-300 hover:bg-neutral-50"
            aria-label={`Open ${project.title}`}
          >
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  );
}
