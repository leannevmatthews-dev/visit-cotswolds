import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { PlacesToEatContent } from "@/components/places-to-eat/places-to-eat-content";
import { pageMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbJsonLd } from "@/lib/seo/schema";
import "@/css/listing-directory.css";
import "@/css/village-hero.css";

export const metadata: Metadata = pageMetadata({
  title: "Places to Eat in the Cotswolds | Visit Cotswolds",
  description:
    "Curated restaurants, pubs and cafés across the Cotswolds — from Michelin-starred dining rooms to village pubs worth the detour.",
  path: "/places-to-eat",
});

export default function PlacesToEatPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Places to Eat", path: "/places-to-eat" },
        ])}
      />
      <PlacesToEatContent />
    </>
  );
}
