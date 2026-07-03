import Image from "next/image";
import Link from "next/link";
import { DirectoryPageHero } from "@/components/listing-directory/directory-page-hero";
import { VillageImagePlaceholder } from "@/components/villages/village-image-placeholder";
import {
  GUIDE_CATEGORY_CARDS,
  GUIDES_HERO_IMAGE,
} from "@/lib/guides-data";

export function GuidesContent() {
  return (
    <>
      <DirectoryPageHero
        title="Guides"
        subtitle="Plan with confidence — itineraries, practical advice, and village guides from real visits."
        intro="The Cotswolds rewards preparation without over-planning. These guides cover how long to stay, how to get around, and which villages are worth building a trip around."
        heroImage={GUIDES_HERO_IMAGE}
      />

      <main className="bg-background pb-16 pt-10 text-on-background md:pb-24 md:pt-12 lg:pb-32">
        <section
          className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop"
          aria-label="Guide categories"
        >
          <div className="guides-category-grid grid grid-cols-1 gap-gutter md:grid-cols-3">
            {GUIDE_CATEGORY_CARDS.map((card) => (
              <Link
                key={card.id}
                href={card.href}
                className="guides-category-card group relative min-h-[320px] overflow-hidden text-left md:min-h-[420px]"
              >
                <div className="guides-category-card__media absolute inset-0">
                  {card.imageUrl ? (
                    <Image
                      src={card.imageUrl}
                      alt={card.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <VillageImagePlaceholder className="village-compare-card__placeholder h-full min-h-0" />
                  )}
                </div>
                <div
                  className="guides-category-card__overlay absolute inset-0"
                  aria-hidden="true"
                />
                <div className="guides-category-card__content relative z-10 flex h-full min-h-[320px] flex-col justify-end p-6 md:min-h-[420px] md:p-8">
                  <span className="font-label-caps text-[10px] tracking-[0.3em] text-limestone uppercase">
                    Guides
                  </span>
                  <h2 className="font-display-lg mt-2 text-[32px] leading-tight text-on-background md:text-[36px]">
                    {card.title}
                  </h2>
                  <p className="font-body-sm mt-3 max-w-sm text-on-surface-variant">
                    {card.description}
                  </p>
                  <span className="guides-category-card__cta mt-5 inline-flex items-center gap-2 font-label-caps text-[10px] tracking-widest text-limestone uppercase">
                    Browse guides
                    <span
                      className="material-symbols-outlined text-sm"
                      aria-hidden="true"
                    >
                      arrow_forward
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
