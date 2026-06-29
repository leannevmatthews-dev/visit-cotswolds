-- Update image URL for Daylesford Seasonal Workshops only (when whats_on exists).
do $$
begin
  if exists (
    select 1
    from information_schema.tables
    where table_schema = 'public'
      and table_name = 'whats_on'
  ) then
    update public.whats_on
    set image_url = 'https://www.daylesford.com/media/wysiwyg/Demo-Widgets-Images/banner-image-about_us.jpg?format=webp&quality=85'
    where title = 'Daylesford Seasonal Workshops';
  end if;
end $$;
