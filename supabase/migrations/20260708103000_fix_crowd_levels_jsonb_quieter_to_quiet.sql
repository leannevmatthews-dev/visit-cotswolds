-- Normalize crowd_times.level values to match the new fixed admin dropdown options.
-- Specifically: replace "Quieter" with "Quiet" for existing village records.

UPDATE villages
SET crowd_times = (
  SELECT jsonb_agg(
    CASE
      WHEN elem->>'level' = 'Quieter'
        THEN jsonb_set(elem, '{level}', '"Quiet"'::jsonb, false)
      ELSE elem
    END
    ORDER BY ord
  )
  FROM jsonb_array_elements(crowd_times) WITH ORDINALITY AS t(elem, ord)
)
WHERE slug IN ('bibury', 'bourton-on-the-water')
  AND EXISTS (
    SELECT 1
    FROM jsonb_array_elements(crowd_times) AS elem
    WHERE elem->>'level' = 'Quieter'
  );

