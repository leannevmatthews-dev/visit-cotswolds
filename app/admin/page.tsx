import type { Metadata } from "next";
import Link from "next/link";
import { cookies } from "next/headers";
import { VillagesTable } from "@/components/admin/villages-table";
import { getAllVillagesForAdmin } from "@/lib/villages/admin-queries";
import { createClient } from "@/utils/supabase/server";

export const metadata: Metadata = {
  title: "Admin | Visit Cotswolds",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  const [villages, { data: { user } }] = await Promise.all([
    getAllVillagesForAdmin(),
    supabase.auth.getUser(),
  ]);

  return (
    <main className="mx-auto max-w-container-max px-margin-mobile py-12 md:px-margin-desktop md:py-16">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-label-caps text-[10px] text-limestone/70 tracking-[0.2em] mb-2">
            Content
          </p>
          <h1 className="font-display-lg text-display-lg-mobile md:text-headline-md text-on-background">
            Villages
          </h1>
          <p className="font-body-sm mt-2 text-on-surface-variant">
            Signed in as {user?.email ?? "admin"}
          </p>
        </div>
        <Link
          href="/admin/villages/new"
          className="admin-cta inline-flex items-center justify-center bg-limestone px-6 py-2.5 font-label-caps text-label-caps text-on-background transition-colors hover:bg-white"
        >
          New Village
        </Link>
      </div>

      <VillagesTable villages={villages} />
    </main>
  );
}
