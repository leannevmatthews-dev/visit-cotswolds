import type { Metadata } from "next";
import { PlanYourVisitContent } from "@/components/static-pages/plan-your-visit-content.static";

export const metadata: Metadata = {
  title: "Plan Your Visit | Visit Cotswolds",
  description: "Practical guidance for an unhurried Cotswolds escape.",
};

export default function PlanYourVisitPage() {
  return <PlanYourVisitContent />;
}
