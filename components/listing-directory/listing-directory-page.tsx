"use client";

import { useMemo, useState } from "react";
import { VillageImagePlaceholder } from "@/components/villages/village-image-placeholder";
import {
  applyDirectoryFilter,
  formatPriceLevel,
  type DirectoryFilter,
  type DirectoryListing,
} from "@/lib/listing-directory";

function ListingCard({
  listing,
  showPriceLevel,
  linkExternal,
  linkLabel,
}: {
  listing: DirectoryListing;
  showPriceLevel: boolean;
  linkExternal: boolean;
  linkLabel: string;
}) {
  return (
    <article className="listing-directory-card flex flex-col gap-4">
      <div className="listing-directory-card__image relative aspect-square overflow-hidden bg-surface-container">
        {listing.imageUrl ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={listing.imageUrl}
            alt={listing.imageAlt}
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        ) : (
          <VillageImagePlaceholder className="village-compare-card__placeholder h-full min-h-0" />
        )}
      </div>

      <div className="flex flex-col gap-2">
        <div
          className={`flex items-end gap-3 ${showPriceLevel ? "justify-between" : ""}`}
        >
          <span className="font-label-caps text-[10px] tracking-widest text-limestone uppercase">
            {listing.category}
          </span>
          {showPriceLevel && (
            <span
              className="font-body-sm text-on-surface-variant tracking-widest"
              aria-label={`Price level ${listing.priceLevel} of 3`}
            >
              {formatPriceLevel(listing.priceLevel)}
            </span>
          )}
        </div>

        <h2 className="listing-directory-card__name font-display-lg text-[26px] leading-tight text-on-background md:text-[28px]">
          {listing.name}
        </h2>

        <p className="font-body-sm text-on-surface-variant line-clamp-2">
          {listing.description}
        </p>

        <a
          href={listing.websiteUrl}
          {...(linkExternal
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="listing-directory-card__link inline-flex items-center gap-2 self-start font-label-caps text-[10px] tracking-widest text-limestone uppercase transition-colors hover:text-primary"
        >
          {linkLabel}
          <span className="material-symbols-outlined text-sm" aria-hidden="true">
            {linkExternal ? "north_east" : "arrow_forward"}
          </span>
        </a>
      </div>
    </article>
  );
}

export type ListingDirectoryPageProps = {
  title: string;
  subtitle: string;
  heroImage: string;
  filterAriaLabel: string;
  filters: DirectoryFilter[];
  listings: DirectoryListing[];
  emptyMessage?: string;
  intro?: string;
  showPriceLevel?: boolean;
  linkExternal?: boolean;
  linkLabel?: string;
};

export function ListingDirectoryPage({
  title,
  subtitle,
  heroImage,
  filterAriaLabel,
  filters,
  listings,
  emptyMessage = "No listings match this filter yet.",
  intro,
  showPriceLevel = true,
  linkExternal = true,
  linkLabel = "Visit website",
}: ListingDirectoryPageProps) {
  const [activeFilter, setActiveFilter] = useState(filters[0]?.id ?? "all");

  const visibleListings = useMemo(
    () => applyDirectoryFilter(listings, activeFilter, filters),
    [listings, activeFilter, filters],
  );

  return (
    <>
      <section className="village-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=""
          aria-hidden="true"
          className="village-hero__bg"
          src={heroImage}
        />
        <div className="village-hero__gradient" aria-hidden="true" />
        <div className="village-hero__content">
          <div className="village-hero__copy">
            <h1 className="font-display-lg text-[48px] sm:text-[56px] md:text-[72px] lg:text-[88px] text-primary leading-none tracking-tighter">
              {title}
            </h1>
            <p className="font-headline-md text-secondary mt-3 md:mt-4 max-w-xl italic text-[22px] md:text-[28px]">
              {subtitle}
            </p>
            {intro && (
              <p className="font-body-sm text-on-surface-variant mt-4 max-w-xl leading-relaxed">
                {intro}
              </p>
            )}
          </div>
        </div>
      </section>

      <nav
        className="sticky top-[5.5rem] z-40 border-b border-outline/5 bg-background/95 backdrop-blur-md"
        aria-label={filterAriaLabel}
      >
        <div className="mx-auto flex max-w-container-max items-center justify-between px-margin-mobile py-5 md:px-margin-desktop">
          <div className="flex items-center gap-8 overflow-x-auto no-scrollbar md:gap-10">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.id;

              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  className={`shrink-0 font-label-caps text-label-caps whitespace-nowrap transition-colors ${
                    isActive
                      ? "border-b-2 border-primary pb-1 text-primary"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  {filter.label.toUpperCase()}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      <main className="bg-background pb-16 pt-10 text-on-background md:pb-24 md:pt-12 lg:pb-32">
        <section className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 gap-x-gutter gap-y-12 min-[520px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {visibleListings.map((listing) => (
              <ListingCard
                key={listing.id}
                listing={listing}
                showPriceLevel={showPriceLevel}
                linkExternal={linkExternal}
                linkLabel={linkLabel}
              />
            ))}
          </div>

          {visibleListings.length === 0 && (
            <p className="font-body-sm text-on-surface-variant py-16 text-center">
              {emptyMessage}
            </p>
          )}
        </section>
      </main>
    </>
  );
}
