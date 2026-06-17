import type { Metadata } from "next";
import { ThingsToDoContent } from "@/components/static-pages/things-to-do-content.static";

export const metadata: Metadata = {
  title: "Things to Do | Visit Cotswolds",
  description: "Walks, gardens, culture, and unhurried experiences in the Cotswolds.",
};

export default function ThingsToDoPage() {
  return <ThingsToDoContent />;
}
