import { ListingDirectoryPage } from "@/components/listing-directory/listing-directory-page";
import {
  GUIDES_FILTER_CATEGORIES,
  GUIDES_HERO_IMAGE,
} from "@/lib/guides-data";
import type { GuideRow } from "@/lib/guides/queries";
import type { DirectoryListing } from "@/lib/listing-directory";

function guideRowToListing(guide: GuideRow): DirectoryListing {
  return {
    id: guide.slug,
    name: guide.title,
    description: guide.meta_description,
    category: guide.category,
    imageUrl: guide.hero_image_url ?? "",
    imageAlt: guide.hero_image_alt ?? guide.title,
    websiteUrl: `/guides/${guide.slug}`,
  };
}

type GuidesContentProps = {
  guides: GuideRow[];
};

export function GuidesContent({ guides }: GuidesContentProps) {
  const listings = guides.map(guideRowToListing);

  return (
    <ListingDirectoryPage
      title="Guides"
      subtitle="Practical guides, plain advice, and a few local favourites along the way."
      intro="Most people over-pack the itinerary and under-plan the boring stuff: how long to stay, how to get between places, and what's actually worth the detour. That's what these guides cover, along with the odd write-up on a place we think deserves the mention."
      heroImage={GUIDES_HERO_IMAGE}
      filterAriaLabel="Filter guides"
      filters={GUIDES_FILTER_CATEGORIES}
      listings={listings}
      showPriceLevel={false}
      linkExternal={false}
      linkLabel="Read guide"
    />
  );
}
