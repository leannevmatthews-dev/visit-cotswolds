import type { Metadata } from "next";
import { BiburyContent } from "@/components/villages/bibury-content.static";
import { VillageHeroVideo } from "@/components/village-hero-video";
import "@/css/village-hero.css";
import "@/css/village-page.css";

export const metadata: Metadata = {
  title: "Bibury | Visit Cotswolds",
  description:
    "Discover Bibury — Arlington Row, the River Coln, and our curated guide to England's most photographed village.",
};

export default function BiburyPage() {
  return (
    <>
      <VillageHeroVideo />
      <BiburyContent />
    </>
  );
}
