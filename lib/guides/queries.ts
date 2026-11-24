import { createClient as createSupabaseClient } from "@supabase/supabase-js";

function createReadClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) {
    throw new Error("Missing Supabase environment variables.");
  }
  return createSupabaseClient(url, key);
}

export type GuideRow = {
  id: number;
  slug: string;
  title: string;
  meta_title: string;
  meta_description: string;
  category: string;
  hero_image_url: string | null;
  hero_image_alt: string | null;
  hero_image_credit: string | null;
  content: string;
  status: string;
  published_at: string | null;
  created_at: string;
  updated_at: string;
  sidebar_related?: string[] | null;
};

export type RelatedGuide = {
  slug: string;
  title: string;
  hero_image_url: string | null;
  hero_image_alt: string | null;
  category: string;
};

const RELATED_HEADING_FALLBACK = "Related guides";

export async function getGuideSidebarRelated(
  slug: string,
): Promise<{ slugs: string[]; heading: string }> {
  const supabase = createReadClient();
  const { data, error } = await supabase
    .from("guides")
    .select("sidebar_related, sidebar_heading")
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();

  if (error || !data) return { slugs: [], heading: RELATED_HEADING_FALLBACK };
  const value = data.sidebar_related;
  const slugs = Array.isArray(value)
    ? value.filter(
        (entry): entry is string =>
          typeof entry === "string" && entry.trim().length > 0,
      )
    : [];
  const heading =
    typeof data.sidebar_heading === "string" && data.sidebar_heading.trim()
      ? data.sidebar_heading.trim()
      : RELATED_HEADING_FALLBACK;
  return { slugs, heading };
}

/** Published guides in the same order as `slugs`. Missing or unpublished slugs are skipped. */
export async function getPublishedGuidesInOrder(
  slugs: string[],
): Promise<RelatedGuide[]> {
  if (slugs.length === 0) return [];

  const supabase = createReadClient();
  const { data, error } = await supabase
    .from("guides")
    .select("slug, title, hero_image_url, hero_image_alt, category")
    .in("slug", slugs)
    .eq("status", "published");

  if (error) return [];

  const bySlug = new Map(
    ((data ?? []) as RelatedGuide[]).map((guide) => [guide.slug, guide]),
  );
  return slugs.flatMap((slug) => {
    const guide = bySlug.get(slug);
    return guide ? [guide] : [];
  });
}

export async function getAllPublishedGuides(): Promise<GuideRow[]> {
  const supabase = createReadClient();
  const { data, error } = await supabase
    .from("guides")
    .select(
      "id, slug, title, meta_title, meta_description, category, hero_image_url, hero_image_alt, hero_image_credit, status, published_at, created_at, updated_at",
    )
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (error) throw new Error(`Failed to fetch guides: ${error.message}`);
  return (data ?? []) as GuideRow[];
}

export async function getGuideBySlug(slug: string): Promise<GuideRow | null> {
  const supabase = createReadClient();
  const { data, error } = await supabase
    .from("guides")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .single();

  if (error) return null;
  return data as GuideRow;
}

export async function getAllPublishedGuideSlugs(): Promise<string[]> {
  const guides = await getAllPublishedGuides();
  return guides.map((g) => g.slug);
}

export type GuideSitemapEntry = {
  slug: string;
  updated_at: string;
};

export async function getPublishedGuideSitemapEntries(): Promise<
  GuideSitemapEntry[]
> {
  const supabase = createReadClient();
  const { data, error } = await supabase
    .from("guides")
    .select("slug, updated_at")
    .eq("status", "published")
    .order("slug", { ascending: true })
    .limit(1000);

  if (error) {
    throw new Error(`Failed to fetch guide sitemap entries: ${error.message}`);
  }

  return (data ?? []) as GuideSitemapEntry[];
}
