import type { MetadataRoute } from "next";
import { getPublishedGuideSitemapEntries } from "@/lib/guides/queries";
import { SITE_URL } from "@/lib/seo/site";
import { getPublishedVillageSitemapEntries } from "@/lib/villages/queries";

export const revalidate = 3600;

const STATIC_PAGES = [
  "/villages",
  "/guides",
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
  const [publishedVillages, publishedGuides] = await Promise.all([
    getPublishedVillageSitemapEntries(),
    getPublishedGuideSitemapEntries(),
  ]);
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
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

  const villageEntries: MetadataRoute.Sitemap = publishedVillages.map(
    ({ slug }) => ({
      url: `${SITE_URL}/villages/${slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.6,
    }),
  );

  const guideEntries: MetadataRoute.Sitemap = publishedGuides.map(
    ({ slug, updated_at }) => ({
      url: `${SITE_URL}/guides/${slug}`,
      lastModified: new Date(updated_at),
      changeFrequency: "weekly",
      priority: 0.8,
    }),
  );

  return [...staticEntries, ...villageEntries, ...guideEntries];
}
