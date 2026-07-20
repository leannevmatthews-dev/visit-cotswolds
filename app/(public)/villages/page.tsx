import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { VillagesListingContent } from "@/components/villages/villages-listing-content";
import { pageMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbJsonLd } from "@/lib/seo/schema";
import { getAllVillagesForListing } from "@/lib/villages/queries";
import "@/css/listing-directory.css";
import "@/css/village-hero.css";

export const metadata: Metadata = pageMetadata({
  title: "Cotswolds Villages",
  description:
    "Honest guides to the best villages in the Cotswolds: when to visit, what to see, and what most visitors miss.",
  path: "/villages",
});

export default async function VillagesPage() {
  const villages = await getAllVillagesForListing();

  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Villages", path: "/villages" },
        ])}
      />
      <VillagesListingContent villages={villages} />
    </>
  );
}
