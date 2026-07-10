import type { DirectoryFilter, DirectoryListing } from "@/lib/listing-directory";

export type GuideListingCategory =
  | "Plan Your Trip"
  | "Villages and Towns"
  | "Getting Around"
  | "Local Features";

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
  {
    id: "local-features",
    label: "Local Features",
    matchCategory: "Local Features",
  },
];

export const GUIDES_LISTINGS: GuideListing[] = [];
