-- Align nearby_villages drive times with ~10–12 mile routes and combine-with copy.
-- Bibury → Bourton-on-the-Water: ~12 miles, typically 20+ minutes by car.
-- Bibury ↔ Burford: ~10–12 miles; combine-with prose uses 15 minutes.

UPDATE villages
SET nearby_villages = '[
  {
    "village_name": "Bourton-on-the-Water",
    "drive_time_label": "20 Mins Away",
    "image_url": null,
    "image_alt": null
  },
  {
    "village_name": "Burford",
    "drive_time_label": "15 Mins Away",
    "image_url": null,
    "image_alt": null
  }
]'::jsonb
WHERE slug = 'bibury';

UPDATE villages
SET nearby_villages = '[
  {
    "village_name": "Swinbrook",
    "drive_time_label": "5 Mins Away",
    "image_url": null,
    "image_alt": null
  },
  {
    "village_name": "Bibury",
    "drive_time_label": "15 Mins Away",
    "image_url": null,
    "image_alt": null
  }
]'::jsonb
WHERE slug = 'burford';
