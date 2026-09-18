"use client";

import FeaturedProjectCard from "@/components/FeaturedProjectCard";
import { projects } from "@/data/projects";
import { useState } from "react";

export default function ProjectsShowcase() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="section section-block bg-white py-14 md:py-16">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex items-center justify-between gap-4" data-reveal>
          <h2 className="text-lg font-semibold text-neutral-900">Featured Projects</h2>
          {!showAll && projects.length > 3 && (
            <button
              type="button"
              className="link-accent text-sm font-medium text-blue-600 transition hover:text-blue-700"
              onClick={() => setShowAll(true)}
            >
              View all projects →
            </button>
          )}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <FeaturedProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
