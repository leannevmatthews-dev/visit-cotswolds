import type { DirectoryFilter, DirectoryListing } from "@/lib/listing-directory";
import {
  whereAreTheCotswoldsContent,
  whereAreTheCotswoldsMeta,
} from "@/lib/static/where-are-the-cotswolds";

export type GuideListingCategory =
  | "Plan Your Trip"
  | "Villages and Towns"
  | "Getting Around"
  | "Local Features";

export type GuideListing = DirectoryListing & {
  category: GuideListingCategory;
  location: string;
};

export type GuideContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "list"; style: "bullet" | "numbered"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | {
      type: "image";
      id: string;
      alt: string;
      caption?: string;
      src?: string;
      placeholder?: true;
    }
  | { type: "faq"; items: { question: string; answer: string }[] };

export type GuideMeta = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: GuideListingCategory;
  datePublished: string;
  dateModified: string;
};

export const GUIDES_HERO_IMAGE =
  "https://pwwpxxeploahbcpubhnx.supabase.co/storage/v1/object/public/village-images/guides-hero.jpg";

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

export const GUIDES_LISTINGS: GuideListing[] = [
  {
    id: whereAreTheCotswoldsMeta.slug,
    name: whereAreTheCotswoldsMeta.title,
    description: whereAreTheCotswoldsMeta.metaDescription,
    category: whereAreTheCotswoldsMeta.category,
    location: "Cotswolds-wide",
    imageUrl: "/images/guide-placeholder.svg",
    imageAlt: "Where Are the Cotswolds guide",
    websiteUrl: "/guides/where-are-the-cotswolds",
  },
];

export const GUIDE_CONTENT_MAP: Record<string, GuideContentBlock[]> = {
  "where-are-the-cotswolds": whereAreTheCotswoldsContent,
};

export const GUIDE_META_MAP: Record<string, GuideMeta> = {
  "where-are-the-cotswolds": whereAreTheCotswoldsMeta,
};
