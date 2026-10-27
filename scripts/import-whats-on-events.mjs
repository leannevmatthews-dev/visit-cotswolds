// One-off import of WHATS_ON_EVENTS into the Supabase events table.
// Uses SUPABASE_SERVICE_ROLE_KEY from .env.local. The key is never printed.
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createClient } from "@supabase/supabase-js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
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

function readEnv(name) {
  const envText = fs.readFileSync(path.join(ROOT, ".env.local"), "utf8");
  return (envText.match(new RegExp(`^${name}=(.*)$`, "m")) || [])[1]
    ?.trim()
    .replace(/^["']|["']$/g, "");
}

function isoDate(month, day, year) {
  const monthIndex = MONTHS.indexOf(month);
  const dayNumber = Number(day);
  if (monthIndex < 0 || !Number.isFinite(dayNumber)) {
    throw new Error(`Bad date ${month} ${day} ${year}`);
  }
  return `${year}-${String(monthIndex + 1).padStart(2, "0")}-${String(dayNumber).padStart(2, "0")}`;
}

function eventDates(event) {
  const startDate = isoDate(event.month, event.day, event.year);
  if (!event.endDay && !event.endMonth) {
    return { start_date: startDate, end_date: null };
  }

  const endMonth = event.endMonth || event.month;
  const endDay = event.endDay || event.day;
  const startIndex = MONTHS.indexOf(event.month);
  const endIndex = MONTHS.indexOf(endMonth);
  const endYear = endIndex < startIndex ? event.year + 1 : event.year;
  return { start_date: startDate, end_date: isoDate(endMonth, endDay, endYear) };
}

function loadEvents() {
  const dump = spawnSync(
    process.execPath,
    [
      "--experimental-strip-types",
      "--input-type=module",
      "-e",
      `import { WHATS_ON_EVENTS } from "./lib/whats-on-data.ts"; process.stdout.write(JSON.stringify(WHATS_ON_EVENTS));`,
    ],
    { cwd: ROOT, encoding: "utf8" },
  );

  if (dump.status !== 0) {
    const message = (dump.stderr || dump.stdout || "Could not read WHATS_ON_EVENTS").trim();
    throw new Error(message);
  }

  return JSON.parse(dump.stdout);
}

const url = readEnv("NEXT_PUBLIC_SUPABASE_URL");
const key = readEnv("SUPABASE_SERVICE_ROLE_KEY");
if (!url || !key) {
  console.log("SUPABASE_SERVICE_ROLE_KEY or NEXT_PUBLIC_SUPABASE_URL missing from .env.local");
  process.exit(1);
}

const events = loadEvents();
const rows = events.map((event) => {
  const dates = eventDates(event);
  return {
    id: event.id,
    title: event.title,
    description: event.description,
    location: event.location,
    start_date: dates.start_date,
    end_date: dates.end_date,
    image_url: event.imageUrl,
    image_alt: event.imageAlt,
    categories: event.categories,
    website_url: event.websiteUrl,
    recurring: event.recurring ?? null,
    frequency: event.frequency ?? null,
    published: true,
  };
});

const supabase = createClient(url, key);
const { error } = await supabase.from("events").upsert(rows, { onConflict: "id" });
if (error) {
  console.log(`Import failed: ${error.message}`);
  process.exit(1);
}

console.log(`imported ${rows.length} events`);
