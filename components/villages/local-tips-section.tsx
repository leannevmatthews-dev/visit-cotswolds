import type { Village } from "@/lib/villages/types";

type LocalTipsSectionProps = {
  village: Village;
};

export function LocalTipsSection({ village }: LocalTipsSectionProps) {
  return (
    <div className="mb-24 md:mb-32">
      <h2 className="font-display-lg text-[40px] md:text-[52px] text-primary mb-4 leading-tight">
        Local Tips For {village.name}
      </h2>
      <p className="font-body-sm text-on-surface-variant mb-8 max-w-2xl">
        Practical insights from our visits: the kind of advice you would get from
        someone who has been there recently.
      </p>
      <div className="village-tips-grid">
        {village.local_tips.map((tip) => (
          <div key={`${tip.icon}-${tip.tip_text}`} className="village-tip">
            <span className="material-symbols-outlined village-tip__icon">
              {tip.icon}
            </span>
            <p className="village-tip__text">{tip.tip_text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
