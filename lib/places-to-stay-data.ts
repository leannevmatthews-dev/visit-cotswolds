import type { DirectoryFilter, DirectoryListing } from "@/lib/listing-directory";

export type StayListingCategory =
  | "Country Estate"
  | "Spa Hotel"
  | "Exclusive Use"
  | "Boutique Hotel"
  | "Manor House"
  | "Inn"
  | "Historic Inn";

export type PlacesToStayListing = DirectoryListing & {
  category: StayListingCategory;
  dogFriendly: boolean;
  location: string;
  address: string;
  pricePerNight: string;
};

export const PLACES_TO_STAY_HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC3SQJawZ0K0iOlJ1Dft84V37Cvdc1CB3ESvJp1KgC4KTTGaVggUW997wXNuiJc1mDMQr1DDAD0TogywyQIp3ou3QaublEucb3JAuGYnPo7lju8WiZ9cPlxtDsVyGYiEcIosElxXz3uo1hUrK6uJrCnfv7LsbLNtyG5oYClwBE-aP5yvktoVsjCB5mfWK0JS9r-7Zn2vdr0Vz9kpohWFjD62oEGMSPsnk3OrexShAKpK1JR1hS5aqSJ90GR9bsu9GDRsnL6QBvUxQ";

export const STAY_FILTER_CATEGORIES: DirectoryFilter[] = [
  { id: "all", label: "All Properties" },
  {
    id: "country-estate",
    label: "Country Estate",
    matchCategory: "Country Estate",
  },
  { id: "spa-hotel", label: "Spa Hotel", matchCategory: "Spa Hotel" },
  {
    id: "exclusive-use",
    label: "Exclusive Use",
    matchCategory: "Exclusive Use",
  },
  {
    id: "boutique-hotel",
    label: "Boutique Hotel",
    matchCategory: "Boutique Hotel",
  },
  { id: "manor-house", label: "Manor House", matchCategory: "Manor House" },
  { id: "inn", label: "Inn", matchCategory: "Inn" },
  { id: "historic-inn", label: "Historic Inn", matchCategory: "Historic Inn" },
];

export const PLACES_TO_STAY_LISTINGS: PlacesToStayListing[] = [
  {
    id: "thyme",
    name: "Thyme",
    description:
      "A restored estate in Southrop with its own farm, spa, cookery school, and pub. You can spend three days here without leaving the grounds — most people do.",
    category: "Country Estate",
    location: "Southrop, Lechlade",
    address: "Southrop, Lechlade GL7 3PX",
    dogFriendly: false,
    priceLevel: 3,
    pricePerNight: "£500+",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/5f6b4b0c38cfbb7e2af14d5e/905d135c-12f0-4967-97bc-251c8e5a543a/Sidalcea+-+Elegant+-+Farmhouse+-+FreddieEllams+-+mar24+-++%281%29.jpg?format=1500w",
    imageAlt: "Thyme estate Southrop",
    websiteUrl: "https://www.thyme.co.uk/",
  },
  {
    id: "dormy-house",
    name: "Dormy House",
    description:
      "A farmhouse hotel on the hills above Broadway with a spa that gets consistently strong reviews. The rooms are well done and the whole operation runs smoothly.",
    category: "Spa Hotel",
    location: "Broadway",
    address: "Willersey Hill, Broadway WR12 7LF",
    dogFriendly: false,
    priceLevel: 3,
    pricePerNight: "£400+",
    imageUrl:
      "https://dormyhouse.co.uk/wp-content/uploads/2023/07/750x500_Dormy_The-Studio-5.jpg",
    imageAlt: "Dormy House studio room",
    websiteUrl: "https://dormyhouse.co.uk/",
  },
  {
    id: "foxhill-manor",
    name: "Foxhill Manor",
    description:
      "All-inclusive and genuinely private — the whole manor is yours. One of the few places in the Cotswolds where you won't share your stay with strangers.",
    category: "Exclusive Use",
    location: "Broadway",
    address: "Farncombe Estate, Broadway WR12 7LJ",
    dogFriendly: false,
    priceLevel: 3,
    pricePerNight: "£600+",
    imageUrl: "https://foxhillmanor.com/wp-content/uploads/2026/05/Oak-1.jpg",
    imageAlt: "Foxhill Manor Oak room",
    websiteUrl: "https://www.foxhillmanor.com/",
  },
  {
    id: "the-fish-hotel",
    name: "The Fish Hotel",
    description:
      "Treehouses, shepherd's huts, and cabin suites spread across the Farncombe Estate. A different kind of Cotswolds stay for those who don't want a traditional hotel.",
    category: "Boutique Hotel",
    location: "Broadway",
    address: "Farncombe Estate, Broadway WR12 7LH",
    dogFriendly: false,
    priceLevel: 2,
    pricePerNight: "£250+",
    imageUrl:
      "https://thefishhotel.co.uk/wp-content/uploads/2023/07/750x500_Fish_small-suite.jpg",
    imageAlt: "The Fish Hotel small suite",
    websiteUrl: "https://www.thefishhotel.co.uk/",
  },
  {
    id: "the-painswick",
    name: "The Painswick",
    description:
      "A Palladian villa in Painswick with valley views and interiors that feel more considered than most country house hotels. Fourteen rooms, which keeps it genuinely quiet.",
    category: "Boutique Hotel",
    location: "Painswick",
    address: "Kemps Lane, Painswick GL6 6YB",
    dogFriendly: false,
    priceLevel: 2,
    pricePerNight: "£250+",
    imageUrl:
      "https://hotelcms-production.imgix.net/thepainswick.co.uk/wp-content/uploads/2026/05/26_June_Painswick_WR_-28.jpg?fit=crop&crop=faces&w=1600&h=1478&auto=compress,format&strip=all",
    imageAlt: "The Painswick hotel room",
    websiteUrl: "https://www.thepainswick.co.uk/",
  },
  {
    id: "old-stocks-inn",
    name: "Old Stocks Inn",
    description:
      "A 17th-century inn on Stow's market square, renovated without losing its character. Stow is well placed for the central Cotswolds and this is the best option in town.",
    category: "Inn",
    location: "Stow-on-the-Wold",
    address: "Market Square, Stow-on-the-Wold GL54 1AF",
    dogFriendly: false,
    priceLevel: 2,
    pricePerNight: "£200+",
    imageUrl:
      "https://www.oldstocksinn.com/images/content/standard-images/rooms/house/room-12/rooms-house-12-standard-2.jpg",
    imageAlt: "Old Stocks Inn room",
    websiteUrl: "http://www.oldstocksinn.com/",
  },
  {
    id: "the-wild-rabbit-rooms",
    name: "The Wild Rabbit",
    description:
      "Six rooms above one of the best restaurants in the Cotswolds. Kingham is a proper village and this is the right way to stay in it.",
    category: "Inn",
    location: "Kingham",
    address: "Church St, Kingham OX7 6YA",
    dogFriendly: false,
    priceLevel: 3,
    pricePerNight: "£300+",
    imageUrl:
      "https://bookings.thewildrabbit.co.uk/image/fit/640x480/storage/46-rooms-6537c17a9ded6.jpg",
    imageAlt: "The Wild Rabbit room Kingham",
    websiteUrl: "https://thewildrabbit.co.uk/",
  },
  {
    id: "buckland-manor",
    name: "Buckland Manor",
    description:
      "A 13th-century manor in ten acres of gardens between Broadway and the hills. Formal in the best sense — attentive service, serious cooking, genuine quiet.",
    category: "Manor House",
    location: "Buckland, Broadway",
    address: "Buckland, Broadway WR12 7LY",
    dogFriendly: false,
    priceLevel: 3,
    pricePerNight: "£400+",
    imageUrl:
      "https://bucklandmanor.co.uk/wp-content/uploads/sites/8/2026/01/BMA-Bedrooms-SupFourPost-Oak-Old-Photo-1000px.jpg",
    imageAlt: "Buckland Manor four poster bedroom",
    websiteUrl: "https://www.bucklandmanor.co.uk/",
  },
  {
    id: "the-feathered-nest",
    name: "The Feathered Nest",
    description:
      "Four rooms above the restaurant in Nether Westcote with views across the Evenlode Valley. The valley setting is genuinely impressive — book a room that faces it.",
    category: "Inn",
    location: "Nether Westcote",
    address: "Nether Westcote OX7 6SD",
    dogFriendly: false,
    priceLevel: 2,
    pricePerNight: "£250+",
    imageUrl:
      "https://thefeatherednestinn.co.uk/wp-content/uploads/2023/03/G34A6030-640x480.jpg",
    imageAlt: "The Feathered Nest Inn room",
    websiteUrl: "http://www.thefeatherednestinn.co.uk/",
  },
  {
    id: "burleigh-court",
    name: "Burleigh Court",
    description:
      "A Grade II listed manor on the Golden Valley near Minchinhampton. Less well known than most on this list, which is part of its appeal.",
    category: "Manor House",
    location: "Minchinhampton",
    address: "Minchinhampton, Stroud GL5 2PF",
    dogFriendly: false,
    priceLevel: 2,
    pricePerNight: "£200+",
    imageUrl:
      "https://r.profitroom.com/burleighcourtcotswolds/images/gallery/29d8ac38-3d84-4ec8-8fbb-1eee8ae830dd.jpeg",
    imageAlt: "Burleigh Court manor house",
    websiteUrl: "https://burleighcourtcotswolds.co.uk/",
  },
  {
    id: "the-old-bell-hotel",
    name: "The Old Bell Hotel",
    description:
      "Claims to be England's oldest hotel, with records going back to 1220. Malmesbury is on the edge of the Cotswolds but the building alone is worth the detour.",
    category: "Historic Inn",
    location: "Malmesbury",
    address: "Abbey Row, Malmesbury SN16 0BW",
    dogFriendly: false,
    priceLevel: 3,
    pricePerNight: "£250+",
    imageUrl:
      "https://hotelcms-production.imgix.net/oldbellhotel.co.uk/wp-content/uploads/2022/05/Master_Room-Athelstan.jpg",
    imageAlt: "The Old Bell Hotel Athelstan room",
    websiteUrl: "http://www.oldbellhotel.co.uk/",
  },
  {
    id: "cotswold-house",
    name: "Cotswold House Hotel",
    description:
      "A Regency townhouse on Chipping Campden's high street with a spa in the garden. Chipping Campden is one of the better bases for the northern Cotswolds and this is the right place to stay in it.",
    category: "Spa Hotel",
    location: "Chipping Campden",
    address: "The Square, Chipping Campden GL55 6AN",
    dogFriendly: false,
    priceLevel: 2,
    pricePerNight: "£250+",
    imageUrl:
      "https://www.cotswoldhouse.com/wp-content/uploads/2025/10/No33_CottageJuniorSuite-5.jpg",
    imageAlt: "Cotswold House Hotel cottage suite",
    websiteUrl: "http://www.cotswoldhouse.com/",
  },
  {
    id: "the-bay-tree",
    name: "The Bay Tree",
    description:
      "A medieval building in Burford with a walled garden and rooms that feel genuinely old rather than themed. Quiet, well-located, and unpretentious.",
    category: "Inn",
    location: "Burford",
    address: "Sheep Street, Burford OX18 4LW",
    dogFriendly: false,
    priceLevel: 2,
    pricePerNight: "£200+",
    imageUrl:
      "https://www.cotswold-inns-hotels.co.uk/the-bay-tree-hotel/-/media/sites/cotswolds/bay-tree/2025-rooms-bay-tree/superior-double/bay-tree---beech-bedroom-wide.jpg?la=en&h=1280&w=1920&hash=9A6C89464AA4EE911FA891226E45BF4B",
    imageAlt: "The Bay Tree Hotel Burford bedroom",
    websiteUrl: "https://www.cotswold-inns-hotels.co.uk/the-bay-tree-hotel/",
  },
  {
    id: "the-pig-cotswolds",
    name: "The Pig",
    description:
      "The PIG formula works well here — kitchen garden produce, relaxed service, and rooms that feel lived-in rather than designed. Popular, so book ahead.",
    category: "Boutique Hotel",
    location: "Barnsley, Cirencester",
    address: "Barnsley, Cirencester GL7 5EE",
    dogFriendly: false,
    priceLevel: 3,
    pricePerNight: "£350+",
    imageUrl:
      "https://www.thepighotel.com/media/umkdbs2g/field-luxe-5.jpg?rxy=0.49624060150375937,0.5924516572634196&width=2663&v=1dc1c30473b9f90",
    imageAlt: "THE PIG in the Cotswolds field luxe room",
    websiteUrl: "https://www.thepighotel.com/in-the-cotswolds/",
  },
  {
    id: "wild-thyme-and-honey",
    name: "Wild Thyme & Honey",
    description:
      "A small boutique inn in Ampney Crucis with six rooms and a kitchen that takes its cooking seriously. Quiet, fairly priced, and easier to get into than the better-known options.",
    category: "Boutique Hotel",
    location: "Ampney Crucis",
    address: "Ampney Crucis, Cirencester GL7 5RY",
    dogFriendly: false,
    priceLevel: 2,
    pricePerNight: "£250+",
    imageUrl:
      "https://grosvenorpi-wth.imgix.net/0_JEP_2372_dba82a5be7.jpg?fm=avif&auto=format&w=2000",
    imageAlt: "Wild Thyme and Honey hotel room",
    websiteUrl: "https://www.wildthymeandhoney.co.uk/",
  },
  {
    id: "the-lygon-arms",
    name: "The Lygon Arms",
    description:
      "A 14th-century coaching inn on Broadway's high street with a history that includes Charles I. The building is the draw — the rooms have been modernised but the bones are impressive.",
    category: "Historic Inn",
    location: "Broadway",
    address: "High Street, Broadway WR12 7DU",
    dogFriendly: false,
    priceLevel: 3,
    pricePerNight: "£350+",
    imageUrl:
      "https://www.lygonarmshotel.co.uk/media/ko4jkzl1/high-street-superior-room-the-lygon-arms-1.jpg?anchor=center&mode=crop&quality=70&width=2000&height=1200&rnd=134026624582400000",
    imageAlt: "The Lygon Arms Broadway",
    websiteUrl: "https://www.lygonarmshotel.co.uk/",
  },
  {
    id: "swan-hotel-bibury-stay",
    name: "The Swan Hotel",
    description: "Riverside classic in Bibury village.",
    category: "Boutique Hotel",
    location: "Bibury",
    address: "",
    dogFriendly: false,
    priceLevel: 2,
    pricePerNight: "£250+",
    imageUrl: "",
    imageAlt: "The Swan Hotel Bibury",
    websiteUrl: "https://www.swanhotelbibury.co.uk",
  },
  {
    id: "barnsley-house",
    name: "Barnsley House",
    description: "Garden retreat 3 miles from Bibury.",
    category: "Manor House",
    location: "Barnsley",
    address: "",
    dogFriendly: false,
    priceLevel: 3,
    pricePerNight: "£350+",
    imageUrl: "",
    imageAlt: "Barnsley House",
    websiteUrl: "https://www.barnsleyhouse.com",
  },
  {
    id: "bull-burford",
    name: "The Bull Burford",
    description: "Boutique high street hotel in Burford.",
    category: "Boutique Hotel",
    location: "Burford",
    address: "",
    dogFriendly: false,
    priceLevel: 2,
    pricePerNight: "£250+",
    imageUrl: "",
    imageAlt: "The Bull Burford",
    websiteUrl: "https://www.bullburford.com",
  },
  {
    id: "lamb-inn-burford",
    name: "The Lamb Inn",
    description: "Historic Cotswold inn on Sheep Street.",
    category: "Historic Inn",
    location: "Burford",
    address: "",
    dogFriendly: false,
    priceLevel: 2,
    pricePerNight: "£250+",
    imageUrl: "",
    imageAlt: "The Lamb Inn Burford",
    websiteUrl: "https://www.cotswold-inns-hotels.co.uk/the-lamb-inn",
  },
  {
    id: "angel-at-burford",
    name: "The Angel at Burford",
    description: "Pub with rooms on Witney Street.",
    category: "Inn",
    location: "Burford",
    address: "",
    dogFriendly: false,
    priceLevel: 2,
    pricePerNight: "£250+",
    imageUrl: "",
    imageAlt: "The Angel at Burford",
    websiteUrl: "https://theangelatburford.co.uk",
  },
  {
    id: "manor-house-castle-combe",
    name: "The Manor House",
    description: "Luxury country house hotel in Castle Combe.",
    category: "Manor House",
    location: "Castle Combe",
    address: "",
    dogFriendly: false,
    priceLevel: 3,
    pricePerNight: "£350+",
    imageUrl: "",
    imageAlt: "The Manor House Castle Combe",
    websiteUrl: "https://www.exclusive.co.uk/the-manor-house",
  },
  {
    id: "castle-inn-stay",
    name: "The Castle Inn",
    description: "Village inn in the Market Place.",
    category: "Inn",
    location: "Castle Combe",
    address: "",
    dogFriendly: false,
    priceLevel: 2,
    pricePerNight: "£250+",
    imageUrl: "",
    imageAlt: "The Castle Inn Castle Combe",
    websiteUrl: "https://www.exclusive.co.uk/the-castle-inn",
  },
  {
    id: "white-hart-ford",
    name: "The White Hart",
    description: "Coaching inn in Ford, 5 minutes from Castle Combe.",
    category: "Historic Inn",
    location: "Ford",
    address: "",
    dogFriendly: false,
    priceLevel: 2,
    pricePerNight: "£250+",
    imageUrl: "",
    imageAlt: "The White Hart Ford",
    websiteUrl: "https://www.whitehart-ford.com",
  },
  {
    id: "dial-house-bourton",
    name: "The Dial House",
    description: "High street hotel in Bourton-on-the-Water.",
    category: "Boutique Hotel",
    location: "Bourton-on-the-Water",
    address: "",
    dogFriendly: false,
    priceLevel: 2,
    pricePerNight: "£250+",
    imageUrl: "",
    imageAlt: "The Dial House Bourton",
    websiteUrl: "https://dialhousehotel.com",
  },
  {
    id: "chester-house-hotel",
    name: "Chester House Hotel",
    description: "Central village hotel in Bourton-on-the-Water.",
    category: "Boutique Hotel",
    location: "Bourton-on-the-Water",
    address: "",
    dogFriendly: false,
    priceLevel: 2,
    pricePerNight: "£250+",
    imageUrl: "",
    imageAlt: "Chester House Hotel Bourton",
    websiteUrl: "https://chesterhousehotel.com",
  },
  {
    id: "lamb-inn-bourton",
    name: "The Lamb Inn",
    description: "Historic inn 3 miles from Bourton-on-the-Water.",
    category: "Inn",
    location: "Great Rissington",
    address: "",
    dogFriendly: false,
    priceLevel: 2,
    pricePerNight: "£250+",
    imageUrl: "",
    imageAlt: "The Lamb Inn Great Rissington",
    websiteUrl: "https://www.thelambinn.com",
  },
  {
    id: "snowshill-manor-holiday-cottage",
    name: "Snowshill Manor Holiday Cottage",
    description: "National Trust cottage opposite Snowshill Manor.",
    category: "Manor House",
    location: "Snowshill",
    address: "",
    dogFriendly: false,
    priceLevel: 2,
    pricePerNight: "£250+",
    imageUrl: "",
    imageAlt: "Snowshill Manor Holiday Cottage",
    websiteUrl:
      "https://www.nationaltrust.org.uk/holidays/cotswolds-gloucestershire/snowshill-manor-farmhouse",
  },
];

const HOMEPAGE_FEATURED_STAY_IDS = [
  "the-fish-hotel",
  "dormy-house",
  "foxhill-manor",
  "the-pig-cotswolds",
] as const;

/** Featured stays for the homepage, in display order. */
export function getHomepageFeaturedStays(): PlacesToStayListing[] {
  return HOMEPAGE_FEATURED_STAY_IDS.flatMap((id) => {
    const listing = PLACES_TO_STAY_LISTINGS.find((stay) => stay.id === id);
    return listing ? [listing] : [];
  });
}
