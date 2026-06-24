import { Fragment } from "react";
import { CrowdPill } from "@/components/villages/crowd-pill";
import { crowdLabelToPillLevel } from "@/lib/villages/helpers";
import type { Village } from "@/lib/villages/types";

type VisitorFitSectionProps = {
  village: Village;
};

export function VisitorFitSection({ village }: VisitorFitSectionProps) {
  return (
    <section className="village-visitor-fit mb-24 md:mb-32" aria-label="Visitor fit">
      <div className="village-visitor-fit__grid">
        <article className="village-visitor-fit__card village-visitor-fit__card--crowds">
          <header className="village-visitor-fit__header">
            <span
              className="material-symbols-outlined village-visitor-fit__icon"
              aria-hidden="true"
            >
              schedule
            </span>
            <h2 className="village-visitor-fit__title font-headline-md text-[22px] md:text-[26px] text-primary leading-tight">
              When To Visit {village.name}
            </h2>
          </header>
          <p className="village-visitor-fit__intro font-body-sm text-on-surface-variant leading-relaxed">
            {village.crowd_intelligence_note}
          </p>
          <div className="village-visitor-fit__crowd-grid">
            <span className="village-visitor-fit__crowd-label font-label-caps text-[10px] text-limestone tracking-widest uppercase">
              Time
            </span>
            <span className="village-visitor-fit__crowd-label village-visitor-fit__crowd-label--level font-label-caps text-[10px] text-limestone tracking-widest uppercase">
              Level
            </span>
            {village.crowd_times.map((row) => (
              <Fragment key={row.time_range}>
                <span className="village-visitor-fit__crowd-time font-body-sm text-on-surface">
                  {row.time_range}
                </span>
                <span className="village-visitor-fit__crowd-level">
                  <CrowdPill
                    level={crowdLabelToPillLevel(row.level)}
                    label={row.level}
                  />
                </span>
              </Fragment>
            ))}
          </div>
        </article>

        <article className="village-visitor-fit__card village-visitor-fit__card--pro">
          <header className="village-visitor-fit__header">
            <span
              className="village-pros-cons__dot village-pros-cons__dot--pro"
              aria-hidden="true"
            ></span>
            <h2 className="village-visitor-fit__title font-headline-md text-[22px] md:text-[26px] text-primary leading-tight">
              Perfect For
            </h2>
          </header>
          <ul className="village-visitor-fit__list">
            {village.perfect_for.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="village-visitor-fit__card village-visitor-fit__card--con">
          <header className="village-visitor-fit__header">
            <span
              className="village-pros-cons__dot village-pros-cons__dot--con"
              aria-hidden="true"
            ></span>
            <h2 className="village-visitor-fit__title font-headline-md text-[22px] md:text-[26px] text-primary leading-tight">
              Maybe Skip If
            </h2>
          </header>
          <ul className="village-visitor-fit__list">
            {village.maybe_skip_if.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
