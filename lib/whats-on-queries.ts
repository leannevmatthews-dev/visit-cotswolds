import { createClient } from "@supabase/supabase-js";
import type { WhatsOnCategory, WhatsOnEvent } from "@/lib/whats-on-data";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

type EventRow = {
  id: string;
  title: string;
  description: string;
  location: string;
  start_date: string;
  end_date: string | null;
  image_url: string;
  image_alt: string;
  categories: string[] | null;
  website_url: string;
  recurring: string | null;
  frequency: string | null;
};

function dateParts(iso: string) {
  const [year, month, day] = iso.slice(0, 10).split("-");
  return {
    year: Number(year),
    month: MONTHS[Number(month) - 1] ?? "",
    day: String(Number(day)),
  };
}

export function mapEventRow(row: EventRow): WhatsOnEvent {
  const start = dateParts(row.start_date);
  const event: WhatsOnEvent = {
    id: row.id,
    title: row.title,
    description: row.description,
    location: row.location,
    month: start.month,
    day: start.day,
    year: start.year,
    imageUrl: row.image_url,
    imageAlt: row.image_alt,
    categories: (row.categories ?? []) as WhatsOnCategory[],
    websiteUrl: row.website_url,
  };

  if (row.end_date) {
    const end = dateParts(row.end_date);
    const sameDay =
      end.year === start.year && end.month === start.month && end.day === start.day;
    if (!sameDay) {
      event.endMonth = end.month;
      event.endDay = end.day;
    }
  }

  if (row.recurring) event.recurring = row.recurring;
  if (row.frequency) event.frequency = row.frequency;
  return event;
}

export async function getPublishedWhatsOnEvents(): Promise<WhatsOnEvent[]> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) {
    throw new Error("Missing Supabase environment variables.");
  }

  const supabase = createClient(url, key);
  const { data, error } = await supabase
    .from("events")
    .select(
      "id, title, description, location, start_date, end_date, image_url, image_alt, categories, website_url, recurring, frequency",
    )
    .eq("published", true);

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []).map((row) => mapEventRow(row as EventRow));
}
