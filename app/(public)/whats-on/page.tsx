import type { Metadata } from "next";
import { WhatsOnContent } from "@/components/whats-on/whats-on-content";
import { pageMetadata } from "@/lib/seo/metadata";
import "@/css/village-hero.css";

export const metadata: Metadata = pageMetadata({
  title: "What's On",
  description:
    "Events and things happening across the Cotswolds — markets, festivals, and seasonal highlights.",
  path: "/whats-on",
});

export default function WhatsOnPage() {
  return <WhatsOnContent />;
}
