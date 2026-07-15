#!/usr/bin/env node
/**
 * Fails if any eat/stay/things-to-do/guides listing (or guide image block)
 * uses a Wikimedia imageUrl/src without imageCredit.
 * Run: npm run check:attribution
 * Also runs automatically via the "prebuild" script.
 */
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { howFarAreTheCotswoldsFromLondonContent } from "../lib/static/how-far-are-the-cotswolds-from-london.ts";
import { cotswoldsWithoutACarContent } from "../lib/static/cotswolds-without-a-car.ts";
import { whereAreTheCotswoldsContent } from "../lib/static/where-are-the-cotswolds.ts";
import { PLACES_TO_EAT_LISTINGS } from "../lib/places-to-eat-data.ts";
import { PLACES_TO_STAY_LISTINGS } from "../lib/places-to-stay-data.ts";
import { THINGS_TO_DO_LISTINGS } from "../lib/things-to-do-data.ts";
import {
  findMissingWikimediaCreditLabels,
  findMissingWikimediaCredits,
} from "../lib/utils/check-image-attribution.ts";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const sources = [
  { label: "places-to-eat-data.ts", listings: PLACES_TO_EAT_LISTINGS },
  { label: "places-to-stay-data.ts", listings: PLACES_TO_STAY_LISTINGS },
  { label: "things-to-do-data.ts", listings: THINGS_TO_DO_LISTINGS },
] as const;

let totalMissing = 0;

for (const { label, listings } of sources) {
  const missing = findMissingWikimediaCredits(listings);
  if (missing.length === 0) {
    console.log(`✓ ${label}: no missing Wikimedia credits (${listings.length} listings)`);
    continue;
  }
  totalMissing += missing.length;
  console.error(`✗ ${label}: ${missing.length} Wikimedia image(s) missing imageCredit:`);
  for (const name of missing) {
    console.error(`  - ${name}`);
  }
}

/** Scan guides-data.ts listing objects (avoids importing Next `@/` path aliases). */
function findMissingGuideCardCredits(filePath: string): string[] {
  const source = readFileSync(filePath, "utf8");
  const listingsMatch = source.match(
    /export const GUIDES_LISTINGS[^=]*=\s*\[([\s\S]*?)\];/,
  );
  if (!listingsMatch) {
    throw new Error(`Could not find GUIDES_LISTINGS in ${filePath}`);
  }
  const body = listingsMatch[1];
  const objects = [...body.matchAll(/\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}/g)].map(
    (m) => m[1],
  );
  const missing: string[] = [];
  for (const obj of objects) {
    const urlMatch = obj.match(/imageUrl:\s*(?:["'`]([^"'`]+)["'`]|[\s\S]*?["'`]([^"'`]*wikimedia\.org[^"'`]*)["'`])/);
    const imageUrl = urlMatch?.[1] ?? urlMatch?.[2];
    if (!imageUrl?.includes("wikimedia.org")) continue;
    const hasCredit = /\bimageCredit\s*:/.test(obj);
    if (hasCredit) continue;
    const nameMatch = obj.match(/name:\s*[^\n]*?\.title/) ?? obj.match(/name:\s*["'`]([^"'`]+)["'`]/);
    missing.push(nameMatch?.[1] ?? imageUrl);
  }
  return missing;
}

const missingGuideCards = findMissingGuideCardCredits(
  join(root, "lib/guides-data.ts"),
);
if (missingGuideCards.length === 0) {
  console.log("✓ guides-data.ts (listings): no missing Wikimedia credits");
} else {
  totalMissing += missingGuideCards.length;
  console.error(
    `✗ guides-data.ts (listings): ${missingGuideCards.length} Wikimedia image(s) missing imageCredit:`,
  );
  for (const label of missingGuideCards) {
    console.error(`  - ${label}`);
  }
}

const guideContentBySlug = {
  "where-are-the-cotswolds": whereAreTheCotswoldsContent,
  "how-far-are-the-cotswolds-from-london": howFarAreTheCotswoldsFromLondonContent,
  "cotswolds-without-a-car": cotswoldsWithoutACarContent,
} as const;

const guideImageBlocks = Object.entries(guideContentBySlug).flatMap(
  ([slug, blocks]) =>
    blocks
      .filter(
        (b): b is Extract<(typeof blocks)[number], { type: "image" }> =>
          b.type === "image",
      )
      .map((b) => ({
        label: `${slug} / ${b.id}`,
        imageUrl: b.src,
        imageCredit: b.imageCredit,
      })),
);

const missingGuideImages = findMissingWikimediaCreditLabels(guideImageBlocks);
if (missingGuideImages.length === 0) {
  console.log(
    `✓ guide image blocks: no missing Wikimedia credits (${guideImageBlocks.length} blocks)`,
  );
} else {
  totalMissing += missingGuideImages.length;
  console.error(
    `✗ guide image blocks: ${missingGuideImages.length} Wikimedia image(s) missing imageCredit:`,
  );
  for (const label of missingGuideImages) {
    console.error(`  - ${label}`);
  }
}

if (totalMissing > 0) {
  console.error(
    `\nFound ${totalMissing} image(s) with Wikimedia sources but no imageCredit. Add imageCredit before deploying.`,
  );
  process.exit(1);
}

console.log("\nAll Wikimedia listing images have imageCredit.");
