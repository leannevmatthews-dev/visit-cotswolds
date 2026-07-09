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
      "A restored estate in Southrop with its own farm, spa, cookery school, and pub. You can spend three days here without leaving the grounds, and most people do.",
    category: "Country Estate",
    location: "Southrop, Lechlade",
    address: "Southrop, Lechlade GL7 3PX",
    dogFriendly: false,
    priceLevel: 3,
    pricePerNight: "£500+",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/5f6b4b0c38cfbb7e2af14d5e/905d135c-12f0-4967-97bc-251c8e5a543a/Sidalcea+-+Elegant+-+Farmhouse+-+FreddieEllams+-+mar24+-++%281%29.jpg?format=1500w",
    imageAlt: "Thyme, country estate in Southrop",
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
    imageAlt: "Dormy House, spa hotel in Broadway",
    websiteUrl: "https://dormyhouse.co.uk/",
  },
  {
    id: "foxhill-manor",
    name: "Foxhill Manor",
    description:
      "All-inclusive and genuinely private, the whole manor is yours. One of the few places in the Cotswolds where you won't share your stay with strangers.",
    category: "Exclusive Use",
    location: "Broadway",
    address: "Farncombe Estate, Broadway WR12 7LJ",
    dogFriendly: false,
    priceLevel: 3,
    pricePerNight: "£600+",
    imageUrl: "https://foxhillmanor.com/wp-content/uploads/2026/05/Oak-1.jpg",
    imageAlt: "Foxhill Manor, exclusive use in Broadway",
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
    imageAlt: "The Fish Hotel, boutique hotel in Broadway",
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
    imageAlt: "The Painswick, boutique hotel in Painswick",
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
    imageAlt: "Old Stocks Inn, inn in Stow-on-the-Wold",
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
    imageAlt: "The Wild Rabbit, inn in Kingham",
    websiteUrl: "https://thewildrabbit.co.uk/",
  },
  {
    id: "buckland-manor",
    name: "Buckland Manor",
    description:
      "A 13th-century manor in ten acres of gardens between Broadway and the hills. Formal in the best sense: attentive service, serious cooking, genuine quiet.",
    category: "Manor House",
    location: "Buckland, Broadway",
    address: "Buckland, Broadway WR12 7LY",
    dogFriendly: false,
    priceLevel: 3,
    pricePerNight: "£400+",
    imageUrl:
      "https://bucklandmanor.co.uk/wp-content/uploads/sites/8/2026/01/BMA-Bedrooms-SupFourPost-Oak-Old-Photo-1000px.jpg",
    imageAlt: "Buckland Manor, manor house hotel in Buckland",
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
    imageAlt: "The Feathered Nest, inn in Nether Westcote",
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
    imageAlt: "Burleigh Court, manor house hotel in Minchinhampton",
    websiteUrl: "https://burleighcourtcotswolds.co.uk/",
  },
  {
    id: "lords-of-the-manor",
    name: "Lords of the Manor",
    description:
      "Set in Upper Slaughter rather than on a high street, this 17th-century former rectory has held four AA Rosettes for years, not just since a recent refresh. Good base for the short walk down to Lower Slaughter and back for afternoon tea.",
    category: "Manor House",
    location: "Upper Slaughter",
    address: "Upper Slaughter, Cheltenham GL54 2JD",
    dogFriendly: false,
    priceLevel: 3,
    pricePerNight: "£400+",
    imageUrl:
      "https://www.lordsofthemanor.com/wp-content/uploads/2022/11/007NKP37940-768x655.jpg",
    imageAlt: "Lords of the Manor, manor house hotel in Upper Slaughter",
    websiteUrl: "https://www.lordsofthemanor.com/",
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
    imageAlt: "The Old Bell Hotel, historic inn in Malmesbury",
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
    imageAlt: "Cotswold House Hotel, spa hotel in Chipping Campden",
    websiteUrl: "http://www.cotswoldhouse.com/",
  },
  {
    id: "the-bay-tree",
    name: "The Bay Tree",
    description:
      "Sheep Street rather than the High Street, so a short walk from the main tourist flow rather than in the thick of it. Part of the same small hotel group as several other Cotswold coaching inns, which shows in the house style if you've stayed at one of their others. The restaurant holds an AA Rosette, so it's worth booking dinner even if you're not staying the night.",
    category: "Inn",
    location: "Burford",
    address: "Sheep Street, Burford OX18 4LW",
    dogFriendly: false,
    priceLevel: 2,
    pricePerNight: "£200+",
    imageUrl:
      "https://www.cotswold-inns-hotels.co.uk/the-bay-tree-hotel/-/media/sites/cotswolds/bay-tree/2025-rooms-bay-tree/tanfield/bay-tree-tanfield-sitting-room--fire.jpg",
    imageAlt: "The Bay Tree, inn in Burford",
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
    imageAlt: "The Pig, boutique hotel in Barnsley",
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
    imageAlt: "Wild Thyme & Honey, boutique hotel in Ampney Crucis",
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
    imageAlt: "The Lygon Arms, historic inn in Broadway",
    websiteUrl: "https://www.lygonarmshotel.co.uk/",
  },
  {
    id: "swan-hotel-bibury-stay",
    name: "The Swan Hotel",
    description:
      "A former 17th-century coaching inn a minute's walk from Arlington Row, with 22 rooms including a handful of cottage suites that come with more space and their own entrance.",
    category: "Boutique Hotel",
    location: "Bibury",
    address: "",
    dogFriendly: false,
    priceLevel: 2,
    pricePerNight: "£250+",
    imageUrl:
      "https://www.cotswold-inns-hotels.co.uk/the-swan-hotel/-/media/sites/cotswolds/swan/2025-rooms-swan/superior-double-twin/swan-pink-room-8-deluxe-double.jpg",
    imageAlt: "The Swan Hotel, boutique hotel in Bibury",
    websiteUrl: "https://www.swanhotelbibury.co.uk",
  },
  {
    id: "bull-burford",
    name: "The Bull Burford",
    description:
      "A 15th-century coaching inn on Burford's High Street that looks traditional from outside and isn't at all inside. Owned by Matthew Freud, with Banksys and Hirsts on the walls, four very different restaurants, and a hidden poker room behind an old prison door.",
    category: "Boutique Hotel",
    location: "Burford",
    address: "",
    dogFriendly: false,
    priceLevel: 2,
    pricePerNight: "£250+",
    imageUrl:
      "https://static1.squarespace.com/static/638e07701ecb054a3cd0a168/t/691ce934feaf05446e63211c/1763502389671/leo+davut+-+1882.jpg",
    imageAlt: "The Bull Burford, boutique hotel in Burford",
    websiteUrl: "https://www.bullburford.com",
  },
  {
    id: "lamb-inn-burford",
    name: "The Lamb Inn",
    description:
      "A 15th-century inn tucked down Sheep Street, just off the main bustle of Burford's High Street. Seventeen individually decorated rooms, log fires in the lounge, and a walled garden that's easy to miss from the street.",
    category: "Historic Inn",
    location: "Burford",
    address: "",
    dogFriendly: false,
    priceLevel: 2,
    pricePerNight: "£250+",
    imageUrl:
      "https://www.cotswold-inns-hotels.co.uk/the-lamb-inn/-/media/sites/cotswolds/lamb/2025-rooms-lamb/rosie/lamb--rosie--bedroom-bed--chairs.jpg?la=en&h=1280&w=1920&hash=3F1514FA25FB146E24A1CF85E2F363B3",
    imageAlt: "The Lamb Inn, historic inn in Burford",
    websiteUrl: "https://www.cotswold-inns-hotels.co.uk/the-lamb-inn",
  },
  {
    id: "angel-at-burford",
    name: "The Angel at Burford",
    description:
      "A family-run 17th-century pub with just three rooms, all of them above the bar, so ask if you're a light sleeper. Multiple-time winner of Cotswold Pub of the Year, with a walled garden that's easy to miss from Witney Street.",
    category: "Inn",
    location: "Burford",
    address: "",
    dogFriendly: false,
    priceLevel: 2,
    pricePerNight: "£250+",
    imageUrl:
      "https://i0.wp.com/theangelatburford.co.uk/wp-content/uploads/2026/01/Untitled-design-43.png?w=1024&ssl=1",
    imageAlt: "The Angel at Burford, inn in Burford",
    websiteUrl: "https://theangelatburford.co.uk",
  },
  {
    id: "manor-house-castle-combe",
    name: "The Manor House",
    description:
      "A 14th-century manor set in 365 acres just outside Castle Combe village, with its own Michelin-starred restaurant, an 18-hole golf course, and a village pub of its own down the lane. This is a stay built around the grounds as much as the rooms.",
    category: "Manor House",
    location: "Castle Combe",
    address: "",
    dogFriendly: false,
    priceLevel: 3,
    pricePerNight: "£350+",
    imageUrl:
      "https://www.exclusive.co.uk/media/kninnbmv/holdersmead-15.jpg?width=1210&height=800&quality=70&v=1da333ba13764a0",
    imageAlt: "The Manor House, manor house hotel in Castle Combe",
    websiteUrl: "https://www.exclusive.co.uk/the-manor-house",
  },
  {
    id: "castle-inn-stay",
    name: "The Castle Inn",
    description:
      "Twelve rooms above a pub on Castle Combe's market square, a more affordable way to stay in the village than its grander neighbour up the lane.",
    category: "Inn",
    location: "Castle Combe",
    address: "",
    dogFriendly: false,
    priceLevel: 2,
    pricePerNight: "£250+",
    imageUrl:
      "https://www.exclusive.co.uk/media/y24hk2sw/castle-inn-bedrooms-nov-23-15.jpg?rxy=0.39595007108806557,0.4597043573506188&width=588&height=546&quality=70&v=1daf54f0bc17420",
    imageAlt: "The Castle Inn, inn in Castle Combe",
    websiteUrl: "https://www.exclusive.co.uk/the-castle-inn",
  },
  {
    id: "white-hart-ford",
    name: "The White Hart",
    description:
      "A 16th-century coaching inn in the quiet hamlet of Ford, a five-minute drive from Castle Combe. Eleven rooms above the pub, dogs welcome throughout, and a genuinely rural setting rather than a village-centre one.",
    category: "Historic Inn",
    location: "Ford",
    address: "",
    dogFriendly: false,
    priceLevel: 2,
    pricePerNight: "£250+",
    imageUrl:
      "https://www.whitehart-ford.com/youngs/uploads/sites/356/2023/07/Double-1-1024x682.jpeg",
    imageAlt: "The White Hart, historic inn in Ford",
    websiteUrl: "https://www.whitehart-ford.com",
  },
  {
    id: "dial-house-bourton",
    name: "The Dial House",
    description:
      "A hotel in the centre of Bourton dating to 1697, with five rooms designed by Laurence Llewelyn-Bowen. A useful base if you want a proper restaurant on site rather than walking out for dinner.",
    category: "Boutique Hotel",
    location: "Bourton-on-the-Water",
    address: "",
    dogFriendly: false,
    priceLevel: 2,
    pricePerNight: "£250+",
    imageUrl:
      "https://dialhousehotel.com/wp-content/uploads/aubrey-1-755x466.jpg",
    imageAlt: "The Dial House, boutique hotel in Bourton-on-the-Water",
    websiteUrl: "https://dialhousehotel.com",
  },
  {
    id: "chester-house-hotel",
    name: "Chester House Hotel",
    description:
      "A family-run hotel one road back from the river in Bourton, with an on-site Italian restaurant and its own car park, useful in a village where parking is often the biggest headache. Dogs are welcome, but only in the ground-floor Coach House rooms.",
    category: "Boutique Hotel",
    location: "Bourton-on-the-Water",
    address: "",
    dogFriendly: false,
    priceLevel: 2,
    pricePerNight: "£250+",
    imageUrl:
      "https://qbook-hotelier-files.s3.eu-west-2.amazonaws.com/Images/8/6/64117aafa2910cd70c5c2260d88c1af8.jpg",
    imageAlt: "Chester House Hotel, boutique hotel in Bourton-on-the-Water",
    websiteUrl: "https://chesterhousehotel.com",
  },
  {
    id: "the-old-new-inn",
    name: "The Old New Inn",
    description:
      "Nine rooms above a working pub in the middle of Bourton, which means you're a few steps from the river rather than a drive away from it. Overnight guests get into the model village in the grounds before it opens to day visitors, which is worth timing your morning around if you want the place to yourself for ten minutes.",
    category: "Inn",
    location: "Bourton-on-the-Water",
    address: "",
    dogFriendly: false,
    priceLevel: 2,
    pricePerNight: "£250+",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/63d3b9c071106579db927e96/0b668045-9978-496b-a7c6-e5eb8ae02c65/Room+7+-+Beds+2.jpg?format=1500w",
    imageAlt: "The Old New Inn, inn in Bourton-on-the-Water",
    websiteUrl: "https://www.theoldnewinn.co.uk/",
  },
  {
    id: "the-lansdowne",
    name: "The Lansdowne",
    description:
      "Adults-only, which sets it apart from most of the family-friendly stays clustered around the village. Fourteen rooms, all en-suite, with parking included, which matters more than it sounds in a village where finding a space in summer can eat up half an hour. Breakfast's included too, so factor that against places that charge it separately.",
    category: "Boutique Hotel",
    location: "Bourton-on-the-Water",
    address: "",
    dogFriendly: false,
    priceLevel: 2,
    pricePerNight: "£250+",
    imageUrl:
      "https://static.wixstatic.com/media/6f40be_c1d790ea5175473fa58008c1e53be56b~mv2.png/v1/fill/w_1537,h_363,al_c,q_90,enc_avif,quality_auto/6f40be_c1d790ea5175473fa58008c1e53be56b~mv2.png",
    imageAlt: "The Lansdowne, boutique hotel in Bourton-on-the-Water",
    websiteUrl: "https://www.lansdownevilla.co.uk/",
  },
  {
    id: "lamb-inn-bourton",
    name: "The Lamb Inn",
    description:
      "A honey-stone inn in the quiet village of Great Rissington, three miles from Bourton and a genuinely different pace from it. Around a dozen rooms, a proper restaurant, and a setting that suits people who want the Cotswolds without the crowds.",
    category: "Inn",
    location: "Great Rissington",
    address: "",
    dogFriendly: false,
    priceLevel: 2,
    pricePerNight: "£250+",
    imageUrl:
      "https://images.trvl-media.com/lodging/5000000/4600000/4592100/4592088/f6ec4d64.jpg?impolicy=fcrop&w=1200&h=800&quality=medium",
    imageAlt: "The Lamb Inn, inn in Great Rissington",
    websiteUrl: "https://www.thelambinn.com",
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
