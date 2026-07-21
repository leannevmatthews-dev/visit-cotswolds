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
  websiteUrl?: string;
  address?: string;
  category?: string;
  isAttraction?: boolean;
};

function getListingPostalAddress(address?: string) {
  const trimmed = address?.trim();
  if (!trimmed) {
    return null;
  }

  const postcodeMatch = trimmed.match(
    /\b([A-Z]{1,2}\d{1,2}[A-Z]?\s*\d[A-Z]{2})\s*$/i,
  );

  if (!postcodeMatch || postcodeMatch.index === undefined) {
    return {
      "@type": "PostalAddress" as const,
      streetAddress: trimmed,
    };
  }

  const postalCode = postcodeMatch[1].toUpperCase();
  const streetAddress = trimmed
    .slice(0, postcodeMatch.index)
    .replace(/,\s*$/, "")
    .trim();

  return {
    "@type": "PostalAddress" as const,
    ...(streetAddress ? { streetAddress } : {}),
    postalCode,
  };
}

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Visit Cotswolds",
    url: SITE_URL,
    logo: "https://pwwpxxeploahbcpubhnx.supabase.co/storage/v1/object/public/logo/visit%20cotswolds%20logo%20light%20(transparent).png",
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

export function getFaqJsonLd(
  items: { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getArticleJsonLd({
  title,
  description,
  path,
  datePublished,
  dateModified,
  authorName = "Leanne Matthews",
}: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
  authorName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: absoluteUrl(path),
    datePublished,
    dateModified,
    author: {
      "@type": "Person",
      name: authorName,
      url: absoluteUrl("/about"),
    },
    publisher: getOrganizationJsonLd(),
  };
}

const MONTH_INDEX: Record<string, number> = {
  JAN: 0,
  JANUARY: 0,
  FEB: 1,
  FEBRUARY: 1,
  MAR: 2,
  MARCH: 2,
  APR: 3,
  APRIL: 3,
  MAY: 4,
  JUN: 5,
  JUNE: 5,
  JUL: 6,
  JULY: 6,
  AUG: 7,
  AUGUST: 7,
  SEP: 8,
  SEPT: 8,
  SEPTEMBER: 8,
  OCT: 9,
  OCTOBER: 9,
  NOV: 10,
  NOVEMBER: 10,
  DEC: 11,
  DECEMBER: 11,
};

function formatEventIsoDate(
  month: string,
  day: string,
  year: number,
): string | null {
  const monthIndex = MONTH_INDEX[month.trim().toUpperCase()];
  const dayNumber = Number.parseInt(day.trim(), 10);

  if (
    monthIndex === undefined ||
    !Number.isFinite(dayNumber) ||
    !Number.isFinite(year)
  ) {
    return null;
  }

  const monthPart = String(monthIndex + 1).padStart(2, "0");
  const dayPart = String(dayNumber).padStart(2, "0");
  return `${year}-${monthPart}-${dayPart}`;
}

function getEventDateFields(event: WhatsOnEvent) {
  if (event.recurring || event.frequency) {
    return {};
  }

  const startDate = formatEventIsoDate(event.month, event.day, event.year);
  if (!startDate) {
    return {};
  }

  const endDate =
    event.endDay && event.endMonth
      ? formatEventIsoDate(event.endMonth, event.endDay, event.year)
      : null;

  return {
    startDate,
    ...(endDate ? { endDate } : {}),
  };
}

export function getEventListJsonLd(events: WhatsOnEvent[]) {
  return events.map((event) => ({
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.description,
    location: {
      "@type": "Place",
      name: event.location,
    },
    ...(event.imageUrl ? { image: event.imageUrl } : {}),
    ...(event.websiteUrl ? { url: event.websiteUrl } : {}),
    ...getEventDateFields(event),
  }));
}

export function getLocalBusinessListJsonLd(listings: ListingLike[]) {
  return listings.map((listing) => {
    if (listing.isAttraction) {
      return {
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        name: listing.name,
        description: listing.description,
        ...(listing.imageUrl ? { image: listing.imageUrl } : {}),
        ...(listing.websiteUrl ? { url: listing.websiteUrl } : {}),
      };
    }

    const postalAddress = getListingPostalAddress(listing.address);

    return {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: listing.name,
      description: listing.description,
      ...(listing.imageUrl ? { image: listing.imageUrl } : {}),
      ...(listing.websiteUrl ? { url: listing.websiteUrl } : {}),
      ...(postalAddress ? { address: postalAddress } : {}),
    };
  });
}
