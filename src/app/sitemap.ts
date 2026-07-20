import type { MetadataRoute } from "next";

// Static export requires this route to be statically generated at build time —
// new Date() as lastModified would otherwise make it a dynamic (non-static) route.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://dogwalking.pages.dev/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
