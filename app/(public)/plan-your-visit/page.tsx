import type { Metadata } from "next";
import { PlanYourVisitContent } from "@/components/static-pages/plan-your-visit-content.static";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Plan Your Visit | Visit Cotswolds",
  description: "Practical guidance for an unhurried Cotswolds escape.",
  path: "/plan-your-visit",
});

export default function PlanYourVisitPage() {
  return <PlanYourVisitContent />;
}
