import type { Metadata } from "next";
import { PlacesToEatContent } from "@/components/static-pages/places-to-eat-content.static";

export const metadata: Metadata = {
  title: "Places to Eat | Visit Cotswolds",
  description: "Fine dining, historic pubs, and very good food across the Cotswolds.",
};

export default function PlacesToEatPage() {
  return <PlacesToEatContent />;
}
