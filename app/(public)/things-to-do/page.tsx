import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { ThingsToDoContent } from "@/components/things-to-do/things-to-do-content";
import { pageMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbJsonLd, getLocalBusinessListJsonLd } from "@/lib/seo/schema";
import { THINGS_TO_DO_LISTINGS } from "@/lib/things-to-do-data";
import "@/css/listing-directory.css";
import "@/css/village-hero.css";

export const metadata: Metadata = pageMetadata({
  title: "Things To Do",
  description:
    "Things to do in the Cotswolds — walks, attractions, hidden gems, and local recommendations.",
  path: "/things-to-do",
});

export default function ThingsToDoPage() {
  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Things to Do", path: "/things-to-do" },
          ]),
          ...getLocalBusinessListJsonLd(THINGS_TO_DO_LISTINGS),
        ]}
      />
      <ThingsToDoContent />
    </>
  );
}
