import Image from "next/image";
import Link from "next/link";
import { GUIDE_META_MAP, GUIDES_LISTINGS } from "@/lib/guides-data";
import { isExternalImageUrl } from "@/lib/utils/is-external-image-url";

export const BEFORE_YOU_GO_GUIDE_SLUGS = [
  "where-are-the-cotswolds",
  "how-far-are-the-cotswolds-from-london",
  "cotswolds-without-a-car",
] as const;

type BeforeYouGoSectionProps = {
  currentSlug: string;
};

export function BeforeYouGoSection({ currentSlug }: BeforeYouGoSectionProps) {
  const relatedSlugs = BEFORE_YOU_GO_GUIDE_SLUGS.filter(
    (slug) => slug !== currentSlug,
  );

  if (relatedSlugs.length === 0) {
    return null;
  }

  return (
    <div className="pt-4 md:pt-6">
      <h2 className="font-display-lg text-[32px] md:text-[40px] text-primary leading-tight mb-10">
        Before You Go
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {relatedSlugs.map((slug) => {
          const listing = GUIDES_LISTINGS.find((entry) => entry.id === slug);
          const meta = GUIDE_META_MAP[slug];

          if (!listing || !meta) {
            return null;
          }

          return (
            <Link
              key={slug}
              href={`/guides/${slug}`}
              className="group block"
            >
              <div className="relative mb-3 aspect-video w-full overflow-hidden bg-surface-container">
                {listing.imageUrl ? (
                  <Image
                    src={listing.imageUrl}
                    alt={listing.imageAlt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    unoptimized={isExternalImageUrl(listing.imageUrl)}
                  />
                ) : (
                  <div
                    className="flex h-full w-full items-center justify-center px-4 text-center"
                    aria-hidden="true"
                  >
                    <span className="font-label-caps text-[10px] tracking-widest text-limestone uppercase">
                      Image pending
                    </span>
                  </div>
                )}
              </div>
              <p className="font-headline-md text-[22px] text-primary leading-tight group-hover:underline underline-offset-2">
                {meta.title}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
