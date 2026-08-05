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
};

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
