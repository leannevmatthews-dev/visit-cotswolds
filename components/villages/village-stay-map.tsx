/**
 * Village centres for the Stay22 map. Slugs match /villages/[slug].
 * The site's main colour is --color-primary (#c9c6c2).
 */
const VILLAGE_STAY_COORDINATES: Record<string, { lat: number; lng: number }> = {
  bibury: { lat: 51.7587, lng: -1.8337 },
  "bourton-on-the-water": { lat: 51.8853, lng: -1.7581 },
  burford: { lat: 51.8086, lng: -1.6363 },
  "castle-combe": { lat: 51.4936, lng: -2.2278 },
  snowshill: { lat: 52.005, lng: -1.858 },
  broadway: { lat: 52.0373, lng: -1.8571 },
  "stow-on-the-wold": { lat: 51.93, lng: -1.723 },
};

const STAY22_BRAND_COLOUR = "c9c6c2";

export function VillageStayMap({
  slug,
  villageName,
}: {
  slug: string;
  villageName: string;
}) {
  const coordinates = VILLAGE_STAY_COORDINATES[slug];
  if (!coordinates) return null;

  const src = `https://www.stay22.com/embed/gm?aid=visitcotswolds&lat=${coordinates.lat}&lng=${coordinates.lng}&campaign=village-${slug}&maincolor=${STAY22_BRAND_COLOUR}`;

  return (
    <section className="mt-10" aria-labelledby={`stay-map-${slug}`}>
      <h3
        id={`stay-map-${slug}`}
        className="font-headline-md mb-4 text-2xl text-primary"
      >
        Where to stay in {villageName}
      </h3>
      <iframe
        src={src}
        title={`Map of places to stay in ${villageName}`}
        loading="lazy"
        className="h-[380px] w-full rounded-lg border-0 md:h-[450px]"
      />
    </section>
  );
}
