import type { CombineWithTrip, CrowdPillLevel, FaqItem } from "@/lib/villages/types";

type LegacyCombineWithTrip = {
  title: string;
  body: string;
  duration_label: string;
  left_image_url?: string;
  right_image_url?: string;
  image_urls?: string[];
};

/** Map stored JSON (including legacy image_urls arrays) to left/right image fields. */
export function normalizeCombineWithTrip(raw: LegacyCombineWithTrip): CombineWithTrip {
  if (raw.left_image_url !== undefined || raw.right_image_url !== undefined) {
    return {
      title: raw.title ?? "",
      body: raw.body ?? "",
      duration_label: raw.duration_label ?? "",
      left_image_url: raw.left_image_url ?? "",
      right_image_url: raw.right_image_url ?? "",
    };
  }

  const urls = raw.image_urls ?? [];
  return {
    title: raw.title ?? "",
    body: raw.body ?? "",
    duration_label: raw.duration_label ?? "",
    left_image_url: urls[0] ?? "",
    right_image_url: urls[1] ?? "",
  };
}

/** Clamp a 1–5 stored score to the number of lit dots (same scale). */
export function scoreToDots(score: number, max = 5): number {
  if (Number.isNaN(score)) return 0;
  return Math.min(max, Math.max(0, Math.round(score)));
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
