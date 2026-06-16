import { BIBURY_REVIEWED_BY } from "@/lib/bibury-author";

export function ReviewedBy() {
  return (
    <aside className="village-reviewed-by" aria-label="Reviewed by">
      <p className="village-reviewed-by__label font-label-caps text-[10px] text-limestone tracking-[0.2em] uppercase">
        Reviewed by
      </p>
      <p className="village-reviewed-by__name font-body-sm text-on-surface">
        {BIBURY_REVIEWED_BY.name}
      </p>
      <p className="village-reviewed-by__credential font-body-sm text-on-surface-variant">
        {BIBURY_REVIEWED_BY.credential}
      </p>
    </aside>
  );
}
