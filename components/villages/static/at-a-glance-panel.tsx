import {
  BIBURY_AT_A_GLANCE_FACTS,
  BIBURY_AT_A_GLANCE_SCORES,
} from "@/lib/static/bibury-at-a-glance";

function ScoreDots({ score, max = 5 }: { score: number; max?: number }) {
  return (
    <span
      className="village-score-dots"
      role="img"
      aria-label={`${score} out of ${max}`}
    >
      {Array.from({ length: max }, (_, index) => (
        <span
          key={index}
          className={`village-score-dots__dot${index < score ? " is-filled" : ""}`}
          aria-hidden="true"
        />
      ))}
    </span>
  );
}

export function AtAGlancePanel() {
  return (
    <aside className="village-at-a-glance village-panel lg:col-span-5">
      <h3 className="village-at-a-glance__title font-label-caps text-label-caps text-limestone tracking-widest">
        At A Glance
      </h3>

      <div className="village-at-a-glance__facts">
        {BIBURY_AT_A_GLANCE_FACTS.map((fact) => (
          <div key={fact.label} className="village-at-a-glance__fact-row">
            <span className="village-at-a-glance__fact-label font-label-caps text-[10px] text-limestone tracking-widest uppercase">
              {fact.label}
            </span>
            <span className="village-at-a-glance__fact-value font-body-sm text-on-surface">
              {fact.value}
            </span>
          </div>
        ))}
      </div>

      <div className="village-at-a-glance__divider" aria-hidden="true" />

      <div className="village-at-a-glance__scores">
        {BIBURY_AT_A_GLANCE_SCORES.map((item) => (
          <div key={item.label} className="village-at-a-glance__score-row">
            <span className="village-at-a-glance__score-label font-label-caps text-[10px] text-limestone tracking-widest uppercase">
              {item.label}
            </span>
            <ScoreDots score={item.score} max={item.max ?? 5} />
          </div>
        ))}
      </div>

      <a
        className="village-at-a-glance__cta block w-full border border-limestone text-limestone hover:bg-limestone hover:text-primary-container font-label-caps text-label-caps py-4 text-center transition-colors duration-300 uppercase tracking-widest"
        href="/pages/plan-your-visit.html"
      >
        Plan Your Visit
      </a>
    </aside>
  );
}
