import type { CombineTrip } from "@/lib/static/bibury-combine-data";
import { BIBURY_COMBINE_TRIPS } from "@/lib/static/bibury-combine-data";

export function CombineWithSection() {
  return (
    <div className="mb-24 md:mb-32">
      <h2 className="font-display-lg text-[36px] md:text-[48px] text-primary mb-4 leading-tight">
        Combine With
      </h2>
      <p className="font-body-sm text-on-surface-variant mb-10 max-w-2xl">
        Trip-planning suggestions based on driving times from Bibury. Adjust for
        your pace—we prefer one village properly over three rushed.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {BIBURY_COMBINE_TRIPS.map((trip) => (
          <CombineWithCard key={trip.label} trip={trip} />
        ))}
      </div>
    </div>
  );
}

function CombineWithCard({ trip }: { trip: CombineTrip }) {
  return (
    <article className="village-combine">
      <div className="village-combine__images">
        {trip.places.map((place) => (
          <div key={place.name} className="village-combine__place-row">
            {trip.places.length > 1 && (
              <span className="village-combine__place-label font-label-caps text-[9px] tracking-widest uppercase">
                {place.name}
              </span>
            )}
            {place.images.map((image) => (
              <div key={image.alt} className="village-combine__image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="village-combine__body">
        <p className="font-label-caps text-[10px] text-limestone tracking-widest uppercase mb-2">
          {trip.label}
        </p>
        <p className="font-headline-md text-[22px] text-on-surface mb-2">
          {trip.title}
        </p>
        <p className="font-body-sm text-on-surface-variant">{trip.description}</p>
      </div>
    </article>
  );
}
