-- Shared seasonal advice for all village pages
create table if not exists public.seasonal_advice (
  id bigint generated always as identity primary key,
  season text not null,
  icon text not null,
  body text not null,
  display_order integer not null
);

alter table public.seasonal_advice enable row level security;

create policy "Allow public read access on seasonal_advice"
  on public.seasonal_advice
  for select
  to anon, authenticated
  using (true);

grant select on public.seasonal_advice to anon, authenticated;

insert into public.seasonal_advice (season, icon, body, display_order)
select *
from (
  values
    (
      'Spring',
      'local_florist',
      'Best for blossom along the river and Rack Isle wildflowers. Crowds build from Easter onwards—visit on a weekday if possible.',
      1
    ),
    (
      'Summer',
      'sunny',
      'Most crowded, especially July–August weekends. Arrive before 9am or after 4pm. Long daylight hours suit extended river walks.',
      2
    ),
    (
      'Autumn',
      'park',
      'Our pick for colours—golden stone against amber leaves. Crowds drop after October half-term. Mornings can be misty and atmospheric.',
      3
    ),
    (
      'Winter',
      'cloudy_snowing',
      'Quietest atmosphere and fewest coach groups. Some cafés reduce hours. Cold, crisp days can be beautiful—wrap up and enjoy the solitude.',
      4
    )
) as seed(season, icon, body, display_order)
where not exists (select 1 from public.seasonal_advice limit 1);
