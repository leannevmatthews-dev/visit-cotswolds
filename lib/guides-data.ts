import type { DirectoryFilter, DirectoryListing } from "@/lib/listing-directory";
import {
  cotswoldsWithoutACarContent,
  cotswoldsWithoutACarMeta,
} from "@/lib/static/cotswolds-without-a-car";
import {
  howFarAreTheCotswoldsFromLondonContent,
  howFarAreTheCotswoldsFromLondonMeta,
} from "@/lib/static/how-far-are-the-cotswolds-from-london";
import {
  whereAreTheCotswoldsContent,
  whereAreTheCotswoldsMeta,
} from "@/lib/static/where-are-the-cotswolds";

export type GuideListingCategory =
  | "Plan Your Trip"
  | "Villages and Towns"
  | "Getting Around"
  | "Attractions";

export type GuideListing = DirectoryListing & {
  category: GuideListingCategory;
  location: string;
};

export type GuideContentBlock =
  | { type: "paragraph"; text: string }
  | {
      type: "paragraph_with_links";
      segments: (
        | { type: "text"; text: string }
        | { type: "link"; text: string; href: string; external?: boolean }
      )[];
    }
  | { type: "heading"; level: 2 | 3 | 4; text: string; id?: string }
  | { type: "list"; style: "bullet" | "numbered"; items: string[] }
  | {
      type: "table";
      headers: string[];
      rows: (
        | string
        | { text: string; href: string; external?: boolean }
      )[][];
    }
  | {
      type: "image";
      id: string;
      alt: string;
      caption?: string;
      src?: string;
      imageCredit?: { text: string; url: string };
      placeholder?: true;
    }
  | { type: "faq"; items: { question: string; answer: string }[] }
  | { type: "notice"; text: string }
  | {
      type: "links";
      title: string;
      items: { label: string; url: string; note?: string }[];
    }
  | {
      type: "map_embeds";
      title?: string;
      routes: { label: string; origin: string; destination: string }[];
    };

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
    label: "Attractions",
    matchCategory: "Attractions",
  },
];

export const GUIDES_LISTINGS: GuideListing[] = [
  {
    id: whereAreTheCotswoldsMeta.slug,
    name: whereAreTheCotswoldsMeta.title,
    description: whereAreTheCotswoldsMeta.metaDescription,
    category: whereAreTheCotswoldsMeta.category,
    location: "Cotswolds-wide",
    imageUrl:
      "https://pwwpxxeploahbcpubhnx.supabase.co/storage/v1/object/public/guide-pages/where-are-the-cotswolds/where%20are%20the%20cotswolds%20hero.png",
    imageAlt: "Hero graphic locating the Cotswolds in England",
    websiteUrl: "/guides/where-are-the-cotswolds",
  },
  {
    id: howFarAreTheCotswoldsFromLondonMeta.slug,
    name: howFarAreTheCotswoldsFromLondonMeta.title,
    description: howFarAreTheCotswoldsFromLondonMeta.metaDescription,
    category: howFarAreTheCotswoldsFromLondonMeta.category,
    location: "Cotswolds-wide",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Road_signs%2C_Upper_Slaugher%2C_Lower_Slaughter_and_Bourton-on-the_Water_7820.jpg",
    imageAlt:
      "Road signs for Upper Slaughter, Lower Slaughter and Bourton-on-the-Water",
    imageCredit: {
      text: "Photo: Peter K Burian, CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Road_signs,_Upper_Slaugher,_Lower_Slaughter_and_Bourton-on-the_Water_7820.jpg",
    },
    websiteUrl: "/guides/how-far-are-the-cotswolds-from-london",
  },
  {
    id: cotswoldsWithoutACarMeta.slug,
    name: cotswoldsWithoutACarMeta.title,
    description: cotswoldsWithoutACarMeta.metaDescription,
    category: cotswoldsWithoutACarMeta.category,
    location: "Cotswolds-wide",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/86/Paddington_station_MMB_35_332001.jpg",
    imageAlt: "London Paddington station platforms",
    imageCredit: {
      text: "Photo: mattbuck, CC BY-SA 3.0",
      url: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    websiteUrl: "/guides/cotswolds-without-a-car",
  },
];

export const GUIDE_CONTENT_MAP: Record<string, GuideContentBlock[]> = {
  "where-are-the-cotswolds": whereAreTheCotswoldsContent,
  "how-far-are-the-cotswolds-from-london": howFarAreTheCotswoldsFromLondonContent,
  "cotswolds-without-a-car": cotswoldsWithoutACarContent,
};

export const GUIDE_META_MAP: Record<string, GuideMeta> = {
  "where-are-the-cotswolds": whereAreTheCotswoldsMeta,
  "how-far-are-the-cotswolds-from-london": howFarAreTheCotswoldsFromLondonMeta,
  "cotswolds-without-a-car": cotswoldsWithoutACarMeta,
};
