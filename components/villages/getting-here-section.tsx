import type { Village } from "@/lib/villages/types";

type GettingHereSectionProps = {
  village: Village;
};

export function GettingHereSection({ village }: GettingHereSectionProps) {
  return (
    <div className="village-getting-here village-panel village-guide-panel border border-outline-variant/20 mb-8 md:mb-12">
      <div className="village-guide-header">
        <span className="material-symbols-outlined">directions</span>
        <h3 className="font-headline-md text-[22px] md:text-[26px] text-primary leading-tight">Getting Here</h3>
      </div>
      <div className="village-getting-here__grid grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="flex gap-4">
          <span className="material-symbols-outlined text-limestone shrink-0">
            train
          </span>
          <div>
            <p className="font-body-sm font-semibold mb-2 text-on-surface">
              By Rail
            </p>
            <p className="font-body-sm text-on-surface-variant leading-[1.5]">
              {village.getting_here_rail}
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <span className="material-symbols-outlined text-limestone shrink-0">
            directions_car
          </span>
          <div>
            <p className="font-body-sm font-semibold mb-2 text-on-surface">
              Parking
            </p>
            <p className="font-body-sm text-on-surface-variant leading-[1.5]">
              {village.getting_here_parking}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
