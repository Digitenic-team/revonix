"use client";

import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { StyledButton } from "@/components/styled-button";

export function ProjectModalDialog({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <Dialog>
      {/* Trigger */}
      <DialogTrigger asChild>
        <div
          className={`hero-card relative cursor-pointer overflow-hidden ${className}`}
        >
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </DialogTrigger>

      {/* Dialog */}
      <DialogContent className="max-w-xl! overflow-hidden rounded-4xl p-0">
        {/* Hero */}
        <div className="relative h-80">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="space-y-8 p-8">
          <p className="text-secondary text-[1.125rem] leading-relaxed">
            {project.description}
          </p>

          {/* Tech stack */}
          {project.techStack?.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.techStack.slice(0, 6).map((tech) => (
                <span
                  key={tech}
                  className="border-secondary-foreground rounded-full border px-3 py-1 text-sm opacity-80"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="flex items-center justify-between pt-4">
            <span className="text-muted-foreground text-sm">
              Full breakdown, architecture & results
            </span>

            <Link href={`/projects/${project.slug}`}>
              <StyledButton className="p-6">View full case study</StyledButton>
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
