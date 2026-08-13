import type { DirectoryFilter, DirectoryListing } from "@/lib/listing-directory";

export type EatListingCategory =
  | "Restaurants"
  | "Pubs & Inns"
  | "Afternoon Tea"
  | "Farm Shops & Cafes";

export type PlacesToEatListing = DirectoryListing & {
  category: EatListingCategory;
  dogFriendly: boolean;
  location: string;
  address: string;
};

export const PLACES_TO_EAT_HERO_IMAGE =
  "https://pwwpxxeploahbcpubhnx.supabase.co/storage/v1/object/public/village-images/places-to-eat-hero.jpg";

export const PLACES_TO_EAT_HERO_ALT =
  "Warm interior of a Cotswold pub with honey-coloured stone walls and candlelit tables";

export const EAT_FILTER_CATEGORIES: DirectoryFilter[] = [
  { id: "all", label: "All Establishments" },
  { id: "restaurants", label: "Restaurants", matchCategory: "Restaurants" },
  { id: "pubs-inns", label: "Pubs & Inns", matchCategory: "Pubs & Inns" },
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
    address: "Church St, Kingham, Chipping Norton OX7 6YA",
    dogFriendly: false,
    priceLevel: 3,
    imageUrl:
      "https://thewildrabbit.co.uk/wp-content/uploads/sites/3/2023/09/terrace-1818-960x1280-1-720x960.jpg",
    imageAlt: "The Wild Rabbit, restaurants in Kingham",
    websiteUrl: "https://thewildrabbit.co.uk",
  },
  {
    id: "the-double-red-duke",
    name: "The Double Red Duke",
    description:
      "A coaching inn that takes its cooking seriously. Open-fire grilling, quality cuts, and interiors that feel considered rather than decorator-led.",
    category: "Pubs & Inns",
    location: "Clanfield, Bampton",
    address: "Bourton Rd, Clanfield, Bampton OX18 2RB",
    dogFriendly: false,
    priceLevel: 3,
    imageUrl:
      "https://www.countrycreatures.com/wp-content/uploads/2026/02/DRDAugustHighRes-51-copy-720x960.jpg",
    imageAlt: "The Double Red Duke, gastropub in Clanfield",
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
    imageAlt: "Daylesford Organic, farm shop and cafe in Kingham",
    websiteUrl: "https://www.daylesford.com",
  },
  {
    id: "the-ox-barn-at-thyme",
    name: "The Ox Barn at Thyme",
    description:
      "Dinner inside a 19th-century barn on the Thyme estate. The setting alone justifies the booking, and the food makes it worth coming back.",
    category: "Restaurants",
    location: "Southrop, Lechlade",
    address: "High St, Southrop, Lechlade GL7 3PW",
    dogFriendly: false,
    priceLevel: 3,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/5f6b4b0c38cfbb7e2af14d5e/2257efa7-c8e4-4e79-a931-6d14a71be43f/Thyme+Social+Posters+%2855%29.png?format=750w",
    imageAlt: "The Ox Barn at Thyme, restaurants in Southrop",
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
    imageAlt: "The Feathered Nest, restaurants in Nether Westcote",
    websiteUrl: "https://thefeatherednestinn.co.uk",
  },
  {
    id: "the-bell-inn-langford",
    name: "The Bell Inn",
    description:
      "Known for wood-fired flatbreads done properly. Unpretentious setting, consistent quality, and the kind of pub food that makes you wish more pubs tried this hard.",
    category: "Pubs & Inns",
    location: "Langford, Lechlade",
    address: "High St, Langford, Lechlade GL7 3LN",
    dogFriendly: false,
    priceLevel: 2,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/58834cf12994caa61ab8d07a/1757353163486-RQ7H25YB6KF6MWEPBTO5/B08AB51E-5978-4834-97FF-95C3C369E6E0.jpeg?format=1500w",
    imageAlt: "The Bell Inn, gastropub in Langford",
    websiteUrl: "https://www.thebelllangford.com",
  },
  {
    id: "the-slaughters-manor",
    name: "The Slaughters Manor",
    description:
      "A 17th-century manor beside the River Eye in Lower Slaughter. The restaurant leans contemporary inside a historic shell, an interesting combination that works.",
    category: "Afternoon Tea",
    location: "Lower Slaughter",
    address: "Lower Slaughter, Cheltenham GL54 2HP",
    dogFriendly: false,
    priceLevel: 3,
    imageUrl:
      "https://slaughtersmanor.co.uk/wp-content/uploads/sites/15/2026/02/SMH-AfternoonTea-02-1000px.jpg",
    imageAlt: "The Slaughters Manor, afternoon tea in Lower Slaughter",
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
    imageAlt: "Buckland Manor, afternoon tea in Buckland",
    websiteUrl: "https://www.bucklandmanor.co.uk",
  },
  {
    id: "the-swan-inn-swinbrook",
    name: "The Swan Inn",
    description:
      "A riverside pub with genuine history. The Mitford sisters drank here. Local game, the River Windrush outside the window, and none of the self-consciousness that ruins similar places.",
    category: "Pubs & Inns",
    location: "Swinbrook, Burford",
    address: "Swinbrook, Burford OX18 4DY",
    dogFriendly: false,
    priceLevel: 2,
    imageUrl:
      "https://www.theswanswinbrook.co.uk/wp-content/uploads/2018/12/The-Swan-Inn-Dining-in-the-Cotswolds.jpg",
    imageAlt: "The Swan Inn, gastropub in Swinbrook",
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
    imageAlt: "Lords of the Manor, afternoon tea in Upper Slaughter",
    websiteUrl: "https://www.lordsofthemanor.com",
  },
  {
    id: "the-ebrington-arms",
    name: "The Ebrington Arms",
    description:
      "Flagstone floors, open fires, and organic pub food that has won awards. Ebrington is an overlooked village, and this pub is the reason to go.",
    category: "Pubs & Inns",
    location: "Ebrington, Chipping Campden",
    address: "Ebrington, Chipping Campden GL55 6NH",
    dogFriendly: false,
    priceLevel: 2,
    imageUrl:
      "https://www.theebringtonarms.co.uk/wp-content/uploads/sites/2/2026/05/eb-website-summer-asparagus-2-port-960x1280-1-720x960.jpg",
    imageAlt: "The Ebrington Arms, gastropub in Ebrington",
    websiteUrl: "https://theebringtonarms.co.uk",
  },
  {
    id: "the-kingham-plough",
    name: "The Kingham Plough",
    description:
      "On the village green in Kingham, with a kitchen that treats the local larder seriously. The balance between proper pub and serious food is harder to get right than it looks.",
    category: "Pubs & Inns",
    location: "Kingham, Chipping Norton",
    address: "3 The Green, Kingham, Chipping Norton OX7 6YD",
    dogFriendly: false,
    priceLevel: 3,
    imageUrl:
      "https://thekinghamplough.co.uk/wp/wp-content/uploads/2025/09/The-Plough005.webp",
    imageAlt: "The Kingham Plough, gastropub in Kingham",
    websiteUrl: "https://thekinghamplough.co.uk",
  },
  {
    id: "the-woolpack-inn-slad",
    name: "The Woolpack Inn",
    description:
      "Laurie Lee's local in the Slad Valley. The view down the valley is reason enough, the food is better than you might expect, and it still feels like a real pub.",
    category: "Pubs & Inns",
    location: "Slad, Stroud",
    address: "Slad Rd, Slad, Stroud GL6 7QA",
    dogFriendly: false,
    priceLevel: 2,
    imageUrl:
      "https://static.wixstatic.com/media/71baee_360ba8387a384c1bafb98d434ca4fa55~mv2.jpg/v1/crop/x_0,y_56,w_3942,h_2130/fill/w_1960,h_1060,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/260303_Woolpack_RoastGroup_017_web.jpg",
    imageAlt: "The Woolpack Inn, gastropub in Slad",
    websiteUrl: "https://www.thewoolpackslad.com/",
  },
  {
    id: "the-chequers-churchill",
    name: "The Chequers",
    description:
      "Dry-aged steaks and flagstone floors in a village pub that doesn't try too hard. The kind of place that gets quietly better every time you go.",
    category: "Pubs & Inns",
    location: "Churchill, Chipping Norton",
    address: "Church Rd, Churchill, Chipping Norton OX7 6NJ",
    dogFriendly: false,
    priceLevel: 3,
    imageUrl:
      "https://cdn.prod.website-files.com/669b621dc0e98dd563ca2a54/67c9e507b3c92d8fb2eb5c6c_221101_TheLamb_115-min.jpg",
    imageAlt: "The Chequers, gastropub in Churchill",
    websiteUrl: "https://www.thechequerschurchill.com",
  },
  {
    id: "the-fox-at-oddington",
    name: "The Fox at Oddington",
    description:
      "An eco-conscious pub in Lower Oddington serving organic game and sourdough pizzas. The combination sounds unlikely, but it works better than it should.",
    category: "Pubs & Inns",
    location: "Lower Oddington, Moreton-in-Marsh",
    address: "Lower Oddington, Moreton-in-Marsh GL56 0UR",
    dogFriendly: false,
    priceLevel: 3,
    imageUrl:
      "https://thefoxatoddington.com/wp-content/uploads/sites/5/2026/06/Burrata-05.06.26-720x960.jpg",
    imageAlt: "The Fox at Oddington, gastropub in Lower Oddington",
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
      "https://images.pexels.com/photos/27868720/pexels-photo-27868720.jpeg",
    imageAlt: "A street scene with vintage cars and people outside Broadway Deli",
    websiteUrl: "https://www.broadwaydeli.co.uk",
  },
  {
    id: "the-village-pub-barnsley",
    name: "The Village Pub",
    description:
      "Across the road from Barnsley House, sharing the same kitchen garden. Comfortable, reliable, and one of the better options in the Cirencester area.",
    category: "Pubs & Inns",
    location: "Barnsley, Cirencester",
    address: "Barnsley, Cirencester GL7 5EF",
    dogFriendly: false,
    priceLevel: 2,
    imageUrl:
      "https://www.thevillagepub.co.uk/media/wzsht1hq/thepigvillagepubsep25-25467.jpg?rxy=0.4924812030075188,0.6852018948793142&width=1160&height=870&format=webp&v=1dc73362d0e1c80",
    imageAlt: "The Village Pub, gastropub in Barnsley",
    websiteUrl: "https://www.thevillagepub.co.uk",
  },
  {
    id: "roots-and-seeds",
    name: "Roots + Seeds",
    description:
      "A kitchen garden café on the Bathurst Estate. The setting inside Cirencester Park is the draw. The food follows the seasons and rarely disappoints.",
    category: "Farm Shops & Cafes",
    location: "Cirencester",
    address: "Bathurst Estate, Cirencester GL7 2BU",
    dogFriendly: false,
    priceLevel: 2,
    imageUrl:
      "https://rootsandseedskitchengarden.co.uk/wp-content/uploads/2024/04/Home-Page-Brunch.jpg",
    imageAlt: "Roots + Seeds, farm shop and cafe in Cirencester",
    websiteUrl: "https://rootsandseedskitchengarden.co.uk",
  },
  {
    id: "the-bathurst-arms",
    name: "The Bathurst Arms",
    description:
      "A riverside pub in North Cerney with an organic certification and a menu built around small plates. Quieter than most and worth seeking out.",
    category: "Pubs & Inns",
    location: "North Cerney, Cirencester",
    address: "New Rd, North Cerney, Cirencester GL7 7BZ",
    dogFriendly: false,
    priceLevel: 2,
    imageUrl:
      "https://www.bathurstarms.co.uk/wp-content/uploads/2026/03/sole-lo-1024x683.jpg",
    imageAlt: "The Bathurst Arms, gastropub in North Cerney",
    websiteUrl: "https://bathurstarms.co.uk",
  },
  {
    id: "the-porch-house",
    name: "The Porch House",
    description:
      "Reputedly England's oldest inn, dating back to 947 AD. Old low-timber beams sit alongside a genuinely ambitious modern British menu, an odd combination that somehow works in Stow-on-the-Wold.",
    category: "Pubs & Inns",
    location: "Stow-on-the-Wold",
    address: "1 Digbeth St, Stow-on-the-Wold GL54 1BN",
    dogFriendly: false,
    priceLevel: 3,
    imageUrl:
      "https://bunny-wp-pullzone-dlshqqoicq.b-cdn.net/wp-content/uploads/2025/12/JAA_1655-scaled.jpg",
    imageAlt: "The Porch House, gastropub in Stow-on-the-Wold",
    websiteUrl: "https://www.porch-house.co.uk",
  },
  {
    id: "the-mount-inn",
    name: "The Mount Inn",
    description:
      "Perched high on a steep hillside in an unspoilt stone village, with classic pub food and valley views that are hard to beat anywhere else in the Cotswolds.",
    category: "Pubs & Inns",
    location: "Stanton, Broadway",
    address: "Stanton, Broadway WR12 7NE",
    dogFriendly: false,
    priceLevel: 2,
    imageUrl:
      "https://www.themountinn.co.uk/wp-content/uploads/2021/06/garden-mount-inn-768x768.jpg",
    imageAlt: "The Mount Inn, gastropub in Stanton",
    websiteUrl: "https://www.themountinn.co.uk",
  },
  {
    id: "the-old-butchers",
    name: "The Old Butchers",
    description:
      "An independently owned former butcher's shop in Stow-on-the-Wold, known for its buzzing atmosphere and a menu built around nose-to-tail cooking and fresh seafood.",
    category: "Restaurants",
    location: "Stow-on-the-Wold",
    address: "7 Park St, Stow-on-the-Wold GL54 1AQ",
    dogFriendly: false,
    priceLevel: 3,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/60d9d2e01167b02d0780ef12/1624888047699-UE93ACVJF66T1MPSIBT1/IMG_2416.jpg?format=1500w",
    imageAlt: "The Old Butchers, restaurants in Stow-on-the-Wold",
    websiteUrl: "https://theoldbutchers.squarespace.com",
  },
  {
    id: "the-wheatsheaf-inn",
    name: "The Wheatsheaf Inn",
    description:
      "An old coaching inn in Northleach with an ivy-draped facade and tiered cottage gardens. Rustic British cooking is the focus, done with more care than the average village pub.",
    category: "Pubs & Inns",
    location: "Northleach",
    address: "West End, Northleach GL54 3EZ",
    dogFriendly: false,
    priceLevel: 2,
    imageUrl:
      "https://www.cotswoldswheatsheaf.com/youngs/uploads/sites/337/2025/02/Sunday-Roast-Campaign-48-768x512.jpg",
    imageAlt: "The Wheatsheaf Inn, gastropub in Northleach",
    websiteUrl: "https://www.countrycreatures.com",
  },
  {
    id: "the-bell-at-sapperton",
    name: "The Bell at Sapperton",
    description:
      "Tucked deep in a quiet valley near Cirencester, easy to miss if you don't know it's there. Seasonal cooking and a genuinely unusual wine wall set it apart from the standard country pub.",
    category: "Pubs & Inns",
    location: "Sapperton, Cirencester",
    address: "Sapperton, Cirencester GL7 6LE",
    dogFriendly: false,
    priceLevel: 2,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/60d9d2e01167b02d0780ef12/1624888036175-Z8X3VM8RVNJSD5TKS2YB/The-Bell-Sapperton-Country-Pub-Food-Photography-Meat-Platter.jpg?format=750w",
    imageAlt: "The Bell at Sapperton, gastropub in Sapperton",
    websiteUrl: "https://www.bellsapperton.co.uk",
  },
  {
    id: "dormy-house",
    name: "Dormy House",
    description:
      "Afternoon tea with a theatrical touch: a macaron trolley wheeled to your table at the end of the service. A more stylish, less traditional take on the format than most Cotswolds hotels offer.",
    category: "Afternoon Tea",
    location: "Broadway",
    address: "Willersey Hill, Broadway WR12 7LF",
    dogFriendly: false,
    priceLevel: 3,
    imageUrl:
      "https://dormyhouse.co.uk/wp-content/uploads/2025/07/750x500_afternoon-tea-1.jpg",
    imageAlt: "Dormy House, afternoon tea in Broadway",
    websiteUrl: "https://dormyhouse.co.uk",
  },
  {
    id: "the-painswick",
    name: "The Painswick",
    description:
      "A relaxed, grazing-style afternoon tea inside a Palladian mansion, with valley views stretching out below. Less formal than the classic tiered-stand tea, which suits some people better than others.",
    category: "Afternoon Tea",
    location: "Painswick",
    address: "Kemps Lane, Painswick GL6 6YB",
    dogFriendly: false,
    priceLevel: 2,
    imageUrl:
      "https://hotelcms-production.imgix.net/thepainswick.co.uk/wp-content/uploads/2026/06/25_Mar_Painswick_HR_52-Large.jpg?fit=crop&crop=faces&w=2000&h=1111&auto=compress,format&strip=all",
    imageAlt: "The Painswick, afternoon tea in Painswick",
    websiteUrl: "https://thepainswick.co.uk",
  },
  {
    id: "swan-hotel-bibury",
    name: "The Swan Hotel",
    description:
      "Bibury's most polished dining address. The walled garden feels secret even when it's full, and afternoon tea is the single busiest service, booked out weeks ahead most of the year.",
    category: "Restaurants",
    location: "Bibury",
    address: "The Swan Hotel, Bibury, Cirencester, Gloucestershire, GL7 5NW",
    dogFriendly: false,
    priceLevel: 2,
    imageUrl:
      "https://www.cotswold-inns-hotels.co.uk/the-swan-hotel/-/media/sites/cotswolds/main-site/food/aw25/venison--braised-faggot0002.jpg?la=en&h=1280&w=1920&hash=F5CF37C1A30D0DCD67C18C00D1B91312",
    imageAlt: "The Swan Hotel, restaurants in Bibury",
    websiteUrl: "https://www.cotswold-inns-hotels.co.uk/the-swan-hotel/",
  },
  {
    id: "catherine-wheel-bibury",
    name: "The Catherine Wheel",
    description:
      "A 15th-century pub a short walk uphill from Arlington Row, family-run since 2009. Locally sourced pub classics, a fire in winter, a garden in summer, and its own car park, which is rarer than it sounds in Bibury.",
    category: "Pubs & Inns",
    location: "Bibury",
    address: "Catherine Wheel, Arlington, Bibury, Cirencester, Gloucestershire, GL7 5ND",
    dogFriendly: false,
    priceLevel: 1,
    imageUrl:
      "https://catherinewheel-bibury.co.uk/wp-content/uploads/2025/11/Catherine-Wheel-front-view.jpg",
    imageAlt: "The Catherine Wheel, gastropub in Bibury",
    websiteUrl: "https://catherinewheel-bibury.co.uk/",
  },
  {
    id: "trout-farm-cafe",
    name: "Trout Farm Cafe",
    description:
      "The café at Bibury Trout Farm, England's oldest working trout farm since 1902. Simple food, trout naturally included, eaten outdoors among the ponds. More a stop between fish-feeding and crazy golf than a destination meal.",
    category: "Farm Shops & Cafes",
    location: "Bibury",
    address: "Bibury Trout Farm, Arlington, Bibury, Cirencester, Gloucestershire, GL7 5NL",
    dogFriendly: false,
    priceLevel: 1,
    imageUrl: "https://biburytroutfarm.co.uk/wp-content/uploads/2025/06/food-2.jpg",
    imageAlt: "Trout Farm Cafe, farm shop and cafe in Bibury",
    websiteUrl: "https://www.biburytroutfarm.co.uk",
  },
  {
    id: "highway-inn-burford",
    name: "The Highway Inn",
    description:
      "A 15th-century coaching inn on Burford's High Street with an unexpected Spanish twist. Toro, its tapas restaurant, does sharing plates rather than the pub food you'd expect. Book ahead for dinner, it's popular with locals too.",
    category: "Pubs & Inns",
    location: "Burford",
    address: "117 High Street, Burford, Oxfordshire, OX18 4RG",
    dogFriendly: false,
    priceLevel: 2,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/66a62c3842c7546b897d0101/6c65a28e-e3e2-4342-8b96-6451e3616533/HW-6.jpg?format=1000w",
    imageAlt: "The Highway Inn, gastropub in Burford",
    websiteUrl: "https://www.highwayburford.com",
  },
  {
    id: "spice-lounge-burford",
    name: "Spice Lounge",
    description:
      "An Indian restaurant on Burford High Street with a loyal following, biryani and jalfrezi are what people come back for. Spread over two floors; there's no ground-floor toilet, worth knowing if mobility is a factor.",
    category: "Restaurants",
    location: "Burford",
    address: "81 High Street, Burford, Oxfordshire, OX18 4QA",
    dogFriendly: false,
    priceLevel: 2,
    imageUrl: "https://www.thespiceloungeburford.co.uk/images/herbs_and_spices.jpg",
    imageAlt: "Spice Lounge, restaurants in Burford",
    websiteUrl: "https://www.thespiceloungeburford.co.uk",
  },
  {
    id: "lynwood-and-co-burford",
    name: "Lynwood and Co",
    description:
      "An Australian-style café with sourdough melts and proper coffee, part of a small local group with its own bakery on the Hatherop estate. Seating is tight and it gets busy, more a stop than a lingering breakfast.",
    category: "Farm Shops & Cafes",
    location: "Burford",
    address: "134 High Street, Burford, Oxfordshire, OX18 4QU",
    dogFriendly: false,
    priceLevel: 1,
    imageUrl:
      "https://static.wixstatic.com/media/bd2bef_ac435a5a00eb42d5a13a9e701a2728b7~mv2.jpg/v1/crop/x_0,y_182,w_1600,h_1077/fill/w_662,h_446,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-04-15%20at%2008_39_16_06a51b3b.jpg",
    imageAlt: "Lynwood and Co, farm shop and cafe in Burford",
    websiteUrl: "https://www.lynwoodandco.com",
  },
  {
    id: "huffkins-burford",
    name: "Huffkins Burford",
    description:
      "A bakery and tearoom on Burford High Street since 1890, in a listed building with original beams. Cream tea is the reason to come, alongside the traditional lardy cake, an old-fashioned treat that's increasingly hard to find.",
    category: "Farm Shops & Cafes",
    location: "Burford",
    address: "98 High Street, Burford, Oxfordshire, OX18 4QF",
    dogFriendly: false,
    priceLevel: 1,
    imageUrl:
      "https://huffkins.com/cdn/shop/files/afternoon-tea-gift-set-gs20010-6_2048x.jpg?v=1697459922",
    imageAlt: "Huffkins Burford, farm shop and cafe in Burford",
    websiteUrl: "https://huffkins.com/pages/burford-cafe-bakery",
  },
  {
    id: "angel-at-burford",
    name: "The Angel at Burford",
    description:
      "Run by the King family since 2011, tucked just off the High Street rather than on it, which catches out a fair few first-time visitors circling the main drag. Multiple Cotswold Pub of the Year wins over the years rather than a one-off award to hang the reputation on. Ask for the walled garden in summer if the log fire inside isn't your thing.",
    category: "Pubs & Inns",
    location: "Burford",
    address: "14 Witney Street, Burford, Oxfordshire, OX18 4SN",
    dogFriendly: false,
    priceLevel: 2,
    imageUrl:
      "https://i0.wp.com/theangelatburford.co.uk/wp-content/uploads/2026/02/Pan-Fried-Seabass-Fillet.png?w=1024&ssl=1",
    imageAlt: "The Angel at Burford, gastropub in Burford",
    websiteUrl: "https://theangelatburford.co.uk/",
  },
  {
    id: "castle-inn-castle-combe",
    name: "The Castle Inn",
    description:
      "Two AA Rosettes for a menu that goes further than the average village pub, seasonal and modern British rather than straightforward pub grub. This is a village that's hosted more than a few film crews over the years.",
    category: "Pubs & Inns",
    location: "Castle Combe",
    address: "West Street, Castle Combe, Wiltshire, SN14 7HN",
    dogFriendly: false,
    priceLevel: 2,
    imageUrl:
      "https://www.exclusive.co.uk/media/0glmksay/the-castle-inn-july-2025-77.jpg?width=2000&height=1530&quality=70&v=1dc0c4935b1e870",
    imageAlt: "The Castle Inn, gastropub in Castle Combe",
    websiteUrl: "https://www.exclusive.co.uk/the-castle-inn",
  },
  {
    id: "bybrook",
    name: "Bybrook",
    description:
      "The Manor House's Michelin-starred restaurant, adults-only for dinner (12 and up), so if you've got younger kids this isn't the meal to plan around unless you're eating in one of the hotel's other spaces instead. Executive chef Robert Potter's tasting menu draws heavily on the hotel's own kitchen garden, which shows up as a genuinely seasonal menu rather than one that just says it is.",
    category: "Restaurants",
    location: "Castle Combe",
    address: "The Manor House Hotel, Castle Combe, Chippenham, SN14 7HX",
    dogFriendly: false,
    priceLevel: 3,
    imageUrl:
      "https://www.exclusive.co.uk/media/kr2cklpo/bybrook-dishes-rp-feb-23-72.jpg?width=968&height=1260&quality=70&v=1da3d71b1a79680",
    imageAlt: "Bybrook, restaurants in Castle Combe",
    websiteUrl: "https://www.exclusive.co.uk/bybrook/",
  },
  {
    id: "salutation-inn-castle-combe",
    name: "The Salutation Inn",
    description:
      "A short drive from Castle Combe at The Gibb crossroads, not actually in the village itself, which keeps it quieter than the pubs in the centre. Seasonal, locally sourced food, and a strong reputation for its Sunday roast.",
    category: "Pubs & Inns",
    location: "Castle Combe",
    address: "The Gibb, Castle Combe, Chippenham, Wiltshire, SN14 7LH",
    dogFriendly: false,
    priceLevel: 1,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/5abb5b9396e76ff863b1527f/1683310216541-5ULO2OQ9JGF1Q4D4QRGV/image-asset.jpeg?format=750w",
    imageAlt: "The Salutation Inn, gastropub in Castle Combe",
    websiteUrl: "https://thesalutationinn.com",
  },
  {
    id: "old-stables-coffee-shop",
    name: "The Old Stables Coffee Shop",
    description:
      "Tucked down an alley off the main street and easy to miss, look for the small sign. Run by Philippa and Yasmin, with a log burner, local art on the walls, and a warm welcome for muddy boots and dogs.",
    category: "Farm Shops & Cafes",
    location: "Castle Combe",
    address: "The Estate Yard, Castle Combe, Wiltshire, SN14 7HU",
    dogFriendly: false,
    priceLevel: 1,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/5e60e05dfc16cf04dcb7c0c7/1630143625083-GW3MFYK0ZI0EM0F3OGQW/image-asset.jpeg?format=1000w",
    imageAlt: "The Old Stables Coffee Shop, farm shop and cafe in Castle Combe",
    websiteUrl: "https://www.theoldstables.co.uk",
  },
  {
    id: "little-picnic-shop-castle-combe",
    name: "The Little Picnic Shop",
    description:
      "Not a café you can walk into, this is a pre-order picnic box service run by Anna, with hampers that come complete with china, blankets, and games. Order ahead; it sells out on busy weekends.",
    category: "Afternoon Tea",
    location: "Castle Combe",
    address: "The Street, Castle Combe, Wiltshire, SN14 7HU",
    dogFriendly: false,
    priceLevel: 1,
    imageUrl:
      "https://pwwpxxeploahbcpubhnx.supabase.co/storage/v1/object/public/village-images/the%20little%20picnic%20shop.webp",
    imageAlt: "The Little Picnic Shop, afternoon tea in Castle Combe",
    websiteUrl: "https://www.facebook.com/littlepicnicshop",
  },
  {
    id: "snowshill-manor-cafe",
    name: "Snowshill Manor Cafe",
    description:
      "The National Trust café at Snowshill Manor, serving jacket potatoes and pasties rather than anything ambitious. Useful for refuelling between the manor's eccentric collection and the garden. Dogs welcome outside, not inside the manor.",
    category: "Farm Shops & Cafes",
    location: "Snowshill",
    address: "Snowshill Manor and Garden, Snowshill, near Broadway, Gloucestershire, WR12 7JU",
    dogFriendly: false,
    priceLevel: 1,
    imageUrl:
      "https://nt.global.ssl.fastly.net/binaries/content/gallery/website/national/library/commercial/fb/food/scone-cream-tea-cream-jam-1460258.jpg?auto=webp&width=1440&crop=16:7&dpr=2",
    imageAlt: "Snowshill Manor Cafe, farm shop and cafe in Snowshill",
    websiteUrl:
      "https://www.nationaltrust.org.uk/visit/gloucestershire-cotswolds/snowshill-manor-and-garden",
  },
  {
    id: "snowshill-arms",
    name: "Snowshill Arms",
    description:
      "A 15th-century village pub serving Donnington ales alongside straightforward pub classics like Gloucester Old Spot sausages and mash. No TV, no music, just a log fire and a skittle alley round the back. Popular with walkers on the Cotswold Way, and it shows on Sundays, when tables go fast without a booking.",
    category: "Pubs & Inns",
    location: "Snowshill",
    address: "Snowshill, Broadway, Worcestershire, WR12 7JU",
    dogFriendly: true,
    priceLevel: 1,
    imageUrl: "http://www.snowshillarms.co.uk/wpimages/wpa5cd2b2c_05_06.jpg",
    imageAlt: "Snowshill Arms, gastropub in Snowshill",
    websiteUrl: "http://www.snowshillarms.co.uk",
  },
  {
    id: "cotswold-lavender-cabin",
    name: "Cotswold Lavender Cabin",
    description:
      "A seasonal cabin at the lavender fields selling lavender scones, ice cream, and drinks, nothing more substantial. Only open while the lavender blooms, roughly mid-June to early August, so check dates before building a trip around it.",
    category: "Farm Shops & Cafes",
    location: "Snowshill",
    address: "Hill Barn Farm, Snowshill, Broadway, Worcestershire, WR12 7JY",
    dogFriendly: false,
    priceLevel: 1,
    imageUrl:
      "https://www.cotswoldlavender.co.uk/cdn/shop/files/IMG_8383.jpg?v=1705577817&width=2000",
    imageAlt: "Cotswold Lavender Cabin, farm shop and cafe in Snowshill",
    websiteUrl: "https://www.cotswoldlavender.co.uk/pages/visit",
  },
  {
    id: "smiths-of-bourton",
    name: "Smiths of Bourton",
    description:
      "Handmade burgers from two brothers who started the business mid-pandemic and took third place at the National Burger Awards in 2025. Thirty seats only, worth booking, and the dry-aged beef comes from the same butcher supplying several of the area's better restaurants.",
    category: "Restaurants",
    location: "Bourton-on-the-Water",
    address: "Victoria Street, Bourton-on-the-Water, Cheltenham, GL54 2BT",
    dogFriendly: false,
    priceLevel: 1,
    imageUrl:
      "https://static.wixstatic.com/media/6968b0_2fae92acbd7b4f7d833c30833950bbd6~mv2.jpeg/v1/fill/w_1365,h_715,al_c,q_85,enc_avif,quality_auto/6968b0_2fae92acbd7b4f7d833c30833950bbd6~mv2.jpeg",
    imageAlt: "Smiths of Bourton, restaurants in Bourton-on-the-Water",
    websiteUrl: "https://www.smithsofbourton.com",
  },
  {
    id: "bakery-on-the-water",
    name: "Bakery on the Water",
    description:
      "A family-run bakery right on the River Windrush, with a riverside terrace that's the real draw. Good pastries and a well-regarded quiche, though it gets busy fast and queues build through the middle of the day.",
    category: "Farm Shops & Cafes",
    location: "Bourton-on-the-Water",
    address: "1 Sherborne Street, Bourton-on-the-Water, Cheltenham, GL54 2BY",
    dogFriendly: false,
    priceLevel: 1,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/66a10ccfd0c26d3683d8f37b/1721830617055-9D8FLGF13IDMOUAMYZ4I/51-1536x1024.jpg?format=2500w",
    imageAlt: "Bakery on the Water, farm shop and cafe in Bourton-on-the-Water",
    websiteUrl: "https://www.bakeryonthewater.co.uk",
  },
  {
    id: "mousetrap-inn-bourton",
    name: "The Mousetrap Inn",
    description:
      "A 19th-century freehouse at the quieter end of Bourton, away from the crush around the river. Craft ales on tap, a proper Sunday roast, and 11 rooms upstairs if you want to stay. Parking is tight, budget extra time.",
    category: "Pubs & Inns",
    location: "Bourton-on-the-Water",
    address: "Lansdowne, Bourton-on-the-Water, Gloucestershire, GL54 2AR",
    dogFriendly: false,
    priceLevel: 2,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/66cf39cd084332020c512fc8/70842078-06ca-4e2b-80f8-a03d9aabe35f/MTSept25-34.jpg?format=2500w",
    imageAlt: "The Mousetrap Inn, gastropub in Bourton-on-the-Water",
    websiteUrl: "https://www.themousetrapinn.co.uk",
  },
  {
    id: "the-old-new-inn",
    name: "The Old New Inn",
    description:
      "The kitchen leans on classic pub dishes rather than trying to reinvent itself, and Sundays mean the set lunch menu only, nothing else. If you're staying at the inn you get 10% off here, which is a reason to eat in rather than walk to one of the busier spots on the main street.",
    category: "Pubs & Inns",
    location: "Bourton-on-the-Water",
    address: "Rissington Road, Bourton-on-the-Water, GL54 2AF",
    dogFriendly: false,
    priceLevel: 2,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/63d3b9c071106579db927e96/1739464535029-03DUVJXIG4ZHGKPOUBA4/Pie+-+Keown+Photo.jpg?format=2500w",
    imageAlt: "The Old New Inn, gastropub in Bourton-on-the-Water",
    websiteUrl: "https://www.theoldnewinn.co.uk/",
  },
  {
    id: "dial-house-restaurant",
    name: "The Dial House",
    description:
      "Fine dining in the centre of Bourton, with Maxi's Tipi Lounge next door for something more casual. Reviews on the food are consistently strong; service has been described as correct rather than warm, so opinions split there.",
    category: "Restaurants",
    location: "Bourton-on-the-Water",
    address: "High Street, Bourton-on-the-Water, GL54 2AN",
    dogFriendly: false,
    priceLevel: 2,
    imageUrl:
      "https://dialhousehotel.com/wp-content/uploads/smoked-salmon-sourdough-755x466.jpg",
    imageAlt: "The Dial House, restaurants in Bourton-on-the-Water",
    websiteUrl: "https://dialhousehotel.com",
  },
  {
    id: "old-stocks-inn-stow",
    name: "Old Stocks Inn",
    description:
      "A 2 AA Rosette restaurant inside a refurbished 17th-century coaching inn on the market square, with head chef Ian Percival running a seasonal British menu. There's a terraced garden for al fresco dining when the weather allows, plus a private dining room for small groups. This is the fine-dining option in Stow rather than a pub lunch, worth booking ahead for dinner especially at weekends.",
    category: "Restaurants",
    location: "Stow-on-the-Wold",
    address: "",
    dogFriendly: false,
    priceLevel: 3,
    imageUrl:
      "https://www.oldstocksinn.com/images/content/food-and-drink-/2025/standard/old-stocks-inn-food-and-drink-2025-standard-2.jpg",
    imageAlt: "Old Stocks Inn, modern British dining in Stow-on-the-Wold",
    websiteUrl: "https://www.oldstocksinn.com",
  },
  {
    id: "the-old-butchers-stow",
    name: "The Old Butcher's",
    description:
      "Run by the Robinson family for over two decades in a former butcher's shop, now Michelin Guide listed. The menu leans heavily on seafood (oysters, scallops, Dover sole) alongside a charcoal grill for meat, split across shellfish, small plates, raw and grilled sections. Portions are generous despite some older reviews suggesting otherwise. Not the cheapest table in Stow, and it gets busy, so book ahead.",
    category: "Restaurants",
    location: "Stow-on-the-Wold",
    address: "7 Park Street, Stow-on-the-Wold, GL54 1AQ",
    dogFriendly: false,
    priceLevel: 3,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/58834cf12994caa61ab8d07a/1757353163486-RQ7H25YB6KF6MWEPBTO5/B08AB51E-5978-4834-97FF-95C3C369E6E0.jpeg?format=1500w",
    imageAlt: "The Old Butcher's, seafood in Stow-on-the-Wold",
    websiteUrl: "",
  },
  {
    id: "huffkins-stow",
    name: "Huffkins Stow",
    description:
      "A family-owned bakery and tea room chain that started in Burford in 1890, now with several branches across the Cotswolds including this one on Stow's market square. Worth knowing it's not a one-off independent, though the scones, cakes and afternoon tea are baked fresh daily on-site. Good option for a straightforward brunch or afternoon tea without the wait some of Stow's other cafes get in peak season.",
    category: "Farm Shops & Cafes",
    location: "Stow-on-the-Wold",
    address: "The Square, Stow-on-the-Wold, GL54 1AB",
    dogFriendly: true,
    priceLevel: 2,
    imageUrl:
      "https://huffkins.com/cdn/shop/files/afternoon-tea-gift-set-gs20010-6_2048x.jpg?v=1697459922",
    imageAlt: "Huffkins, bakery and tea room in Stow-on-the-Wold",
    websiteUrl: "https://huffkins.com/pages/stow-cafe-bakery",
  },
  {
    id: "stow-town-coffee",
    name: "Stow Town Coffee",
    description:
      "One of the smallest commercial coffee roasteries in the UK, roasting on-site since 2010 and supplying mostly local cafes and restaurants within a 20-mile radius. This is a takeaway espresso bar, not a cafe: no food, no table service, just very fresh coffee and a small upstairs lounge if you want to sit with it for a few minutes. Good stop if you want something better than average without needing to sit down for a full cafe experience.",
    category: "Restaurants",
    location: "Stow-on-the-Wold",
    address: "2 Wells Barn, Sheep Street, Stow-on-the-Wold, GL54 1AB",
    dogFriendly: true,
    priceLevel: 1,
    imageUrl:
      "https://le-cdn.website-editor.net/s/f1c86d7503504c54a7b08aaacd07d5cc/dms3rep/multi/opt/Stow+on+the+Wold+Coffee+Shop-1920w.jpg?Expires=1787231811&Signature=az8dZB9TdgmkLlFHy2rEPdT3VHBY0EpF0TulU3HmCdJZ04-FhvctAM0lIvBgiq~3X-qasZno-5WNXVS5WSW8NdAcM9loMMDDmf8SHG3BsCGSlJ-1pLwRFfkgEP~ePwRm~1OFH9KufBkXp58JSl3oYwf9ZcCdC0Gqi2tG1AFUg6EH2wzDXujmS~rkxHb3mNYbI4hl1Gva79etdplhxwVDCZRDkt4zOV4l2GzuSqEhooaDEio8q2FC3zzayX0yjQ0czaCu4VF1HM5S91WSTPuWHA7bpd2QCJvBN2wEQimO2LnMjV6YOvd-EBHRIBF2uD4ekGmKNbq74lBD~jQFIfVBfQ__&Key-Pair-Id=K2NXBXLF010TJW",
    imageAlt: "Stow Town Coffee, micro-roastery in Stow-on-the-Wold",
    websiteUrl: "https://www.stowtowncoffee.co.uk",
  },
  {
    id: "russells-of-broadway",
    name: "Russell's of Broadway",
    description:
      "Steak and seafood grill in the former Gordon Russell furniture showroom on the High Street. The building is 16th century, the food is modern British, and the room is a decent place to spend an evening. Eight boutique bedrooms upstairs if you want to stay.",
    category: "Restaurants",
    location: "Broadway",
    address: "20 High Street, Broadway WR12 7DT",
    dogFriendly: false,
    priceLevel: 3,
    imageUrl:
      "https://static.wixstatic.com/media/611677_7d6ecf9f86fb49a49d5eb3174ec133fc~mv2.jpg/v1/fill/w_1706,h_1024,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/CoteDeBoeuf_white_web.jpg",
    imageAlt: "Russell's of Broadway, steak and seafood restaurant on the High Street",
    websiteUrl: "https://www.russellsofbroadway.co.uk",
  },
  {
    id: "tavern-by-james-martin",
    name: "Tavern by James Martin",
    description:
      "The more relaxed of the two James Martin venues at The Lygon Arms. Blackboard menu of small plates, local ales and ciders, open fire. Good option if you want something informal without leaving the High Street.",
    category: "Pubs & Inns",
    location: "Broadway",
    address: "High Street, Broadway WR12 7DU",
    dogFriendly: false,
    priceLevel: 2,
    imageUrl:
      "https://www.lygonarmshotel.co.uk/media/y4ob1b1n/cpg_lygon_168.jpg?anchor=center&mode=crop&quality=70&width=730&height=444&rnd=133517048411230000",
    imageAlt: "Tavern by James Martin at The Lygon Arms, Broadway",
    websiteUrl: "https://www.lygonarmshotel.co.uk/eat-and-drink/tavern/",
  },
  {
    id: "the-swan-broadway",
    name: "The Swan (Broadway)",
    description:
      "Traditional pub on the High Street with a good selection of ales and straightforward food. A reliable option if you want something unfussy in the centre of the village.",
    category: "Pubs & Inns",
    location: "Broadway",
    address: "High Street, Broadway WR12 7AE",
    dogFriendly: true,
    priceLevel: 2,
    imageUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/d3/cb/bb/caption.jpg?w=1100&h=-1&s=1",
    imageAlt: "The Swan, pub on the High Street in Broadway",
    websiteUrl: "https://www.theswanbroadway.co.uk",
  },
  {
    id: "the-bell-broadway",
    name: "The Bell (Broadway)",
    description:
      "Village pub with a relaxed atmosphere, good for a drink after a walk or a straightforward lunch without the formality of the High Street restaurants.",
    category: "Pubs & Inns",
    location: "Broadway",
    address: "High Street, Broadway WR12 7DT",
    dogFriendly: true,
    priceLevel: 1,
    imageUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/92/26/c9/caption.jpg?w=1400&h=-1&s=1",
    imageAlt: "The Bell, pub in Broadway",
    websiteUrl: "https://www.thebellbroadway.co.uk",
  },
];
