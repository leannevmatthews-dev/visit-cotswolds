import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo/site";
import { getAllVillageSlugs } from "@/lib/villages/queries";

const LISTING_PAGES = [
  "/villages",
  "/places-to-eat",
  "/places-to-stay",
  "/things-to-do",
  "/plan-your-visit",
] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getAllVillageSlugs();
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "daily",
      priority: 1,
    },
    ...LISTING_PAGES.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];

  const villageEntries: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${SITE_URL}/villages/${slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticEntries, ...villageEntries];
}
