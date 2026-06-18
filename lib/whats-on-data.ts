export type WhatsOnCategory =
  | "Festivals"
  | "Food + Markets"
  | "Sporting"
  | "Family"
  | "Events";

export type WhatsOnFilter = {
  id: string;
  label: string;
  matchCategory?: WhatsOnCategory;
};

export type WhatsOnEvent = {
  id: string;
  title: string;
  description: string;
  location: string;
  month: string;
  day: string;
  imageUrl: string;
  imageAlt: string;
  categories: WhatsOnCategory[];
};

export const WHATS_ON_HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAIBKgizqNuINElxwaG8jYGcXmenxm-7wA4KC0eBuuVdqNs1gydPocWvMIVDepVaP0A9bHD0lPPMH64CFAjoGRAQfmvh5R-MHHit1DqZPrzwPte8_mjVY7_vcKvEEEv5eit_2CgAV3QsDb6CuckpZpNigTkvThjU38P8bpLGeF66iI3nbkTmdR578Ux2IQEtVhEnX1Wlhu7NS8U5KOEAGjsbH-GPkf_3P597ESI1xciKbdnkJhT1wox3gvQba4VRJLb0zZfPlTOkA";

export const WHATS_ON_FILTERS: WhatsOnFilter[] = [
  { id: "all", label: "All Events" },
  { id: "festivals", label: "Festivals", matchCategory: "Festivals" },
  { id: "food-markets", label: "Food + Markets", matchCategory: "Food + Markets" },
  { id: "sporting", label: "Sporting", matchCategory: "Sporting" },
  { id: "family", label: "Family", matchCategory: "Family" },
  { id: "events", label: "Events", matchCategory: "Events" },
];

export const WHATS_ON_EVENTS: WhatsOnEvent[] = [
  {
    id: "artisan-craft-fair",
    title: "The Artisan Craft Fair",
    description:
      "A monthly gathering of the finest makers and craftsmen in the heart of the village square. Discover unique textiles, hand-thrown ceramics, and local woodcraft.",
    location: "CHIPPING CAMPDEN",
    month: "MAY",
    day: "14",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC1orKHEyxDjU-n67kpcxPJ0TALyYwMezDzdNTLIKUz77WRGqmE4cZf3eKUoHXfk4agPuoxO8_ihb-ePinGhZW3IKcA2Vv9TD7GcWt5FCUbuCh2ykdr1zu2op2cWp-BVsXJ-kj6UX_zevQKn6NiZunl_2xo1qGWgPYYFIjK93_Ox3rtpkUoo3JR2KsU1Mq_SpIiL7XrVgKvh8MgIHeCPdyjNWwJF6EPrPW9YJo1NHsOgJdTIs21Cm3uxBwlDe4iBJ9U16hu4LWIAg",
    imageAlt: "Artisan market stalls in Chipping Campden",
    categories: ["Food + Markets"],
  },
  {
    id: "badminton-horse-trials",
    title: "Badminton Horse Trials",
    description:
      "The pinnacle of world-class eventing. Experience the thrill of the cross-country course set against the majestic backdrop of Badminton House.",
    location: "BADMINTON ESTATE",
    month: "JUNE",
    day: "02",
    imageUrl: WHATS_ON_HERO_IMAGE,
    imageAlt: "Equestrian event at Badminton Estate",
    categories: ["Sporting"],
  },
  {
    id: "cheltenham-literature-festival",
    title: "Cheltenham Literature Festival",
    description:
      "One of the world's leading literary festivals.",
    location: "CHELTENHAM",
    month: "OCT",
    day: "21",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAicKIMJSfWfYjRtYW2TCmAwVp3glFn_9E7W06K2RXCIswIOrWbwBJs0R0Ywgdk8PnBLZlgwRResCNXSy0nsKnIM5aoO0tkNZv_JisQ36jVXaTxKyQBsCyJRqvVfEKJIs300ZPF2xitTB6-zGFQeL5FXYte5CExqevaeBmmZFQ4VLZs2XZcrafs9kGCpP603PUXtPgkJqANvfA4WEnklxNVH3kbc1W7ZbzdLRYmO_ikM4ONruEkf78nTa7zQPan0SITT9LW8ACeGQ",
    imageAlt: "Cheltenham Literature Festival",
    categories: ["Festivals", "Events"],
  },
  {
    id: "secret-garden-openings",
    title: "Secret Garden Openings",
    description:
      "A rare opportunity to explore the private walled gardens of the Cotswolds' most historic manor houses, typically closed to the public.",
    location: "STOW-ON-THE-WOLD",
    month: "JULY",
    day: "08",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBjqu6o7Lh6nJIZ4jvWQiGDR6JEo1mjqjnviN6j-SQp737VIp4Rwk7ptZWcG5YiUMY_xD4OycXr9j5xyLGEMXE4GiNZ_nCZHUQOQwElevpMKl1t4-kGkW6g9VjnLyLgZHwrYdBFfbHLXisUg2ZXD0nSYkQrZCpaIy1ndcSJ6pvEEB_yoG98sgqoGEY8JOOf-UrCquAgiS_9KhdvYxzZhfyo1oB66k27EM8MsS4kETA8wc9ok1s10FEkyFxLVM73KzYDUwYwVsmreg",
    imageAlt: "Private walled garden in the Cotswolds",
    categories: ["Events"],
  },
  {
    id: "cotswold-music-festival",
    title: "Cotswold Music Festival",
    description:
      "An evening of chamber music within the candlelit acoustics of St. Lawrence's Church. Featuring a performance by the regional philharmonic.",
    location: "BOURTON-ON-THE-WATER",
    month: "AUG",
    day: "15",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCkmtZj9zn-cb03gnChXrZlAYiOD4OwriJV4dFX052_NDNMph-ZsGvh8G2PGibfzp3GPcjQJqlexQAfEWQ5dJOVzAOo_yPwLOe3BT1ra6LNjNaiDgDXDn3Wiq2YPFt5XmYJF9uYhjKuvtO0Ba5U_sGEikWYgSBjI67IJd-Z4iz682wlrUANAQCgzFyKwBc30l1i3ER8wqZZji4C0Js6JjBPRj-U0i-DUb6VifbK6OojGN2dIEqSoLsXzv7sjuDuRQF2YX74gE-fiQ",
    imageAlt: "Evening recital at Bourton-on-the-Water",
    categories: ["Festivals"],
  },
  {
    id: "autumn-foraging-workshop",
    title: "Autumn Foraging Workshop",
    description:
      "Join local herbalists on a guided wander through ancient woodland to identify and harvest the wild bounty of the autumn harvest.",
    location: "WYCHWOOD FOREST",
    month: "SEP",
    day: "30",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA37ZyHra1VcWSfXRhET6VLMa2ETsHh7wJGr8Jm9qPvTVHTb7Pj75x7CK3I83zoQsMS4mUpDKDAPsQenOigq5lW0i2c5fd9nPpCm_kFSiMnBFu7zO-ntDLychxKD1wCokAOV-d8bknsuBEEO_MwDXpTU5h0AF0p2fa3k4bA7X9ME-WBZuNj3vfoqEztGnPRttRfuk-d_GMjpI646E6tLf4nEcRgrsgbAB9YVS85WnezAcp_Fh9xgrn2bVju1jrCdZ_f0Vtc01REaQ",
    imageAlt: "Autumn foraging in Wychwood Forest",
    categories: ["Family", "Events"],
  },
  {
    id: "wilderness-festival",
    title: "Wilderness Festival",
    description:
      "One of the UK's best-known boutique festivals combining music, food, wellness and talks.",
    location: "CORNBURY PARK",
    month: "JUL",
    day: "30",
    imageUrl:
      "https://d3nnbxax8ziilb.cloudfront.net/images/GaU0ezOwJSZ818JGzUc_RUDmdF0=/2767/fill-1200x630/SUN_WILDERNESS24_Callum_Baker_CB1_0827.NEF.jpg",
    imageAlt: "Wilderness Festival at Cornbury Park",
    categories: ["Festivals", "Food + Markets"],
  },
  {
    id: "2000trees-festival",
    title: "2000trees Festival",
    description:
      "Major independent rock and alternative music festival.",
    location: "CHELTENHAM",
    month: "JUL",
    day: "09",
    imageUrl:
      "https://2000trees.co.uk/storage/media-library/1121_20260609123729.jpg",
    imageAlt: "2000trees Festival at Upcote Farm",
    categories: ["Festivals"],
  },
  {
    id: "big-feastival",
    title: "Big Feastival",
    description:
      "Food, music and family entertainment on a working farm.",
    location: "KINGHAM",
    month: "AUG",
    day: "28",
    imageUrl:
      "https://bigfeastival.com/wp-content/uploads/2025/01/The-Big-Feastival-2024_20240823_Atmosphere_GaelleBeri_9077-Instagram.jpeg",
    imageAlt: "Big Feastival on Alex James' Cotswolds farm",
    categories: ["Family", "Festivals", "Food + Markets"],
  },
  {
    id: "womad",
    title: "WOMAD",
    description:
      "World music, culture and food festival.",
    location: "NESTON PARK",
    month: "JUL",
    day: "23",
    imageUrl:
      "https://womad.co.uk/wp-content/uploads/2026/05/Frame-2147235220.png",
    imageAlt: "WOMAD festival at Neston Park",
    categories: ["Festivals", "Food + Markets"],
  },
  {
    id: "cheltenham-music-festival",
    title: "Cheltenham Music Festival",
    description:
      "Classical music performances and premieres.",
    location: "CHELTENHAM",
    month: "JUL",
    day: "01",
    imageUrl:
      "https://cheltenham-festivals.transforms.svdcdn.com/production/Festival-Branding/2024/Generic-Festival-Image-Music-Brand.png",
    imageAlt: "Cheltenham Music Festival",
    categories: ["Festivals", "Events"],
  },
  {
    id: "fantasy-forest-festival",
    title: "Fantasy Forest Festival",
    description:
      "Fantasy, cosplay and medieval-themed event.",
    location: "WINCHCOMBE",
    month: "JUL",
    day: "17",
    imageUrl:
      "https://sudeleycastle.co.uk/cms-assets/header-images/_ctaCardThumbnail/What-to-do_Sudeley-C.jpg",
    imageAlt: "Fantasy Forest Festival at Sudeley Castle",
    categories: ["Family", "Festivals", "Events"],
  },
  {
    id: "longborough-festival-opera",
    title: "Longborough Festival Opera",
    description:
      "Outdoor opera in the Cotswold countryside.",
    location: "LONGBOROUGH",
    month: "JUN",
    day: "20",
    imageUrl:
      "https://d2pff431r2cpo9.cloudfront.net/files/Productions/2017-Tristan-und-Isolde/low-res/_1200xAUTO_crop_center-center/Chorus-Stuart-Pendred-Kurwenal-LFO-Tristan-und-Isolde-2017-cr-Matthew-Williams-Ellis-8.jpg?mtime=20170608154452",
    imageAlt: "Longborough Festival Opera outdoor production",
    categories: ["Festivals", "Events"],
  },
  {
    id: "charlbury-beer-festival",
    title: "Charlbury Beer Festival",
    description:
      "Large charity beer festival with live music.",
    location: "CHARLBURY",
    month: "JUN",
    day: "27",
    imageUrl:
      "https://www.charlburybeerfestival.org/_astro/cbf-drone.CcxCtOjn.jpg",
    imageAlt: "Charlbury Beer Festival at Charlbury Cricket Club",
    categories: ["Family", "Festivals", "Food + Markets"],
  },
  {
    id: "broadway-arts-festival",
    title: "Broadway Arts Festival",
    description:
      "Arts, crafts, workshops and exhibitions.",
    location: "BROADWAY",
    month: "AUG",
    day: "01",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC1orKHEyxDjU-n67kpcxPJ0TALyYwMezDzdNTLIKUz77WRGqmE4cZf3eKUoHXfk4agPuoxO8_ihb-ePinGhZW3IKcA2Vv9TD7GcWt5FCUbuCh2ykdr1zu2op2cWp-BVsXJ-kj6UX_zevQKn6NiZunl_2xo1qGWgPYYFIjK93_Ox3rtpkUoo3JR2KsU1Mq_SpIiL7XrVgKvh8MgIHeCPdyjNWwJF6EPrPW9YJo1NHsOgJdTIs21Cm3uxBwlDe4iBJ9U16hu4LWIAg",
    imageAlt: "Broadway Arts Festival",
    categories: ["Events", "Food + Markets"],
  },
  {
    id: "cotswold-fest",
    title: "Cotswold Fest",
    description:
      "Music, food and family entertainment.",
    location: "SOUTH CERNEY",
    month: "JUL",
    day: "25",
    imageUrl:
      "https://cotswoldfest.co.uk/wp-content/uploads/elementor/thumbs/433982121_951977256935921_1974619111724029604_n-jpg-qo8kkbm6uuvi4jz5h7nw9hrgnmp8mzj6trl7sewt74.webp",
    imageAlt: "Cotswold Fest at South Cerney Airfield",
    categories: ["Family", "Festivals", "Food + Markets"],
  },
  {
    id: "winchcombe-walking-festival",
    title: "Winchcombe Walking Festival",
    description:
      "Guided walks throughout the Cotswolds.",
    location: "WINCHCOMBE",
    month: "OCT",
    day: "01",
    imageUrl:
      "https://sudeleycastle.co.uk/cms-assets/header-images/_ctaCardThumbnail/winchcombe-01.jpg",
    imageAlt: "Winchcombe Walking Festival",
    categories: ["Events", "Family"],
  },
];

export function filterWhatsOnEvents(
  events: WhatsOnEvent[],
  filterId: string,
): WhatsOnEvent[] {
  if (filterId === "all") {
    return events;
  }

  const rule = WHATS_ON_FILTERS.find((filter) => filter.id === filterId);
  if (!rule?.matchCategory) {
    return events;
  }

  return events.filter((event) =>
    event.categories.includes(rule.matchCategory!),
  );
}

export function formatEventCategories(categories: WhatsOnCategory[]): string {
  return categories.join(" · ");
}
