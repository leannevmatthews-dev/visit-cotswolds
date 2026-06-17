import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { VillageHeroVideo } from "@/components/village-hero-video";
import { VillageContent } from "@/components/villages/village-content";
import {
  getAllVillageSlugs,
  getSeasonalAdvice,
  getVillageBySlug,
} from "@/lib/villages/queries";
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

  return {
    title: village.meta_title ?? `${village.name} | Visit Cotswolds`,
    description:
      village.meta_description ??
      `Discover ${village.name} — ${village.brief_summary.slice(0, 140)}…`,
  };
}

export default async function VillagePage({ params }: VillagePageProps) {
  const { slug } = await params;
  const [village, seasons] = await Promise.all([
    getVillageBySlug(slug),
    getSeasonalAdvice(),
  ]);

  if (!village) {
    notFound();
  }

  return (
    <>
      <VillageHeroVideo />
      <VillageContent village={village} seasons={seasons} />
    </>
  );
}
