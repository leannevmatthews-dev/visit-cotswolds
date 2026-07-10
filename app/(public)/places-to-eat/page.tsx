import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { PlacesToEatContent } from "@/components/places-to-eat/places-to-eat-content";
import { pageMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbJsonLd, getLocalBusinessListJsonLd } from "@/lib/seo/schema";
import { PLACES_TO_EAT_LISTINGS } from "@/lib/places-to-eat-data";
import "@/css/listing-directory.css";
import "@/css/village-hero.css";

export const metadata: Metadata = pageMetadata({
  title: "Where To Eat In The Cotswolds",
  description:
    "Where to eat in the Cotswolds: pubs, restaurants, cafés and afternoon tea, reviewed with real visit notes and practical detail.",
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
          ...getLocalBusinessListJsonLd(PLACES_TO_EAT_LISTINGS),
        ]}
      />
      <PlacesToEatContent />
    </>
  );
}
