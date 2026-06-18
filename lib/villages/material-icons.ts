export type MaterialIconCategory = {
  label: string;
  icons: readonly string[];
};

/** Material Symbols grouped for village admin icon pickers. */
export const VILLAGE_MATERIAL_ICON_CATEGORIES: MaterialIconCategory[] = [
  {
    label: "Weather & time of day",
    icons: [
      "wb_twilight",
      "wb_sunny",
      "sunny",
      "partly_cloudy_day",
      "cloudy",
      "rainy",
      "cloudy_snowing",
      "foggy",
      "thunderstorm",
      "nights_stay",
      "calendar_month",
      "hourglass_top",
    ],
  },
  {
    label: "Transport",
    icons: [
      "directions_car",
      "train",
      "directions_bus",
      "directions_bike",
      "directions_walk",
      "local_parking",
      "local_taxi",
      "route",
      "map",
      "location_on",
    ],
  },
  {
    label: "Food & drink",
    icons: [
      "restaurant",
      "local_cafe",
      "local_bar",
      "coffee",
      "bakery_dining",
      "lunch_dining",
      "dinner_dining",
      "outdoor_grill",
      "wine_bar",
      "icecream",
    ],
  },
  {
    label: "Nature & outdoors",
    icons: [
      "water",
      "waves",
      "park",
      "forest",
      "landscape",
      "terrain",
      "hiking",
      "local_florist",
      "grass",
      "eco",
      "nature_people",
      "outdoor_garden",
    ],
  },
  {
    label: "Accessibility",
    icons: [
      "accessible",
      "wheelchair_pickup",
      "stroller",
      "stairs",
      "escalator_warning",
      "hearing_disabled",
      "blind",
    ],
  },
  {
    label: "Money & cost",
    icons: [
      "confirmation_number",
      "local_activity",
      "payments",
      "credit_card",
      "contactless",
      "money_off",
      "toll",
    ],
  },
  {
    label: "Photography",
    icons: ["photo_camera", "photo_library", "add_a_photo", "panorama"],
  },
  {
    label: "Families & children",
    icons: [
      "family_restroom",
      "child_care",
      "playground",
      "groups",
      "school",
    ],
  },
  {
    label: "Dogs & pets",
    icons: ["pets"],
  },
  {
    label: "Shopping",
    icons: [
      "storefront",
      "shopping_bag",
      "local_mall",
      "store",
      "shopping_cart",
    ],
  },
  {
    label: "History & heritage",
    icons: [
      "church",
      "castle",
      "museum",
      "fort",
      "account_balance",
      "menu_book",
      "auto_stories",
    ],
  },
  {
    label: "General info & warnings",
    icons: [
      "info",
      "help",
      "lightbulb",
      "tips_and_updates",
      "check_circle",
      "warning",
      "priority_high",
      "error",
      "block",
      "visibility",
      "star",
      "explore",
    ],
  },
];

export const VILLAGE_MATERIAL_ICONS = VILLAGE_MATERIAL_ICON_CATEGORIES.flatMap(
  (category) => category.icons,
);

export type VillageMaterialIcon = (typeof VILLAGE_MATERIAL_ICONS)[number];

export function isVillageMaterialIcon(value: string): value is VillageMaterialIcon {
  return VILLAGE_MATERIAL_ICONS.includes(value);
}

/** Categories for the icon picker, with a legacy bucket when the saved value is unknown. */
export function iconCategoriesForValue(current: string): MaterialIconCategory[] {
  if (current && !isVillageMaterialIcon(current)) {
    return [
      {
        label: "Saved value (not in list)",
        icons: [current],
      },
      ...VILLAGE_MATERIAL_ICON_CATEGORIES,
    ];
  }

  return VILLAGE_MATERIAL_ICON_CATEGORIES;
}

/** @deprecated Use iconCategoriesForValue — kept for any flat-list callers. */
export function iconOptionsForValue(current: string): readonly string[] {
  return iconCategoriesForValue(current).flatMap((category) => category.icons);
}
