import { absoluteUrl, SITE_URL } from "@/lib/seo/site";
import type { Village } from "@/lib/villages/types";
import type { WhatsOnEvent } from "@/lib/whats-on-data";

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export type ListingLike = {
  name: string;
  description: string;
  imageUrl?: string;
  category?: string;
};

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Visit Cotswolds",
    url: SITE_URL,
  };
}

export function getPersonJsonLd(bio: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Leanne Matthews",
    url: absoluteUrl("/about"),
    description: bio,
    worksFor: getOrganizationJsonLd(),
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

export function getEventListJsonLd(events: WhatsOnEvent[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: events.map((event, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Event",
        name: event.title,
        description: event.description,
        location: {
          "@type": "Place",
          name: event.location,
        },
        ...(event.imageUrl ? { image: event.imageUrl } : {}),
        ...(event.websiteUrl ? { url: event.websiteUrl } : {}),
      },
    })),
  };
}

export function getListingItemListJsonLd(listings: ListingLike[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: listings.map((listing, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Place",
        name: listing.name,
        description: listing.description,
        ...(listing.imageUrl ? { image: listing.imageUrl } : {}),
      },
    })),
  };
}
