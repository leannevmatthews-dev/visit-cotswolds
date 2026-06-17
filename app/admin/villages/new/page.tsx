import type { Metadata } from "next";
import Link from "next/link";

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
      <h1 className="font-display-lg text-display-lg-mobile md:text-headline-md mt-6 mb-3 text-on-background">
        New Village
      </h1>
      <p className="font-body-lg text-on-surface-variant">
        Village creation form coming next.
      </p>
    </main>
  );
}
