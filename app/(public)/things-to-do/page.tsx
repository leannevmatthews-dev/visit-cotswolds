import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { ThingsToDoContent } from "@/components/things-to-do/things-to-do-content";
import { pageMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbJsonLd } from "@/lib/seo/schema";
import "@/css/listing-directory.css";
import "@/css/village-hero.css";

export const metadata: Metadata = pageMetadata({
  title: "Things to Do in the Cotswolds | Visit Cotswolds",
  description:
    "Walks, gardens, historic sites and experiences across the Cotswolds — curated for every pace and every season.",
  path: "/things-to-do",
});

export default function ThingsToDoPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Things to Do", path: "/things-to-do" },
        ])}
      />
      <ThingsToDoContent />
    </>
  );
}
