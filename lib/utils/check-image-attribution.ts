import type { DirectoryListing } from "../listing-directory";

type WikimediaCreditTarget = {
  label: string;
  imageUrl?: string;
  imageCredit?: { text: string; url: string };
};

/**
 * Listings whose image is served from Wikimedia (upload/commons) but lack imageCredit.
 */
export function findMissingWikimediaCredits(listings: DirectoryListing[]): string[] {
  return findMissingWikimediaCreditLabels(
    listings.map((l) => ({
      label: l.name,
      imageUrl: l.imageUrl,
      imageCredit: l.imageCredit,
    })),
  );
}

/** Same check for any labelled imageUrl + optional imageCredit pair. */
export function findMissingWikimediaCreditLabels(
  items: WikimediaCreditTarget[],
): string[] {
  return items
    .filter(
      (item) =>
        Boolean(item.imageUrl?.includes("wikimedia.org")) && !item.imageCredit,
    )
    .map((item) => item.label);
}
