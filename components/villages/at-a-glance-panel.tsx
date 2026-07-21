import { scoreToDots } from "@/lib/villages/helpers";
import type { Village } from "@/lib/villages/types";

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

type AtAGlancePanelProps = {
  village: Village;
};

export function AtAGlancePanel({ village }: AtAGlancePanelProps) {
  const facts = [
    { label: "Time Needed", value: village.time_needed },
    { label: "Dog Friendly", value: village.dog_friendly },
    { label: "Best Season", value: village.best_season },
  ];

  const scores = [
    {
      label: "First-Time Visitor",
      score: scoreToDots(village.score_first_time_visitor),
    },
    { label: "Couples", score: scoreToDots(village.score_couples) },
    { label: "Families", score: scoreToDots(village.score_families) },
    { label: "Food & Drink", score: scoreToDots(village.score_food_drink) },
    {
      label: "Accessibility",
      score: scoreToDots(village.score_accessibility),
    },
    {
      label: "Hidden Gem Factor",
      score: scoreToDots(village.score_hidden_gem_factor),
    },
  ];

  return (
    <aside className="village-at-a-glance village-panel">
      <h2 className="village-at-a-glance__title font-label-caps text-label-caps text-limestone tracking-widest">
        At A Glance
      </h2>

      <div className="village-at-a-glance__facts">
        {facts.map((fact) => (
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
        {scores.map((item) => (
          <div key={item.label} className="village-at-a-glance__score-row">
            <span className="village-at-a-glance__score-label font-label-caps text-[10px] text-limestone tracking-widest uppercase">
              {item.label}
            </span>
            <ScoreDots score={item.score} />
          </div>
        ))}
      </div>
    </aside>
  );
}
