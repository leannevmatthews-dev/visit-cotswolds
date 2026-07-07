-- Replace Barnsley House with The Pig on the Bibury village page places-to-stay picks.

UPDATE villages
SET places_to_stay = '[
  {
    "name": "The Swan Hotel",
    "category": "Riverside Classic",
    "image_alt": null,
    "image_url": null,
    "external_link": null,
    "location_label": "Bibury"
  },
  {
    "name": "The Pig",
    "category": "Boutique Hotel",
    "image_alt": null,
    "image_url": null,
    "external_link": null,
    "location_label": "Barnsley"
  },
  {
    "name": "Lords of the Manor",
    "category": "Country House",
    "image_alt": null,
    "image_url": null,
    "external_link": null,
    "location_label": "Upper Slaughter"
  },
  {
    "name": "The Fish Hotel",
    "category": "Village Retreat",
    "image_alt": null,
    "image_url": null,
    "external_link": null,
    "location_label": "8 miles"
  },
  {
    "name": "Dormy House",
    "category": "Spa Escape",
    "image_alt": null,
    "image_url": null,
    "external_link": null,
    "location_label": "Broadway"
  }
]'::jsonb
WHERE slug = 'bibury';
