import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo/site";
import { getAllVillageSlugs } from "@/lib/villages/queries";

const STATIC_PAGES = [
  "/villages",
  "/places-to-stay",
  "/places-to-eat",
  "/things-to-do",
  "/whats-on",
  "/about",
  "/contact",
  "/privacy-policy",
  "/cookie-policy",
  "/terms",
  "/editorial-policy",
] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getAllVillageSlugs();
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    ...STATIC_PAGES.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  const villageEntries: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${SITE_URL}/villages/${slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticEntries, ...villageEntries];
}
