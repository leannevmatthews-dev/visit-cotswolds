import { VillageImagePlaceholder } from "@/components/villages/village-image-placeholder";
import { parkingMapEmbedUrl } from "@/lib/villages/helpers";
import type { Village } from "@/lib/villages/types";

type ParkingGuideSectionProps = {
  village: Village;
};

export function ParkingGuideSection({ village }: ParkingGuideSectionProps) {
  const parking = village.parking_guide;
  const mapEmbedUrl = parkingMapEmbedUrl(parking);

  const locations = [
    {
      variant: "primary" as const,
      label: "Main Car Park",
      title: parking.main_location,
      detail: parking.main_detail,
    },
    {
      variant: "secondary" as const,
      label: "Overflow Field",
      detail: parking.overflow_note,
    },
    {
      variant: "secondary" as const,
      label: "On-Street (Not Recommended)",
      detail: parking.on_street_note,
    },
  ];

  const specs = [
    { label: "Cost", value: parking.cost },
    { label: "Best Time", value: parking.best_time },
  ];

  return (
    <div className="village-panel village-parking overflow-hidden mb-8 md:mb-12">
      <div className="village-parking__layout">
        <div className="village-parking__content">
          <div className="village-parking__header">
            <div className="village-guide-header village-parking__title-row">
              <span className="material-symbols-outlined">local_parking</span>
              <h3 className="font-headline-md text-[22px] md:text-[26px] text-primary leading-tight">
                Parking In {village.name}
              </h3>
            </div>
            <p className="font-body-sm text-on-surface-variant leading-[1.5]">
              {parking.main_location}. Pay-and-display machines accept card and
              coins. {parking.overflow_note}
            </p>
          </div>

          <div className="village-parking-locations">
            {locations.map((location) => (
              <div key={location.label} className="village-parking-location">
                <span
                  className={`village-parking-location__marker village-parking-location__marker--${location.variant}`}
                  aria-hidden="true"
                />
                <div>
                  <p className="font-label-caps text-[10px] text-limestone tracking-widest uppercase mb-1">
                    {location.label}
                  </p>
                  {location.title && (
                    <p className="font-body-sm text-on-surface mb-1">
                      {location.title}
                    </p>
                  )}
                  <p className="font-body-sm text-on-surface-variant">
                    {location.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="village-parking__footer">
            <div className="village-parking-specs">
              {specs.map((spec) => (
                <div key={spec.label} className="village-parking-spec">
                  <p className="village-parking-spec__label">{spec.label}</p>
                  <p className="village-parking-spec__value">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="village-map village-map--aside">
          {mapEmbedUrl ? (
            <iframe
              className="village-map__embed"
              title={`Map showing parking near ${village.name}`}
              src={mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          ) : (
            <VillageImagePlaceholder
              className="village-compare-card__placeholder absolute inset-0"
              label="Map coming soon"
            />
          )}
        </div>
      </div>
    </div>
  );
}
