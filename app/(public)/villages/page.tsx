import type { Metadata } from "next";
import { VillagesListingContent } from "@/components/villages/villages-listing-content";
import { getAllVillagesForListing } from "@/lib/villages/queries";
import "@/css/listing-directory.css";
import "@/css/village-hero.css";

export const metadata: Metadata = {
  title: "Villages | Visit Cotswolds",
  description:
    "Discover the most beautiful villages in the Cotswolds — from iconic Arlington Row to hidden valleys most visitors never find.",
};

export default async function VillagesPage() {
  const villages = await getAllVillagesForListing();

  return <VillagesListingContent villages={villages} />;
}
