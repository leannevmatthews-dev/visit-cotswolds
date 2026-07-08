-- Peer comparison id lists for the five live villages (Step 3).
-- Only villages that have a real row; Snowshill intentionally left empty.

UPDATE public.villages
SET comparison_village_ids = ARRAY[2, 6]::integer[]
WHERE id = 1;

UPDATE public.villages
SET comparison_village_ids = ARRAY[1]::integer[]
WHERE id = 6;

UPDATE public.villages
SET comparison_village_ids = ARRAY[6, 1]::integer[]
WHERE id = 2;

UPDATE public.villages
SET comparison_village_ids = ARRAY[1, 6]::integer[]
WHERE id = 4;

UPDATE public.villages
SET comparison_village_ids = '{}'::integer[]
WHERE id = 5;
