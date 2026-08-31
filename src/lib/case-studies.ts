import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type CaseStudyMetric = {
  value: string;
  label: string;
};

export type CaseStudyMeta = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  client: string;
  industry: string;
  year: string;
  services: string[];
  heroImage: string;
  gallery: string[];
  metrics: CaseStudyMetric[];
  techStack: string[];
  featured: boolean;
  /** Lower numbers surface first on the index and the landing teaser. */
  order: number;
};

const CONTENT_DIR = path.join(process.cwd(), "src/content/case-studies");

function toMeta(slug: string, data: Record<string, unknown>): CaseStudyMeta {
  return {
    slug,
    title: String(data.title ?? slug),
    subtitle: String(data.subtitle ?? ""),
    summary: String(data.summary ?? ""),
    client: String(data.client ?? ""),
    industry: String(data.industry ?? ""),
    year: String(data.year ?? ""),
    services: (data.services as string[]) ?? [],
    heroImage: String(data.heroImage ?? ""),
    gallery: (data.gallery as string[]) ?? [],
    metrics: (data.metrics as CaseStudyMetric[]) ?? [],
    techStack: (data.techStack as string[]) ?? [],
    featured: Boolean(data.featured),
    order: Number(data.order ?? 999),
  };
}

/** All case studies, ordered by their `order` frontmatter field. */
export function getAllCaseStudies(): CaseStudyMeta[] {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const { data } = matter(fs.readFileSync(path.join(CONTENT_DIR, file)));
      return toMeta(slug, data);
    })
    .sort((a, b) => a.order - b.order);
}

export function getFeaturedCaseStudies(limit = 3): CaseStudyMeta[] {
  return getAllCaseStudies()
    .filter((study) => study.featured)
    .slice(0, limit);
}

export function getCaseStudy(slug: string): CaseStudyMeta | null {
  const file = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  return toMeta(slug, matter(fs.readFileSync(file)).data);
}
