"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { deleteVillage } from "@/app/admin/actions";

export function DeleteVillageButton({
  id,
  name,
}: {
  id: number;
  name: string;
}) {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleDelete() {
    const confirmed = window.confirm(
      `Delete "${name}"? This will permanently remove the village from Supabase.`,
    );
    if (!confirmed) return;

    setPending(true);
    setError(null);

    const result = await deleteVillage(id);

    if ("error" in result) {
      setError(result.error);
      setPending(false);
      return;
    }

    router.refresh();
    setPending(false);
  }

  return (
    <>
      <button
        type="button"
        onClick={handleDelete}
        disabled={pending}
        className="inline-flex shrink-0 items-center border border-error/50 px-3 py-1.5 font-label-caps text-[10px] tracking-widest text-error transition-colors hover:bg-error/10 disabled:opacity-50"
      >
        {pending ? "Deleting…" : "Delete"}
      </button>
      {error && (
        <span className="mt-1 block max-w-[12rem] text-right font-body-sm text-error">
          {error}
        </span>
      )}
    </>
  );
}
