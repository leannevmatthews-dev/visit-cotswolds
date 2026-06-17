import type { Metadata } from "next";
import Link from "next/link";

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

  return (
    <main className="mx-auto max-w-container-max px-margin-mobile py-12 md:px-margin-desktop md:py-16">
      <Link
        href="/admin"
        className="font-label-caps text-[10px] tracking-widest text-on-surface-variant transition-colors hover:text-primary"
      >
        ← Back to villages
      </Link>
      <h1 className="font-display-lg text-display-lg-mobile md:text-headline-md mt-6 mb-3 text-on-background">
        Edit Village
      </h1>
      <p className="font-body-sm mb-2 text-on-surface-variant">
        Slug: <span className="text-on-surface">{slug}</span>
      </p>
      <p className="font-body-lg text-on-surface-variant">
        Village edit form coming next.
      </p>
    </main>
  );
}
