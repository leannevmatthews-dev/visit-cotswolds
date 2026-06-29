/** Villages with live guide pages — only these get internal /villages/ links. */
export const VILLAGE_PAGE_LINKS = [
  {
    phrase: "Bourton-on-the-Water",
    href: "/villages/bourton-on-the-water",
  },
  { phrase: "Castle Combe", href: "/villages/castle-combe" },
  { phrase: "Snowshill", href: "/villages/snowshill" },
  { phrase: "Bibury", href: "/villages/bibury" },
  { phrase: "Burford", href: "/villages/burford" },
] as const;

const PHRASE_TO_HREF = new Map<string, string>(
  VILLAGE_PAGE_LINKS.map((entry) => [entry.phrase, entry.href]),
);

/** Longest phrases first so multi-word village names match before shorter overlaps. */
export const VILLAGE_PAGE_LINK_PHRASES = [...VILLAGE_PAGE_LINKS].sort(
  (a, b) => b.phrase.length - a.phrase.length,
);

export function getVillagePageHref(villageName: string): string | null {
  return PHRASE_TO_HREF.get(villageName.trim()) ?? null;
}

export type LinkableNearbyVillage = {
  village_name: string;
  drive_time_label: string;
  href: string;
  image_url?: string | null;
  image_alt?: string | null;
};

/** Nearby villages that have a live guide page on this site. */
export function filterLinkableNearbyVillages(
  nearby: ReadonlyArray<{
    village_name: string;
    drive_time_label: string;
    image_url?: string | null;
    image_alt?: string | null;
  }>,
): LinkableNearbyVillage[] {
  return nearby.flatMap((item) => {
    const href = getVillagePageHref(item.village_name);
    if (!href) {
      return [];
    }

    return [{ ...item, href }];
  });
}
