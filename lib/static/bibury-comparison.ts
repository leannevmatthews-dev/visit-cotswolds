export type CrowdPillLevel = "quiet" | "moderate" | "busy";

export type VillageComparisonRow = {
  village: string;
  href?: string;
  isCurrent?: boolean;
  /** Set when a village photo is ready; omit to show the placeholder. */
  imageSrc?: string;
  imageAlt?: string;
  beauty: string;
  crowds: { level: CrowdPillLevel; label: string };
  food: string;
  timeNeeded: string;
};

export type VillageAlternative = {
  question: string;
  icon: string;
  villages: { name: string; href: string }[];
};

export const BIBURY_COMPARISON_ROWS: VillageComparisonRow[] = [
  {
    village: "Bibury",
    isCurrent: true,
    beauty: "Exceptional",
    crowds: { level: "busy", label: "High" },
    food: "Limited",
    timeNeeded: "2–3 hours",
  },
  {
    village: "Burford",
    href: "/villages/burford",
    beauty: "Very High",
    crowds: { level: "moderate", label: "Moderate" },
    food: "Good",
    timeNeeded: "2–4 hours",
  },
  {
    village: "Bourton-on-the-Water",
    href: "/villages/bourton-on-the-water",
    beauty: "High",
    crowds: { level: "busy", label: "Very High" },
    food: "Very Good",
    timeNeeded: "2–3 hours",
  },
];

export const BIBURY_ALTERNATIVES: VillageAlternative[] = [
  {
    question: "Want fewer crowds?",
    icon: "nature_people",
    villages: [
      { name: "Snowshill", href: "/villages/snowshill" },
      { name: "Upper Slaughter", href: "/villages" },
    ],
  },
  {
    question: "Want more shops?",
    icon: "storefront",
    villages: [
      { name: "Burford", href: "/villages/burford" },
      { name: "Stow-on-the-Wold", href: "/villages" },
    ],
  },
  {
    question: "Want more cafés?",
    icon: "local_cafe",
    villages: [
      { name: "Bourton-on-the-Water", href: "/villages/bourton-on-the-water" },
      { name: "Stow-on-the-Wold", href: "/villages" },
    ],
  },
];
