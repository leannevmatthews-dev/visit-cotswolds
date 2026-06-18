"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { VillageFormState } from "@/lib/villages/form-types";
import {
  toDatabaseRow,
  toInsertPayload,
  validateVillageForm,
} from "@/lib/villages/form-schema";
import { createClient } from "@/utils/supabase/server";

export async function deleteVillage(
  id: number,
): Promise<{ success: true } | { error: string }> {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: "You must be signed in to delete a village." };
  }

  const { error } = await supabase.from("villages").delete().eq("id", id);

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/admin");
  revalidatePath("/villages");

  return { success: true };
}

export async function createVillage(
  state: VillageFormState,
): Promise<{ error: string } | never> {
  const validation = validateVillageForm(state);

  if (!validation.ok) {
    return { error: validation.errors.form ?? "Please fix the form errors." };
  }

  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: "You must be signed in to create a village." };
  }

  const payload = toInsertPayload(state);
  const row = toDatabaseRow(payload);

  const { error } = await supabase.from("villages").insert(row);

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/admin");
  revalidatePath("/villages");
  revalidatePath(`/villages/${payload.slug}`);

  redirect("/admin");
}

export async function updateVillage(
  id: number,
  originalSlug: string,
  state: VillageFormState,
): Promise<{ error: string } | never> {
  const validation = validateVillageForm(state);

  if (!validation.ok) {
    return { error: validation.errors.form ?? "Please fix the form errors." };
  }

  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: "You must be signed in to update a village." };
  }

  const payload = toInsertPayload(state);
  const row = toDatabaseRow(payload);

  const { error } = await supabase.from("villages").update(row).eq("id", id);

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/admin");
  revalidatePath("/villages");
  revalidatePath(`/villages/${originalSlug}`);
  revalidatePath(`/villages/${payload.slug}`);
  revalidatePath(`/admin/villages/${originalSlug}/edit`);

  redirect("/admin");
}
