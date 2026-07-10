import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/json-ld";
import { VillageHeroVideo } from "@/components/village-hero-video";
import { VillageContent, SHOW_VIDEO_SECTION } from "@/components/villages/village-content";
import { absoluteUrl } from "@/lib/seo/site";
import {
  getBreadcrumbJsonLd,
  getTouristAttractionJsonLd,
} from "@/lib/seo/schema";
import {
  buildComparisonDisplayRows,
  getAllVillageSlugs,
  getSeasonalAdvice,
  getVillageBySlug,
  getVillageHeroImagesByNames,
  getVillagesForComparisonByIds,
} from "@/lib/villages/queries";
import { combineWithVillageNames } from "@/lib/villages/helpers";
import { filterLinkableNearbyVillages } from "@/lib/villages/village-page-links";
import "@/css/village-hero.css";
import "@/css/village-page.css";

const DEFAULT_OG_IMAGE =
  "https://pwwpxxeploahbcpubhnx.supabase.co/storage/v1/object/public/village-images/homepage/homepage-hero.jpg";

type VillagePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getAllVillageSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: VillagePageProps): Promise<Metadata> {
  const { slug } = await params;
  const village = await getVillageBySlug(slug);

  if (!village) {
    return { title: "Village Not Found" };
  }

  const title = village.meta_title?.trim() || village.name;
  const description =
    village.meta_description?.trim() ||
    village.brief_summary?.trim() ||
    `Discover ${village.name} in the Cotswolds — crowd intelligence, local tips, and everything worth knowing before you visit.`;
  const ogImage =
    village.hero_background_image_url?.trim() || DEFAULT_OG_IMAGE;

  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(`/villages/${village.slug}`),
    },
    openGraph: {
      title,
      description,
      images: [ogImage],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      images: [ogImage],
    },
  };
}

export default async function VillagePage({ params }: VillagePageProps) {
  const { slug } = await params;
  const village = await getVillageBySlug(slug);

  if (!village) {
    notFound();
  }

  const linkableNearbyVillages = filterLinkableNearbyVillages(
    village.nearby_villages ?? [],
  );

  const comparisonPeerIds = village.comparison_village_ids ?? [];

  const heroImageNames = [
    ...(village.combine_with ?? []).flatMap((trip) =>
      combineWithVillageNames(trip.title),
    ),
    ...linkableNearbyVillages.map((nearby) => nearby.village_name),
  ];

  const [seasons, villageHeroImagesByName, comparisonPeers] = await Promise.all([
    getSeasonalAdvice(),
    getVillageHeroImagesByNames(heroImageNames),
    getVillagesForComparisonByIds(comparisonPeerIds),
  ]);

  const comparisonRows = buildComparisonDisplayRows(village, comparisonPeers);

  const nearbyHeroImages = Object.fromEntries(
    linkableNearbyVillages.flatMap((nearby) => {
      const url = villageHeroImagesByName[nearby.village_name];
      return url ? [[nearby.village_name, url] as const] : [];
    }),
  );

  return (
    <>
      <JsonLd
        data={[
          getTouristAttractionJsonLd(village),
          getBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Villages", path: "/villages" },
            { name: village.name, path: `/villages/${village.slug}` },
          ]),
        ]}
      />
      {SHOW_VIDEO_SECTION && <VillageHeroVideo />}
      <VillageContent
        village={village}
        seasons={seasons}
        comparisonRows={comparisonRows}
        combineHeroImages={villageHeroImagesByName}
        linkableNearbyVillages={linkableNearbyVillages}
        nearbyHeroImages={nearbyHeroImages}
      />
    </>
  );
}
