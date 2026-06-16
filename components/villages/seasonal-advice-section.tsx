import { BIBURY_SEASONS } from "@/lib/bibury-seasons";

export function SeasonalAdviceSection() {
  return (
    <div className="mb-24 md:mb-32">
      <h2 className="font-display-lg text-[36px] md:text-[48px] text-primary mb-10 leading-tight">
        Seasonal Advice
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        {BIBURY_SEASONS.map((season) => (
          <div key={season.name} className="village-season">
            <h3 className="village-season__heading font-label-caps text-label-caps text-limestone mb-3 tracking-widest uppercase">
              <span
                className="material-symbols-outlined village-season__icon"
                aria-hidden="true"
              >
                {season.icon}
              </span>
              {season.name}
            </h3>
            <p className="font-body-sm text-on-surface-variant leading-relaxed">
              {season.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
