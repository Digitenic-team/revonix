"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import type { Project } from "@/data/projects";

import { Navbar } from "../../landing/_components/navbar";

export default function ProjectHero({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
    );
  }, []);

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/*
      <section ref={ref} className="relative mt-10 w-full pt-18 pb-10">
        <div className="flex flex-col items-center gap-10 self-stretch">
          <div className="mx-auto flex max-w-360 flex-col items-center gap-6 px-4">
            <div className="flex flex-col items-center gap-4 px-5 md:px-0">
              <h1 className="hero-heading gsap-init justify-between bg-[radial-gradient(117.71%_63.41%_at_38.85%_66.79%,_#010101_0%,_#3558DA_100%)] bg-clip-text text-center text-[32px] leading-9 font-medium text-transparent sm:text-5xl sm:leading-16 md:text-[3.625rem]">
                {project.title}
              </h1>

              <p className="hero-text gsap-init text-secondary text-center text-base font-normal tracking-[-0.01125rem] sm:text-lg md:text-[1.125rem]">
                {project.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>
     */}
    </>
  );
}
