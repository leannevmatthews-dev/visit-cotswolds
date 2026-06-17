import type { Metadata } from "next";
import { WhatsOnContent } from "@/components/static-pages/whats-on-content.static";

export const metadata: Metadata = {
  title: "What's On | Visit Cotswolds",
  description: "Events, festivals, and cultural moments across the Cotswolds.",
};

export default function WhatsOnPage() {
  return <WhatsOnContent />;
}
