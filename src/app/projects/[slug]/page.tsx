import { notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "@/data/projects";
import ProjectHero from "../_components/project-hero";
import ProjectSection from "../_components/project-section";
import { Footer } from "../../landing/_components/footer";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <ProjectHero project={project} />

      {/* Project Gallery Section */}
      {project.gallery && project.gallery.length > 0 && (
        <ProjectSection title="Project Gallery">
          <div className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
            {project.gallery.map((image, index) => (
              <div
                key={index}
                className="group border-secondary-foreground bg-primary-foreground relative aspect-video w-full overflow-hidden rounded-4xl border shadow-[0_11px_24px_0_rgba(55,90,217,0.10)] transition-all duration-300 hover:shadow-[0_20px_40px_0_rgba(55,90,217,0.15)]"
              >
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </ProjectSection>
      )}

      {/* Overview Section */}
      <ProjectSection title="Overview">
        <div className="border-secondary-foreground bg-primary-foreground rounded-4xl border p-8 shadow-[0_11px_24px_0_rgba(55,90,217,0.10)] md:p-12">
          <p className="text-secondary text-left text-[1.125rem] leading-relaxed font-normal tracking-[-0.01125rem] md:text-[1.25rem] md:leading-7.5">
            {project.description}
          </p>
        </div>
      </ProjectSection>

      {/* Problem Section */}
      <ProjectSection title="The Problem">
        <div className="border-secondary-foreground bg-primary-foreground rounded-4xl border p-8 shadow-[0_11px_24px_0_rgba(55,90,217,0.10)] md:p-12">
          <p className="text-secondary text-left text-[1.125rem] leading-relaxed font-normal tracking-[-0.01125rem] md:text-[1.25rem] md:leading-7.5">
            {project.problem}
          </p>
        </div>
      </ProjectSection>

      {/* Solution Section */}
      <ProjectSection title="The Solution">
        <div className="border-secondary-foreground bg-primary-foreground rounded-4xl border p-8 shadow-[0_11px_24px_0_rgba(55,90,217,0.10)] md:p-12">
          <p className="text-secondary text-left text-[1.125rem] leading-relaxed font-normal tracking-[-0.01125rem] md:text-[1.25rem] md:leading-7.5">
            {project.solution}
          </p>
        </div>
      </ProjectSection>

      {/* Outcome Section */}
      <ProjectSection title="Outcome">
        <div className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
          {project.outcome.map((item, index) => (
            <div
              key={item}
              className="border-secondary-foreground bg-primary-foreground flex flex-col gap-4 rounded-4xl border p-6 shadow-[0_11px_24px_0_rgba(55,90,217,0.10)] transition-all duration-300 hover:shadow-[0_20px_40px_0_rgba(55,90,217,0.15)]"
            >
              <div className="flex items-start gap-3">
                <div className="bg-primary mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  <span className="text-primary-foreground text-sm font-semibold">
                    {index + 1}
                  </span>
                </div>
                <p className="text-secondary text-[1.125rem] leading-relaxed font-normal tracking-[-0.01125rem]">
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ProjectSection>

      {/* Tech Stack Section */}
      <ProjectSection title="Tech Stack">
        <div className="flex flex-wrap justify-center gap-4">
          {project.techStack.map((tech) => (
            <div
              key={tech}
              className="border-primary bg-primary-foreground hover:bg-primary text-secondary cursor-pointer rounded-full border px-6 py-3 shadow-[0_4px_12px_0_rgba(55,90,217,0.10)] transition-all duration-300 hover:text-white hover:shadow-[0_8px_20px_0_rgba(55,90,217,0.20)]"
            >
              <span className="text-sm font-medium tracking-[-0.01rem] transition-all duration-300">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </ProjectSection>
      <Footer />
    </main>
  );
}
