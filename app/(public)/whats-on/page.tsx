import type { Metadata } from "next";
import { WhatsOnContent } from "@/components/whats-on/whats-on-content";
import "@/css/village-hero.css";

export const metadata: Metadata = {
  title: "What's On | Visit Cotswolds",
  description: "Events, festivals, and cultural moments across the Cotswolds.",
};

export default function WhatsOnPage() {
  return <WhatsOnContent />;
}
