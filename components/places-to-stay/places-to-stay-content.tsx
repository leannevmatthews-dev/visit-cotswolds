import { ListingDirectoryPage } from "@/components/listing-directory/listing-directory-page";
import {
  PLACES_TO_STAY_HERO_IMAGE,
  PLACES_TO_STAY_LISTINGS,
  STAY_FILTER_CATEGORIES,
} from "@/lib/places-to-stay-data";

export function PlacesToStayContent() {
  return (
    <ListingDirectoryPage
      title="Where To Stay In The Cotswolds"
      subtitle="Countryside air, open fires, and mornings with nowhere to be. The Cotswolds is the stay, not just the backdrop."
      intro="The right place to stay changes the whole trip. These are hotels, inns and retreats chosen for what they genuinely add to a Cotswolds visit — atmosphere, location, and the kind of hospitality that stays with you."
      heroImage={PLACES_TO_STAY_HERO_IMAGE}
      filterAriaLabel="Filter places to stay"
      filters={STAY_FILTER_CATEGORIES}
      listings={PLACES_TO_STAY_LISTINGS}
    />
  );
}
