"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { DirectoryPageHero } from "@/components/listing-directory/directory-page-hero";
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
  const linkProps = linkExternal
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <article className="listing-directory-card flex flex-col gap-4">
      <a
        href={listing.websiteUrl}
        {...linkProps}
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

        {"location" in listing && listing.location ? (
          <span
            className="listing-directory-card__location"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-label-caps)",
              color: "var(--color-on-surface-variant)",
              letterSpacing: "var(--text-label-caps--letter-spacing)",
              textTransform: "uppercase",
            }}
          >
            {listing.location}
          </span>
        ) : null}

        <h2 className="listing-directory-card__name font-display-lg text-[26px] leading-tight text-on-background md:text-[28px]">
          {listing.name}
        </h2>

        <p className="font-body-sm text-on-surface-variant">
          {listing.description}
        </p>

        <a
          href={listing.websiteUrl}
          {...linkProps}
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
      <DirectoryPageHero
        title={title}
        subtitle={subtitle}
        heroImage={heroImage}
        intro={intro}
      />

      <nav
        className="listing-directory-filter-nav sticky top-[5.5rem] z-40 border-b border-outline/5 bg-background/95 backdrop-blur-md"
        aria-label={filterAriaLabel}
      >
        <div className="listing-directory-filter-nav__inner mx-auto flex max-w-container-max items-center justify-between px-margin-mobile xl:px-margin-desktop xl:py-5">
          <div className="listing-directory-filter-nav__filters flex items-center overflow-x-auto no-scrollbar xl:gap-10">
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
