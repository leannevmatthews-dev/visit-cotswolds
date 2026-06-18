import type { DirectoryFilter, DirectoryListing } from "@/lib/listing-directory";

export type EatListingCategory = "Restaurants" | "Pubs" | "Afternoon Tea";

export type PlacesToEatListing = DirectoryListing & {
  category: EatListingCategory;
  dogFriendly: boolean;
};

export const PLACES_TO_EAT_HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC4r1zr-jb914gcZ_b1OgvlWSS4Qe6gUUrZtgoxCpTATM8WBgQEafMKpJtGDDgPeZNBkVMas_v-dc-j_N1RRvBOOO72TgKswnDF8GysEBhg9vXcRWGJTJvnHvFQpmLPxapIMyyV7Rb6GMYswdOB4TSLkerCDPfFM9bKiIo7beoKnNumqiEWwsuu-jGuZMTeIniElTV-JKiUBzZ0jcz3KGPITK-e48aWf0qwVEW10m2dT1qSn4lNqS0AVscY82jF7bqL6f8KrNi5aw";

export const PLACES_TO_EAT_HERO_ALT =
  "Warm interior of a Cotswold pub with honey-coloured stone walls and candlelit tables";

export const EAT_FILTER_CATEGORIES: DirectoryFilter[] = [
  { id: "all", label: "All Establishments" },
  { id: "restaurants", label: "Restaurants", matchCategory: "Restaurants" },
  { id: "pubs", label: "Pubs", matchCategory: "Pubs" },
  {
    id: "afternoon-tea",
    label: "Afternoon Tea",
    matchCategory: "Afternoon Tea",
  },
  { id: "dog-friendly", label: "Dog Friendly", requireFlag: "dogFriendly" },
];

export const PLACES_TO_EAT_LISTINGS: PlacesToEatListing[] = [
  {
    id: "wild-rabbit",
    name: "The Wild Rabbit",
    description:
      "A reinvention of the traditional English pub with a focus on local organic ingredients from the Daylesford estate.",
    category: "Restaurants",
    dogFriendly: false,
    priceLevel: 3,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDyQ2M2E8EHp1rtyqjpZ5peJNMJWLmw8W228zDOVNio85z1DoaiSWxpN4cQvg7g9hr2y0zC6PjGGdJKb7PFn4cqvZplGQGJt91Osn-DlDdKGgacj_Y-VFUd7ATiZ5W0bPCZYMfnqAxxU6OVwHglip3O2jkvBQ2U68tSBdQ8vT0CZSJ_EEWRdMhBEGoFv3ZRR0MkciPfjyOXECVIr4c9XkUWVXuZWeVB8VWt8p5f32fWFcwg6cqeTfVst1zrMonVfXCECelbh-fBtw",
    imageAlt: "Seasonal British fine dining plate in a stone-walled Cotswold restaurant",
    websiteUrl: "https://www.thewildrabbit.co.uk/",
  },
  {
    id: "double-red-duke",
    name: "The Double Red Duke",
    description:
      "Open-fire cooking in a sprawling 17th-century coaching inn, celebrating British wool-country heritage.",
    category: "Pubs",
    dogFriendly: true,
    priceLevel: 2,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADN4N08pW4ta4Y0Eb9VjZv23P0L_nWWAJq5RfYfxdUGU8uqRY8PISIsOnQth51AeZ-7Vy-JkZHzg8yNjLqE2W7IBO1h3MezWnblh-wTMchIgqSXzmf2vgkUAba3G8Pz1nZUeMMpoNgr5TCgkoMxrM_Q0K-d3dEFTyBaaO2t-XtBijbfmk9Cba2Ow_9N5wisVfNsLfAlFvUlavBmuLEXcg6jXG_UxuSkbW4QoDUJcsYUL5rhhNoknUY1l-PFvwo-96UxfATdPAM_w",
    imageAlt: "Candlelit wooden bar in a historic Cotswold coaching inn",
    websiteUrl: "https://www.doubleredduke.co.uk/",
  },
  {
    id: "lords-of-the-manor",
    name: "Lords of the Manor",
    description:
      "Quintessentially British afternoon tea served in the drawing room of a historic Cotswold manor house.",
    category: "Afternoon Tea",
    dogFriendly: false,
    priceLevel: 3,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDP7HvhgsNOtPnoOWLmNhiE8fB5_2NtrxOenfDPrYUYiH8irmiwUv6Y9PNmSzpXW7ocAWsiNPEDPtoClaMsUmVAYGr2j1tWaCB_PgeRio62R3b7gVW_dKax0mzzFvimq064r1wRvmXcF0Mme5xIsUzhrrgLllzGKBDvm5Fiwt-tygkBQa9Q1ltkRTbfkiZhyvP3QkQmJ3nwTfwI1DLygTtpH7g_Dq_OCSzaOacmXhwc9ZfB1Ho7x8cH_a64kl8wt9m6sxJLEBdIUg",
    imageAlt: "Afternoon tea tiered stand in a manor-house drawing room",
    websiteUrl: "https://www.lordsofthemanor.com/",
  },
  {
    id: "old-butchers",
    name: "The Old Butchers",
    description:
      "Nose-to-tail dining and exceptional seafood in the heart of Stow-on-the-Wold's market square.",
    category: "Restaurants",
    dogFriendly: false,
    priceLevel: 3,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD7KNuZp99ehqVD0N8nDkKl6lZzggi-Z54B2MWM9Mg-MQbNXEQNObhiAdbpK2m7C_c6A6gm5fdwgSJivZJfLWgYN1scb_FUIkg_bAOdwd3031gOgNjaCuJBzoTxmKZNGx9BAtAXaOsaif79etmdqrAstEcpqLjxXMVXiXx1rw-Zp7n2ejejSO-GAZOxuROnbJIg0-OcOzTGeOtIh5cXZg86joNK9wkJPVe_kfJWX8jXQJTWuA3eH4xJU1C4EUQHrv3x9MElnxT-Rg",
    imageAlt: "Candlelit table setting in an intimate Stow-on-the-Wold restaurant",
    websiteUrl: "https://www.theoldbutchers.co.uk/",
  },
  {
    id: "potting-shed",
    name: "The Potting Shed",
    description:
      "Relaxed pub dining in Crudwell with a creative seasonal menu and beautiful walled gardens.",
    category: "Pubs",
    dogFriendly: true,
    priceLevel: 1,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCE4Wy-rmgL23PxYw5VachBUyU3cTOhCIkfV3DfPBLzyCOvNdyXwNs799GGhfDz-KYMnqz6_1N1pUmh4t5euUcmQ92qwSYDKnhzg5xFQiX7bG-fni2eE2eDy6PZRLJLdNo7U-TyzRJfpcmmuEIUFsGQKYFO6K_fJ6FM_epcLasDVjVH0WfLD2PCLKDNZ7XmelgOr8sXWGaLWRAsqxOKcMjK6gLDw1j_ZPmvAZruIvLkImIG3H6_HO4lUKRHYy8bb-ELtvDt-yKePA",
    imageAlt: "Outdoor terrace of a stone Cotswold pub at twilight",
    websiteUrl: "https://www.thepottingshedpub.co.uk/",
  },
  {
    id: "swan-bibury",
    name: "The Swan at Bibury",
    description:
      "Riverside inn serving classic pub fare and local ales — a natural stop after Arlington Row.",
    category: "Pubs",
    dogFriendly: true,
    priceLevel: 2,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBcHrj45CrB30MUy1C0zu0ni8ywKRf6rlphruiZJOPSfbYG6kxJ_QvMMdNDo1gH5PhfY2t-9okVHu-Zn19ed5sQeDyUURndgU3KlhBy75pAayMk18ETxdX7FS5gpWI7d4KJMwOLIs5PBHtmk1xgfBpatuw6jN0eBiykNrNhXHUXs76YmxRwknUIVfIQmjTPdH2ce78_dyhwZDCeHXaS0qNOf4qcJNSeQW3c5h4kWxOW9x2DzAaRg8lBjcwPkyBPA3Bwc6b43FJ5Hg",
    imageAlt: "Fine dining scene in a historic Cotswold pub",
    websiteUrl: "https://www.theswanatbibury.co.uk/",
  },
  {
    id: "dormy-house",
    name: "The Potting Shed at Dormy House",
    description:
      "Refined afternoon tea with homemade scones and clotted cream overlooking the Worcestershire hills.",
    category: "Afternoon Tea",
    dogFriendly: false,
    priceLevel: 3,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAudQsPROnmMD1SzJCuavC_RNJBbD6Zt14BlCT_w-zlCVebqPNc1OEYVohOuvrDfYPTBOxgVkHgIehgX83q8clhO9m-MSHLKZtu6Ny2RIrUkLv5OMcpeZ0ZE7rDdGcxBx2dTonE-T4IezvIv5Dz7LgmzbWrzygRyQNZjOb0jJ6GqeeFdQynbhplnrIlqOZ_Z0GMxx6WXfZDSxtiiXSIBvzk4oOrZXcmameT16xo6iYSPOVeVyg3QMCiI_4uZtjkuycuBOmS1N573g",
    imageAlt: "Elegant lounge setting for afternoon tea at a country house hotel",
    websiteUrl: "https://www.dormyhouse.co.uk/",
  },
  {
    id: "cheese-works",
    name: "The Cheese Works",
    description:
      "Artisan cheese counter and light lunches celebrating Gloucestershire's farmhouse dairies.",
    category: "Restaurants",
    dogFriendly: true,
    priceLevel: 1,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAee6AV0AZU3XfeuPyAwrb6G1uAQkAwFvFZG9xdE2K2xs7M8WHAeCEiHeDYQ5rNxRI1lhjdcsoLv8IUM2H0am0M6Qt29DJ4ThKQyyPtXK-4Kr9lgXxfGOUq7GNxjjqv4DuEBav0EN8JW-rQMZkr_lATXC-EeKY6SFjH2_5e0IgzkJownGD3mvamxjJgf5p9abskO8q5Nixo0rEr5sy44axNmCygsJcI_mZ3fgpxtTM8FUBSDuxNdnvCe8sdCwd5nblpOJc54LsaMQ",
    imageAlt: "Artisan cheese and local produce on a rustic wooden counter",
    websiteUrl: "https://www.cotswoldcheese.co.uk/",
  },
  {
    id: "five-all-broughton",
    name: "Five All Broughton",
    description:
      "Modern British tasting menus in a restored stone barn with views across open farmland.",
    category: "Restaurants",
    dogFriendly: false,
    priceLevel: 3,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBYgD66rLgbAuAJ551nmGAi4t28vcy4MktwXqg17bB1KmNE32W9MlnV9a0OSM9PguKElM1reByDgczrOa2VD7GYY0LUoDJ9mpPGx70s_xYqmHk7cnJiWltyfgB9C842qxRvpKda6xCzvePGMw2XYo3m-Inr_K-uCmvR8CM3bZVswfsj5AhtOj0IvYjGTeFJoQMa20-Dg_Rt6r8ICoPgdtQB7Y1pDQVUt9Va291KweRmL_48Btztb1vvPczVLx2-TeN1tcN96mNbfA",
    imageAlt: "Craft cocktail and seasonal small plates in a converted barn restaurant",
    websiteUrl: "https://www.fiveallbroughton.co.uk/",
  },
  {
    id: "ebrington-arms",
    name: "The Ebrington Arms",
    description:
      "Award-winning village pub with a chalkboard menu of locally sourced, unfussy British cooking.",
    category: "Pubs",
    dogFriendly: true,
    priceLevel: 2,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAlCFJGj3w0v_ygGqlr7jPrd9PpYeBbc2zCUXaq8mkYSyuU9c7BA4_k7cv7FF6ZfKOxZa9wC7J85OzQmaU7aFDOsOigVKjust5HxQa4QRi3Ay5jFRTq8hhVymGe0RrXuC9aZQI3ZUWju459LoCojrOdd5g96QOdGmdqAbB6ZfCT531hm-EW0_nZ1ZwHWAijceWCoHEcWsjqDRRNvaTGEfqHXWGloeLFTRmoHEqFLRmLrHonYCVG2fpwm3xX-riwnqJW_U5mPc-psw",
    imageAlt: "Cosy village pub dining room with exposed stone walls",
    websiteUrl: "https://www.theebringtonarms.co.uk/",
  },
];
