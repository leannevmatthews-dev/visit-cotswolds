import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import type { SeasonalAdvice, Village } from "@/lib/villages/types";

function createReadClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url || !key) {
    throw new Error("Missing Supabase environment variables.");
  }

  return createSupabaseClient(url, key);
}

export async function getAllVillageSlugs(): Promise<string[]> {
  const supabase = createReadClient();

  const { data, error } = await supabase.from("villages").select("slug");

  if (error) {
    console.error("Failed to fetch village slugs:", error.message);
    return [];
  }

  return (data ?? []).map((row) => row.slug);
}

export async function getVillageBySlug(slug: string): Promise<Village | null> {
  const supabase = createReadClient();

  const { data, error } = await supabase
    .from("villages")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    console.error(`Failed to fetch village "${slug}":`, error.message);
    return null;
  }

  return data as Village;
}

export async function getSeasonalAdvice(): Promise<SeasonalAdvice[]> {
  const supabase = createReadClient();

  const { data, error } = await supabase
    .from("seasonal_advice")
    .select("*")
    .order("display_order", { ascending: true });

  if (error) {
    console.error("Failed to fetch seasonal advice:", error.message);
    return [];
  }

  return (data ?? []) as SeasonalAdvice[];
}
