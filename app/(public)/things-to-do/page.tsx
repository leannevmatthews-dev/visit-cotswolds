import type { Metadata } from "next";
import { ThingsToDoContent } from "@/components/things-to-do/things-to-do-content";
import "@/css/listing-directory.css";
import "@/css/village-hero.css";

export const metadata: Metadata = {
  title: "Things to Do | Visit Cotswolds",
  description: "Walks, gardens, culture, and unhurried experiences in the Cotswolds.",
};

export default function ThingsToDoPage() {
  return <ThingsToDoContent />;
}
