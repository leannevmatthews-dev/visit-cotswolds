import { ListingDirectoryPage } from "@/components/listing-directory/listing-directory-page";
import {
  EAT_FILTER_CATEGORIES,
  PLACES_TO_EAT_HERO_IMAGE,
  PLACES_TO_EAT_LISTINGS,
} from "@/lib/places-to-eat-data";

export function PlacesToEatContent() {
  return (
    <ListingDirectoryPage
      title="Places to Eat"
      subtitle="Serious food in seriously good surroundings."
      intro="The Cotswolds has quietly become one of England's most serious food destinations. Farm kitchens, Michelin-starred dining rooms, and village pubs that take both their sourcing and their cooking seriously. Bring an appetite."
      heroImage={PLACES_TO_EAT_HERO_IMAGE}
      filterAriaLabel="Filter places to eat"
      filters={EAT_FILTER_CATEGORIES}
      listings={PLACES_TO_EAT_LISTINGS}
    />
  );
}
