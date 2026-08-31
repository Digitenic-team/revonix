import type { MetadataRoute } from "next";
import { getAllCaseStudies } from "@/lib/case-studies";

const BASE_URL = "https://revonix.co";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, changeFrequency: "monthly", priority: 1 },
    {
      url: `${BASE_URL}/case-studies`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...getAllCaseStudies().map((study) => ({
      url: `${BASE_URL}/case-studies/${study.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
