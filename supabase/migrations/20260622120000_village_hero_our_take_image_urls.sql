-- Dedicated image URL columns for hero background and Our Take section.
-- hero_gallery_urls is retained for listing cards and legacy rows.

alter table public.villages
  add column if not exists hero_background_image_url text,
  add column if not exists our_take_image_url text;

comment on column public.villages.hero_background_image_url is
  'Hero background image and video poster URL.';
comment on column public.villages.our_take_image_url is
  'Portrait image beside the Our Take editorial section.';

-- Backfill from legacy hero_gallery_urls array positions where dedicated columns are empty.
update public.villages
set
  hero_background_image_url = coalesce(
    hero_background_image_url,
    hero_gallery_urls ->> 0
  ),
  our_take_image_url = coalesce(
    our_take_image_url,
    hero_gallery_urls ->> 1
  )
where hero_gallery_urls is not null;
