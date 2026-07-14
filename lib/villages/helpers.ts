import type {
  CombineWithTrip,
  CrowdPillLevel,
  ParkingGuide,
  ThingsToDoItem,
} from "@/lib/villages/types";

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

export { getFaqJsonLd } from "@/lib/seo/schema";

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

export function parkingMapEmbedUrl(parking: ParkingGuide): string | null {
  const override = parking.map_override_url?.trim();
  if (override) {
    return override;
  }

  const query = parking.map_query?.trim();
  if (!query) {
    return null;
  }

  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
}

type PlacePickListing = {
  name: string;
  location: string;
  imageUrl: string;
  imageAlt: string;
  websiteUrl: string;
};

function normalizePlacePickName(name: string): string {
  return name.trim().toLowerCase();
}

/** Fill missing image/link on village place picks from directory listings by name. */
export function enrichPlacePicksFromListings<
  TPick extends {
    name: string;
    location_label: string;
    image_url: string | null;
    image_alt?: string | null;
    external_link: string | null;
  },
>(picks: TPick[], listings: PlacePickListing[]): TPick[] {
  const listingsByName = new Map(
    listings.map((listing) => [
      normalizePlacePickName(listing.name),
      listing,
    ]),
  );

  return picks.map((pick) => {
    const listing = listingsByName.get(normalizePlacePickName(pick.name));
    if (!listing) {
      return pick;
    }

    const imageUrlEmpty = !pick.image_url?.trim();
    const imageAltEmpty = !pick.image_alt?.trim();
    const externalLinkEmpty = !pick.external_link?.trim();

    return {
      ...pick,
      location_label: listing.location.trim(),
      image_url:
        imageUrlEmpty && listing.imageUrl.trim()
          ? listing.imageUrl.trim()
          : pick.image_url,
      image_alt:
        imageAltEmpty && listing.imageAlt.trim()
          ? listing.imageAlt.trim()
          : pick.image_alt,
      external_link:
        externalLinkEmpty && listing.websiteUrl.trim()
          ? listing.websiteUrl.trim()
          : pick.external_link,
    };
  });
}

export const VILLAGE_SECTION_PICK_LIMIT = 5;

type ThingsToDoListingSource = {
  name: string;
  description: string;
  location: string;
  imageUrl: string;
  imageAlt: string;
};

const THINGS_TO_DO_STOP_WORDS = new Set([
  "the",
  "and",
  "in",
  "of",
  "a",
  "to",
  "at",
  "for",
]);

function thingsToDoTitleTokens(title: string): Set<string> {
  return new Set(
    title
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "")
      .split(/\s+/)
      .filter((word) => word.length > 2 && !THINGS_TO_DO_STOP_WORDS.has(word)),
  );
}

function thingsToDoTitlesOverlap(a: string, b: string): boolean {
  const tokensA = thingsToDoTitleTokens(a);
  const tokensB = thingsToDoTitleTokens(b);
  let overlap = 0;

  for (const token of tokensA) {
    if (tokensB.has(token)) {
      overlap += 1;
    }
  }

  return overlap >= 2;
}

function listingMatchesVillage(location: string, villageName: string): boolean {
  const normalizedVillage = villageName.trim().toLowerCase();

  return location
    .toLowerCase()
    .split(",")
    .some((part) => part.trim() === normalizedVillage);
}

function listingToThingsToDoItem(
  listing: ThingsToDoListingSource,
): ThingsToDoItem {
  return {
    title: listing.name,
    body: listing.description,
    insider_tip: "",
    image_url: listing.imageUrl,
    image_alt: listing.imageAlt,
  };
}

/** Things to do for the village page, filled to five from directory listings when needed. */
export function buildVillageThingsToDo(
  villageName: string,
  thingsToDo: ThingsToDoItem[],
  listings: ThingsToDoListingSource[],
): ThingsToDoItem[] {
  const result = thingsToDo.slice(0, VILLAGE_SECTION_PICK_LIMIT);

  if (result.length >= VILLAGE_SECTION_PICK_LIMIT) {
    return result;
  }

  for (const listing of listings) {
    if (result.length >= VILLAGE_SECTION_PICK_LIMIT) {
      break;
    }

    if (!listingMatchesVillage(listing.location, villageName)) {
      continue;
    }

    const isDuplicate = result.some((item) =>
      thingsToDoTitlesOverlap(item.title, listing.name),
    );
    if (isDuplicate) {
      continue;
    }

    result.push(listingToThingsToDoItem(listing));
  }

  return result;
}
