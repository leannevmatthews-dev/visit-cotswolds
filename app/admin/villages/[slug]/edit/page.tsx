import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { VillageForm } from "@/components/admin/village-form/village-form";
import {
  getAllVillagesForAdmin,
  getVillageForAdminBySlug,
} from "@/lib/villages/admin-queries";
import { villageToFormState } from "@/lib/villages/form-schema";

type EditVillagePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: EditVillagePageProps): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `Edit ${slug} | Admin | Visit Cotswolds`,
    robots: { index: false, follow: false },
  };
}

export default async function EditVillagePage({ params }: EditVillagePageProps) {
  const { slug } = await params;
  const [village, allVillages] = await Promise.all([
    getVillageForAdminBySlug(slug),
    getAllVillagesForAdmin(),
  ]);

  if (!village) {
    notFound();
  }

  const initialData = villageToFormState(village);
  const villageOptions = allVillages
    .filter((row) => row.id !== village.id)
    .map((row) => ({ id: row.id, name: row.name }));

  return (
    <main className="mx-auto max-w-container-max px-margin-mobile py-12 md:px-margin-desktop md:py-16">
      <Link
        href="/admin"
        className="font-label-caps text-[10px] tracking-widest text-on-surface-variant transition-colors hover:text-primary"
      >
        ← Back to villages
      </Link>
      <h1 className="font-display-lg text-display-lg-mobile md:text-headline-md mt-6 mb-2 text-on-background">
        Edit Village
      </h1>
      <p className="font-body-sm mb-8 text-on-surface-variant">
        Editing <span className="text-on-surface">{village.name}</span>. All
        fields are pre-filled from Supabase.
      </p>

      <VillageForm
        mode="edit"
        villageId={village.id}
        initialData={initialData}
        originalSlug={slug}
        currentStatus={village.status}
        villageOptions={villageOptions}
      />
    </main>
  );
}
