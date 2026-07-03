import type { DirectoryFilter, DirectoryListing } from "@/lib/listing-directory";

export type GuideListingCategory =
  | "Plan Your Trip"
  | "Villages and Towns"
  | "Getting Around";

export type GuideListing = DirectoryListing & {
  category: GuideListingCategory;
  location: string;
};

export const GUIDES_HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCwhVC9gqI8AvaYlKwoP6QQ8tAtpNDgV0LMn9K0lqpevoC8MOWtdxaJTbkcV8vUOfnsyrn4Zea6cC3HmLjCN147UGC-zkqaERNOFNtEMumdVVHco_eQJ0pWeiqtiSISBNjlR8FfpaeXUaQWFpjpVbnmGaWbXoW0rEqqNZ6GVBGkPl0lcSVz256Lydtp3A4Nf0wbbq1zihq2rGHG4AMaUNeNK5leurdnFYjvcZcqs4JP5noeOSCNfpC3PwenW5FeRtzrUgFprZpV9A";

export const GUIDES_FILTER_CATEGORIES: DirectoryFilter[] = [
  { id: "all", label: "All Guides" },
  {
    id: "plan-your-trip",
    label: "Plan Your Trip",
    matchCategory: "Plan Your Trip",
  },
  {
    id: "villages-and-towns",
    label: "Villages and Towns",
    matchCategory: "Villages and Towns",
  },
  {
    id: "getting-around",
    label: "Getting Around",
    matchCategory: "Getting Around",
  },
];

export type GuideCategoryCard = {
  id: string;
  title: string;
  description: string;
  subtitle: string;
  intro: string;
  href: string;
  imageUrl: string;
  imageAlt: string;
  filterId: string;
};

export const GUIDE_CATEGORY_SLUGS = [
  "plan-your-trip",
  "villages-and-towns",
  "getting-around",
] as const;

export type GuideCategorySlug = (typeof GUIDE_CATEGORY_SLUGS)[number];

export const GUIDE_CATEGORY_CARDS: GuideCategoryCard[] = [
  {
    id: "plan-your-trip",
    title: "Plan Your Trip",
    description:
      "Itineraries, when to visit, and practical planning before you set off.",
    subtitle: "Build a trip that suits your pace, not a coach tour timetable.",
    intro:
      "How long to stay, when to visit, and the practical decisions worth making before you book anything — drawn from repeat visits across the region.",
    href: "/guides/plan-your-trip",
    filterId: "plan-your-trip",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAj72xSFsQs43oeabLHBvYKbeADqE_cgI0zhCa6F0JKZujDXchKTM4cvC_bQTAOZbL8Ljlzkgm0_Ll0XhpYl9m0H-4aeD1fVHZIPXMzncocQqF0dRDEXZ2utvy4g5oHnKTwuYZDjDgTk-dAGiSIenXVbF-dDCxeFBhz8PVebRgbUE5SHaFMiDiIaAYMl2r6aZISG_ISpqr_SkBXh5bLvzkij5hsTA9VdMKIz07XnCzSFAbIFi1o0gn1U7dKAEnz2bFWVrtbOq--FQ",
    imageAlt: "Stone cottage in a Cotswold village at dusk",
  },
  {
    id: "villages-and-towns",
    title: "Villages and Towns",
    description:
      "In-depth guides to the villages and market towns worth building a trip around.",
    subtitle: "The places that reward more than a quick photo stop.",
    intro:
      "Honest village guides with crowd intelligence, parking, accessibility, and the things most visitors walk past — written after real visits.",
    href: "/guides/villages-and-towns",
    filterId: "villages-and-towns",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/be/Bibury_2015_06.jpg",
    imageAlt: "Arlington Row in Bibury",
  },
  {
    id: "getting-around",
    title: "Getting Around",
    description:
      "How to get here, how to move between villages, and when you need a car.",
    subtitle: "Trains, driving, and linking villages without wasting the day.",
    intro:
      "Realistic journey times, when public transport works, and how to plan routes that do not leave you stranded at closing time.",
    href: "/guides/getting-around",
    filterId: "getting-around",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/46/Cotswold_stone_houses_by_Izods_Close_%28geograph_3593868%29.jpg",
    imageAlt: "Cotswold stone houses in a village close",
  },
];

export function getGuideCategoryBySlug(
  slug: string,
): GuideCategoryCard | undefined {
  return GUIDE_CATEGORY_CARDS.find((category) => category.id === slug);
}

export function isGuideCategorySlug(slug: string): slug is GuideCategorySlug {
  return GUIDE_CATEGORY_SLUGS.includes(slug as GuideCategorySlug);
}

export const GUIDES_LISTINGS: GuideListing[] = [];
