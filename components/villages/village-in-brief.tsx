import type { Village } from "@/lib/villages/types";

type VillageInBriefProps = {
  village: Village;
};

export function VillageInBrief({ village }: VillageInBriefProps) {
  return (
    <aside className="village-in-brief" aria-label={`${village.name} in brief`}>
      <p className="village-in-brief__label font-label-caps text-[10px] text-limestone tracking-[0.3em] uppercase">
        {village.name} In Brief
      </p>
      <p className="village-in-brief__text font-body-sm text-on-surface leading-relaxed">
        {village.brief_summary}
      </p>
      <p className="village-in-brief__tip font-body-sm text-on-surface-variant leading-relaxed">
        <span className="village-in-brief__tip-label">Insider tip:</span>{" "}
        {village.brief_best_tip}
      </p>
    </aside>
  );
}
