import type { MetadataRoute } from "next";

import { pages } from "@/content";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const homepageFirst = [...pages].sort((left, right) =>
    left.path === "/" ? -1 : right.path === "/" ? 1 : 0,
  );

  return homepageFirst.map((page) => ({
    url: absoluteUrl(page.path),
    changeFrequency: page.kind === "pillar" ? "weekly" : "monthly",
    priority: page.kind === "pillar" ? 1 : page.kind === "hub" ? 0.9 : page.kind === "article" ? 0.8 : 0.6,
  }));
}
