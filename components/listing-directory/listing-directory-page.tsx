"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { DirectoryFilterNav } from "@/components/listing-directory/directory-filter-nav";
import { DirectoryPageHero } from "@/components/listing-directory/directory-page-hero";
import { VillageImagePlaceholder } from "@/components/villages/village-image-placeholder";
import {
  applyDirectoryFilter,
  formatPriceLevel,
  type DirectoryFilter,
  type DirectoryListing,
} from "@/lib/listing-directory";

function ListingCardDescription({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);
  const [overflows, setOverflows] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el || expanded) {
      return;
    }

    const update = () => {
      setOverflows(el.scrollHeight > el.offsetHeight + 1);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [text, expanded]);

  return (
    <>
      <div className="relative">
        <p
          ref={textRef}
          className={`font-body-sm text-on-surface-variant${expanded ? "" : " line-clamp-6"}`}
        >
          {text}
        </p>
        {!expanded && overflows ? (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-b from-transparent to-background"
          />
        ) : null}
      </div>
      {overflows ? (
        <button
          type="button"
          aria-expanded={expanded}
          className="listing-directory-card__link inline-flex items-center gap-2 self-start font-label-caps text-[10px] tracking-widest text-limestone uppercase transition-colors group-hover:text-primary"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            setExpanded((value) => !value);
          }}
        >
          {expanded ? "Read less" : "Read more"}
          <span className="material-symbols-outlined text-sm" aria-hidden="true">
            {expanded ? "expand_less" : "expand_more"}
          </span>
        </button>
      ) : null}
    </>
  );
}

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
  const titleId = `listing-card-title-${listing.id}`;

  return (
    <article className="listing-directory-card group flex cursor-pointer flex-col gap-4">
      <div className="relative">
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
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                unoptimized={true}
                priority={false}
              />
            </div>
          ) : (
            <VillageImagePlaceholder className="village-compare-card__placeholder h-full min-h-0" />
          )}
        </a>
        {listing.imageCredit ? (
          <a
            href={listing.imageCredit.url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-2 right-2 z-10 max-w-[min(100%,12rem)] rounded bg-black/55 px-1.5 py-0.5 font-body-sm text-[9px] leading-snug text-white/75 underline-offset-2 transition-colors hover:bg-black/70 hover:text-white hover:underline"
          >
            {listing.imageCredit.text}
          </a>
        ) : null}
      </div>

      <a
        href={listing.websiteUrl}
        {...linkProps}
        aria-labelledby={titleId}
        className="flex flex-col gap-2 rounded-sm outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-limestone"
      >
        <div
          className={`flex items-end gap-3 ${showPriceLevel ? "justify-between" : ""}`}
        >
          <span className="font-label-caps text-[10px] tracking-widest text-limestone uppercase">
            {listing.category}
          </span>
          {showPriceLevel && listing.priceLevel != null && (
            <span
              className="font-body-sm text-on-surface-variant tracking-widest"
              aria-label={`Price level ${listing.priceLevel} of 3`}
            >
              {formatPriceLevel(listing.priceLevel)}
            </span>
          )}
        </div>

        {"location" in listing &&
        typeof listing.location === "string" &&
        listing.location ? (
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

        <h2
          id={titleId}
          className="listing-directory-card__name font-display-lg text-[26px] leading-tight text-on-background md:text-[28px]"
        >
          {listing.name}
        </h2>

        <ListingCardDescription text={listing.description} />

        <span className="listing-directory-card__link inline-flex items-center gap-2 self-start font-label-caps text-[10px] tracking-widest text-limestone uppercase transition-colors group-hover:text-primary">
          {linkLabel}
          <span className="material-symbols-outlined text-sm" aria-hidden="true">
            {linkExternal ? "north_east" : "arrow_forward"}
          </span>
        </span>
      </a>
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

      <DirectoryFilterNav
        ariaLabel={filterAriaLabel}
        filters={filters}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

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
