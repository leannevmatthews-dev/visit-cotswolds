import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import type {
  ComparisonDisplayRow,
  SeasonalAdvice,
  ThingsToDoItem,
  Village,
} from "@/lib/villages/types";

export type VillageComparisonPeer = {
  id: number;
  name: string;
  own_beauty: string | null;
  own_crowds: string | null;
  own_food: string | null;
  own_time_needed: string | null;
  hero_background_image_url: string | null;
  alt_text: string | null;
};

export type VillageListRow = {
  name: string;
  slug: string;
  region_label: string;
  cotswolds_region: string | null;
  brief_summary: string;
  hero_gallery_urls: string[] | null;
};

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

export async function getAllVillagesForListing(): Promise<VillageListRow[]> {
  const supabase = createReadClient();

  const { data, error } = await supabase
    .from("villages")
    .select("name, slug, region_label, cotswolds_region, brief_summary, hero_gallery_urls")
    .order("name", { ascending: true });

  if (error) {
    console.error("Failed to fetch villages for listing:", error.message);
    return [];
  }

  return (data ?? []) as VillageListRow[];
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

  const row = data as Record<string, unknown>;
  const { curated_experiences, ...rest } = row;

  return {
    ...rest,
    things_to_do: (curated_experiences as ThingsToDoItem[] | null) ?? [],
  } as Village;
}

/** Comparison peer rows matched by id, returned in the same order as `ids`. */
export async function getVillagesForComparisonByIds(
  ids: number[],
): Promise<VillageComparisonPeer[]> {
  const uniqueIds = [...new Set(ids.filter((id) => Number.isFinite(id)))];
  if (uniqueIds.length === 0) {
    return [];
  }

  const supabase = createReadClient();

  const { data, error } = await supabase
    .from("villages")
    .select(
      "id, name, own_beauty, own_crowds, own_food, own_time_needed, hero_background_image_url, alt_text",
    )
    .in("id", uniqueIds);

  if (error) {
    console.error("Failed to fetch comparison villages by id:", error.message);
    return [];
  }

  const byId = new Map(
    (data ?? []).map((row) => [row.id as number, row as VillageComparisonPeer]),
  );

  return ids
    .map((id) => byId.get(id))
    .filter((row): row is VillageComparisonPeer => Boolean(row));
}

export function buildComparisonDisplayRows(
  village: Village,
  peers: VillageComparisonPeer[],
): ComparisonDisplayRow[] {
  const peerRows: ComparisonDisplayRow[] = [];

  for (const peer of peers) {
    if (
      !peer.own_beauty ||
      !peer.own_crowds ||
      !peer.own_food ||
      !peer.own_time_needed
    ) {
      continue;
    }

    peerRows.push({
      village_name: peer.name,
      is_current: false,
      beauty: peer.own_beauty,
      crowds: peer.own_crowds,
      food: peer.own_food,
      time_needed: peer.own_time_needed,
      image_url: peer.hero_background_image_url,
      image_alt: peer.alt_text,
    });
  }

  // No peers (e.g. Snowshill) → hide the comparison cards entirely.
  if (peerRows.length === 0) {
    return [];
  }

  const rows: ComparisonDisplayRow[] = [];

  if (
    village.own_beauty &&
    village.own_crowds &&
    village.own_food &&
    village.own_time_needed
  ) {
    rows.push({
      village_name: village.name,
      is_current: true,
      beauty: village.own_beauty,
      crowds: village.own_crowds,
      food: village.own_food,
      time_needed: village.own_time_needed,
      image_url: village.hero_background_image_url,
      image_alt: village.alt_text,
    });
  }

  rows.push(...peerRows);
  return rows;
}

/** Hero background URLs for villages matched by exact name (comparison cards). */
export async function getVillageHeroImagesByNames(
  names: string[],
): Promise<Record<string, string>> {
  const uniqueNames = [...new Set(names.map((name) => name.trim()).filter(Boolean))];
  if (uniqueNames.length === 0) {
    return {};
  }

  const supabase = createReadClient();

  const { data, error } = await supabase
    .from("villages")
    .select("name, hero_background_image_url")
    .in("name", uniqueNames);

  if (error) {
    console.error("Failed to fetch village hero images by name:", error.message);
    return {};
  }

  const images: Record<string, string> = {};
  for (const row of data ?? []) {
    const url = row.hero_background_image_url?.trim();
    if (url) {
      images[row.name] = url;
    }
  }

  return images;
}

/** Hero background URLs for villages matched by slug (homepage village cards). */
export async function getVillageHeroImagesBySlugs(
  slugs: string[],
): Promise<Record<string, string>> {
  const uniqueSlugs = [...new Set(slugs.map((slug) => slug.trim()).filter(Boolean))];
  if (uniqueSlugs.length === 0) {
    return {};
  }

  const supabase = createReadClient();

  const { data, error } = await supabase
    .from("villages")
    .select("slug, hero_background_image_url")
    .in("slug", uniqueSlugs);

  if (error) {
    console.error("Failed to fetch village hero images by slug:", error.message);
    return {};
  }

  const images: Record<string, string> = {};
  for (const row of data ?? []) {
    const url = row.hero_background_image_url?.trim();
    if (url) {
      images[row.slug] = url;
    }
  }

  return images;
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
