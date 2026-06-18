-- comparison_stats is jsonb on villages; each array element is a comparison card object.
-- image_url is an optional text URL for the photo shown on that village's comparison card.
-- No column type change is required — existing rows without image_url keep working (placeholder on site).

do $$
begin
  if exists (
    select 1
    from information_schema.columns
    where table_schema = 'public'
      and table_name = 'villages'
      and column_name = 'comparison_stats'
  ) then
    comment on column public.villages.comparison_stats is
      'JSON array of comparison objects: village_name, is_current, beauty, crowds, food, time_needed, image_url (optional URL for the comparison card photo).';
  end if;
end $$;
