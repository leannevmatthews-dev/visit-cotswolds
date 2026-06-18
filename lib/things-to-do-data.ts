import type { DirectoryFilter, DirectoryListing } from "@/lib/listing-directory";

export type ActivityListingCategory =
  | "Walks & Trails"
  | "Gardens & Estates"
  | "Museums & History"
  | "Markets & Events";

export type ThingsToDoListing = DirectoryListing & {
  category: ActivityListingCategory;
  familyFriendly: boolean;
};

export const THINGS_TO_DO_HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCl2_Ek8r4Ja1u6mrItd6_ChWU4Ww08S2Xs2MChsDiSn-ecPMTkCzfTA5-xF1IS0tDZnkM_uB0XwmnkELG5mD4H7cK6x_icTOy4SKe-Wmo3VMqZZrzNoQmHjjk6MdtvWvjmGf0DQPppkVbltReZP7tVLNcL5fNwSBtbP2tnhABQLE9koTtDs6_vpaoLRDgtsknHzgU6dPZsU7DcfmSVBXx2NwwMKnP6qljFqtMhlKBpvTxBX0e9xJ2wRmXicSg3UkEyUJK-hR1x5Q";

export const THINGS_TO_DO_FILTER_CATEGORIES: DirectoryFilter[] = [
  { id: "all", label: "All Activities" },
  {
    id: "walks",
    label: "Walks & Trails",
    matchCategory: "Walks & Trails",
  },
  {
    id: "gardens",
    label: "Gardens & Estates",
    matchCategory: "Gardens & Estates",
  },
  {
    id: "museums",
    label: "Museums & History",
    matchCategory: "Museums & History",
  },
  {
    id: "markets",
    label: "Markets & Events",
    matchCategory: "Markets & Events",
  },
  {
    id: "family-friendly",
    label: "Family Friendly",
    requireFlag: "familyFriendly",
  },
];

export const THINGS_TO_DO_LISTINGS: ThingsToDoListing[] = [
  {
    id: "cotswold-way",
    name: "Cotswold Way (Bibury Section)",
    description:
      "Classic ridge-and-valley walk with Arlington Row views — allow half a day for an unhurried circuit.",
    category: "Walks & Trails",
    familyFriendly: true,
    priceLevel: 1,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuANIc35sWgQT3k_XqoYQKgAQWoUdfKKAZa7FPx4ZfLsEJL1EEECdkr82EiiVo9gx2YDpKf7E6yLexhIXQ8YAXdaWf0yjZOljAFEjVXoshJBfRMcNO1nWDNWBOFGQ-reQaV09Ak6O1E0G3FbrTGPh-lFeTmJm1GW6b-Psp7szxIlK6N2ldSuUeQEr9heSUMFwz1AcrxDJt-RKvy_gNe0c-RuACWgzCcv8HKhlsyw7oe_yX4koqWqwJZywHmlg4v9c2lKgO3GAOFreg",
    imageAlt: "Spring woodland path with wild garlic in the Cotswolds",
    websiteUrl: "https://www.nationaltrail.co.uk/en_GB/trails/cotswold-way/",
  },
  {
    id: "hidcote-gardens",
    name: "Hidcote Manor Gardens",
    description:
      "Arts-and-Crafts garden rooms near Chipping Campden — one of England's finest twentieth-century gardens.",
    category: "Gardens & Estates",
    familyFriendly: true,
    priceLevel: 2,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDTNyYdMbhxoMynkjEMfzlu6MT7RhqfkpNIw4EHSYcX1K7vJxi0V8oefJn8inqvhzc42d8Gc7tx1XakYbuAyF0yMfSAsg43RYgaFz0EKiTaMcW_H5qS8bo7bYUFKD4xHm3M6PesaPurcDX9jomZEh-EBYJ9t1OId0srDRqYRIhYMOAxFOxAu3fJaDlGsgOiA5sxFPKUdl7bmtD_tI87UjjM9vnxF_CswTVQw3aMx4m0EvcO4jkidqRchi9uBnKjaYRi9Hc_yjz_Jg",
    imageAlt: "Lavender borders and golden light at a Cotswold garden",
    websiteUrl: "https://www.nationaltrust.org.uk/visit/gloucestershire-cotswolds/hidcote",
  },
  {
    id: "sudeley-castle",
    name: "Sudeley Castle & Gardens",
    description:
      "Royal castle near Winchcombe with Tudor history, seasonal exhibitions, and ten restored garden areas.",
    category: "Gardens & Estates",
    familyFriendly: true,
    priceLevel: 2,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDft2Vi-TcOa89IUWMb29YlBljUDBINgwv7Tma3GKcgjnYDDg2eT3Jn-UyMlMggfLGfalQ2zR_TlKAQhBTXHWmX5b3UZp_omTi0x_EfXHydJQUpOEMNrGa_GaqEkIGu_-_1vzUO98Sgg617r1rojNrSuYZiMS1teyxnRYGxMRWIOKgsA1eH8XbBqDv2Rc_8loCM18Y9MJaJv0zynsYTdTcEU4gABDnwm05Bixdv39gL9_ipKUuJbLEwuhvgyxhPaSpxAWCaK3XHYg",
    imageAlt: "Historic castle and gardens in the Cotswolds",
    websiteUrl: "https://sudeleycastle.co.uk/",
  },
  {
    id: "snowshill-manor",
    name: "Snowshill Manor",
    description:
      "Charles Wade's extraordinary collection housed in a honey-stone manor — quirky, intimate, and memorable.",
    category: "Museums & History",
    familyFriendly: false,
    priceLevel: 2,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAZzSxhwh3G-GPdDTZHdnNseY8Kruoos_azgiSAJPVf8PNF_lZKRWLsJeWYJkNMlPVhm2ay8kPfBfiBRLRIIS-gQxLMxXT6ap2ODE9c84ZAiWIgUrl-ZgtBXmNxZzM_-F-Yx_F3sMPi4Q7S_teIddxgLu_JIm6QRWrllM_SLQmVNssZy33Mih-BrZ4iUxxC4usb_iaV-svBDdOOL2EjxigSL98nU1qTfi1ix5aqnxdL5Rfw5L53hcUKC2r1Z99DWrS68fFxm_1R4w",
    imageAlt: "Stone manor house at Snowshill village",
    websiteUrl: "https://www.nationaltrust.org.uk/visit/gloucestershire-cotswolds/snowshill-manor-and-garden",
  },
  {
    id: "bourton-model-village",
    name: "Model Village at Bourton",
    description:
      "One-ninth scale replica of Bourton-on-the-Water — a gentle, nostalgic stop that children love.",
    category: "Museums & History",
    familyFriendly: true,
    priceLevel: 1,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCBnymjyuuKFKhrAPqgXbo_vrizXxWRsn5F4zk1t57iAJptbRueUMSpN7BHiHoDT-BZjjJHhHY8hvEGTZCVIGD9UNPB34KK1S01FM_AoXXJPxgK_Nbkl9aFOS5ecb2I4pyxmOeok6cM4dq--Hgd9MfhSTsfgSeUZgey5u6GBmEw4pXvJ9RBH-wxUBpGAPbdfOi7T06bwiw3vNKHME1-_ARwbfo0G2HL6DQD8NELLb42ltdT_AXO2JV8WgNaC80C4m0xyNwMhBi5lA",
    imageAlt: "Miniature stone village beside the river at Bourton-on-the-Water",
    websiteUrl: "https://www.themodelvillage.com/",
  },
  {
    id: "stow-antiques-fair",
    name: "Stow-on-the-Wold Antiques Fair",
    description:
      "Monthly fair in the market square — dealers from across the region with silver, furniture, and curiosities.",
    category: "Markets & Events",
    familyFriendly: false,
    priceLevel: 1,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBKG7fIqbpalIWU_s8OylW8ONIunkhHggICNVlk3TZF6KJ_PqmVDCjSzDRM-I4PNUifvhaMbMnioy3w3oA8GEGpJNpmxqszmQ49Ts8z8mSEDaJaTIO6v4C-cnbWzcErpCWJf_F1cAoPgEQmJ8ACc5TOy3WFRdVOqE51rjs0L4ibBJbs12gy9Eqo8FCkNl_78MgUSznA1Upb1I9cdukYY1I8yAYAsCUD-5jcyzwYbxSS5IK1hfdlLYcwUiCWpeHkOnBuWinJvGjVwQ",
    imageAlt: "Antique stalls in a Cotswold market square",
    websiteUrl: "https://www.stowonthewold.co.uk/",
  },
  {
    id: "cotswold-farm-park",
    name: "Cotswold Farm Park",
    description:
      "Rare-breed farm with hands-on animal encounters and tractor rides — easy half-day for families.",
    category: "Markets & Events",
    familyFriendly: true,
    priceLevel: 2,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD_CC2e0cBF9vcLp4DyEq0GF2NQv_pN82hPjWkCPdsaplgxCRJrEuceKDywuty3llAeR1QLBxR2Oe8avs0nQTm_T9tRu5eIMeoUTLQ4OwCsJT5V2Nkuz9hPx1WvRICSoWTDPXMnllV5PaYGRfRVOuy67gSGXtP_h6P245MJGBt2YhZrTOqzHgTKZb1LpB3K06CI1tk60n8Y5hKazPZ5z1CZi9CdLLzpeFn4jgYJkGvzpcIEE2zpFalALROab6lFH0Qy17lDObfn6Q",
    imageAlt: "Rolling Cotswold hills and farmland",
    websiteUrl: "https://www.cotswoldfarmpark.co.uk/",
  },
  {
    id: "windrush-way",
    name: "Windrush Valley Walk",
    description:
      "Riverside path from Bourton to Lower Slaughter — flat, scenic, and ideal for an easy afternoon stroll.",
    category: "Walks & Trails",
    familyFriendly: true,
    priceLevel: 1,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDpxuQzk45opIHYWXpXf9IkaVVggnJn71cXR6BZ-eNTDvg3JxDsfoChTLrnQs3nSzn8MGGN3tVJkEREuO9S8pSvm3sOamEbdAfo5sP9Ixg1DgKWcCKPbTDne6VVjrOmwjY24sNahCVa_79V3CqTC6zJT70qxyb23cd2j-xtq_h2177OEUriXIw5qBMNS-nUpK23GoBuP3AzICajERY60vi7JhNY5ocQRRUngiNGtx0lyF3vy22YZ6TiB4zdv_oLgAw8t2shxd0hUQ",
    imageAlt: "River Windrush beside a Cotswold village path",
    websiteUrl: "https://www.nationaltrail.co.uk/en_GB/trails/windrush-way",
  },
  {
    id: "kiftsgate-court",
    name: "Kiftsgate Court Gardens",
    description:
      "Three generations of women gardeners above the Vale — famous roses and dramatic cliff-side planting.",
    category: "Gardens & Estates",
    familyFriendly: false,
    priceLevel: 2,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCl2_Ek8r4Ja1u6mrItd6_ChWU4Ww08S2Xs2MChsDiSn-ecPMTkCzfTA5-xF1IS0tDZnkM_uB0XwmnkELG5mD4H7cK6x_icTOy4SKe-Wmo3VMqZZrzNoQmHjjk6MdtvWvjmGf0DQPppkVbltReZP7tVLNcL5fNwSBtbP2tnhABQLE9koTtDs6_vpaoLRDgtsknHzgU6dPZsU7DcfmSVBXx2NwwMKnP6qljFqtMhlKBpvTxBX0e9xJ2wRmXicSg3UkEyUJK-hR1x5Q",
    imageAlt: "Terraced gardens overlooking the Cotswold escarpment",
    websiteUrl: "https://www.kiftsgate.co.uk/",
  },
  {
    id: "corinium-museum",
    name: "Corinium Museum",
    description:
      "Roman Cirencester brought to life with mosaics and daily-life displays — excellent rainy-day option.",
    category: "Museums & History",
    familyFriendly: true,
    priceLevel: 1,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD7KNuZp99ehqVD0N8nDkKl6lZzggi-Z54B2MWM9Mg-MQbNXEQNObhiAdbpK2m7C_c6A6gm5fdwgSJivZJfLWgYN1scb_FUIkg_bAOdwd3031gOgNjaCuJBzoTxmKZNGx9BAtAXaOsaif79etmdqrAstEcpqLjxXMVXiXx1rw-Zp7n2ejejSO-GAZOxuROnbJIg0-OcOzTGeOtIh5cXZg86joNK9wkJPVe_kfJWX8jXQJTWuA3eH4xJU1C4EUQHrv3x9MElnxT-Rg",
    imageAlt: "Roman mosaic display in a Cotswolds museum",
    websiteUrl: "https://coriniummuseum.org/",
  },
];
