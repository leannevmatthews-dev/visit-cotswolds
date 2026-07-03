import Image from "next/image";
import Link from "next/link";
import { DirectoryPageHero } from "@/components/listing-directory/directory-page-hero";
import { VillageImagePlaceholder } from "@/components/villages/village-image-placeholder";
import { applyDirectoryFilter } from "@/lib/listing-directory";
import type { GuideCategoryCard } from "@/lib/guides-data";
import {
  GUIDES_FILTER_CATEGORIES,
  GUIDES_LISTINGS,
} from "@/lib/guides-data";

type GuideCategoryContentProps = {
  category: GuideCategoryCard;
};

export function GuideCategoryContent({ category }: GuideCategoryContentProps) {
  const listings = applyDirectoryFilter(
    GUIDES_LISTINGS,
    category.filterId,
    GUIDES_FILTER_CATEGORIES,
  );

  return (
    <>
      <DirectoryPageHero
        title={category.title}
        subtitle={category.subtitle}
        intro={category.intro}
        heroImage={category.imageUrl}
      />

      <main className="bg-background pb-16 pt-10 text-on-background md:pb-24 md:pt-12 lg:pb-32">
        <section className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 md:mb-10">
            <p className="font-label-caps text-[10px] tracking-widest text-limestone uppercase">
              {category.title}
            </p>
            <Link
              href="/guides"
              className="font-label-caps text-[10px] tracking-widest text-on-surface-variant uppercase transition-colors hover:text-primary"
            >
              ← All guides
            </Link>
          </div>

          {listings.length > 0 ? (
            <div className="grid grid-cols-1 gap-x-gutter gap-y-12 min-[520px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {listings.map((listing) => (
                <article
                  key={listing.id}
                  className="listing-directory-card flex flex-col gap-4"
                >
                  <a
                    href={listing.websiteUrl}
                    className="listing-directory-card__image relative block aspect-square overflow-hidden bg-surface-container"
                  >
                    {listing.imageUrl ? (
                      <div className="listing-card-image">
                        <Image
                          src={listing.imageUrl}
                          alt={listing.imageAlt}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                    ) : (
                      <VillageImagePlaceholder className="village-compare-card__placeholder h-full min-h-0" />
                    )}
                  </a>

                  <div className="flex flex-col gap-2">
                    <h2 className="listing-directory-card__name font-display-lg text-[26px] leading-tight text-on-background md:text-[28px]">
                      {listing.name}
                    </h2>
                    <p className="font-body-sm text-on-surface-variant">
                      {listing.description}
                    </p>
                    <a
                      href={listing.websiteUrl}
                      className="listing-directory-card__link inline-flex items-center gap-2 self-start font-label-caps text-[10px] tracking-widest text-limestone uppercase transition-colors hover:text-primary"
                    >
                      Read guide
                      <span
                        className="material-symbols-outlined text-sm"
                        aria-hidden="true"
                      >
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="font-body-sm text-on-surface-variant py-8 text-center md:py-12">
              Guides for {category.title.toLowerCase()} are coming soon.
            </p>
          )}
        </section>
      </main>
    </>
  );
}
