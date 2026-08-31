import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  pageExtensions: ["ts", "tsx", "mdx"],
  images: {
    // AVIF first, WebP fallback. Roughly 20-30% smaller than WebP alone, at
    // the cost of a slower first encode per size (cached thereafter).
    formats: ["image/avif", "image/webp"],
    // Optimized variants are cached for 31 days rather than the 60s default,
    // which matters when self-hosting — the cache is local disk, not a CDN.
    minimumCacheTTL: 2678400,
  },
};

/**
 * Plugins are referenced by name (not by imported value) because Turbopack —
 * the default bundler in Next 16 — needs a serializable loader config.
 */
const withMDX = createMDX({
  options: {
    remarkPlugins: [
      // "yaml" is the matter preset; remark-frontmatter rejects a bare `{}`.
      ["remark-frontmatter", ["yaml"]],
      ["remark-mdx-frontmatter", { name: "frontmatter" }],
    ],
  },
});

export default withMDX(nextConfig);
