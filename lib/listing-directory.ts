export type DirectoryListing = {
  id: string;
  name: string;
  description: string;
  category: string;
  priceLevel: 1 | 2 | 3;
  imageUrl: string;
  imageAlt: string;
  websiteUrl: string;
  dogFriendly?: boolean;
  familyFriendly?: boolean;
  /** Geographic zone for villages index filtering (north, central, south). */
  listingArea?: string;
};

export type DirectoryFilterFlag = "dogFriendly" | "familyFriendly";

/** Serializable filter rule — safe to pass from Server Components. */
export type DirectoryFilter = {
  id: string;
  label: string;
  matchCategory?: string;
  requireFlag?: DirectoryFilterFlag;
  matchListingArea?: string;
};

export function formatPriceLevel(level: DirectoryListing["priceLevel"]): string {
  return "£".repeat(level);
}

export function applyDirectoryFilter(
  listings: DirectoryListing[],
  filterId: string,
  filters: DirectoryFilter[],
): DirectoryListing[] {
  if (filterId === "all") {
    return listings;
  }

  const rule = filters.find((filter) => filter.id === filterId);
  if (!rule) {
    return listings;
  }

  if (rule.matchCategory) {
    return listings.filter((listing) => listing.category === rule.matchCategory);
  }

  if (rule.requireFlag) {
    const flag = rule.requireFlag;
    return listings.filter((listing) => listing[flag] === true);
  }

  if (rule.matchListingArea) {
    return listings.filter(
      (listing) => listing.listingArea === rule.matchListingArea,
    );
  }

  return listings;
}
