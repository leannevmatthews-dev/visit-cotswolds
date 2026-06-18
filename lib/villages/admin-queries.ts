import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import type { Village } from "@/lib/villages/types";

export type VillageListItem = {
  id: number;
  name: string;
  slug: string;
};

export async function getAllVillagesForAdmin(): Promise<VillageListItem[]> {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase
    .from("villages")
    .select("id, name, slug")
    .order("name", { ascending: true });

  if (error) {
    console.error("Failed to fetch villages for admin:", error.message);
    return [];
  }

  return (data ?? []) as VillageListItem[];
}

export async function getVillageForAdminBySlug(
  slug: string,
): Promise<Village | null> {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase
    .from("villages")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    console.error(`Failed to fetch village "${slug}" for admin:`, error.message);
    return null;
  }

  return (data as Village | null) ?? null;
}
