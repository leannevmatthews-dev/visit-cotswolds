import type { Metadata } from "next";
import { VillagesIndex } from "@/components/villages/villages-index";

export const metadata: Metadata = {
  title: "The Villages | Visit Cotswolds",
  description: "Filter by region to find your perfect stay.",
};

export default function VillagesPage() {
  return <VillagesIndex />;
}
