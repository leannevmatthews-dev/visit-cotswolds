import { ListingDirectoryPage } from "@/components/listing-directory/listing-directory-page";
import {
  THINGS_TO_DO_FILTER_CATEGORIES,
  THINGS_TO_DO_HERO_IMAGE,
  THINGS_TO_DO_LISTINGS,
} from "@/lib/things-to-do-data";

export function ThingsToDoContent() {
  return (
    <ListingDirectoryPage
      title="What To Do In The Cotswolds"
      subtitle="Whatever pace you set, the Cotswolds finds a way to fill it well."
      intro="The Cotswolds doesn't announce itself. It rewards the people who slow down, take the less obvious path, and stay longer than planned. These are the experiences worth building time around."
      heroImage={THINGS_TO_DO_HERO_IMAGE}
      filterAriaLabel="Filter things to do"
      filters={THINGS_TO_DO_FILTER_CATEGORIES}
      listings={THINGS_TO_DO_LISTINGS}
    />
  );
}
