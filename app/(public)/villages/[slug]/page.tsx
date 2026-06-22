import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/json-ld";
import { VillageHeroVideo } from "@/components/village-hero-video";
import { VillageContent } from "@/components/villages/village-content";
import { villagePageMetadata } from "@/lib/seo/metadata";
import {
  getBreadcrumbJsonLd,
  getTouristAttractionJsonLd,
} from "@/lib/seo/schema";
import {
  getAllVillageSlugs,
  getSeasonalAdvice,
  getVillageBySlug,
  getVillageHeroImagesByNames,
} from "@/lib/villages/queries";
import { combineWithVillageNames } from "@/lib/villages/helpers";
import "@/css/village-hero.css";
import "@/css/village-page.css";

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
    return { title: "Village Not Found | Visit Cotswolds" };
  }

  return villagePageMetadata(village);
}

export default async function VillagePage({ params }: VillagePageProps) {
  const { slug } = await params;
  const village = await getVillageBySlug(slug);

  if (!village) {
    notFound();
  }

  const heroImageNames = [
    ...(village.comparison_stats ?? []).map((row) => row.village_name),
    ...(village.combine_with ?? []).flatMap((trip) =>
      combineWithVillageNames(trip.title),
    ),
  ];

  const [seasons, villageHeroImagesByName] = await Promise.all([
    getSeasonalAdvice(),
    getVillageHeroImagesByNames(heroImageNames),
  ]);

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
      <VillageHeroVideo />
      <VillageContent
        village={village}
        seasons={seasons}
        comparisonHeroImages={villageHeroImagesByName}
        combineHeroImages={villageHeroImagesByName}
      />
    </>
  );
}
