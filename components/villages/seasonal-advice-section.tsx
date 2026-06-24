import type { SeasonalAdvice } from "@/lib/villages/types";

type SeasonalAdviceSectionProps = {
  seasons: SeasonalAdvice[];
};

export function SeasonalAdviceSection({ seasons }: SeasonalAdviceSectionProps) {
  if (seasons.length === 0) return null;

  return (
    <div className="mb-24 md:mb-32">
      <h2 className="font-display-lg text-[40px] md:text-[52px] text-primary mb-10 leading-tight">
        Seasonal Advice
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        {seasons.map((season) => (
          <div key={season.season} className="village-season">
            <h3 className="village-season__heading font-label-caps text-label-caps text-limestone mb-3 tracking-widest uppercase">
              <span
                className="material-symbols-outlined village-season__icon"
                aria-hidden="true"
              >
                {season.icon}
              </span>
              {season.season}
            </h3>
            <p className="font-body-sm text-on-surface-variant leading-relaxed">
              {season.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
