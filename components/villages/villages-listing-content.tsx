"use client";

import { useMemo } from "react";
import { ListingDirectoryPage } from "@/components/listing-directory/listing-directory-page";
import {
  villageListRowToListing,
  VILLAGES_LISTING_FILTERS,
  VILLAGES_LISTING_HERO,
  VILLAGES_LISTING_INTRO,
  VILLAGES_LISTING_SUBTITLE,
} from "@/lib/villages/listing";
import type { VillageListRow } from "@/lib/villages/queries";

type VillagesListingContentProps = {
  villages: VillageListRow[];
};

export function VillagesListingContent({ villages }: VillagesListingContentProps) {
  const listings = useMemo(
    () => villages.map(villageListRowToListing),
    [villages],
  );

  return (
    <ListingDirectoryPage
      title="Villages"
      subtitle={VILLAGES_LISTING_SUBTITLE}
      intro={VILLAGES_LISTING_INTRO}
      heroImage={VILLAGES_LISTING_HERO}
      filterAriaLabel="Filter villages by region"
      filters={VILLAGES_LISTING_FILTERS}
      listings={listings}
      showPriceLevel={false}
      linkExternal={false}
      linkLabel="Explore village"
      emptyMessage="No villages match this region yet."
    />
  );
}
