import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { PlacesToStayContent } from "@/components/places-to-stay/places-to-stay-content";
import { pageMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbJsonLd, getLocalBusinessListJsonLd } from "@/lib/seo/schema";
import { PLACES_TO_STAY_LISTINGS } from "@/lib/places-to-stay-data";
import "@/css/listing-directory.css";
import "@/css/village-hero.css";

export const metadata: Metadata = pageMetadata({
  title: "Where To Stay In The Cotswolds",
  description:
    "Where to stay in the Cotswolds: riverside inns, country house hotels and boutique stays, checked against real reviews and our own visits.",
  path: "/places-to-stay",
});

export default function PlacesToStayPage() {
  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Places to Stay", path: "/places-to-stay" },
          ]),
          ...getLocalBusinessListJsonLd(PLACES_TO_STAY_LISTINGS),
        ]}
      />
      <PlacesToStayContent />
    </>
  );
}
