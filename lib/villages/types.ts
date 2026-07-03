export type CrowdPillLevel = "quiet" | "moderate" | "busy";

export const COTSWOLDS_REGIONS = [
  "North Cotswolds",
  "Central Cotswolds",
  "South Cotswolds",
] as const;

export type CotswoldsRegion = (typeof COTSWOLDS_REGIONS)[number];

export type CrowdTimeRow = {
  level: string;
  time_range: string;
};

export type AlternativeVillage = {
  icon: string;
  need: string;
  suggested_villages: string[];
};

export type ComparisonStat = {
  village_name: string;
  is_current: boolean;
  beauty: string;
  crowds: string;
  food: string;
  time_needed: string;
  image_url: string | null;
  image_alt?: string | null;
};

export type LocalTip = {
  icon: string;
  source?: string;
  tip_text: string;
};

export type HiddenGem = {
  number: string;
  title: string;
  body: string;
};

export type ThingsToDoItem = {
  title: string;
  body: string;
  insider_tip: string;
  image_url: string | null;
  image_alt?: string | null;
};

export type CombineWithTrip = {
  title: string;
  body: string;
  duration_label: string;
  left_image_url: string;
  right_image_url: string;
  left_image_alt?: string;
  right_image_alt?: string;
};

export type PlacePick = {
  name: string;
  category: string;
  location_label: string;
  image_url: string | null;
  image_alt?: string | null;
  external_link: string | null;
};

export type LocalBusiness = {
  name: string;
  category: string;
  description: string;
  address?: string | null;
  website_url?: string | null;
  image_url?: string | null;
  image_alt?: string | null;
};

export type ParkingGuide = {
  cost: string;
  map_url: string | null;
  best_time: string;
  main_detail: string;
  main_location: string;
  overflow_note: string;
  on_street_note: string;
};

export type RainyDayOption = {
  icon: string;
  name: string;
  body: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type NearbyVillage = {
  village_name: string;
  drive_time_label: string;
  image_url?: string | null;
  image_alt?: string | null;
};

export type SeasonalAdvice = {
  id: number;
  season: string;
  icon: string;
  body: string;
  display_order: number;
};

export type Village = {
  id: number;
  slug: string;
  name: string;
  region_label: string;
  cotswolds_region: CotswoldsRegion | null;
  tagline_quote: string;
  video_embed_url: string | null;
  hero_background_image_url: string | null;
  our_take_image_url: string | null;
  hero_gallery_urls: string[] | null;
  alt_text: string | null;
  brief_summary: string;
  brief_best_tip: string;
  overview_heading: string;
  overview_body: string;
  overview_image_url?: string | null;
  time_needed: string;
  dog_friendly: string;
  best_season: string;
  score_first_time_visitor: number;
  score_couples: number;
  score_families: number;
  score_food_drink: number;
  score_accessibility: number;
  score_hidden_gem_factor: number;
  our_take_body: string;
  our_take_image_alt: string | null;
  visited_date: string;
  reviewed_by_name: string;
  reviewed_by_credential: string;
  crowd_intelligence_note: string;
  crowd_times: CrowdTimeRow[];
  perfect_for: string[];
  maybe_skip_if: string[];
  comparison_stats: ComparisonStat[] | null;
  alternative_villages: AlternativeVillage[];
  local_tips: LocalTip[];
  hidden_gems: HiddenGem[];
  hidden_gems_image_url: string | null;
  hidden_gems_image_alt: string | null;
  things_to_do: ThingsToDoItem[];
  combine_with: CombineWithTrip[];
  places_to_stay: PlacePick[];
  places_to_eat: PlacePick[];
  local_businesses: LocalBusiness[];
  parking_guide: ParkingGuide;
  getting_here_rail: string;
  getting_here_parking: string;
  accessibility_wheelchair: string;
  accessibility_pushchair: string;
  accessibility_mobility_notes: string;
  accessibility_surface: string;
  rainy_day_options: RainyDayOption[];
  faq_items: FaqItem[];
  meta_title: string | null;
  meta_description: string | null;
  nearby_villages: NearbyVillage[];
};
