"use client";

import { projects } from "@/data/projects";
import { ProjectItemCard } from "./project-item-card";

export function ProjectsGallery() {
  return (
    <section className="mt-40 px-4">
      <div className="mx-auto max-w-360 space-y-16">
        <div className="text-center">
          <h2 className="bg-gradient-radial bg-clip-text text-4xl font-medium tracking-[-0.03rem] text-transparent sm:text-5xl md:text-[3.5rem]">
            Selected Projects
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectItemCard
              key={project.slug}
              project={project}
              onOpen={() => {}}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
