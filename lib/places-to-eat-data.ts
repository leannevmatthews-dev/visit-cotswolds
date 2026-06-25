import type { DirectoryFilter, DirectoryListing } from "@/lib/listing-directory";

export type EatListingCategory =
  | "Restaurants"
  | "Pubs"
  | "Afternoon Tea"
  | "Gastropubs"
  | "Farm Shops & Cafes";

export type PlacesToEatListing = DirectoryListing & {
  category: EatListingCategory;
  dogFriendly: boolean;
  location: string;
  address: string;
};

export const PLACES_TO_EAT_HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC4r1zr-jb914gcZ_b1OgvlWSS4Qe6gUUrZtgoxCpTATM8WBgQEafMKpJtGDDgPeZNBkVMas_v-dc-j_N1RRvBOOO72TgKswnDF8GysEBhg9vXcRWGJTJvnHvFQpmLPxapIMyyV7Rb6GMYswdOB4TSLkerCDPfFM9bKiIo7beoKnNumqiEWwsuu-jGuZMTeIniElTV-JKiUBzZ0jcz3KGPITK-e48aWf0qwVEW10m2dT1qSn4lNqS0AVscY82jF7bqL6f8KrNi5aw";

export const PLACES_TO_EAT_HERO_ALT =
  "Warm interior of a Cotswold pub with honey-coloured stone walls and candlelit tables";

export const EAT_FILTER_CATEGORIES: DirectoryFilter[] = [
  { id: "all", label: "All Establishments" },
  { id: "restaurants", label: "Restaurants", matchCategory: "Restaurants" },
  { id: "gastropubs", label: "Gastropubs", matchCategory: "Gastropubs" },
  {
    id: "farm-shops-cafes",
    label: "Farm Shops & Cafes",
    matchCategory: "Farm Shops & Cafes",
  },
  {
    id: "afternoon-tea",
    label: "Afternoon Tea",
    matchCategory: "Afternoon Tea",
  },
  { id: "dog-friendly", label: "Dog Friendly", requireFlag: "dogFriendly" },
];

export const PLACES_TO_EAT_LISTINGS: PlacesToEatListing[] = [
  {
    id: "the-wild-rabbit",
    name: "The Wild Rabbit",
    description:
      "One of the most talked-about restaurants in the Cotswolds. The open kitchen is the focus, the food is serious, and the stone inn setting does everything right.",
    category: "Restaurants",
    location: "Kingham, Chipping Norton",
    address: "Church St, Kingham, Chipping Norton OX7 6YI",
    dogFriendly: false,
    priceLevel: 3,
    imageUrl:
      "https://thewildrabbit.co.uk/wp-content/uploads/sites/3/2023/09/terrace-1818-960x1280-1-720x960.jpg",
    imageAlt: "The Wild Rabbit dining room interior",
    websiteUrl: "https://thewildrabbit.co.uk",
  },
  {
    id: "the-double-red-duke",
    name: "The Double Red Duke",
    description:
      "A coaching inn that takes its cooking seriously. Open-fire grilling, quality cuts, and interiors that feel considered rather than decorator-led.",
    category: "Gastropubs",
    location: "Clanfield, Bampton",
    address: "Bourton Rd, Clanfield, Bampton OX18 2RB",
    dogFriendly: false,
    priceLevel: 3,
    imageUrl:
      "https://www.countrycreatures.com/wp-content/uploads/2026/02/DRDAugustHighRes-51-copy-720x960.jpg",
    imageAlt: "The Double Red Duke exterior",
    websiteUrl: "https://www.countrycreatures.com",
  },
  {
    id: "daylesford-organic",
    name: "Daylesford Organic",
    description:
      "Part farm shop, part café, part Cotswolds institution. Worth stopping for even if you only buy cheese. The stone barn setting is genuinely impressive.",
    category: "Farm Shops & Cafes",
    location: "Kingham, Moreton-in-Marsh",
    address: "Daylesford, Kingham, Moreton-in-Marsh GL56 0YG",
    dogFriendly: false,
    priceLevel: 3,
    imageUrl:
      "https://www.daylesford.com/media/wysiwyg/Demo-Widgets-Images/VISIT.jpg?format=webp&quality=85",
    imageAlt: "Daylesford Organic farm shop barns",
    websiteUrl: "https://www.daylesford.com",
  },
  {
    id: "the-ox-barn-at-thyme",
    name: "The Ox Barn at Thyme",
    description:
      "Dinner inside a 19th-century barn on the Thyme estate. The setting alone justifies the booking — the food makes it worth coming back.",
    category: "Restaurants",
    location: "Southrop, Lechlade",
    address: "High St, Southrop, Lechlade GL7 3PW",
    dogFriendly: false,
    priceLevel: 3,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/5f6b4b0c38cfbb7e2af14d5e/2257efa7-c8e4-4e79-a931-6d14a71be43f/Thyme+Social+Posters+%2855%29.png?format=750w",
    imageAlt: "The Ox Barn at Thyme restaurant interior",
    websiteUrl: "https://www.thyme.co.uk",
  },
  {
    id: "the-feathered-nest",
    name: "The Feathered Nest",
    description:
      "Perched on a ridge above the Evenlode Valley with views that stop conversation. The cooking has earned serious recognition and the location is hard to beat.",
    category: "Restaurants",
    location: "Nether Westcote, Chipping Norton",
    address: "Nether Westcote, Chipping Norton OX7 6SD",
    dogFriendly: false,
    priceLevel: 3,
    imageUrl:
      "https://thefeatherednestinn.co.uk/wp-content/uploads/2025/02/ED_8420-copy-340x406.jpg",
    imageAlt: "The Feathered Nest terrace with valley views",
    websiteUrl: "https://thefeatherednestinn.co.uk",
  },
  {
    id: "the-bell-inn-langford",
    name: "The Bell Inn",
    description:
      "Known for wood-fired flatbreads done properly. Unpretentious setting, consistent quality, and the kind of pub food that makes you wish more pubs tried this hard.",
    category: "Gastropubs",
    location: "Langford, Lechlade",
    address: "High St, Langford, Lechlade GL7 3LN",
    dogFriendly: false,
    priceLevel: 2,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/58834cf12994caa61ab8d07a/1757353163486-RQ7H25YB6KF6MWEPBTO5/B08AB51E-5978-4834-97FF-95C3C369E6E0.jpeg?format=1500w",
    imageAlt: "The Bell Inn Langford exterior",
    websiteUrl: "https://www.thebelllangford.com",
  },
  {
    id: "the-slaughters-manor",
    name: "The Slaughters Manor",
    description:
      "A 17th-century manor beside the River Eye in Lower Slaughter. The restaurant leans contemporary inside a historic shell — an interesting combination that works.",
    category: "Afternoon Tea",
    location: "Lower Slaughter",
    address: "Lower Slaughter, Cheltenham GL54 2HP",
    dogFriendly: false,
    priceLevel: 3,
    imageUrl:
      "https://slaughtersmanor.co.uk/wp-content/uploads/sites/15/2026/02/SMH-AfternoonTea-02-1000px.jpg",
    imageAlt: "The Slaughters Manor exterior",
    websiteUrl: "https://www.slaughtersmanor.co.uk",
  },
  {
    id: "buckland-manor",
    name: "Buckland Manor",
    description:
      "A 13th-century manor with ten acres of gardens and a dining room that takes produce seriously. One of the quieter options in the Broadway area.",
    category: "Afternoon Tea",
    location: "Buckland, Broadway",
    address: "Buckland, Broadway WR12 7LY",
    dogFriendly: false,
    priceLevel: 3,
    imageUrl:
      "https://bucklandmanor.co.uk/wp-content/uploads/sites/8/2026/01/4H0A8786-4-1000px.jpg",
    imageAlt: "Buckland Manor dining room",
    websiteUrl: "https://www.bucklandmanor.co.uk",
  },
  {
    id: "the-swan-inn-swinbrook",
    name: "The Swan Inn",
    description:
      "A riverside pub with genuine history — the Mitford sisters drank here. Local game, the River Windrush outside the window, and none of the self-consciousness that ruins similar places.",
    category: "Gastropubs",
    location: "Swinbrook, Burford",
    address: "Swinbrook, Burford OX18 4DY",
    dogFriendly: false,
    priceLevel: 2,
    imageUrl:
      "https://www.theswanswinbrook.co.uk/wp-content/uploads/2018/12/The-Swan-Inn-Dining-in-the-Cotswolds.jpg",
    imageAlt: "The Swan Inn Swinbrook by the River Windrush",
    websiteUrl: "https://www.theswanswinbrook.co.uk/",
  },
  {
    id: "lords-of-the-manor",
    name: "Lords of the Manor",
    description:
      "Traditional fine dining in Upper Slaughter, one of the region's most complete villages. Formal without being stiff, and the setting is as good as it gets.",
    category: "Afternoon Tea",
    location: "Upper Slaughter",
    address: "Upper Slaughter, Cheltenham GL54 2JD",
    dogFriendly: false,
    priceLevel: 3,
    imageUrl:
      "https://www.lordsofthemanor.com/wp-content/uploads/2022/08/Untitled-design-88-9c5e34d6be63cfbefb7846cf4248d2ae-768x500.png",
    imageAlt: "Lords of the Manor exterior",
    websiteUrl: "https://www.lordsofthemanor.com",
  },
  {
    id: "the-ebrington-arms",
    name: "The Ebrington Arms",
    description:
      "Flagstone floors, open fires, and organic pub food that has won awards. Ebrington is an overlooked village — this pub is the reason to go.",
    category: "Gastropubs",
    location: "Ebrington, Chipping Campden",
    address: "Ebrington, Chipping Campden GL55 6NH",
    dogFriendly: false,
    priceLevel: 2,
    imageUrl:
      "https://www.theebringtonarms.co.uk/wp-content/uploads/sites/2/2026/05/eb-website-summer-asparagus-2-port-960x1280-1-720x960.jpg",
    imageAlt: "The Ebrington Arms interior",
    websiteUrl: "https://theebringtonarms.co.uk",
  },
  {
    id: "the-kingham-plough",
    name: "The Kingham Plough",
    description:
      "On the village green in Kingham, with a kitchen that treats the local larder seriously. The balance between proper pub and serious food is harder to get right than it looks.",
    category: "Gastropubs",
    location: "Kingham, Chipping Norton",
    address: "3 The Green, Kingham, Chipping Norton OX7 6YD",
    dogFriendly: false,
    priceLevel: 3,
    imageUrl:
      "https://thekinghamplough.co.uk/wp/wp-content/uploads/2025/09/The-Plough005.webp",
    imageAlt: "The Kingham Plough exterior on the village green",
    websiteUrl: "https://thekinghamplough.co.uk",
  },
  {
    id: "the-woolpack-inn-slad",
    name: "The Woolpack Inn",
    description:
      "Laurie Lee's local in the Slad Valley. The view down the valley is reason enough, the food is better than you might expect, and it still feels like a real pub.",
    category: "Gastropubs",
    location: "Slad, Stroud",
    address: "Slad Rd, Slad, Stroud GL6 7QA",
    dogFriendly: false,
    priceLevel: 2,
    imageUrl:
      "https://static.wixstatic.com/media/71baee_360ba8387a384c1bafb98d434ca4fa55~mv2.jpg/v1/crop/x_0,y_56,w_3942,h_2130/fill/w_1960,h_1060,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/260303_Woolpack_RoastGroup_017_web.jpg",
    imageAlt: "The Woolpack Inn Slad Valley",
    websiteUrl: "https://www.thewoolpackslad.com/",
  },
  {
    id: "the-chequers-churchill",
    name: "The Chequers",
    description:
      "Dry-aged steaks and flagstone floors in a village pub that doesn't try too hard. The kind of place that gets quietly better every time you go.",
    category: "Gastropubs",
    location: "Churchill, Chipping Norton",
    address: "Church Rd, Churchill, Chipping Norton OX7 6NJ",
    dogFriendly: false,
    priceLevel: 3,
    imageUrl:
      "https://cdn.prod.website-files.com/669b621dc0e98dd563ca2a54/67c9e507b3c92d8fb2eb5c6c_221101_TheLamb_115-min.jpg",
    imageAlt: "The Chequers Churchill dining room",
    websiteUrl: "https://www.thechequerschurchill.com",
  },
  {
    id: "the-fox-at-oddington",
    name: "The Fox at Oddington",
    description:
      "An eco-conscious pub in Lower Oddington serving organic game and sourdough pizzas. The combination sounds unlikely — it works better than it should.",
    category: "Gastropubs",
    location: "Lower Oddington, Moreton-in-Marsh",
    address: "Lower Oddington, Moreton-in-Marsh GL56 0UR",
    dogFriendly: false,
    priceLevel: 3,
    imageUrl:
      "https://thefoxatoddington.com/wp-content/uploads/sites/5/2026/06/Burrata-05.06.26-720x960.jpg",
    imageAlt: "The Fox at Oddington exterior",
    websiteUrl: "https://thefoxatoddington.com",
  },
  {
    id: "broadway-deli",
    name: "Broadway Deli",
    description:
      "An independent deli and café on Broadway's high street with a courtyard garden that comes into its own in summer. Good for breakfast or lunch between villages.",
    category: "Farm Shops & Cafes",
    location: "Broadway",
    address: "29 High St, Broadway WR12 7DP",
    dogFriendly: false,
    priceLevel: 2,
    imageUrl:
      "https://www.lionhearth.co.uk/wp-content/uploads/2022/08/img20.jpg",
    imageAlt: "Broadway Deli courtyard garden",
    websiteUrl: "https://www.broadwaydeli.co.uk",
  },
  {
    id: "the-village-pub-barnsley",
    name: "The Village Pub",
    description:
      "Across the road from Barnsley House, sharing the same kitchen garden. Comfortable, reliable, and one of the better options in the Cirencester area.",
    category: "Gastropubs",
    location: "Barnsley, Cirencester",
    address: "Barnsley, Cirencester GL7 5EF",
    dogFriendly: false,
    priceLevel: 2,
    imageUrl:
      "https://www.thevillagepub.co.uk/media/wzsht1hq/thepigvillagepubsep25-25467.jpg?rxy=0.4924812030075188,0.6852018948793142&width=1160&height=870&format=webp&v=1dc73362d0e1c80",
    imageAlt: "The Village Pub Barnsley exterior",
    websiteUrl: "https://www.thevillagepub.co.uk",
  },
  {
    id: "roots-and-seeds",
    name: "Roots + Seeds",
    description:
      "A kitchen garden café on the Bathurst Estate. The setting inside Cirencester Park is the draw — the food follows the seasons and rarely disappoints.",
    category: "Farm Shops & Cafes",
    location: "Cirencester",
    address: "Bathurst Estate, Cirencester GL7 2BU",
    dogFriendly: false,
    priceLevel: 2,
    imageUrl:
      "https://rootsandseedskitchengarden.co.uk/wp-content/uploads/2024/04/Home-Page-Brunch.jpg",
    imageAlt: "Roots and Seeds kitchen garden cafe",
    websiteUrl: "https://rootsandseeds.co.uk",
  },
  {
    id: "the-bathurst-arms",
    name: "The Bathurst Arms",
    description:
      "A riverside pub in North Cerney with an organic certification and a menu built around small plates. Quieter than most and worth seeking out.",
    category: "Gastropubs",
    location: "North Cerney, Cirencester",
    address: "New Rd, North Cerney, Cirencester GL7 7BZ",
    dogFriendly: false,
    priceLevel: 2,
    imageUrl:
      "https://www.bathurstarms.co.uk/wp-content/uploads/2026/03/sole-lo-1024x683.jpg",
    imageAlt: "The Bathurst Arms riverside",
    websiteUrl: "https://bathurstarms.co.uk",
  },
  {
    id: "the-porch-house",
    name: "The Porch House",
    description:
      "Reputedly England's oldest inn dating back to 947 AD, boasting ancient low-timber beams and incredible upscale modern gastro-cooking.",
    category: "Gastropubs",
    location: "Stow-on-the-Wold",
    address: "1 Digbeth St, Stow-on-the-Wold GL54 1BN",
    dogFriendly: false,
    priceLevel: 3,
    imageUrl:
      "https://bunny-wp-pullzone-dlshqqoicq.b-cdn.net/wp-content/uploads/2025/12/JAA_1655-scaled.jpg",
    imageAlt: "The Porch House Stow-on-the-Wold exterior",
    websiteUrl: "https://www.porch-house.co.uk",
  },
  {
    id: "the-mount-inn",
    name: "The Mount Inn",
    description:
      "Perched high on a steep hillside within an untouched stone village, offering classic pub fare alongside unbeatable panoramic valley vistas.",
    category: "Gastropubs",
    location: "Stanton, Broadway",
    address: "Stanton, Broadway WR12 7NE",
    dogFriendly: false,
    priceLevel: 2,
    imageUrl:
      "https://www.themountinn.co.uk/wp-content/uploads/2021/06/garden-mount-inn-768x768.jpg",
    imageAlt: "The Mount Inn Stanton with panoramic views",
    websiteUrl: "https://www.themountinn.co.uk",
  },
  {
    id: "the-old-butchers",
    name: "The Old Butchers",
    description:
      "A chic, independently owned former butcher's shop beloved for its buzzing atmosphere and outstanding nose-to-tail and fresh seafood menus.",
    category: "Restaurants",
    location: "Stow-on-the-Wold",
    address: "7 Park St, Stow-on-the-Wold GL54 1AQ",
    dogFriendly: false,
    priceLevel: 3,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/60d9d2e01167b02d0780ef12/1624888047699-UE93ACVJF66T1MPSIBT1/IMG_2416.jpg?format=1500w",
    imageAlt: "The Old Butchers dining room Stow-on-the-Wold",
    websiteUrl: "https://theoldbutchers.squarespace.com",
  },
  {
    id: "the-wheatsheaf-inn",
    name: "The Wheatsheaf Inn",
    description:
      "A quintessential old coaching inn with an exceptional ivy-draped facade, tiered cottage gardens, and a passionate focus on rustic British cooking.",
    category: "Gastropubs",
    location: "Northleach",
    address: "West End, Northleach GL54 3EZ",
    dogFriendly: false,
    priceLevel: 2,
    imageUrl:
      "https://www.cotswoldswheatsheaf.com/youngs/uploads/sites/337/2025/02/Sunday-Roast-Campaign-48-768x512.jpg",
    imageAlt: "The Wheatsheaf Inn Northleach exterior",
    websiteUrl: "https://www.countrycreatures.com",
  },
  {
    id: "the-bell-at-sapperton",
    name: "The Bell at Sapperton",
    description:
      "A beautifully hidden country pub tucked deep inside a tranquil valley, offering exceptional seasonal cooking and a unique wine wall.",
    category: "Gastropubs",
    location: "Sapperton, Cirencester",
    address: "Sapperton, Cirencester GL7 6LE",
    dogFriendly: false,
    priceLevel: 2,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/60d9d2e01167b02d0780ef12/1624888036175-Z8X3VM8RVNJSD5TKS2YB/The-Bell-Sapperton-Country-Pub-Food-Photography-Meat-Platter.jpg?format=750w",
    imageAlt: "The Bell at Sapperton exterior",
    websiteUrl: "https://www.bellsapperton.co.uk",
  },
  {
    id: "dormy-house",
    name: "Dormy House",
    description:
      "Reimagined with stylish flair, their afternoon tea concludes with a whimsical, theatrical macaron trolley rolled right to your table.",
    category: "Afternoon Tea",
    location: "Broadway",
    address: "Willersey Hill, Broadway WR12 7LF",
    dogFriendly: false,
    priceLevel: 3,
    imageUrl:
      "https://dormyhouse.co.uk/wp-content/uploads/2025/07/750x500_afternoon-tea-1.jpg",
    imageAlt: "Dormy House afternoon tea garden",
    websiteUrl: "https://dormyhouse.co.uk",
  },
  {
    id: "the-painswick",
    name: "The Painswick",
    description:
      "A delightfully playful, relaxed grazing style service set within a chic Palladian mansion boasting sweeping valley views.",
    category: "Afternoon Tea",
    location: "Painswick",
    address: "Kemps Lane, Painswick GL6 6YB",
    dogFriendly: false,
    priceLevel: 2,
    imageUrl:
      "https://hotelcms-production.imgix.net/thepainswick.co.uk/wp-content/uploads/2026/06/25_Mar_Painswick_HR_52-Large.jpg?fit=crop&crop=faces&w=2000&h=1111&auto=compress,format&strip=all",
    imageAlt: "The Painswick afternoon tea grazing spread",
    websiteUrl: "https://thepainswick.co.uk",
  },
];
