import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { PlacesToStayContent } from "@/components/places-to-stay/places-to-stay-content";
import { pageMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbJsonLd } from "@/lib/seo/schema";
import "@/css/listing-directory.css";
import "@/css/village-hero.css";

export const metadata: Metadata = pageMetadata({
  title: "Places To Stay",
  description:
    "Handpicked places to stay across the Cotswolds — from riverside inns to country house hotels.",
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
