"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
  onOpen: () => void;
};

export function ProjectItemCard({ project, onOpen }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      cardRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
        },
      },
    );
  }, []);

  return (
    <div
      ref={cardRef}
      onClick={onOpen}
      className="group border-secondary-foreground relative cursor-pointer overflow-hidden rounded-4xl border shadow-[0_44px_44px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_60px_60px_rgba(0,0,0,0.08)]"
    >
      <Image
        src={project.heroImage}
        alt={project.title}
        width={1200}
        height={800}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />

      {/* Overlay */}
      <div className="from-background/90 via-background/30 absolute inset-0 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-6 opacity-0 transition-all duration-300 group-hover:opacity-100">
        <h3 className="bg-gradient-radial bg-clip-text text-xl font-medium text-transparent">
          {project.title}
        </h3>
        <p className="text-muted-foreground mt-1 text-sm">{project.subtitle}</p>
      </div>
    </div>
  );
}
