import type { Metadata } from "next";
import Link from "next/link";
import { VillageForm } from "@/components/admin/village-form/village-form";

export const metadata: Metadata = {
  title: "New Village | Admin | Visit Cotswolds",
  robots: { index: false, follow: false },
};

export default function NewVillagePage() {
  return (
    <main className="mx-auto max-w-container-max px-margin-mobile py-12 md:px-margin-desktop md:py-16">
      <Link
        href="/admin"
        className="font-label-caps text-[10px] tracking-widest text-on-surface-variant transition-colors hover:text-primary"
      >
        ← Back to villages
      </Link>
      <h1 className="font-display-lg text-display-lg-mobile md:text-headline-md mt-6 mb-2 text-on-background">
        New Village
      </h1>
      <p className="font-body-sm mb-8 text-on-surface-variant">
        Fill in each section below. Name and slug are required.
      </p>

      <VillageForm />
    </main>
  );
}
