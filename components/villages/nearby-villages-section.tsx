import { NearbyVillageCard } from "@/components/villages/nearby-village-card";
import type { LinkableNearbyVillage } from "@/lib/villages/village-page-links";

type NearbyVillagesSectionProps = {
  villageName: string;
  nearbyVillages: LinkableNearbyVillage[];
  heroImagesByName?: Record<string, string>;
};

export function NearbyVillagesSection({
  villageName,
  nearbyVillages,
  heroImagesByName = {},
}: NearbyVillagesSectionProps) {
  if (nearbyVillages.length === 0) {
    return null;
  }

  return (
    <div className="mb-24 md:mb-32">
      <h2 className="font-display-lg text-[32px] md:text-[40px] text-primary leading-tight mb-10">
        Villages Near {villageName}
      </h2>
      <div className="village-nearby-grid grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {nearbyVillages.map((nearby) => (
          <NearbyVillageCard
            key={nearby.village_name}
            nearby={nearby}
            heroImageUrl={heroImagesByName[nearby.village_name]}
          />
        ))}
      </div>
    </div>
  );
}
