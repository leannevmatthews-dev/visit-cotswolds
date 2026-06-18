import type { DirectoryFilter, DirectoryListing } from "@/lib/listing-directory";
import { heroImageUrl } from "@/lib/villages/helpers";
import type { VillageListRow } from "@/lib/villages/queries";
import { VILLAGES_HERO_IMAGE } from "@/lib/villages/list-data";

export const VILLAGES_LISTING_FILTERS: DirectoryFilter[] = [
  { id: "all", label: "All Villages" },
  { id: "north", label: "North Cotswolds", matchListingArea: "north" },
  { id: "central", label: "Central Cotswolds", matchListingArea: "central" },
  { id: "south", label: "South Cotswolds", matchListingArea: "south" },
];

export const VILLAGES_LISTING_HERO = VILLAGES_HERO_IMAGE;

export const VILLAGES_LISTING_SUBTITLE =
  "Not every Cotswolds village rewards the detour. These ones do.";

export const VILLAGES_LISTING_INTRO =
  "Some Cotswolds villages are worth an early start. Others are worth planning an entire trip around. These guides help you tell the difference.";

/** Map stored cotswolds_region to listing filter ids. */
export function cotswoldsRegionToListingArea(
  region: string | null | undefined,
): string | undefined {
  switch (region) {
    case "North Cotswolds":
      return "north";
    case "Central Cotswolds":
      return "central";
    case "South Cotswolds":
      return "south";
    default:
      return undefined;
  }
}

export function villageListRowToListing(row: VillageListRow): DirectoryListing {
  const imageUrl = heroImageUrl(row.hero_gallery_urls) ?? "";

  return {
    id: row.slug,
    name: row.name,
    description: row.brief_summary,
    category: row.region_label,
    priceLevel: 1,
    imageUrl,
    imageAlt: `${row.name} village`,
    websiteUrl: `/villages/${row.slug}`,
    listingArea: cotswoldsRegionToListingArea(row.cotswolds_region),
  };
}
