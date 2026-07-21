import {
  COTSWOLDS_REGIONS,
  type CrowdLevel,
  type CrowdRatingLevel,
  type CotswoldsRegion,
  type FoodRatingLevel,
  type RatingLevel,
  type TimeNeeded,
  type Village,
} from "@/lib/villages/types";
import { emptyParkingGuide } from "@/lib/villages/form-defaults";
import { normalizeCombineWithTrip } from "@/lib/villages/helpers";
import type {
  FormFieldErrors,
  VillageFormState,
  VillageInsertPayload,
} from "@/lib/villages/form-types";

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const SCORE_MIN = 1;
const SCORE_MAX = 5;

export function slugifyName(name: string): string {
  return name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function emptyToNull(value: string): string | null {
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

function clampScore(value: number): number {
  if (Number.isNaN(value)) return SCORE_MIN;
  return Math.min(SCORE_MAX, Math.max(SCORE_MIN, Math.round(value)));
}

export function validateVillageForm(
  state: VillageFormState,
): { ok: true } | { ok: false; errors: FormFieldErrors } {
  const errors: FormFieldErrors = {};

  if (!state.name.trim()) {
    errors.name = "Name is required.";
  }

  if (!state.slug.trim()) {
    errors.slug = "Slug is required.";
  } else if (!SLUG_PATTERN.test(state.slug.trim())) {
    errors.slug =
      "Slug must use lowercase letters, numbers, and hyphens only (e.g. bourton-on-the-water).";
  }

  if (
    !state.cotswolds_region ||
    !COTSWOLDS_REGIONS.includes(state.cotswolds_region)
  ) {
    errors.cotswolds_region = "Select a Cotswolds region.";
  }

  const scoreFields = [
    "score_first_time_visitor",
    "score_couples",
    "score_families",
    "score_food_drink",
    "score_accessibility",
    "score_hidden_gem_factor",
  ] as const;

  for (const field of scoreFields) {
    const value = state[field];
    if (value < SCORE_MIN || value > SCORE_MAX) {
      errors[field] = `Score must be between ${SCORE_MIN} and ${SCORE_MAX}.`;
    }
  }

  if (Object.keys(errors).length > 0) {
    errors.form = "Please fix the errors below before saving.";
    return { ok: false, errors };
  }

  return { ok: true };
}

export function toInsertPayload(state: VillageFormState): VillageInsertPayload {
  const heroGalleryUrls = [
    (state.hero_background_image_url ?? "").trim(),
    (state.our_take_image_url ?? "").trim(),
  ].filter(Boolean);

  return {
    name: (state.name ?? "").trim(),
    slug: (state.slug ?? "").trim(),
    region_label: (state.region_label ?? "").trim(),
    cotswolds_region: state.cotswolds_region as CotswoldsRegion,
    tagline_quote: (state.tagline_quote ?? "").trim(),
    brief_summary: (state.brief_summary ?? "").trim(),
    brief_best_tip: (state.brief_best_tip ?? "").trim(),
    overview_heading: (state.overview_heading ?? "").trim(),
    overview_body: (state.overview_body ?? "").trim(),
    time_needed: (state.time_needed ?? "").trim(),
    dog_friendly: (state.dog_friendly ?? "").trim(),
    best_season: (state.best_season ?? "").trim(),
    score_first_time_visitor: clampScore(state.score_first_time_visitor),
    score_couples: clampScore(state.score_couples),
    score_families: clampScore(state.score_families),
    score_food_drink: clampScore(state.score_food_drink),
    score_accessibility: clampScore(state.score_accessibility),
    score_hidden_gem_factor: clampScore(state.score_hidden_gem_factor),
    our_take_body: (state.our_take_body ?? "").trim(),
    visited_date: (state.visited_date ?? "").trim(),
    reviewed_by_name: (state.reviewed_by_name ?? "").trim(),
    reviewed_by_credential: (state.reviewed_by_credential ?? "").trim(),
    crowd_intelligence_note: (state.crowd_intelligence_note ?? "").trim(),
    crowd_times: state.crowd_times.map((row) => ({
      time_range: (row.time_range ?? "").trim(),
      level: ((row.level ?? "").trim() as CrowdLevel),
    })),
    perfect_for: state.perfect_for.map((item) => (item ?? "").trim()).filter(Boolean),
    maybe_skip_if: state.maybe_skip_if.map((item) => (item ?? "").trim()).filter(Boolean),
    own_beauty: emptyToNull(state.own_beauty ?? "") as Village["own_beauty"],
    own_crowds: emptyToNull(state.own_crowds ?? "") as Village["own_crowds"],
    own_food: emptyToNull(state.own_food ?? "") as Village["own_food"],
    own_time_needed: emptyToNull(
      state.own_time_needed ?? "",
    ) as Village["own_time_needed"],
    comparison_village_ids: state.comparison_village_ids.filter(
      (id) => Number.isFinite(id) && id > 0,
    ),
    // Preserve packed stats until the column is dropped (Step 6+).
    comparison_stats: state.comparison_stats.map((row) => ({
      village_name: (row.village_name ?? "").trim(),
      is_current: row.is_current,
      beauty: ((row.beauty ?? "").trim() as RatingLevel),
      crowds: ((row.crowds ?? "").trim() as CrowdRatingLevel),
      food: ((row.food ?? "").trim() as FoodRatingLevel),
      time_needed: ((row.time_needed ?? "").trim() as TimeNeeded),
      image_url: emptyToNull(row.image_url ?? ""),
      image_alt: emptyToNull(row.image_alt ?? ""),
    })),
    alternative_villages: state.alternative_villages.map((row) => ({
      icon: (row.icon ?? "").trim(),
      need: (row.need ?? "").trim(),
      suggested_villages: row.suggested_villages
        .map((name) => (name ?? "").trim())
        .filter(Boolean),
    })),
    local_tips: state.local_tips.map((tip) => ({
      icon: (tip.icon ?? "").trim(),
      source: tip.source?.trim() || undefined,
      tip_text: (tip.tip_text ?? "").trim(),
    })),
    hidden_gems: state.hidden_gems.map((gem) => ({
      number: (gem.number ?? "").trim(),
      title: (gem.title ?? "").trim(),
      body: (gem.body ?? "").trim(),
    })),
    curated_experiences: state.things_to_do.map((item) => ({
      title: (item.title ?? "").trim(),
      body: (item.body ?? "").trim(),
      insider_tip: (item.insider_tip ?? "").trim(),
      image_url: emptyToNull(item.image_url ?? ""),
      image_alt: emptyToNull(item.image_alt ?? ""),
      external_link: emptyToNull(item.external_link ?? ""),
    })),
    combine_with: state.combine_with.map((item) => ({
      title: (item.title ?? "").trim(),
      body: (item.body ?? "").trim(),
      duration_label: (item.duration_label ?? "").trim(),
      left_image_url: (item.left_image_url ?? "").trim(),
      right_image_url: (item.right_image_url ?? "").trim(),
      left_image_alt: item.left_image_alt?.trim() ?? "",
      right_image_alt: item.right_image_alt?.trim() ?? "",
    })),
    places_to_stay: state.places_to_stay.map((place) => ({
      name: (place.name ?? "").trim(),
      category: (place.category ?? "").trim(),
      location_label: (place.location_label ?? "").trim(),
      image_url: emptyToNull(place.image_url ?? ""),
      image_alt: emptyToNull(place.image_alt ?? ""),
      external_link: emptyToNull(place.external_link ?? ""),
    })),
    places_to_eat: state.places_to_eat.map((place) => ({
      name: (place.name ?? "").trim(),
      category: (place.category ?? "").trim(),
      location_label: (place.location_label ?? "").trim(),
      image_url: emptyToNull(place.image_url ?? ""),
      image_alt: emptyToNull(place.image_alt ?? ""),
      external_link: emptyToNull(place.external_link ?? ""),
    })),
    local_businesses: state.local_businesses.map((business) => ({
      name: (business.name ?? "").trim(),
      category: (business.category ?? "").trim(),
      description: (business.description ?? "").trim(),
      address: emptyToNull(business.address ?? ""),
      website_url: emptyToNull(business.website_url ?? ""),
      image_url: emptyToNull(business.image_url ?? ""),
      image_alt: emptyToNull(business.image_alt ?? ""),
    })),
    parking_guide: {
      main_location: (state.parking_guide.main_location ?? "").trim(),
      main_detail: (state.parking_guide.main_detail ?? "").trim(),
      cost: (state.parking_guide.cost ?? "").trim(),
      best_time: (state.parking_guide.best_time ?? "").trim(),
      on_street_note: (state.parking_guide.on_street_note ?? "").trim(),
      overflow_note: (state.parking_guide.overflow_note ?? "").trim(),
      map_url: emptyToNull(state.parking_guide.map_url ?? ""),
      map_query: emptyToNull(state.parking_guide.map_query ?? ""),
      map_override_url: emptyToNull(state.parking_guide.map_override_url ?? ""),
    },
    getting_here_rail: (state.getting_here_rail ?? "").trim(),
    getting_here_parking: (state.getting_here_parking ?? "").trim(),
    accessibility_wheelchair: (state.accessibility_wheelchair ?? "").trim(),
    accessibility_pushchair: (state.accessibility_pushchair ?? "").trim(),
    accessibility_mobility_notes: (state.accessibility_mobility_notes ?? "").trim(),
    accessibility_surface: (state.accessibility_surface ?? "").trim(),
    rainy_day_options: state.rainy_day_options.map((item) => ({
      icon: (item.icon ?? "").trim(),
      name: (item.name ?? "").trim(),
      body: (item.body ?? "").trim(),
    })),
    faq_items: state.faq_items.map((item) => ({
      question: (item.question ?? "").trim(),
      answer: (item.answer ?? "").trim(),
    })),
    nearby_villages: state.nearby_villages.map((item) => ({
      village_name: (item.village_name ?? "").trim(),
      drive_time_label: (item.drive_time_label ?? "").trim(),
      image_url: emptyToNull(item.image_url ?? ""),
      image_alt: emptyToNull(item.image_alt ?? ""),
    })),
    meta_title: emptyToNull(state.meta_title),
    meta_description: emptyToNull(state.meta_description),
    alt_text: emptyToNull(state.alt_text),
    video_embed_url: emptyToNull(state.video_embed_url),
    hero_background_image_url: emptyToNull(state.hero_background_image_url),
    overview_image_url: emptyToNull(state.overview_image_url),
    our_take_image_url: emptyToNull(state.our_take_image_url),
    hero_gallery_urls: heroGalleryUrls.length > 0 ? heroGalleryUrls : null,
    hidden_gems_image_url: emptyToNull(state.hidden_gems_image_url),
    our_take_image_alt: emptyToNull(state.our_take_image_alt),
    hidden_gems_image_alt: emptyToNull(state.hidden_gems_image_alt),
  } satisfies VillageInsertPayload;
}

export function toDatabaseRow(payload: VillageInsertPayload) {
  const {
    hero_gallery_urls,
    video_embed_url,
    hidden_gems_image_url,
    meta_title,
    meta_description,
    alt_text,
    ...rest
  } = payload;

  return {
    ...rest,
    video_embed_url,
    hero_gallery_urls,
    hidden_gems_image_url,
    meta_title,
    meta_description,
    alt_text,
    comparison_stats:
      payload.comparison_stats && payload.comparison_stats.length > 0
        ? payload.comparison_stats
        : null,
  };
}

function nullToEmpty(value: string | null | undefined): string {
  return value ?? "";
}

export function villageToFormState(village: Village): VillageFormState {
  return {
    name: village.name,
    slug: village.slug,
    region_label: village.region_label,
    cotswolds_region: village.cotswolds_region ?? "",
    tagline_quote: village.tagline_quote,
    brief_summary: village.brief_summary,
    brief_best_tip: village.brief_best_tip,
    overview_heading: village.overview_heading,
    overview_body: village.overview_body,
    time_needed: village.time_needed,
    dog_friendly: village.dog_friendly,
    best_season: village.best_season,
    score_first_time_visitor: village.score_first_time_visitor,
    score_couples: village.score_couples,
    score_families: village.score_families,
    score_food_drink: village.score_food_drink,
    score_accessibility: village.score_accessibility,
    score_hidden_gem_factor: village.score_hidden_gem_factor,
    our_take_body: village.our_take_body,
    visited_date: village.visited_date,
    reviewed_by_name: village.reviewed_by_name,
    reviewed_by_credential: village.reviewed_by_credential,
    crowd_intelligence_note: village.crowd_intelligence_note,
    crowd_times: village.crowd_times ?? [],
    perfect_for: village.perfect_for ?? [],
    maybe_skip_if: village.maybe_skip_if ?? [],
    own_beauty: village.own_beauty ?? "",
    own_crowds: village.own_crowds ?? "",
    own_food: village.own_food ?? "",
    own_time_needed: village.own_time_needed ?? "",
    comparison_village_ids: village.comparison_village_ids ?? [],
    comparison_stats: (village.comparison_stats ?? []).map((row) => ({
      ...row,
      image_url: nullToEmpty(row.image_url),
      image_alt: nullToEmpty(row.image_alt),
    })),
    alternative_villages: village.alternative_villages ?? [],
    local_tips: village.local_tips ?? [],
    hidden_gems: village.hidden_gems ?? [],
    things_to_do: (village.things_to_do ?? []).map((item) => ({
      ...item,
      image_url: nullToEmpty(item.image_url),
      image_alt: nullToEmpty(item.image_alt),
      external_link: nullToEmpty(item.external_link ?? null),
    })),
    combine_with: (village.combine_with ?? []).map(normalizeCombineWithTrip),
    places_to_stay: (village.places_to_stay ?? []).map((place) => ({
      ...place,
      image_url: nullToEmpty(place.image_url),
      image_alt: nullToEmpty(place.image_alt),
      external_link: nullToEmpty(place.external_link),
    })),
    places_to_eat: (village.places_to_eat ?? []).map((place) => ({
      ...place,
      image_url: nullToEmpty(place.image_url),
      image_alt: nullToEmpty(place.image_alt),
      external_link: nullToEmpty(place.external_link),
    })),
    local_businesses: (village.local_businesses ?? []).map((business) => ({
      ...business,
      address: nullToEmpty(business.address),
      website_url: nullToEmpty(business.website_url),
      image_url: nullToEmpty(business.image_url),
      image_alt: nullToEmpty(business.image_alt),
    })),
    parking_guide: village.parking_guide
      ? {
          ...village.parking_guide,
          map_url: nullToEmpty(village.parking_guide.map_url),
          map_query: nullToEmpty(village.parking_guide.map_query),
          map_override_url: nullToEmpty(village.parking_guide.map_override_url),
        }
      : emptyParkingGuide(),
    getting_here_rail: village.getting_here_rail,
    getting_here_parking: village.getting_here_parking,
    accessibility_wheelchair: village.accessibility_wheelchair,
    accessibility_pushchair: village.accessibility_pushchair,
    accessibility_mobility_notes: village.accessibility_mobility_notes,
    accessibility_surface: village.accessibility_surface,
    rainy_day_options: village.rainy_day_options ?? [],
    faq_items: village.faq_items ?? [],
    nearby_villages: (village.nearby_villages ?? []).map((item) => ({
      ...item,
      image_url: nullToEmpty(item.image_url),
      image_alt: nullToEmpty(item.image_alt),
    })),
    meta_title: nullToEmpty(village.meta_title),
    meta_description: nullToEmpty(village.meta_description),
    alt_text: nullToEmpty(village.alt_text),
    video_embed_url: nullToEmpty(village.video_embed_url),
    hero_background_image_url:
      nullToEmpty(village.hero_background_image_url) ||
      (village.hero_gallery_urls?.[0] ?? ""),
    overview_image_url: nullToEmpty(village.overview_image_url),
    our_take_image_url:
      nullToEmpty(village.our_take_image_url) ||
      (village.hero_gallery_urls?.[1] ?? ""),
    our_take_image_alt: nullToEmpty(village.our_take_image_alt),
    hidden_gems_image_url: nullToEmpty(village.hidden_gems_image_url),
    hidden_gems_image_alt: nullToEmpty(village.hidden_gems_image_alt),
  };
}
