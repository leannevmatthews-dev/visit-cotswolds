import Image from "next/image";
import { VillageImagePlaceholder } from "@/components/villages/village-image-placeholder";
import {
  combineWithFirstOtherVillageName,
  combineWithOtherVillageName,
  combineWithSecondOtherVillageName,
  combineWithVillageNames,
  normalizeCombineWithTrip,
} from "@/lib/villages/helpers";
import type { CombineWithTrip } from "@/lib/villages/types";
import type { Village } from "@/lib/villages/types";

type CombineWithSectionProps = {
  village: Village;
  combineHeroImages?: Record<string, string>;
};

function heroImageFromLookup(
  villageName: string | null,
  combineHeroImages: Record<string, string>,
): string {
  if (!villageName) {
    return "";
  }
  return combineHeroImages[villageName] ?? "";
}

function combineThreePlusLeftImageUrl(
  trip: CombineWithTrip,
  currentVillageName: string,
  combineHeroImages: Record<string, string>,
): string {
  const otherVillageName = combineWithFirstOtherVillageName(
    trip.title,
    currentVillageName,
  );
  return heroImageFromLookup(otherVillageName, combineHeroImages);
}

function combineThreePlusRightImageUrl(
  trip: CombineWithTrip,
  currentVillageName: string,
  combineHeroImages: Record<string, string>,
): string {
  const otherVillageName = combineWithSecondOtherVillageName(
    trip.title,
    currentVillageName,
  );
  return heroImageFromLookup(otherVillageName, combineHeroImages);
}

function combineOtherVillageImageUrl(
  trip: CombineWithTrip,
  currentVillageName: string,
  combineHeroImages: Record<string, string>,
): string {
  const otherVillageName = combineWithOtherVillageName(
    trip.title,
    currentVillageName,
  );
  return heroImageFromLookup(otherVillageName, combineHeroImages);
}

export function CombineWithSection({
  village,
  combineHeroImages = {},
}: CombineWithSectionProps) {
  if (village.combine_with.length === 0) return null;

  return (
    <div className="mb-24 md:mb-32">
      <h2 className="font-display-lg text-[40px] md:text-[52px] text-primary mb-4 leading-tight">
        Combine {village.name} With
      </h2>
      <p className="font-body-sm text-on-surface-variant mb-10 max-w-2xl">
        Trip-planning suggestions based on driving times from {village.name}.
        Adjust for your pace—we prefer one village properly over three rushed.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {village.combine_with.map((trip) => (
          <CombineWithCard
            key={trip.title}
            village={village}
            trip={normalizeCombineWithTrip(trip)}
            combineHeroImages={combineHeroImages}
          />
        ))}
      </div>
    </div>
  );
}

function CombineWithCard({
  village,
  trip,
  combineHeroImages,
}: {
  village: Village;
  trip: CombineWithTrip;
  combineHeroImages: Record<string, string>;
}) {
  const villageCount = combineWithVillageNames(trip.title).length;
  const isTwoVillageTrip = villageCount === 2;

  if (isTwoVillageTrip) {
    const otherImageUrl = combineOtherVillageImageUrl(
      trip,
      village.name,
      combineHeroImages,
    );

    return (
      <article className="village-combine">
        <div className="village-combine__images">
          <div className="village-combine__place-row">
            <div
              className="village-combine__image"
              style={{ gridColumn: "1 / -1" }}
            >
              {otherImageUrl ? (
                <Image
                  src={otherImageUrl}
                  alt={trip.right_image_alt ?? ""}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              ) : (
                <VillageImagePlaceholder />
              )}
            </div>
          </div>
        </div>
        <div className="village-combine__body">
          <p className="font-label-caps text-[10px] text-limestone tracking-widest uppercase mb-2">
            {trip.duration_label}
          </p>
          <p className="font-headline-md text-[22px] text-on-surface mb-2">
            {trip.title}
          </p>
          <p className="font-body-sm text-on-surface-variant">{trip.body}</p>
        </div>
      </article>
    );
  }

  const leftImageUrl = combineThreePlusLeftImageUrl(
    trip,
    village.name,
    combineHeroImages,
  );
  const rightImageUrl = combineThreePlusRightImageUrl(
    trip,
    village.name,
    combineHeroImages,
  );

  return (
    <article className="village-combine">
      <div className="village-combine__images">
        <div className="village-combine__place-row">
          <div className="village-combine__image">
            {leftImageUrl ? (
              <Image
                src={leftImageUrl}
                alt={trip.left_image_alt ?? ""}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 20vw"
              />
            ) : (
              <VillageImagePlaceholder />
            )}
          </div>
          <div className="village-combine__image">
            {rightImageUrl ? (
              <Image
                src={rightImageUrl}
                alt={trip.right_image_alt ?? ""}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 20vw"
              />
            ) : (
              <VillageImagePlaceholder />
            )}
          </div>
        </div>
      </div>
      <div className="village-combine__body">
        <p className="font-label-caps text-[10px] text-limestone tracking-widest uppercase mb-2">
          {trip.duration_label}
        </p>
        <p className="font-headline-md text-[22px] text-on-surface mb-2">
          {trip.title}
        </p>
        <p className="font-body-sm text-on-surface-variant">{trip.body}</p>
      </div>
    </article>
  );
}
