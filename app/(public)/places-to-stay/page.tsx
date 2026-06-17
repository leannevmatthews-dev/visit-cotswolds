import type { Metadata } from "next";
import { PlacesToStayContent } from "@/components/static-pages/places-to-stay-content.static";

export const metadata: Metadata = {
  title: "Places to Stay | Visit Cotswolds",
  description: "From honey-colored manor houses to secluded shepherd huts, find a space to breathe.",
};

export default function PlacesToStayPage() {
  return <PlacesToStayContent />;
}
