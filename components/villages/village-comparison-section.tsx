import { CrowdPill } from "@/components/villages/crowd-pill";
import { VillageCompareImage } from "@/components/villages/village-compare-image";
import { crowdLabelToPillLevel } from "@/lib/villages/helpers";
import type { ComparisonDisplayRow, Village } from "@/lib/villages/types";

const COMPARE_STATS = [
  { key: "beauty", label: "Beauty" },
  { key: "crowds", label: "Crowds" },
  { key: "food", label: "Food" },
  { key: "time_needed", label: "Time Needed" },
] as const;

type VillageComparisonSectionProps = {
  village: Village;
  comparisonRows?: ComparisonDisplayRow[];
};

export function VillageComparisonSection({
  village,
  comparisonRows = [],
}: VillageComparisonSectionProps) {
  return (
    <section className="mb-24 md:mb-32">
      {comparisonRows.length > 0 && (
        <>
          <div className="mb-10 md:mb-12">
            <h2 className="font-display-lg text-[32px] md:text-[40px] text-primary mb-4 leading-tight">
              How {village.name} Compares
            </h2>
            <p className="font-body-sm text-on-surface-variant max-w-2xl leading-[1.5]">
              A quick read on how {village.name} stacks up against other popular
              Cotswolds villages, based on our visits, not brochure copy.
            </p>
          </div>

          <div className="village-compare-cards">
            {comparisonRows.map((row) => (
              <article
                key={row.village_name}
                className={`village-compare-card village-panel${
                  row.is_current ? " village-compare-card--current" : ""
                }`}
              >
                <VillageCompareImage
                  src={row.image_url ?? undefined}
                  alt={row.image_alt?.trim() || `${row.village_name} village`}
                />
                <header className="village-compare-card__header">
                  <h3 className="village-compare-card__title font-headline-md text-[22px] md:text-[26px] text-primary leading-tight">
                    {row.village_name}
                  </h3>
                  {row.is_current && (
                    <span className="village-compare-card__badge font-label-caps text-[9px] tracking-widest uppercase">
                      You Are Here
                    </span>
                  )}
                </header>
                <dl className="village-compare-card__stats">
                  {COMPARE_STATS.map((stat) => (
                    <div key={stat.key} className="village-compare-card__stat">
                      <dt className="village-compare-card__label font-label-caps text-[10px] tracking-widest uppercase">
                        {stat.label}
                      </dt>
                      <dd className="village-compare-card__value font-body-sm">
                        {stat.key === "crowds" ? (
                          <CrowdPill
                            level={crowdLabelToPillLevel(row.crowds)}
                            label={row.crowds}
                          />
                        ) : (
                          row[stat.key]
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </>
      )}

      {village.alternative_villages.length > 0 && (
        <div className={comparisonRows.length > 0 ? "mt-16 md:mt-20" : ""}>
          <h2 className="font-display-lg text-[32px] md:text-[40px] text-primary mb-4 leading-tight">
            If {village.name} Isn&rsquo;t Right For You
          </h2>
          <p className="font-body-sm text-on-surface-variant mb-8 max-w-2xl leading-[1.5]">
            {village.name} is not the only option. If your priorities run
            differently, these villages may suit you better.
          </p>
          <div className="village-alternatives-grid">
            {village.alternative_villages.map((alternative) => (
              <article
                key={alternative.need}
                className="village-alternative-card village-panel"
              >
                <span
                  className="material-symbols-outlined village-alternative-card__icon"
                  aria-hidden="true"
                >
                  {alternative.icon}
                </span>
                <h3 className="village-alternative-card__title font-headline-md text-[22px] md:text-[26px] text-primary leading-tight">
                  {alternative.need}
                </h3>
                <p className="village-alternative-card__text font-body-sm text-on-surface-variant">
                  Try{" "}
                  {alternative.suggested_villages.map((name, index) => (
                    <span key={name}>
                      {index > 0 &&
                        (index === alternative.suggested_villages.length - 1
                          ? " or "
                          : ", ")}
                      <span className="text-on-surface">{name}</span>
                    </span>
                  ))}
                  .
                </p>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
