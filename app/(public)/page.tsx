import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { FadeInSection } from "@/components/fade-in-section";
import {
  HERO_IMAGE,
  JOURNEY_CARDS,
  VILLAGE_CARDS,
} from "@/lib/home-data";
import { getHomepageFeaturedStays } from "@/lib/places-to-stay-data";
import { pageMetadata } from "@/lib/seo/metadata";
import { getOrganizationJsonLd } from "@/lib/seo/schema";
import { getVillageHeroImagesBySlugs } from "@/lib/villages/queries";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Visit Cotswolds | The Independent Guide to the Cotswolds",
    description:
      "The independent guide to visiting the Cotswolds: village guides, places to eat and stay, things to do, and real advice from actual visits.",
    path: "/",
  }),
  title: {
    absolute: "Visit Cotswolds | The Independent Guide to the Cotswolds",
  },
};

/** Re-enable once homepage search is built (10+ villages & listings). */
const SHOW_HOME_SEARCH = false;

export default async function HomePage() {
  const villageHeroImagesBySlug = await getVillageHeroImagesBySlugs(
    VILLAGE_CARDS.map((card) => card.slug),
  );
  const featuredStays = getHomepageFeaturedStays();

  return (
    <>
      <JsonLd data={getOrganizationJsonLd()} />
      <main>
        {/* Hero */}
        <section className="relative min-h-[100dvh] w-full flex flex-col overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="relative h-full w-full">
              {HERO_IMAGE ? (
                <Image
                  alt="A cinematic, wide-angle photograph of a quintessential Cotswolds stone village, like Castle Combe, shrouded in a soft morning mist."
                  className="object-cover"
                  fill
                  priority
                  quality={65}
                  sizes="(max-width: 768px) 100vw, 1920px"
                  src={HERO_IMAGE}
                />
              ) : (
                <div
                  className="absolute inset-0 bg-surface-container-high"
                  aria-hidden="true"
                />
              )}
              <div className="absolute inset-0 image-overlay-gradient opacity-80" />
              <Link
                href="/things-to-do"
                className="absolute bottom-4 left-4 z-10 border px-3 py-1.5 font-label-caps text-label-caps text-[var(--color-limestone)] transition-colors hover:text-[color-mix(in_srgb,var(--color-limestone)_85%,white)]"
                style={{
                  fontFamily: "var(--font-body)",
                  backgroundColor:
                    "color-mix(in srgb, var(--color-surface) 70%, transparent)",
                  borderColor:
                    "color-mix(in srgb, var(--color-outline-variant) 35%, transparent)",
                  borderRadius: "var(--radius-xl)",
                }}
              >
                Cotswolds Lavender Farm
              </Link>
            </div>
          </div>

          <div
            className={`relative z-10 flex flex-1 flex-col justify-center items-center text-center max-w-4xl w-full mx-auto px-margin-mobile pt-28 md:pt-32 ${
              SHOW_HOME_SEARCH
                ? "pb-6 md:pb-10"
                : "pb-16 md:pb-24"
            }`}
          >
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg lg:text-[84px] text-on-background mb-3 md:mb-4">
              An Independent Guide to the Cotswolds.
            </h1>
            <p className="font-body-lg text-on-surface-variant/80 tracking-wide uppercase font-bold text-sm md:text-base">
              Handpicked and properly researched, so you can make the most of your time here.
            </p>
          </div>

          {SHOW_HOME_SEARCH && (
            <div className="relative z-20 w-full max-w-4xl mx-auto px-margin-mobile pb-8 md:pb-20 shrink-0">
              <div className="glass flex flex-col md:flex-row items-stretch p-2 rounded">
                <div className="flex-1 w-full p-3 md:p-4 border-b md:border-b-0 md:border-r border-limestone/10 flex flex-col">
                  <span className="font-label-caps text-[10px] text-limestone/60 mb-1">
                    WHERE
                  </span>
                  <input
                    className="bg-transparent border-none focus:ring-0 text-on-surface font-body-sm p-0 placeholder:text-on-surface/30 w-full outline-none"
                    placeholder="Explore villages..."
                    type="text"
                  />
                </div>
                <div className="flex-1 w-full p-3 md:p-4 border-b md:border-b-0 md:border-r border-limestone/10 flex flex-col">
                  <span className="font-label-caps text-[10px] text-limestone/60 mb-1">
                    WHEN
                  </span>
                  <input
                    className="bg-transparent border-none focus:ring-0 text-on-surface font-body-sm p-0 placeholder:text-on-surface/30 w-full outline-none"
                    type="text"
                    placeholder="Add dates"
                  />
                </div>
                <div className="flex-1 w-full p-3 md:p-4 border-b md:border-b-0 md:border-r border-limestone/10 flex flex-col">
                  <span className="font-label-caps text-[10px] text-limestone/60 mb-1">
                    LOOKING FOR
                  </span>
                  <input
                    className="bg-transparent border-none focus:ring-0 text-on-surface font-body-sm p-0 placeholder:text-on-surface/30 w-full outline-none"
                    placeholder="Experiences, stays..."
                    type="text"
                  />
                </div>
                <a
                  href="/villages"
                  className="bg-limestone text-primary-container px-8 md:px-10 py-3 md:py-4 font-label-caps text-label-caps hover:bg-white transition-colors w-full md:w-auto inline-flex items-center justify-center shrink-0"
                >
                  EXPLORE
                </a>
              </div>
            </div>
          )}
        </section>

        {/* Curated Journeys */}
        <FadeInSection>
          <div className="pt-24 md:pt-32 pb-0 bg-background">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-1.5 sm:gap-2 md:gap-2 lg:gap-3 px-margin-mobile md:px-margin-desktop">
              {JOURNEY_CARDS.map((card) => (
                <a
                  key={card.title}
                  href={card.href}
                  className="relative group cursor-pointer overflow-hidden block min-w-0 aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5]"
                >
                  {card.image ? (
                    <Image
                      alt={card.alt}
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      fill
                      sizes="(max-width: 768px) 50vw, 20vw"
                      src={card.image}
                    />
                  ) : (
                    <div
                      className="absolute inset-0 bg-surface-container-high"
                      aria-hidden="true"
                    />
                  )}
                  <div className="absolute inset-0 image-overlay-gradient" />
                  <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 md:bottom-6 md:left-5">
                    <span className="font-label-caps text-[7px] sm:text-[9px] md:text-[10px] text-limestone block mb-1 sm:mb-1 tracking-wider">
                      {card.label}
                    </span>
                    <h3
                      className={`font-display-lg home-journey-card__title md:text-xl lg:text-2xl leading-tight${"titleClass" in card && card.titleClass ? ` ${card.titleClass}` : ""}`}
                    >
                      {card.title}
                    </h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* Village Edit */}
        <FadeInSection>
          <div className="pb-24 md:pb-32 px-margin-mobile md:px-margin-desktop bg-background">
            <div className="py-12 md:py-16 mb-0 text-center">
              <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg">
                Cotswolds Villages
              </h2>
              <a
                href="/villages"
                className="inline-block mt-6 font-label-caps text-label-caps text-limestone/80 hover:text-limestone border-b border-limestone/30 pb-1 transition-colors"
              >
                VIEW ALL VILLAGES
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4">
              {VILLAGE_CARDS.map((village) => {
                const imageUrl = villageHeroImagesBySlug[village.slug] ?? "";

                return (
                  <a
                    key={village.name}
                    href={village.href}
                    className={`${village.span} relative group overflow-hidden aspect-[4/3] md:aspect-auto ${village.height} block`}
                  >
                    {imageUrl ? (
                      <Image
                        alt={village.alt}
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        src={imageUrl}
                      />
                    ) : (
                      <div
                        className="absolute inset-0 bg-surface-container-high"
                        aria-hidden="true"
                      />
                    )}
                    <div className="absolute inset-0 image-overlay-gradient" />
                    <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 home-village-card__copy">
                      <span className="font-label-caps text-limestone text-[10px] block mb-1">
                        {village.county}
                      </span>
                      <h3 className="font-display-lg home-village-card__title text-headline-md md:text-[40px] italic">
                        {village.name}
                      </h3>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </FadeInSection>

        {/* Quiet Retreats */}
        <FadeInSection>
          <div className="py-16 md:py-32 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6 md:gap-8">
              <div>
                <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-3 md:mb-4">
                  Places To Stay In The Cotswolds
                </h2>
                <p className="font-body-lg text-on-surface-variant max-w-xl text-base md:text-body-lg">
                  Handpicked Places To Stay Across The Cotswolds
                </p>
              </div>
              <a
                href="/places-to-stay"
                className="border border-limestone/40 px-8 md:px-10 py-3 md:py-4 font-label-caps text-label-caps hover:bg-limestone hover:text-background transition-all duration-500 inline-block w-full md:w-auto text-center"
              >
                SEE ALL PLACES TO STAY
              </a>
            </div>

            <div className="grid grid-cols-1 gap-x-gutter gap-y-12 min-[520px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {featuredStays.map((stay) => (
                <a
                  key={stay.name}
                  href="/places-to-stay"
                  className="group cursor-pointer block min-w-0"
                >
                  <div className="relative aspect-[3/4] overflow-hidden mb-4 md:mb-6">
                    {stay.imageUrl ? (
                      <Image
                        alt={stay.imageAlt}
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        fill
                        sizes="(max-width: 520px) 100vw, (max-width: 1280px) 33vw, 20vw"
                        src={stay.imageUrl}
                      />
                    ) : (
                      <div
                        className="absolute inset-0 bg-surface-container-high"
                        aria-hidden="true"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                  </div>
                  <div className="flex justify-between items-start gap-3">
                    <div className="min-w-0">
                      <span className="font-label-caps text-limestone text-[10px] block mb-1 md:mb-2">
                        {stay.location}
                      </span>
                      <h4 className="font-body-lg font-semibold text-on-surface tracking-tight text-base lg:text-lg leading-snug">
                        {stay.name}
                      </h4>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-label-caps text-on-surface-variant block mb-1 text-[9px] md:text-[10px]">
                        FROM
                      </span>
                      <span className="font-body-sm text-tertiary text-xs md:text-sm whitespace-nowrap">
                        {stay.pricePerNight}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </FadeInSection>
      </main>
    </>
  );
}
