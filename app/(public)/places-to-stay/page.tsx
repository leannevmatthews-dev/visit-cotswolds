import type { Metadata } from "next";
import { PlacesToStayContent } from "@/components/places-to-stay/places-to-stay-content";
import "@/css/listing-directory.css";
import "@/css/village-hero.css";

export const metadata: Metadata = {
  title: "Places to Stay | Visit Cotswolds",
  description:
    "From honey-coloured manor houses to secluded shepherd huts, find a space to breathe.",
};

export default function PlacesToStayPage() {
  return <PlacesToStayContent />;
}
