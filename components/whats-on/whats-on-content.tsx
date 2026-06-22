"use client";

import { useMemo, useState } from "react";
import { DirectoryPageHero } from "@/components/listing-directory/directory-page-hero";
import { NewsletterSignup } from "@/components/shared/newsletter-signup";
import {
  filterWhatsOnEvents,
  formatEventCategories,
  WHATS_ON_EVENTS,
  WHATS_ON_FILTERS,
  WHATS_ON_HERO_IMAGE,
  type WhatsOnEvent,
} from "@/lib/whats-on-data";

function EventCard({ event }: { event: WhatsOnEvent }) {
  return (
    <article className="event-card group cursor-pointer">
      <div className="relative mb-6 aspect-[3/4] overflow-hidden bg-surface-container-low">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt={event.imageAlt}
          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
          src={event.imageUrl}
        />
        <div className="glass-overlay absolute inset-0 opacity-60" />
        <div className="absolute left-6 top-6 min-w-[60px] bg-background/80 px-4 py-3 text-center backdrop-blur-md">
          <span className="block font-label-caps text-[10px] opacity-60">
            {event.month}
          </span>
          <span className="block font-headline-md text-2xl">{event.day}</span>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span
            className="material-symbols-outlined text-sm text-limestone/70"
            aria-hidden="true"
          >
            location_on
          </span>
          <span className="font-label-caps text-[10px] text-limestone">
            {event.location}
          </span>
        </div>
        <span className="font-label-caps text-[10px] tracking-widest text-limestone uppercase">
          {formatEventCategories(event.categories)}
        </span>
        <h3 className="font-headline-md text-2xl transition-colors group-hover:text-limestone">
          {event.title}
        </h3>
        <p className="font-body-sm line-clamp-3 text-on-surface-variant">
          {event.description}
        </p>
      </div>
    </article>
  );
}

export function WhatsOnContent() {
  const [activeFilter, setActiveFilter] = useState(WHATS_ON_FILTERS[0]?.id ?? "all");

  const visibleEvents = useMemo(
    () => filterWhatsOnEvents(WHATS_ON_EVENTS, activeFilter),
    [activeFilter],
  );

  return (
    <>
      <DirectoryPageHero
        title="What's On"
        subtitle="Heritage, culture, and country pursuits across the hills."
        intro="A curated calendar of events, festivals, and cultural moments across the Cotswolds."
        heroImage={WHATS_ON_HERO_IMAGE}
      >
        <div className="mt-6 flex flex-col flex-wrap gap-3 sm:flex-row">
          <button
            type="button"
            className="flex w-full items-center gap-4 rounded-full border border-outline-variant/40 px-6 py-3 transition-colors hover:border-limestone sm:w-auto sm:min-w-[240px] md:py-4"
          >
            <span className="material-symbols-outlined text-limestone">calendar_today</span>
            <span className="font-label-caps text-[10px] opacity-60 md:text-xs">
              SELECT DATE RANGE
            </span>
          </button>
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-full border border-limestone px-8 py-3 text-limestone transition-colors hover:bg-limestone hover:text-primary-container sm:w-auto md:py-4"
          >
            <span className="material-symbols-outlined text-sm">today</span>
            <span className="font-label-caps text-[10px] md:text-xs">TODAY</span>
          </button>
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-full border border-limestone px-8 py-3 text-limestone transition-colors hover:bg-limestone hover:text-primary-container sm:w-auto md:py-4"
          >
            <span className="material-symbols-outlined text-sm">weekend</span>
            <span className="font-label-caps text-[10px] md:text-xs">THIS WEEKEND</span>
          </button>
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-full border border-limestone px-8 py-3 text-limestone transition-colors hover:bg-limestone hover:text-primary-container sm:w-auto md:py-4"
          >
            <span className="material-symbols-outlined text-sm">calendar_month</span>
            <span className="font-label-caps text-[10px] md:text-xs">THIS MONTH</span>
          </button>
        </div>
      </DirectoryPageHero>

      <main className="bg-background text-on-background">
        <nav
          className="sticky top-[5.5rem] z-40 border-b border-outline/5 bg-background/95 py-5 backdrop-blur-md"
          aria-label="Filter events by category"
        >
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <div className="flex items-center gap-8 overflow-x-auto no-scrollbar md:gap-10">
              {WHATS_ON_FILTERS.map((filter) => {
                const isActive = activeFilter === filter.id;

                return (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => setActiveFilter(filter.id)}
                    className={`shrink-0 whitespace-nowrap font-label-caps text-label-caps transition-colors ${
                      isActive
                        ? "border-b-2 border-primary pb-1 text-primary"
                        : "pb-1 text-on-surface-variant hover:text-primary"
                    }`}
                  >
                    {filter.label.toUpperCase()}
                  </button>
                );
              })}
            </div>
          </div>
        </nav>

        <section className="mx-auto max-w-container-max px-margin-mobile pb-24 pt-10 md:px-margin-desktop md:pb-32 md:pt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visibleEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          {visibleEvents.length === 0 && (
            <p className="py-16 text-center font-body-sm text-on-surface-variant">
              No events match this category yet.
            </p>
          )}
        </section>

        <NewsletterSignup />
      </main>
    </>
  );
}
