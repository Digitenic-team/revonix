import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  pageExtensions: ["ts", "tsx", "mdx"],
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
