import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { PlacesToEatContent } from "@/components/places-to-eat/places-to-eat-content";
import { pageMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbJsonLd, getListingItemListJsonLd } from "@/lib/seo/schema";
import { PLACES_TO_EAT_LISTINGS } from "@/lib/places-to-eat-data";
import "@/css/listing-directory.css";
import "@/css/village-hero.css";

export const metadata: Metadata = pageMetadata({
  title: "Places To Eat",
  description:
    "The best places to eat and drink across the Cotswolds — pubs, restaurants, cafés, and afternoon tea.",
  path: "/places-to-eat",
});

export default function PlacesToEatPage() {
  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Places to Eat", path: "/places-to-eat" },
          ]),
          getListingItemListJsonLd(PLACES_TO_EAT_LISTINGS),
        ]}
      />
      <PlacesToEatContent />
    </>
  );
}
