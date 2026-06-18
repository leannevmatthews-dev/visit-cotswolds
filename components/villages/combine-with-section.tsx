import { VillageImagePlaceholder } from "@/components/villages/village-image-placeholder";
import { normalizeCombineWithTrip } from "@/lib/villages/helpers";
import type { CombineWithTrip } from "@/lib/villages/types";
import type { Village } from "@/lib/villages/types";

type CombineWithSectionProps = {
  village: Village;
};

export function CombineWithSection({ village }: CombineWithSectionProps) {
  if (village.combine_with.length === 0) return null;

  return (
    <div className="mb-24 md:mb-32">
      <h2 className="font-display-lg text-[36px] md:text-[48px] text-primary mb-4 leading-tight">
        Combine With
      </h2>
      <p className="font-body-sm text-on-surface-variant mb-10 max-w-2xl">
        Trip-planning suggestions based on driving times from {village.name}.
        Adjust for your pace—we prefer one village properly over three rushed.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {village.combine_with.map((trip) => (
          <CombineWithCard
            key={trip.title}
            trip={normalizeCombineWithTrip(trip)}
          />
        ))}
      </div>
    </div>
  );
}

function CombineWithCard({ trip }: { trip: CombineWithTrip }) {
  return (
    <article className="village-combine">
      <div className="village-combine__images">
        <div className="village-combine__place-row">
          <div className="village-combine__image">
            {trip.left_image_url ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img src={trip.left_image_url} alt="" />
            ) : (
              <VillageImagePlaceholder />
            )}
          </div>
          <div className="village-combine__image">
            {trip.right_image_url ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img src={trip.right_image_url} alt="" />
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
