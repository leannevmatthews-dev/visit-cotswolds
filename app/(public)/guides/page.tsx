import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { GuidesContent } from "@/components/guides/guides-content";
import { pageMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbJsonLd } from "@/lib/seo/schema";
import "@/css/listing-directory.css";
import "@/css/village-hero.css";

export const metadata: Metadata = pageMetadata({
  title: "Guides",
  description:
    "Cotswolds travel guides — itineraries, practical planning, and in-depth village guides from real visits.",
  path: "/guides",
});

export default function GuidesPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
        ])}
      />
      <GuidesContent />
    </>
  );
}
