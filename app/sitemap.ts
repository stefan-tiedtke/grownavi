import type { MetadataRoute } from "next";
import { phases, problems, knowledge } from "@/lib/content";
import { toolDefinitions } from "@/lib/tools";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.grownavi.de";
  const staticPages = [
    "",
    "/anbauphasen",
    "/grundlagen",
    "/sortenkunde",
    "/probleme",
    "/werkzeuge",
    "/wissen",
    "/mein-grow",
    "/faq",
    "/rechtliches",
    "/datenschutz",
  ];
  return [
    ...staticPages.map((url) => ({
      url: base + url,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: url === "" ? 1 : 0.7,
    })),
    ...phases.map((x) => ({
      url: `${base}/anbauphasen/${x.slug}`,
      lastModified: new Date(),
    })),
    ...problems.map((x) => ({
      url: `${base}/probleme/${x.slug}`,
      lastModified: new Date(),
    })),
    ...knowledge.map((x) => ({
      url: `${base}/wissen/${x.slug}`,
      lastModified: new Date(),
    })),
    ...toolDefinitions.map((x) => ({
      url: `${base}/werkzeuge/${x.slug}`,
      lastModified: new Date(),
    })),
  ];
}
