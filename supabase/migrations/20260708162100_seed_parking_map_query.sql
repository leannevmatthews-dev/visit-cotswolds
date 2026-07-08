-- STEP 1: seed parking_guide.map_query for the five live villages

UPDATE public.villages
SET parking_guide = jsonb_set(
  COALESCE(parking_guide, '{}'::jsonb),
  '{map_query}',
  to_jsonb('Bibury Trout Farm car park, GL7 5NL'::text),
  true
)
WHERE id = 1;

UPDATE public.villages
SET parking_guide = jsonb_set(
  COALESCE(parking_guide, '{}'::jsonb),
  '{map_query}',
  to_jsonb('Rissington Road Car Park, GL54 2BN'::text),
  true
)
WHERE id = 6;

UPDATE public.villages
SET parking_guide = jsonb_set(
  COALESCE(parking_guide, '{}'::jsonb),
  '{map_query}',
  to_jsonb('Guildenford Car Park, OX18 4SE'::text),
  true
)
WHERE id = 2;

UPDATE public.villages
SET parking_guide = jsonb_set(
  COALESCE(parking_guide, '{}'::jsonb),
  '{map_query}',
  to_jsonb('Dunns Lane Car Park, SN14 7HU'::text),
  true
)
WHERE id = 4;

UPDATE public.villages
SET parking_guide = jsonb_set(
  COALESCE(parking_guide, '{}'::jsonb),
  '{map_query}',
  to_jsonb('Pipers Grove Car Park, WR12 7JU'::text),
  true
)
WHERE id = 5;

-- STEP 2: preserve Bibury's working coordinate-pinned embed as map_override_url

UPDATE public.villages
SET parking_guide = jsonb_set(
  COALESCE(parking_guide, '{}'::jsonb),
  '{map_override_url}',
  to_jsonb(
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.2127324365188!2d-1.8397723875787881!3d51.761813691968236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48713db8612596dd%3A0x78f50225893cd1af!2sBibury%20Trout%20farm%20car%20park!5e1!3m2!1sen!2suk!4v1781711820399!5m2!1sen!2suk'::text
  ),
  true
)
WHERE id = 1;

-- Verify
SELECT
  id,
  name,
  parking_guide->>'map_query' AS map_query,
  parking_guide->>'map_override_url' AS map_override_url
FROM public.villages
WHERE id IN (1, 2, 4, 5, 6)
ORDER BY id;
