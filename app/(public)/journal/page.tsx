import type { Metadata } from "next";
import { JournalContent } from "@/components/static-pages/journal-content.static";

export const metadata: Metadata = {
  title: "The Journal | Visit Cotswolds",
  description: "Stories, guides, and inspiration from the heart of England.",
};

export default function JournalPage() {
  return <JournalContent />;
}
