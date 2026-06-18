import type { Metadata } from "next";
import { PlacesToEatContent } from "@/components/places-to-eat/places-to-eat-content";
import "@/css/listing-directory.css";
import "@/css/village-hero.css";

export const metadata: Metadata = {
  title: "Places to Eat | Visit Cotswolds",
  description: "Fine dining, historic pubs, and very good food across the Cotswolds.",
};

export default function PlacesToEatPage() {
  return <PlacesToEatContent />;
}
