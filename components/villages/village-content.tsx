import Image from "next/image";
import { PlayIcon } from "@/components/icons";
import { AtAGlancePanel } from "@/components/villages/at-a-glance-panel";
import { CombineWithSection } from "@/components/villages/combine-with-section";
import { FaqSection } from "@/components/villages/faq-section";
import { GettingHereSection } from "@/components/villages/getting-here-section";
import { LocalTipsSection } from "@/components/villages/local-tips-section";
import { ParkingGuideSection } from "@/components/villages/parking-guide-section";
import { ReviewedBy } from "@/components/villages/reviewed-by";
import { SeasonalAdviceSection } from "@/components/villages/seasonal-advice-section";
import { NewsletterSignup } from "@/components/shared/newsletter-signup";
import { VillageComparisonSection } from "@/components/villages/village-comparison-section";
import { VillageImagePlaceholder } from "@/components/villages/village-image-placeholder";
import { VillageInBrief } from "@/components/villages/village-in-brief";
import { VisitorFitSection } from "@/components/villages/visitor-fit-section";
import { heroImageUrl, splitParagraphs } from "@/lib/villages/helpers";
import type { SeasonalAdvice, Village } from "@/lib/villages/types";

type VillageContentProps = {
  village: Village;
  seasons: SeasonalAdvice[];
  comparisonHeroImages?: Record<string, string>;
  combineHeroImages?: Record<string, string>;
};

function PlacePickCard({
  pick,
  fallbackHref,
}: {
  pick: Village["places_to_stay"][number];
  fallbackHref: string;
}) {
  const href = pick.external_link ?? fallbackHref;
  const meta = `${pick.category} · ${pick.location_label}`;

  return (
    <a className="village-pick group" href={href}>
      <div className="village-pick__image">
        {pick.image_url ? (
          <Image
            alt={pick.image_alt ?? ""}
            src={pick.image_url}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 20vw"
          />
        ) : (
          <VillageImagePlaceholder className="village-compare-card__placeholder h-full min-h-[120px]" />
        )}
      </div>
      <p className="village-pick__title">{pick.name}</p>
      <p className="village-pick__meta">{meta}</p>
    </a>
  );
}

export function VillageContent({
  village,
  seasons,
  comparisonHeroImages = {},
  combineHeroImages = {},
}: VillageContentProps) {
  const heroBg =
    village.hero_background_image_url?.trim() ||
    heroImageUrl(village.hero_gallery_urls);
  const ourTakeImage =
    village.our_take_image_url?.trim() ||
    village.hero_gallery_urls?.[1] ||
    heroBg ||
    village.hidden_gems_image_url;
  const overviewParagraphs = splitParagraphs(village.overview_body);
  const ourTakeParagraphs = splitParagraphs(village.our_take_body);
  const hasVideo = Boolean(village.video_embed_url);

  return (
    <>
      <section className="village-hero village-hero--tight">
        {heroBg ? (
          <Image
            alt=""
            aria-hidden
            className="village-hero__bg object-cover"
            src={heroBg}
            fill
            priority
            sizes="100vw"
          />
        ) : (
          <div
            className="village-hero__bg bg-surface-container-high"
            aria-hidden="true"
          />
        )}
        <div className="village-hero__gradient" aria-hidden="true"></div>
        <div className="village-hero__content">
          <div className="village-hero__grid">
            <div className="village-hero__copy">
              <span className="font-label-caps text-label-caps text-secondary tracking-[0.3em] uppercase">
                {village.region_label}
              </span>
              <h1 className="font-display-lg text-[48px] sm:text-[56px] md:text-[72px] lg:text-[88px] text-primary leading-none tracking-tighter">
                {village.name}
              </h1>
              <p className="font-headline-md text-secondary mt-3 md:mt-4 max-w-xl italic text-[22px] md:text-[28px]">
                &ldquo;{village.tagline_quote}&rdquo;
              </p>
            </div>
            <div className="village-hero__media">
              <div className="village-hero__video-wrap" data-village-video>
                <span className="village-hero__video-badge">Village film</span>
                <video
                  className="village-hero__video"
                  poster={heroBg ?? undefined}
                  controls
                  playsInline
                  preload="metadata"
                  aria-label={`${village.name} village film`}
                >
                  {hasVideo && <source src={village.video_embed_url!} />}
                </video>
                {!hasVideo && (
                  <div className="village-hero__video-placeholder" aria-hidden="true">
                    <div className="village-hero__play">
                      <PlayIcon className="h-8 w-8" />
                    </div>
                    <span className="village-hero__video-label">
                      Placeholder · final film coming soon
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="bg-background text-on-background pt-6 pb-16 md:pt-8 md:pb-24 lg:pt-10 lg:pb-32">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <VillageInBrief village={village} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter md:gap-16 items-start mb-24 md:mb-32">
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-block px-4 py-2 bg-surface-container-high border border-limestone/20">
                <span className="font-label-caps text-[10px] text-limestone tracking-[0.3em] uppercase">
                  Curated Overview
                </span>
              </div>
              <h2 className="font-display-lg text-[40px] md:text-[52px] text-primary leading-tight">
                {village.overview_heading}
              </h2>
              <div className="font-body-lg text-body-lg text-on-surface-variant space-y-6 max-w-2xl">
                {overviewParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <AtAGlancePanel village={village} />
          </div>

          <div className="mb-24 md:mb-32 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center bg-surface-container-low p-8 md:p-12 border border-outline-variant/20">
            <div className="lg:col-span-5 relative aspect-[4/5] overflow-hidden order-2 lg:order-1">
              {ourTakeImage ? (
                <Image
                  alt={village.our_take_image_alt ?? ""}
                  className="object-cover grayscale-[0.15] transition-transform duration-1000 hover:scale-105"
                  src={ourTakeImage}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              ) : (
                <VillageImagePlaceholder className="village-compare-card__placeholder h-full min-h-[280px]" />
              )}
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <span className="inline-block px-4 py-2 bg-surface-container border border-limestone/20 font-label-caps text-[10px] text-limestone tracking-[0.3em] uppercase">
                Visited By Us
              </span>
              <p className="font-label-caps text-[10px] text-limestone tracking-widest uppercase mt-4 mb-8">
                Last updated · {village.visited_date}
              </p>
              <h2 className="font-display-lg text-[32px] md:text-[40px] text-primary mb-6 leading-tight">
                Our Take On {village.name}
              </h2>
              <div className="village-visited space-y-5 font-body-lg text-body-lg text-on-surface-variant">
                {ourTakeParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <ReviewedBy village={village} />
            </div>
          </div>

          <VisitorFitSection village={village} />
          <VillageComparisonSection
            village={village}
            comparisonHeroImages={comparisonHeroImages}
          />
          <LocalTipsSection village={village} />

          {village.hidden_gems.length > 0 && (
            <div className="mb-24 md:mb-32 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7">
                <h2 className="font-display-lg text-[40px] md:text-[52px] text-primary mb-6 leading-tight">
                  What Most Visitors Miss In {village.name}
                </h2>
                <ul className="space-y-6 font-body-sm text-on-surface-variant">
                  {village.hidden_gems.map((gem) => (
                    <li key={gem.number} className="flex gap-4">
                      <span className="font-headline-md text-limestone shrink-0">
                        {gem.number}
                      </span>
                      <div>
                        <strong className="text-on-surface font-normal">
                          {gem.title}.
                        </strong>{" "}
                        {gem.body}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-5 relative aspect-[4/3] overflow-hidden rounded-sm">
                {village.hidden_gems_image_url ? (
                  <Image
                    alt={village.hidden_gems_image_alt ?? ""}
                    className="object-cover"
                    src={village.hidden_gems_image_url}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                ) : (
                  <VillageImagePlaceholder className="village-compare-card__placeholder h-full min-h-[240px]" />
                )}
              </div>
            </div>
          )}

          {village.curated_experiences.length > 0 && (
            <div className="mb-24 md:mb-32">
              <h2 className="font-display-lg text-[40px] md:text-[52px] text-primary mb-8 md:mb-10 text-center leading-tight">
                What To See In {village.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {village.curated_experiences.map((experience) => (
                  <div key={experience.title} className="village-experience group">
                    <div className="village-experience__image">
                      {experience.image_url ? (
                        <Image
                          alt={experience.image_alt ?? ""}
                          src={experience.image_url}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, 33vw"
                        />
                      ) : (
                        <VillageImagePlaceholder className="village-compare-card__placeholder h-full min-h-[200px]" />
                      )}
                    </div>
                    <h3 className="font-headline-md text-[22px] md:text-[26px] text-primary leading-tight mb-3">
                      {experience.title}
                    </h3>
                    <p className="font-body-sm text-on-surface-variant mb-5 leading-relaxed">
                      {experience.body}
                    </p>
                    <div className="p-5 bg-surface-container border-l border-limestone">
                      <p className="font-body-sm italic text-limestone leading-relaxed">
                        Insider tip: {experience.insider_tip}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <SeasonalAdviceSection seasons={seasons} />
          <CombineWithSection
            village={village}
            combineHeroImages={combineHeroImages}
          />

          {(village.places_to_stay.length > 0 ||
            village.places_to_eat.length > 0) && (
            <div className="mb-24 md:mb-32">
              {village.places_to_stay.length > 0 && (
                <section>
                  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 md:mb-10">
                    <h4 className="font-label-caps text-label-caps text-limestone tracking-[0.2em]">
                      Where To Stay In {village.name}
                    </h4>
                    <a
                      className="font-label-caps text-[10px] text-limestone/70 hover:text-limestone tracking-widest uppercase border-b border-limestone/30 pb-1 transition-colors shrink-0"
                      href="/places-to-stay"
                    >
                      View all stays
                    </a>
                  </div>
                  <div className="village-picks-grid grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
                    {village.places_to_stay.map((pick) => (
                      <PlacePickCard
                        key={pick.name}
                        pick={pick}
                        fallbackHref="/places-to-stay"
                      />
                    ))}
                  </div>
                </section>
              )}

              {village.places_to_eat.length > 0 && (
                <section className="mt-16 md:mt-24">
                  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 md:mb-10">
                    <h4 className="font-label-caps text-label-caps text-limestone tracking-[0.2em]">
                      Where To Eat In {village.name}
                    </h4>
                    <a
                      className="font-label-caps text-[10px] text-limestone/70 hover:text-limestone tracking-widest uppercase border-b border-limestone/30 pb-1 transition-colors shrink-0"
                      href="/places-to-eat"
                    >
                      View all dining
                    </a>
                  </div>
                  <div className="village-picks-grid grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
                    {village.places_to_eat.map((pick) => (
                      <PlacePickCard
                        key={pick.name}
                        pick={pick}
                        fallbackHref="/places-to-eat"
                      />
                    ))}
                  </div>
                </section>
              )}
            </div>
          )}

          {(village.local_businesses ?? []).length > 0 && (
            <section className="mb-24 md:mb-32">
              <h2 className="font-display-lg text-[40px] md:text-[52px] text-primary mb-8 md:mb-10 leading-tight">
                Local Independents In {village.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {(village.local_businesses ?? []).map((business) => (
                  <article key={business.name} className="village-experience group">
                    <div className="village-experience__image">
                      {business.image_url ? (
                        <Image
                          alt={business.image_alt ?? ""}
                          src={business.image_url}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, 33vw"
                        />
                      ) : (
                        <VillageImagePlaceholder className="village-compare-card__placeholder h-full min-h-[200px]" />
                      )}
                    </div>
                    <span className="font-label-caps text-[10px] text-limestone tracking-widest uppercase">
                      {business.category}
                    </span>
                    <h3 className="font-headline-md text-[22px] md:text-[26px] text-primary leading-tight mb-3">
                      {business.name}
                    </h3>
                    <p className="font-body-sm text-on-surface-variant mb-5 leading-relaxed">
                      {business.description}
                    </p>
                    {business.address && (
                      <p className="font-body-sm text-on-surface-variant mb-5 leading-relaxed">
                        {business.address}
                      </p>
                    )}
                    {business.website_url && (
                      <a
                        className="font-label-caps text-[10px] text-limestone/70 hover:text-limestone tracking-widest uppercase border-b border-limestone/30 pb-1 transition-colors"
                        href={business.website_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit website
                      </a>
                    )}
                  </article>
                ))}
              </div>
            </section>
          )}

          <div className="mb-24 md:mb-32">
            <div className="mb-10 md:mb-12 village-practical-header text-left">
              <span className="font-label-caps text-[10px] text-limestone tracking-[0.3em] uppercase block mb-3">
                Plan Your Visit
              </span>
              <h2 className="font-display-lg text-[32px] md:text-[40px] text-primary leading-tight text-left">
                Planning Your Visit To {village.name}
              </h2>
            </div>
            <ParkingGuideSection village={village} />
            <GettingHereSection village={village} />
            <div className="village-guides-grid grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="village-panel village-guide-panel border border-outline-variant/20">
                <div className="village-guide-header">
                  <span className="material-symbols-outlined">accessible</span>
                  <h3 className="font-headline-md text-[22px] md:text-[26px] text-primary leading-tight">
                    Accessibility Guide
                  </h3>
                </div>
                <div className="village-guide-tips">
                  <div className="village-guide-tip">
                    <span className="village-guide-tip__label">
                      Wheelchair Suitability
                    </span>
                    <p className="village-guide-tip__text">
                      {village.accessibility_wheelchair}
                    </p>
                  </div>
                  <div className="village-guide-tip">
                    <span className="village-guide-tip__label">
                      Pushchair Suitability
                    </span>
                    <p className="village-guide-tip__text">
                      {village.accessibility_pushchair}
                    </p>
                  </div>
                  <div className="village-guide-tip">
                    <span className="village-guide-tip__label">
                      Mobility Limitations
                    </span>
                    <p className="village-guide-tip__text">
                      {village.accessibility_mobility_notes}
                    </p>
                  </div>
                  <div className="village-guide-tip">
                    <span className="village-guide-tip__label">
                      Surface Conditions
                    </span>
                    <p className="village-guide-tip__text">
                      {village.accessibility_surface}
                    </p>
                  </div>
                </div>
              </div>
              <div className="village-panel village-guide-panel border border-outline-variant/20">
                <div className="village-guide-header">
                  <span className="material-symbols-outlined">rainy</span>
                  <h3 className="font-headline-md text-[22px] md:text-[26px] text-primary leading-tight">
                    If It Rains
                  </h3>
                </div>
                <div className="village-rain-options">
                  {village.rainy_day_options.map((option) => (
                    <div key={option.name} className="village-rain-option">
                      <span className="material-symbols-outlined village-rain-option__icon">
                        {option.icon}
                      </span>
                      <div>
                        <p className="village-rain-option__title">{option.name}</p>
                        <p className="village-rain-option__desc">{option.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <FaqSection village={village} />

          {village.nearby_villages.length > 0 && (
            <div className="mb-24 md:mb-32">
              <h2 className="font-display-lg text-[32px] md:text-[40px] text-primary leading-tight mb-10">
                Beyond {village.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {village.nearby_villages.map((nearby) => (
                  <div key={nearby.village_name} className="village-nearby">
                    {nearby.image_url ? (
                      <Image
                        alt={nearby.image_alt ?? ""}
                        src={nearby.image_url}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ) : (
                      <VillageImagePlaceholder className="village-compare-card__placeholder absolute inset-0" />
                    )}
                    <div className="village-nearby__gradient" aria-hidden="true"></div>
                    <div className="village-nearby__copy">
                      <span className="font-label-caps text-[10px] text-on-background/80 tracking-[0.3em] uppercase block mb-1">
                        {nearby.drive_time_label}
                      </span>
                      <span className="font-headline-md text-[24px] text-on-background">
                        {nearby.village_name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <NewsletterSignup />
        </div>
      </main>
    </>
  );
}
