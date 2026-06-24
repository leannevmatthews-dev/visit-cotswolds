import type { CombineWithTrip, CrowdPillLevel, FaqItem } from "@/lib/villages/types";

type LegacyCombineWithTrip = {
  title: string;
  body: string;
  duration_label: string;
  left_image_url?: string;
  right_image_url?: string;
  left_image_alt?: string;
  right_image_alt?: string;
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
      left_image_alt: raw.left_image_alt ?? "",
      right_image_alt: raw.right_image_alt ?? "",
    };
  }

  const urls = raw.image_urls ?? [];
  return {
    title: raw.title ?? "",
    body: raw.body ?? "",
    duration_label: raw.duration_label ?? "",
    left_image_url: urls[0] ?? "",
    right_image_url: urls[1] ?? "",
    left_image_alt: raw.left_image_alt ?? "",
    right_image_alt: raw.right_image_alt ?? "",
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

/** Village names from a combine-with title (split on " + "). */
export function combineWithVillageNames(title: string): string[] {
  return title
    .split(" + ")
    .map((name) => name.trim())
    .filter(Boolean);
}

/** The non-current village in a two-village trip title. */
export function combineWithOtherVillageName(
  title: string,
  currentVillageName: string,
): string | null {
  const names = combineWithVillageNames(title);
  if (names.length !== 2) {
    return null;
  }

  return names.find((name) => name !== currentVillageName) ?? null;
}

/** First village in the title that is not the current page village (3+ village trips). */
export function combineWithFirstOtherVillageName(
  title: string,
  currentVillageName: string,
): string | null {
  const names = combineWithVillageNames(title);
  if (names.length < 3) {
    return null;
  }

  return names.find((name) => name !== currentVillageName) ?? null;
}

/** Second village in the title that is not the current page village (3+ village trips). */
export function combineWithSecondOtherVillageName(
  title: string,
  currentVillageName: string,
): string | null {
  const names = combineWithVillageNames(title);
  if (names.length < 3) {
    return null;
  }

  const otherNames = names.filter((name) => name !== currentVillageName);
  return otherNames[1] ?? null;
}

/** Second segment after " + " in a combine-with title (legacy helper). */
export function combineWithSecondVillageName(title: string): string | null {
  const parts = combineWithVillageNames(title);
  if (parts.length < 2) {
    return null;
  }

  return parts[1] ?? null;
}

export function heroImageUrl(
  heroGalleryUrls: string[] | null | undefined
): string | null {
  if (!heroGalleryUrls?.length) return null;
  return heroGalleryUrls[0] ?? null;
}

/** Derive a village route slug from a display name (nearby cards, etc.). */
export function villageNameToSlug(villageName: string): string {
  return villageName
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
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
