import { ListingDirectoryPage } from "@/components/listing-directory/listing-directory-page";
import {
  GUIDES_FILTER_CATEGORIES,
  GUIDES_HERO_IMAGE,
  GUIDES_LISTINGS,
} from "@/lib/guides-data";

export function GuidesContent() {
  return (
    <ListingDirectoryPage
      title="Guides"
      subtitle="Practical guides, plain advice, and a few local favourites along the way."
      intro="Most people over-pack the itinerary and under-plan the boring stuff: how long to stay, how to get between places, and what's actually worth the detour. That's what these guides cover, along with the odd write-up on a place we think deserves the mention."
      heroImage={GUIDES_HERO_IMAGE}
      filterAriaLabel="Filter guides"
      filters={GUIDES_FILTER_CATEGORIES}
      listings={GUIDES_LISTINGS}
      showPriceLevel={false}
      linkLabel="Read guide"
    />
  );
}
