const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=Bibury+Trout+Farm+Car+Park,+Bibury,+GL7+5NP&t=&z=16&ie=UTF8&iwloc=&output=embed";

const MAP_LINK_URL =
  "https://www.google.com/maps/search/?api=1&query=Bibury+Trout+Farm+Car+Park+GL7+5NP";

const PARKING_LOCATIONS = [
  {
    variant: "primary" as const,
    label: "Main Car Park",
    title: "Trout Farm Car Park · B4425 · GL7 5NP",
    detail: "~80 spaces · pay & display · 2 min walk to Arlington Row",
  },
  {
    variant: "secondary" as const,
    label: "Overflow Field",
    detail:
      "Grass overflow opens in peak summer when main lot is full—same pay machines apply.",
  },
  {
    variant: "secondary" as const,
    label: "On-Street (Not Recommended)",
    detail:
      "Limited spaces on the B4425 through the village—blocks residents and coaches.",
  },
];

const PARKING_SPECS = [
  { label: "Cost", value: "Typically £3–£5 for 2–4 hours" },
  { label: "Best Time", value: "Before 10am weekends" },
];

export function ParkingGuideSection() {
  return (
    <div className="village-panel village-parking overflow-hidden mb-8 md:mb-12">
      <div className="village-parking__layout">
        <div className="village-parking__content">
          <div className="village-parking__header">
            <div className="village-guide-header village-parking__title-row">
              <span className="material-symbols-outlined">local_parking</span>
              <h3 className="font-headline-md text-xl sm:text-[24px] md:text-[28px] text-primary leading-tight">
                Parking Guide
              </h3>
            </div>
            <p className="font-body-sm text-on-surface-variant leading-relaxed">
              Main car park on the B4425, opposite Bibury Trout Farm.
              Pay-and-display machines accept card and coins. Arrive before 10am
              on summer weekends—the overflow field opens when the main lot is
              full.
            </p>
          </div>

          <div className="village-parking-locations">
            {PARKING_LOCATIONS.map((location) => (
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
              {PARKING_SPECS.map((spec) => (
                <div key={spec.label} className="village-parking-spec">
                  <p className="village-parking-spec__label">{spec.label}</p>
                  <p className="village-parking-spec__value">{spec.value}</p>
                </div>
              ))}
            </div>
            <a
              className="village-parking__cta inline-flex items-center justify-center gap-2 font-label-caps text-[10px] text-limestone tracking-widest uppercase border border-limestone/40 px-5 py-3 hover:bg-limestone hover:text-primary-container transition-colors w-full sm:w-auto"
              href={MAP_LINK_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-base">
                open_in_new
              </span>
              Open in Google Maps
            </a>
          </div>
        </div>

        <div className="village-map village-map--aside">
          <iframe
            className="village-map__embed"
            title="Map showing Bibury Trout Farm car park and village parking"
            src={MAP_EMBED_URL}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
