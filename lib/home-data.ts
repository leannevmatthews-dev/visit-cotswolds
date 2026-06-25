export const HERO_IMAGE =
  "https://pwwpxxeploahbcpubhnx.supabase.co/storage/v1/object/public/village-images/homepage/homepage-hero.jpg";

export const JOURNEY_CARDS = [
  {
    href: "/villages",
    label: "VISIT",
    title: "Villages",
    alt: "Historic Cotswold limestone archway",
    image: "",
  },
  {
    href: "/places-to-stay",
    label: "SLEEP",
    title: "Stays",
    alt: "Luxury boutique manor house bedroom",
    image:
      "https://hotelcms-production.imgix.net/oldbellhotel.co.uk/wp-content/uploads/2022/05/Master_Room-Athelstan.jpg",
  },
  {
    href: "/places-to-eat",
    label: "EAT & DRINK",
    title: "Food & Drink",
    alt: "Fine dining scene in a historic pub",
    image:
      "https://bucklandmanor.co.uk/wp-content/uploads/sites/8/2026/01/4H0A8786-4-1000px.jpg",
  },
  {
    href: "/things-to-do",
    label: "EXPLORE",
    title: "Things To Do",
    alt: "Dramatic landscape of the rolling green hills",
    image: "",
  },
  {
    href: "/whats-on",
    label: "THIS SEASON",
    title: "What's On",
    alt: "Vintage garden party event",
    image:
      "https://bigfeastival.com/wp-content/uploads/2025/01/The-Big-Feastival-2024_20240823_Atmosphere_GaelleBeri_9077-Instagram.jpeg",
  },
] as const;

export const VILLAGE_CARDS = [
  {
    slug: "bibury",
    href: "/villages/bibury",
    county: "GLOUCESTERSHIRE",
    name: "Bibury",
    alt: "Arlington Row in Bibury",
    span: "md:col-span-4",
    height: "md:h-[320px] lg:h-[360px]",
  },
  {
    slug: "bourton-on-the-water",
    href: "/villages/bourton-on-the-water",
    county: "GLOUCESTERSHIRE",
    name: "Bourton-on-the-Water",
    alt: "Bourton-on-the-Water bridge",
    span: "md:col-span-4",
    height: "md:h-[320px] lg:h-[360px]",
  },
  {
    slug: "burford",
    href: "/villages/burford",
    county: "OXFORDSHIRE",
    name: "Burford",
    alt: "Stow-on-the-Wold at dusk",
    span: "md:col-span-4",
    height: "md:h-[320px] lg:h-[360px]",
  },
  {
    slug: "castle-combe",
    href: "/villages/castle-combe",
    county: "WILTSHIRE",
    name: "Castle Combe",
    alt: "Castle Combe alleyway",
    span: "md:col-span-6",
    height: "md:h-[280px] lg:h-[320px]",
  },
  {
    slug: "snowshill",
    href: "/villages/snowshill",
    county: "GLOUCESTERSHIRE",
    name: "Snowshill",
    alt: "Snowshill village",
    span: "md:col-span-6",
    height: "md:h-[280px] lg:h-[320px]",
  },
] as const;

export const STAY_CARDS = [
  {
    location: "BROADWAY",
    name: "The Lygon Arms",
    price: "£380 / NIGHT",
    alt: "Cotswolds manor house hotel at night",
    image: "",
  },
  {
    location: "KINGSBROMLEY",
    name: "The Old Rectory",
    price: "£220 / NIGHT",
    alt: "Cozy high-end stone cottage interior",
    image: "",
  },
  {
    location: "CHIPPING CAMPDEN",
    name: "Forest Hideaway",
    price: "£450 / NIGHT",
    alt: "Modern wood-clad cabin",
    image: "",
  },
  {
    location: "BARNSLEY",
    name: "Barnsley House",
    price: "£320 / NIGHT",
    alt: "Barnsley House hotel and gardens in the Cotswolds",
    image: "",
  },
] as const;
