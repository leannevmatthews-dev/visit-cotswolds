import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { PlacesToStayContent } from "@/components/places-to-stay/places-to-stay-content";
import { pageMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbJsonLd } from "@/lib/seo/schema";
import "@/css/listing-directory.css";
import "@/css/village-hero.css";

export const metadata: Metadata = pageMetadata({
  title: "Places to Stay in the Cotswolds | Visit Cotswolds",
  description:
    "Hand-picked hotels, inns and retreats across the Cotswolds — chosen for atmosphere, location, and the kind of hospitality that stays with you.",
  path: "/places-to-stay",
});

export default function PlacesToStayPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Places to Stay", path: "/places-to-stay" },
        ])}
      />
      <PlacesToStayContent />
    </>
  );
}
