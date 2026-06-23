"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { DayPicker, type DateRange } from "react-day-picker";
import "react-day-picker/style.css";
import "@/css/whats-on-day-picker.css";
import { DirectoryPageHero } from "@/components/listing-directory/directory-page-hero";
import { NewsletterSignup } from "@/components/shared/newsletter-signup";
import {
  filterWhatsOnEvents,
  filterWhatsOnEventsByDate,
  filterWhatsOnEventsByDateRange,
  filterUpcomingWhatsOnEvents,
  sortWhatsOnEventsByDate,
  formatEventCategories,
  WHATS_ON_EVENTS,
  WHATS_ON_FILTERS,
  WHATS_ON_HERO_IMAGE,
  type WhatsOnDateFilter,
  type WhatsOnEvent,
} from "@/lib/whats-on-data";

const DATE_FILTER_BUTTON_CLASS =
  "flex w-full items-center justify-center gap-2 rounded-full border border-limestone px-8 py-3 font-label-caps text-[10px] transition-colors sm:w-auto md:py-4 md:text-xs";

function dateFilterButtonStateClass(isActive: boolean): string {
  return isActive
    ? "bg-limestone text-primary-container"
    : "text-limestone hover:bg-limestone hover:text-primary-container";
}


function formatDateRangeLabel(start: Date, end: Date): string {
  const dayMonth = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
  });

  if (start.getFullYear() === end.getFullYear()) {
    return `${dayMonth.format(start)} - ${dayMonth.format(end)}`;
  }

  const full = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return `${full.format(start)} - ${full.format(end)}`;
}

function isCompleteDateRange(
  range: DateRange | undefined,
): range is { from: Date; to: Date } {
  return Boolean(range?.from && range?.to);
}

function EventCard({ event }: { event: WhatsOnEvent }) {
  return (
    <article className="event-card group cursor-pointer">
      <div className="relative mb-6 aspect-square overflow-hidden bg-surface-container-low">
        <Image
          alt={event.imageAlt}
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
          src={event.imageUrl}
          unoptimized
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
  const [activeDateFilter, setActiveDateFilter] = useState<WhatsOnDateFilter | null>(
    null,
  );
  const [appliedDateRange, setAppliedDateRange] = useState<DateRange | undefined>();
  const [calendarDateRange, setCalendarDateRange] = useState<DateRange | undefined>();
  const [isDateRangeOpen, setIsDateRangeOpen] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const datePickerAnchorRef = useRef<HTMLDivElement>(null);
  const datePickerPopupRef = useRef<HTMLDivElement>(null);

  const isPartialRangeSelection =
    isDateRangeOpen && Boolean(calendarDateRange?.from && !calendarDateRange?.to);

  const hasDateRange =
    !isPartialRangeSelection && isCompleteDateRange(appliedDateRange);

  const visibleEvents = useMemo(() => {
    const upcomingEvents = filterUpcomingWhatsOnEvents(WHATS_ON_EVENTS);
    const categoryFiltered = filterWhatsOnEvents(upcomingEvents, activeFilter);

    let filtered: WhatsOnEvent[];

    if (hasDateRange && isCompleteDateRange(appliedDateRange)) {
      filtered = filterWhatsOnEventsByDateRange(categoryFiltered, {
        start: appliedDateRange.from,
        end: appliedDateRange.to,
      });
    } else if (activeDateFilter) {
      filtered = filterWhatsOnEventsByDate(categoryFiltered, activeDateFilter);
    } else {
      filtered = categoryFiltered;
    }

    return sortWhatsOnEventsByDate(filtered);
  }, [activeFilter, activeDateFilter, appliedDateRange, hasDateRange]);

  useEffect(() => {
    if (!isDateRangeOpen || !datePickerAnchorRef.current) {
      return;
    }

    function updatePopupPosition() {
      const anchor = datePickerAnchorRef.current;
      if (!anchor) {
        return;
      }

      const rect = anchor.getBoundingClientRect();
      setPopupPosition({
        top: rect.bottom + 8,
        left: rect.left,
      });
    }

    updatePopupPosition();
    window.addEventListener("resize", updatePopupPosition);
    window.addEventListener("scroll", updatePopupPosition, true);

    return () => {
      window.removeEventListener("resize", updatePopupPosition);
      window.removeEventListener("scroll", updatePopupPosition, true);
    };
  }, [isDateRangeOpen]);

  useEffect(() => {
    if (!isDateRangeOpen) {
      return;
    }

    function handlePointerDown(event: MouseEvent) {
      const target = event.target as Node;

      if (
        !datePickerAnchorRef.current?.contains(target) &&
        !datePickerPopupRef.current?.contains(target)
      ) {
        setIsDateRangeOpen(false);
        setCalendarDateRange(appliedDateRange);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [appliedDateRange, isDateRangeOpen]);

  function clearDateRange() {
    setAppliedDateRange(undefined);
    setCalendarDateRange(undefined);
    setIsDateRangeOpen(false);
  }

  function handleRangeSelect(range: DateRange | undefined) {
    setCalendarDateRange(range);

    if (isCompleteDateRange(range)) {
      setAppliedDateRange(range);
      setActiveDateFilter(null);
      setIsDateRangeOpen(false);
    }
  }

  function toggleDateFilter(dateFilter: WhatsOnDateFilter) {
    clearDateRange();
    setActiveDateFilter((current) => (current === dateFilter ? null : dateFilter));
  }

  function toggleDateRangePicker() {
    setIsDateRangeOpen((current) => {
      if (!current) {
        setCalendarDateRange(appliedDateRange);
      }

      return !current;
    });
  }

  return (
    <>
      <DirectoryPageHero
        title="What's On"
        subtitle="The best of what's on in the Cotswolds."
        intro="Handpicked events across the Cotswolds. Updated monthly."
        heroImage={WHATS_ON_HERO_IMAGE}
      >
        <div className="mt-6 flex flex-col gap-3">
          <div className="flex flex-col flex-wrap gap-3 sm:flex-row">
            <div className="relative w-full sm:w-auto" ref={datePickerAnchorRef}>
              <button
                type="button"
                onClick={toggleDateRangePicker}
                className={`${DATE_FILTER_BUTTON_CLASS} ${dateFilterButtonStateClass(hasDateRange)}`}
              >
                <span className="material-symbols-outlined text-sm">calendar_today</span>
                <span>
                  {hasDateRange && isCompleteDateRange(appliedDateRange)
                    ? formatDateRangeLabel(
                        appliedDateRange.from,
                        appliedDateRange.to,
                      )
                    : "SELECT DATES"}
                </span>
              </button>

              {isDateRangeOpen &&
                createPortal(
                  <div
                    ref={datePickerPopupRef}
                    className="whats-on-day-picker-popup fixed w-max rounded border border-limestone/20 bg-surface-container-low p-4 shadow-lg"
                    style={{
                      top: popupPosition.top,
                      left: popupPosition.left,
                    }}
                  >
                    <DayPicker
                      mode="range"
                      min={1}
                      selected={calendarDateRange}
                      onSelect={handleRangeSelect}
                      className="whats-on-day-picker"
                    />
                    {(hasDateRange || calendarDateRange?.from) && (
                      <button
                        type="button"
                        onClick={clearDateRange}
                        className={`${DATE_FILTER_BUTTON_CLASS} mt-3 w-full ${dateFilterButtonStateClass(false)}`}
                      >
                        CLEAR
                      </button>
                    )}
                  </div>,
                  document.body,
                )}
            </div>
            <button
              type="button"
              onClick={() => toggleDateFilter("today")}
              className="flex w-full items-center justify-center gap-2 rounded-full border border-limestone px-8 py-3 text-limestone transition-colors hover:bg-limestone hover:text-primary-container sm:w-auto md:py-4"
            >
              <span className="material-symbols-outlined text-sm">today</span>
              <span className="font-label-caps text-[10px] md:text-xs">TODAY</span>
            </button>
            <button
              type="button"
              onClick={() => toggleDateFilter("weekend")}
              className="flex w-full items-center justify-center gap-2 rounded-full border border-limestone px-8 py-3 text-limestone transition-colors hover:bg-limestone hover:text-primary-container sm:w-auto md:py-4"
            >
              <span className="material-symbols-outlined text-sm">weekend</span>
              <span className="font-label-caps text-[10px] md:text-xs">THIS WEEKEND</span>
            </button>
            <button
              type="button"
              onClick={() => toggleDateFilter("month")}
              className="flex w-full items-center justify-center gap-2 rounded-full border border-limestone px-8 py-3 text-limestone transition-colors hover:bg-limestone hover:text-primary-container sm:w-auto md:py-4"
            >
              <span className="material-symbols-outlined text-sm">calendar_month</span>
              <span className="font-label-caps text-[10px] md:text-xs">THIS MONTH</span>
            </button>
          </div>
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
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
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
