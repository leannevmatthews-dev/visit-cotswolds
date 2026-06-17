import {
  BIBURY_ALTERNATIVES,
  BIBURY_COMPARISON_ROWS,
} from "@/lib/static/bibury-comparison";
import { CrowdPill } from "@/components/villages/crowd-pill";
import { VillageCompareImage } from "@/components/villages/village-compare-image";

const COMPARE_STATS = [
  { key: "beauty", label: "Beauty" },
  { key: "crowds", label: "Crowds" },
  { key: "food", label: "Food" },
  { key: "timeNeeded", label: "Time Needed" },
] as const;

export function VillageComparisonSection() {
  return (
    <section className="mb-24 md:mb-32">
      <div className="mb-10 md:mb-12">
        <h2 className="font-display-lg text-[32px] md:text-[40px] text-primary mb-4 leading-tight">
          How Bibury Compares
        </h2>
        <p className="font-body-sm text-on-surface-variant max-w-2xl leading-relaxed">
          A quick read on how Bibury stacks up against other popular Cotswolds
          villages—based on our visits, not brochure copy.
        </p>
      </div>

      <div className="village-compare-cards">
        {BIBURY_COMPARISON_ROWS.map((row) => (
          <article
            key={row.village}
            className={`village-compare-card village-panel${
              row.isCurrent ? " village-compare-card--current" : ""
            }`}
          >
            <VillageCompareImage
              src={row.imageSrc}
              alt={row.imageAlt ?? `${row.village} village`}
            />
            <header className="village-compare-card__header">
              <h3 className="village-compare-card__title font-headline-md text-[20px] text-primary leading-tight">
                {row.href && !row.isCurrent ? (
                  <a
                    className="hover:text-limestone transition-colors"
                    href={row.href}
                  >
                    {row.village}
                  </a>
                ) : (
                  row.village
                )}
              </h3>
              {row.isCurrent && (
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
                        level={row.crowds.level}
                        label={row.crowds.label}
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

      <div className="mt-16 md:mt-20">
        <h2 className="font-display-lg text-[28px] md:text-[36px] text-primary mb-4 leading-tight">
          If Bibury Isn&rsquo;t Right For You
        </h2>
        <p className="font-body-sm text-on-surface-variant mb-8 max-w-2xl leading-relaxed">
          Bibury is not the only option. If your priorities run differently,
          these villages may suit you better.
        </p>
        <div className="village-alternatives-grid">
          {BIBURY_ALTERNATIVES.map((alternative) => (
            <article
              key={alternative.question}
              className="village-alternative-card village-panel"
            >
              <span
                className="material-symbols-outlined village-alternative-card__icon"
                aria-hidden="true"
              >
                {alternative.icon}
              </span>
              <h3 className="village-alternative-card__title font-headline-md text-[20px] text-primary leading-tight">
                {alternative.question}
              </h3>
              <p className="village-alternative-card__text font-body-sm text-on-surface-variant">
                Try{" "}
                {alternative.villages.map((village, index) => (
                  <span key={village.name}>
                    {index > 0 && (index === alternative.villages.length - 1 ? " or " : ", ")}
                    <a
                      className="village-alternative-card__link"
                      href={village.href}
                    >
                      {village.name}
                    </a>
                  </span>
                ))}
                .
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
