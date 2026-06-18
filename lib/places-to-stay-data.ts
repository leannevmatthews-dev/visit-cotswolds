import type { DirectoryFilter, DirectoryListing } from "@/lib/listing-directory";

export type StayListingCategory = "Hotels" | "B&Bs" | "Cottages" | "Glamping";

export type PlacesToStayListing = DirectoryListing & {
  category: StayListingCategory;
  dogFriendly: boolean;
};

export const PLACES_TO_STAY_HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC3SQJawZ0K0iOlJ1Dft84V37Cvdc1CB3ESvJp1KgC4KTTGaVggUW997wXNuiJc1mDMQr1DDAD0TogywyQIp3ou3QaublEucb3JAuGYnPo7lju8WiZ9cPlxtDsVyGYiEcIosElxXz3uo1hUrK6uJrCnfv7LsbLNtyG5oYClwBE-aP5yvktoVsjCB5mfWK0JS9r-7Zn2vdr0Vz9kpohWFjD62oEGMSPsnk3OrexShAKpK1JR1hS5aqSJ90GR9bsu9GDRsnL6QBvUxQ";

export const STAY_FILTER_CATEGORIES: DirectoryFilter[] = [
  { id: "all", label: "All Properties" },
  { id: "hotels", label: "Hotels & Inns", matchCategory: "Hotels" },
  { id: "bnbs", label: "B&Bs", matchCategory: "B&Bs" },
  { id: "cottages", label: "Cottages", matchCategory: "Cottages" },
  { id: "glamping", label: "Glamping", matchCategory: "Glamping" },
  { id: "dog-friendly", label: "Dog Friendly", requireFlag: "dogFriendly" },
];

export const PLACES_TO_STAY_LISTINGS: PlacesToStayListing[] = [
  {
    id: "lygon-arms",
    name: "The Lygon Arms",
    description:
      "Historic coaching inn on Broadway High Street with panelled bars, open fires, and elegant rooms.",
    category: "Hotels",
    dogFriendly: true,
    priceLevel: 3,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBF5Peq3duXAD2MQju_mcIys61wjAVI0OyosJba9dh7G6qPtaBZ9WQAkmgBpFrFa5xtzAAFil9T83t0vJDf51a9YOoj6YYAAjSldWSGkZx-JpFkEa8YbnePswa1hpFXtDg8hxuaYuBOJjNyp44HbTQm-Db134zkd9JsttfNl-18lOa2ZSceUjRFHmEZRxKAkQvAvXACcytiL8l1CiAwOqPMD1yorkuQWv_G7O4kuTvY_GnZpenyhE7VzjisP1s9w8TYuZ1ry1c7rQ",
    imageAlt: "Cotswolds manor house hotel at night with lit windows",
    websiteUrl: "https://www.lygonarmshotel.co.uk/",
  },
  {
    id: "old-rectory",
    name: "The Old Rectory",
    description:
      "Characterful stone cottage B&B with garden views and a generous Cotswold breakfast.",
    category: "B&Bs",
    dogFriendly: false,
    priceLevel: 2,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAee6AV0AZU3XfeuPyAwrb6G1uAQkAwFvFZG9xdE2K2xs7M8WHAeCEiHeDYQ5rNxRI1lhjdcsoLv8IUM2H0am0M6Qt29DJ4ThKQyyPtXK-4Kr9lgXxfGOUq7GNxjjqv4DuEBav0EN8JW-rQMZkr_lATXC-EeKY6SFjH2_5e0IgzkJownGD3mvamxjJgf5p9abskO8q5Nixo0rEr5sy44axNmCygsJcI_mZ3fgpxtTM8FUBSDuxNdnvCe8sdCwd5nblpOJc54LsaMQ",
    imageAlt: "Cozy stone cottage interior with fireplace",
    websiteUrl: "https://www.theoldrectorycotswolds.co.uk/",
  },
  {
    id: "forest-hideaway",
    name: "Forest Hideaway",
    description:
      "Contemporary cabin tucked into woodland near Chipping Campden — quiet, design-led, and private.",
    category: "Glamping",
    dogFriendly: true,
    priceLevel: 3,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAXZgRIb4iDrD84merSA4kGz8ns3mDnhg5zG8IJepHbDriu1eWe4PrFbk0kHB7yqD68T578hrYsBj4pBZge5SdEmwF79-pll-dOyXLMRIh8wZioGbqggHjfvToSuPerf-HdJncNAwPZiAWm9pFqezsYUJSkvclSBKZbcmvI4mvx1BpRycLoPeFz26POc02bYw2iDFua7ofXQ9m9UcjMAy7Vg_VFhYlQLQF_ax-FhBgPpHMtW06oBa93lyNI7T7ag70uBOF-rY8y6Q",
    imageAlt: "Modern wood-clad cabin among Cotswold trees",
    websiteUrl: "https://www.foresthideaway.co.uk/",
  },
  {
    id: "barnsley-house",
    name: "Barnsley House",
    description:
      "Country-house hotel with Rosemary Verey gardens, spa, and relaxed village setting in Barnsley.",
    category: "Hotels",
    dogFriendly: false,
    priceLevel: 3,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAlCFJGj3w0v_ygGqlr7jPrd9PpYeBbc2zCUXaq8mkYSyuU9c7BA4_k7cv7FF6ZfKOxZa9wC7J85OzQmaU7aFDOsOigVKjust5HxQa4QRi3Ay5jFRTq8hhVymGe0RrXuC9aZQI3ZUWju459LoCojrOdd5g96QOdGmdqAbB6ZfCT531hm-EW0_nZ1ZwHWAijceWCoHEcWsjqDRRNvaTGEfqHXWGloeLFTRmoHEqFLRmLrHonYCVG2fpwm3xX-riwnqJW_U5mPc-psw",
    imageAlt: "Country house hotel and gardens in the Cotswolds",
    websiteUrl: "https://www.barnsleyhouse.com/",
  },
  {
    id: "dormy-house",
    name: "Dormy House",
    description:
      "Hilltop retreat above Broadway with spa, pool, and far-reaching views over the Vale of Evesham.",
    category: "Hotels",
    dogFriendly: false,
    priceLevel: 3,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAudQsPROnmMD1SzJCuavC_RNJBbD6Zt14BlCT_w-zlCVebqPNc1OEYVohOuvrDfYPTBOxgVkHgIehgX83q8clhO9m-MSHLKZtu6Ny2RIrUkLv5OMcpeZ0ZE7rDdGcxBx2dTonE-T4IezvIv5Dz7LgmzbWrzygRyQNZjOb0jJ6GqeeFdQynbhplnrIlqOZ_Z0GMxx6WXfZDSxtiiXSIBvzk4oOrZXcmameT16xo6iYSPOVeVyg3QMCiI_4uZtjkuycuBOmS1N573g",
    imageAlt: "Luxury boutique hotel bedroom with valley views",
    websiteUrl: "https://www.dormyhouse.co.uk/",
  },
  {
    id: "shepherds-hut-bibury",
    name: "Arlington Shepherd's Hut",
    description:
      "Romantic off-grid hut beside the river — wood burner, stargazing deck, and village walks on the doorstep.",
    category: "Glamping",
    dogFriendly: true,
    priceLevel: 2,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBpyeUlrbpv0DBKuxOPkok26a6qwuZ3Q407tj1hx3p5yCCNjwxcdvbgBsMyPNhsNKDVFmaDXllP13f6a9g9WT5oaCg8BL0ureYR2TRhtBHHle7-nM9-qJsADdsaoO3QFyLuRGiWh_Wm-iwNbknm0pg_FWKAZEmY5NLCYVT9fwBmHEgTnIenfB5WW74PvVEO5PE3HS3R20LzfFHTSqLvVO5Tuv0IIjYJ3mnc6CHUAoTO9NlZsNS0YtsahgyBpaOyDKI51NBkwAbZKA",
    imageAlt: "Shepherd's hut with fire glow near a Cotswold river",
    websiteUrl: "https://www.arlingtonshepherdshut.co.uk/",
  },
  {
    id: "coln-valley-cottage",
    name: "Coln Valley Cottage",
    description:
      "Honey-stone holiday cottage sleeping six, with a walled garden and easy access to Bibury and Burford.",
    category: "Cottages",
    dogFriendly: true,
    priceLevel: 2,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDdOcNnwcH0POjoLioz9hOh138G4xpFszmVQf3fnEGE2dcnnjBRFbp0dmBPqqiVcMYJuOQULEqkMjm9dvNpXmyPrCSN1hQXLXWD91VK64Un4pPyDMJZ923W85Tar1rRae_Qtlm30oDIgGnASlxzuIIgELwvFkYnm0-2iSngPfsXwhIgeCHaVg_24zIQnymVIc2SF5fdvs7dpH2mcTf6ged3O6HoMIOEaZQOt_qEROlQpJkkZ8SLKH2WoTDj3eoWPSsq30g2052sXg",
    imageAlt: "Honey-stone cottage with garden in a Cotswold village",
    websiteUrl: "https://www.colnvalleycottage.co.uk/",
  },
  {
    id: "kingham-bed-breakfast",
    name: "Kingham Bed & Breakfast",
    description:
      "Two-room B&B above a village bakery — unfussy comfort and excellent sourdough at breakfast.",
    category: "B&Bs",
    dogFriendly: false,
    priceLevel: 1,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDF4Fc4iethe0SWQg9QKgPHqykcEh3OMDuLU71vosj4eDXt0vh7ZP54zJonJbNDsCGUII5GD_kIpLoYjULb0Jkv8O_MyxBzh5_i6AxC6iCuNMDwN_AwDK-s_UKBTp1VaACRtIYDO4m0ancPb6eLCGIPRGkN8HlH0CZyrxvrf0yL7PJx5wQGoBE-u2QE4UBepfBBJcK7H90FqxzrJfaU7LcHdMiICau0k3ODFbwXJHFURcJsvMA5sK2Yyi2YjVueT3C5DbsG3R3bGA",
    imageAlt: "Village B&B above a stone bakery front",
    websiteUrl: "https://www.kinghambedandbreakfast.co.uk/",
  },
  {
    id: "slaughters-manor",
    name: "Slaughters Manor House",
    description:
      "Elizabethan manor on the river Eye with panelled dining room and individually styled bedrooms.",
    category: "Hotels",
    dogFriendly: true,
    priceLevel: 3,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDpxuQzk45opIHYWXpXf9IkaVVggnJn71cXR6BZ-eNTDvg3JxDsfoChTLrnQs3nSzn8MGGN3tVJkEREuO9S8pSvm3sOamEbdAfo5sP9Ixg1DgKWcCKPbTDne6VVjrOmwjY24sNahCVa_79V3CqTC6zJT70qxyb23cd2j-xtq_h2177OEUriXIw5qBMNS-nUpK23GoBuP3AzICajERY60vi7JhNY5ocQRRUngiNGtx0lyF3vy22YZ6TiB4zdv_oLgAw8t2shxd0hUQ",
    imageAlt: "Manor house beside a river in Lower Slaughter",
    websiteUrl: "https://www.slaughtersmanor.co.uk/",
  },
  {
    id: "hollow-bottom-cottage",
    name: "Hollow Bottom Cottage",
    description:
      "Converted barn with exposed beams and a hot tub — ideal base for exploring Stow and the Windrush valley.",
    category: "Cottages",
    dogFriendly: true,
    priceLevel: 2,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCBnymjyuuKFKhrAPqgXbo_vrizXxWRsn5F4zk1t57iAJptbRueUMSpN7BHiHoDT-BZjjJHhHY8hvEGTZCVIGD9UNPB34KK1S01FM_AoXXJPxgK_Nbkl9aFOS5ecb2I4pyxmOeok6cM4dq--Hgd9MfhSTsfgSeUZgey5u6GBmEw4pXvJ9RBH-wxUBpGAPbdfOi7T06bwiw3vNKHME1-_ARwbfo0G2HL6DQD8NELLb42ltdT_AXO2JV8WgNaC80C4m0xyNwMhBi5lA",
    imageAlt: "Barn conversion cottage with exposed beams",
    websiteUrl: "https://www.hollowbottomcottage.co.uk/",
  },
];
