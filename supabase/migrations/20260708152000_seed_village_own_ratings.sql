-- Seed canonical own_* ratings for the five live villages (Step 2).

UPDATE public.villages
SET
  own_beauty = 'Exceptional',
  own_crowds = 'High',
  own_food = 'Limited',
  own_time_needed = '1-2 hours'
WHERE id = 1;

UPDATE public.villages
SET
  own_beauty = 'Very High',
  own_crowds = 'Very High',
  own_food = 'Strong',
  own_time_needed = '2-3 hours'
WHERE id = 6;

UPDATE public.villages
SET
  own_beauty = 'High',
  own_crowds = 'Moderate',
  own_food = 'Good',
  own_time_needed = '2-4 hours'
WHERE id = 2;

UPDATE public.villages
SET
  own_beauty = 'Exceptional',
  own_crowds = 'High',
  own_food = 'Limited',
  own_time_needed = '1-2 hours'
WHERE id = 4;

UPDATE public.villages
SET
  own_beauty = 'High',
  own_crowds = 'Low',
  own_food = 'Limited',
  own_time_needed = '1-2 hours'
WHERE id = 5;
