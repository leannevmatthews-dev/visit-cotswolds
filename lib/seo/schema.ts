import { absoluteUrl, SITE_URL } from "@/lib/seo/site";
import type { Village } from "@/lib/villages/types";

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Visit Cotswolds",
    url: SITE_URL,
  };
}

export function getTouristAttractionJsonLd(village: Village) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: village.name,
    description: village.brief_summary,
    url: absoluteUrl(`/villages/${village.slug}`),
  };
}

export function getBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
