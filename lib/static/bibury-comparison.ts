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
    href: "/pages/villages/burford.html",
    beauty: "Very High",
    crowds: { level: "moderate", label: "Moderate" },
    food: "Good",
    timeNeeded: "2–4 hours",
  },
  {
    village: "Bourton-on-the-Water",
    href: "/pages/villages/bourton-on-the-water.html",
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
      { name: "Snowshill", href: "/pages/villages/snowshill.html" },
      { name: "Upper Slaughter", href: "/pages/villages/index.html" },
    ],
  },
  {
    question: "Want more shops?",
    icon: "storefront",
    villages: [
      { name: "Burford", href: "/pages/villages/burford.html" },
      { name: "Stow-on-the-Wold", href: "/pages/villages/index.html" },
    ],
  },
  {
    question: "Want more cafés?",
    icon: "local_cafe",
    villages: [
      { name: "Bourton-on-the-Water", href: "/pages/villages/bourton-on-the-water.html" },
      { name: "Stow-on-the-Wold", href: "/pages/villages/index.html" },
    ],
  },
];
