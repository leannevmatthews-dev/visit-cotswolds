-- Canonical per-village rating columns (single source of truth for comparison cards).
-- comparison_stats remains in place until the live read path is confirmed on own_* + comparison_village_ids.

alter table public.villages
  add column if not exists own_beauty text,
  add column if not exists own_crowds text,
  add column if not exists own_food text,
  add column if not exists own_time_needed text;

comment on column public.villages.own_beauty is
  'Canonical beauty rating for this village (source of truth for comparison tables).';
comment on column public.villages.own_crowds is
  'Canonical crowds rating for this village (source of truth for comparison tables).';
comment on column public.villages.own_food is
  'Canonical food rating for this village (source of truth for comparison tables).';
comment on column public.villages.own_time_needed is
  'Canonical time-needed rating for this village (source of truth for comparison tables).';
