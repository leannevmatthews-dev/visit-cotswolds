import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { WhatsOnContent } from "@/components/whats-on/whats-on-content";
import { pageMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbJsonLd, getEventListJsonLd } from "@/lib/seo/schema";
import {
  filterUpcomingWhatsOnEvents,
  filterWhatsOnEvents,
  sortWhatsOnEventsByDate,
  WHATS_ON_EVENTS,
  WHATS_ON_FILTERS,
} from "@/lib/whats-on-data";
import { getPublishedWhatsOnEvents } from "@/lib/whats-on-queries";
import "@/css/listing-directory.css";
import "@/css/village-hero.css";

export const revalidate = 600;

export const metadata: Metadata = pageMetadata({
  title: "What's On In The Cotswolds",
  description:
    "What's on in the Cotswolds: markets, festivals and seasonal events, kept up to date so you know what's actually happening.",
  path: "/whats-on",
});

export default async function WhatsOnPage() {
  let events = WHATS_ON_EVENTS;
  try {
    events = await getPublishedWhatsOnEvents();
  } catch {
    events = WHATS_ON_EVENTS;
  }

  const upcomingEvents = filterUpcomingWhatsOnEvents(events);
  const defaultVisibleEvents = sortWhatsOnEventsByDate(
    filterWhatsOnEvents(upcomingEvents, WHATS_ON_FILTERS[0]?.id ?? "all"),
  );

  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "What's On", path: "/whats-on" },
          ]),
          ...getEventListJsonLd(defaultVisibleEvents),
        ]}
      />
      <WhatsOnContent upcomingEvents={upcomingEvents} />
    </>
  );
}
