import type { CrowdPillLevel, FaqItem } from "@/lib/villages/types";

export function scoreToDots(score: number, max = 5): number {
  return Math.min(max, Math.max(0, Math.round(score / 2)));
}

export function crowdLabelToPillLevel(label: string): CrowdPillLevel {
  const normalized = label.toLowerCase();

  if (
    normalized.includes("quiet") ||
    normalized.includes("low") ||
    normalized.includes("empty")
  ) {
    return "quiet";
  }

  if (normalized.includes("moderate") || normalized.includes("medium")) {
    return "moderate";
  }

  return "busy";
}

export function splitParagraphs(text: string): string[] {
  return text
    .split(/\n\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

export function getFaqJsonLd(items: FaqItem[]) {
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

export function heroImageUrl(
  heroGalleryUrls: string[] | null | undefined
): string | null {
  if (!heroGalleryUrls?.length) return null;
  return heroGalleryUrls[0] ?? null;
}

export function parkingMapEmbedUrl(mapUrl: string | null): string | null {
  if (!mapUrl) return null;
  if (mapUrl.includes("/maps/embed") || mapUrl.includes("output=embed")) {
    return mapUrl;
  }
  if (mapUrl.includes("google.com/maps")) {
    const separator = mapUrl.includes("?") ? "&" : "?";
    return `${mapUrl}${separator}output=embed`;
  }
  return mapUrl;
}
