export type WhatsOnCategory =
  | "Festivals"
  | "Food"
  | "Markets"
  | "Sporting"
  | "Culture"
  | "Family"
  | "Events"
  | "Experiences & Wellness";

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
  endDay?: string;
  endMonth?: string;
  year: number;
  imageUrl: string;
  imageAlt: string;
  categories: WhatsOnCategory[];
  websiteUrl: string;
  /** Full schedule detail shown below the location on recurring cards. */
  recurring?: string;
  /** Short schedule label for the card badge, e.g. "Every Saturday". */
  frequency?: string;
};

export const WHATS_ON_HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAIBKgizqNuINElxwaG8jYGcXmenxm-7wA4KC0eBuuVdqNs1gydPocWvMIVDepVaP0A9bHD0lPPMH64CFAjoGRAQfmvh5R-MHHit1DqZPrzwPte8_mjVY7_vcKvEEEv5eit_2CgAV3QsDb6CuckpZpNigTkvThjU38P8bpLGeF66iI3nbkTmdR578Ux2IQEtVhEnX1Wlhu7NS8U5KOEAGjsbH-GPkf_3P597ESI1xciKbdnkJhT1wox3gvQba4VRJLb0zZfPlTOkA";

export const WHATS_ON_FILTERS: WhatsOnFilter[] = [
  { id: "all", label: "All Events" },
  { id: "festivals", label: "Festivals", matchCategory: "Festivals" },
  { id: "food", label: "Food", matchCategory: "Food" },
  { id: "markets", label: "Markets", matchCategory: "Markets" },
  { id: "sporting", label: "Sporting", matchCategory: "Sporting" },
  { id: "culture", label: "Culture", matchCategory: "Culture" },
  { id: "family", label: "Family", matchCategory: "Family" },
  {
    id: "experiences-wellness",
    label: "Experiences & Wellness",
    matchCategory: "Experiences & Wellness",
  },
];

export const WHATS_ON_EVENTS: WhatsOnEvent[] = [
  {
    id: "cotswold-show-2026",
    title: "Cotswold Show and Food Festival",
    description:
      "Over 35 years old and still one of the best country shows in the region. Equestrian displays, falconry, livestock competitions, dog shows and a serious food festival all in one weekend in Cirencester Park.",
    location: "Cirencester Park",
    month: "July",
    day: "4",
    year: 2026,
    imageUrl:
      "https://i0.wp.com/cotswoldshow.co.uk/wp-content/uploads/2026/06/4.png?fit=768%2C960&ssl=1",
    imageAlt: "Cotswold Show Cirencester Park",
    categories: ["Food"],
    websiteUrl: "https://www.cotswoldshow.co.uk",
  },
  {
    id: "cotswold-beer-festival-2026",
    title: "Cotswold Beer Festival",
    description:
      "Forty-five years and counting at Postlip Hall on the edge of Cleeve Hill. Real ales, lagers and ciders from across the region, with live music and Morris dancers alongside. Not polished. Very good.",
    location: "Postlip Hall, Cleeve Hill",
    month: "July",
    day: "17",
    year: 2026,
    imageUrl:
      "https://www.eatdrinkseek.co.uk/wp-content/uploads/2018/11/cotswold-beer-festival-postlip.jpg",
    imageAlt: "Cotswold Beer Festival Postlip Hall",
    categories: ["Food"],
    websiteUrl: "https://postlip.camra.org.uk/",
  },
  {
    id: "daylesford-country-life-2026",
    title: "Country Life Expert Event at Daylesford",
    description:
      "Five leading experts share their knowledge at Daylesford Farm. The format feels more like a very good lunch with informed people than a formal talk. Book early, spaces are limited.",
    location: "Daylesford Farm, Kingham",
    month: "July",
    day: "2",
    year: 2026,
    imageUrl: "https://www.daylesford.com/media/catalog/product/2/_/2_7.jpg",
    imageAlt: "Daylesford Farm event",
    categories: ["Experiences & Wellness"],
    websiteUrl: "https://www.daylesford.com/shop/events",
  },
  {
    id: "daylesford-teddy-picnic-2026",
    title: "Teddy Bear's Picnic at Daylesford",
    description:
      "A family morning at Daylesford Farm with activities, animals and a picnic on the estate. One of the better family days the farm puts on. Relaxed, outdoors, and well organised.",
    location: "Daylesford Farm, Kingham",
    month: "July",
    day: "18",
    year: 2026,
    imageUrl:
      "https://www.daylesford.com/media/klevu_images/850X850/p/i/picnic3-1024x1024_2.jpg",
    imageAlt: "Daylesford Farm family picnic",
    categories: ["Family", "Experiences & Wellness"],
    websiteUrl: "https://www.daylesford.com/shop/events/the-great-british-picnic-30-08-2026",
  },
  {
    id: "2000trees-2026",
    title: "2000trees Festival",
    description:
      "Indie, rock, punk and alternative on a Cotswold farm near Withington. Multiple winner of UK Best Medium-Sized Festival. Camping on site, locally sourced food, and a line-up that regularly punches above its weight.",
    location: "Upcote Farm, Withington",
    month: "July",
    day: "8",
    endDay: "11",
    endMonth: "July",
    year: 2026,
    imageUrl:
      "https://2000trees.co.uk/storage/media-library/medium_529_20231018022032.jpg",
    imageAlt: "2000trees Festival Upcote Farm",
    categories: ["Festivals"],
    websiteUrl: "https://2000trees.co.uk/",
  },
  {
    id: "cheltenham-music-festival-2026",
    title: "Cheltenham Music Festival",
    description:
      "Classical music across nine days in Cheltenham, running since 1945. Concerts in the Pittville Pump Room and other venues around the town. One of the longest-running music festivals in the country and still worth attending.",
    location: "Various venues, Cheltenham",
    month: "July",
    day: "3",
    endDay: "11",
    endMonth: "July",
    year: 2026,
    imageUrl:
      "https://cheltenham-festivals.transforms.svdcdn.com/production/Festivals/Music/2025/social-images/41.png?w=1080&q=100&auto=format&fit=crop&dm=1767873279&s=e89811c1845bd9541f9252212ea51d5c",
    imageAlt: "Cheltenham Music Festival Pittville Pump Room",
    categories: ["Culture"],
    websiteUrl: "https://www.cheltenhamfestivals.org",
  },
  {
    id: "thyme-summer-exhibition-2026",
    title: "Summer Art Exhibition at Thyme",
    description:
      "Three contemporary mural artists showing work across the Thyme estate in Southrop. Curated by the Head of Exhibitions at Charleston. Worth combining with lunch at the Ox Barn if you can get a table.",
    location: "Thyme, Southrop",
    month: "July",
    day: "1",
    year: 2026,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/5f6b4b0c38cfbb7e2af14d5e/c0768849-4bff-4345-bf1e-06df9810aa7f/Thyme+-+Mural+Artist+Shoot+-+Kerrie+Wood+Photography-101.jpg?format=2500w",
    imageAlt: "Thyme estate summer art exhibition",
    categories: ["Culture", "Experiences & Wellness"],
    websiteUrl: "https://www.thyme.co.uk/things-to-do/art-exhibitions",
  },
  {
    id: "ebrington-fete-2026",
    title: "Ebrington Village Fete",
    description:
      "A proper village fete on the cricket ground above Chipping Campden. Dog show, classic cars, tractor rides, stalls and a bouncy castle. Ebrington is one of those villages most visitors never find. The fete is a good reason to change that.",
    location: "Ebrington Cricket Ground, Chipping Campden",
    month: "July",
    day: "11",
    year: 2026,
    imageUrl:
      "https://ebringtonparish.org.uk/wp-content/uploads/2021/10/Photo-29-12-2023-09-36-24-768x1024.jpg",
    imageAlt: "Ebrington village fete cricket ground",
    categories: ["Family"],
    websiteUrl: "https://ebringtonparish.org.uk/notices/ebrington-village-fete/",
  },
  {
    id: "chalfest-2026",
    title: "Chalfest Music Festival",
    description:
      "A community music festival in the Chalford and Eastcombe area of the Stroud valleys. Three stages, no camping, relaxed atmosphere. Not a commercial festival. The kind that still feels like it belongs to the people who run it.",
    location: "Chalford, Stroud",
    month: "July",
    day: "17",
    year: 2026,
    imageUrl:
      "https://i0.wp.com/chalfest.co.uk/wp-content/uploads/2022/07/DSC_9785-scaled.jpg?fit=2560%2C1709&ssl=1",
    imageAlt: "Chalfest music festival Chalford Stroud",
    categories: ["Festivals"],
    websiteUrl: "https://www.chalfest.co.uk",
  },
  {
    id: "fantasy-forest-2026",
    title: "Fantasy Forest Festival",
    description:
      "Sci-fi, steampunk, cosplay and fantasy at Sudeley Castle for three days in July. The UK's largest fantasy market, three music stages, and a Wicker Fire Ceremony to close. Not for everyone. If it is your thing, there is nothing quite like it in the region.",
    location: "Sudeley Castle, Winchcombe",
    month: "July",
    day: "17",
    endDay: "19",
    endMonth: "July",
    year: 2026,
    imageUrl:
      "https://fantasyforest.co.uk/wp-content/uploads/2025/08/Jur-1280p-04486.jpg",
    imageAlt: "Fantasy Forest Festival Sudeley Castle",
    categories: ["Family"],
    websiteUrl: "https://fantasyforest.co.uk/",
  },
  {
    id: "longborough-opera-2026",
    title: "Longborough Festival Opera",
    description:
      "World-class opera in a converted chicken shed in the Cotswolds village of Longborough. It sounds unlikely. It is not. Longborough has an international reputation for Wagner and a 2026 season including Verdi's Macbeth and Hansel and Gretel. Picnic in the grounds during the 90-minute interval.",
    location: "Longborough, near Moreton-in-Marsh",
    month: "July",
    day: "1",
    endDay: "8",
    endMonth: "August",
    year: 2026,
    imageUrl:
      "https://d2pff431r2cpo9.cloudfront.net/files/web-home/_1980x1122_crop_center-center/24-theatre-2560x1709.jpg?mtime=20240129162025",
    imageAlt: "Longborough Festival Opera",
    categories: ["Culture"],
    websiteUrl: "https://lfo.org.uk",
  },
  {
    id: "guiting-music-2026",
    title: "Guiting Music Festival",
    description:
      "Classical, jazz and blues in the village of Guiting Power for ten days from late July. Over fifty years old with a loyal following. Indoor and open-air concerts. Bring a picnic for the evening performances.",
    location: "Guiting Power",
    month: "July",
    day: "24",
    endDay: "2",
    endMonth: "August",
    year: 2026,
    imageUrl: "https://guitingfestival.org/wp-content/uploads/2019/12/X4C0163.jpg",
    imageAlt: "Guiting Music Festival Guiting Power",
    categories: ["Festivals"],
    websiteUrl: "https://www.guitingfestival.org",
  },
  {
    id: "cotswold-lavender-2026",
    title: "Cotswold Lavender",
    description:
      "Fifty-three acres of lavender near Snowshill, open from mid-June to early August. Go on a clear morning. There is a tearoom and gift shop on site. Peak colour is usually mid-July.",
    location: "Hill Barn Farm, Snowshill",
    month: "July",
    day: "1",
    endDay: "5",
    endMonth: "August",
    year: 2026,
    imageUrl:
      "https://www.cotswoldlavender.co.uk/cdn/shop/files/DSC_0535.jpg?v=1771843369&width=750",
    imageAlt: "Cotswold Lavender fields Snowshill",
    categories: ["Experiences & Wellness"],
    websiteUrl: "https://www.cotswoldlavender.co.uk",
  },
  {
    id: "warwickshire-cup-polo-2026",
    title: "Warwickshire Cup Polo",
    description:
      "High-goal polo at Cirencester Park, one of the oldest polo clubs in the UK, founded in 1894 on the Bathurst Estate. The Warwickshire Cup is one of the season's major tournaments. Smart dress expected.",
    location: "Cirencester Park Polo Club",
    month: "June",
    day: "11",
    endDay: "20",
    endMonth: "June",
    year: 2026,
    imageUrl:
      "https://cirencesterpolo.co.uk/wp-content/uploads/CambiasoHomePage-1-2048x1499.png",
    imageAlt: "Warwickshire Cup polo Cirencester Park",
    categories: ["Sporting"],
    websiteUrl: "https://cirencesterpolo.co.uk",
  },
  {
    id: "apsley-cup-polo-2026",
    title: "Apsley Cup Polo",
    description:
      "Medium-goal polo running through June at Cirencester Park. A more accessible entry point to the polo season than the high-goal tournaments. Relaxed atmosphere on the Bathurst Estate.",
    location: "Cirencester Park Polo Club",
    month: "June",
    day: "10",
    endDay: "26",
    endMonth: "June",
    year: 2026,
    imageUrl:
      "https://cirencesterpolo.co.uk/wp-content/uploads/CambiasoHomePage-1-2048x1499.png",
    imageAlt: "Apsley Cup polo Cirencester Park",
    categories: ["Sporting"],
    websiteUrl: "https://cirencesterpolo.co.uk",
  },
  {
    id: "glos-festival-polo-2026",
    title: "Gloucestershire Festival of Polo",
    description:
      "An annual fixture at the Beaufort Polo Club in Tetbury, one of the most prestigious polo venues in the country. A mainstay of the Cotswolds social calendar with thousands of visitors each June.",
    location: "Beaufort Polo Club, Tetbury",
    month: "June",
    day: "11",
    endDay: "14",
    endMonth: "June",
    year: 2026,
    imageUrl:
      "https://beaufortpoloclub.com/wp-content/uploads/2022/12/GFP-22-Saturday-George-Gunn-9205-scaled-e1669903375753-2048x1131.jpg",
    imageAlt: "Gloucestershire Festival of Polo Beaufort Club",
    categories: ["Sporting"],
    websiteUrl: "https://beaufortpoloclub.com",
  },
  {
    id: "wilderness-2026",
    title: "Wilderness Festival",
    description:
      "Four days of music, theatre, feasting, foraging and wellness in Cornbury Park. One of the better-produced festivals in the region with a line-up that draws serious names. The park setting adds to it. More festival than many twice its size.",
    location: "Cornbury Park, Charlbury",
    month: "July",
    day: "30",
    endDay: "2",
    endMonth: "August",
    year: 2026,
    imageUrl:
      "https://d3nnbxax8ziilb.cloudfront.net/images/ss_OvGqcCYKllSyrESdEGkYYs4o=/4374/fill-2400x800/FRI_WILDERNESS25_SaraLincoln_SL_23782.CR3.jpg",
    imageAlt: "Wilderness Festival Cornbury Park",
    categories: ["Festivals"],
    websiteUrl: "https://www.wildernessfestival.com",
  },
  {
    id: "glos-vintage-extravaganza-2026",
    title: "Gloucestershire Vintage and Country Extravaganza",
    description:
      "One of the biggest steam and vintage events in the UK at South Cerney Airfield over three days. Steam engines, vintage transport, live arenas, a vintage funfair and free bus rides. The scale of it surprises most first-time visitors.",
    location: "South Cerney Airfield",
    month: "July",
    day: "31",
    endDay: "2",
    endMonth: "August",
    year: 2026,
    imageUrl:
      "https://www.glosvintageextravaganza.co.uk/wp-content/uploads/2018/05/DSCN7349-EDIT-WEB.jpg",
    imageAlt: "Gloucestershire Vintage Extravaganza South Cerney",
    categories: ["Sporting", "Family"],
    websiteUrl: "https://www.glosvintageextravaganza.co.uk",
  },
  {
    id: "cirencester-ladies-polo-2026",
    title: "Cirencester Ladies Polo",
    description:
      "The 16-goal ladies polo tournament at Cirencester Park running through late July. One of the standout events in the women's polo calendar. High quality play on the Bathurst Estate.",
    location: "Cirencester Park Polo Club",
    month: "July",
    day: "19",
    endDay: "31",
    endMonth: "July",
    year: 2026,
    imageUrl:
      "https://cirencesterpolo.co.uk/wp-content/uploads/CambiasoHomePage-1-2048x1499.png",
    imageAlt: "Cirencester Ladies Polo Cirencester Park",
    categories: ["Sporting"],
    websiteUrl: "https://cirencesterpolo.co.uk",
  },
  {
    id: "broadway-car-show-2026",
    title: "Broadway Car Show",
    description:
      "Two days of cars on Broadway's wide high street. Ferraris, Lamborghinis and Aston Martins on Saturday, then classic and vintage sports cars from the 1900s to 1980s on Sunday. Car parade through the village, food on the green and live music. Free to attend.",
    location: "Broadway High Street",
    month: "August",
    day: "15",
    year: 2026,
    imageUrl:
      "https://www.broadwaycarshow.co.uk/wp-content/uploads/2026/02/Broadway-Car-Show-Classic-Car-Sunday-Cotswold-Photographers-Natacha-Murphy-2.jpg",
    imageAlt: "Broadway Car Show high street",
    categories: ["Sporting"],
    websiteUrl: "https://www.broadwaycarshow.co.uk",
  },
  {
    id: "cheltenham-cricket-2026",
    title: "Cheltenham Cricket Festival",
    description:
      "The world's longest-running cricket festival, in its 150th year, played at Cheltenham College. A very English way to spend a summer afternoon. Picnic on the grass, county cricket in a ground that has hosted the game since 1872.",
    location: "Cheltenham College",
    month: "August",
    day: "8",
    endDay: "24",
    endMonth: "August",
    year: 2026,
    imageUrl:
      "https://cdn.gloscricket.co.uk/uploads/admin/media-bank/banner/2026/58d7daaf-0338-48a8-bce1-2658b0f29b2c.png?t=1771419883956",
    imageAlt: "Cheltenham Cricket Festival College ground",
    categories: ["Sporting"],
    websiteUrl: "https://www.gloscricket.co.uk/towergate-cheltenham-cricket-festival/",
  },
  {
    id: "cirencester-abbey-festival-2026",
    title: "Phoenix Festival",
    description:
      "A free community music and arts festival in Cirencester's Abbey Grounds over the August bank holiday weekend. Around 20,000 people attend each year. Two days of live music, dance and family entertainment. Free.",
    location: "Abbey Grounds, Cirencester",
    month: "August",
    day: "29",
    year: 2026,
    imageUrl:
      "https://static.wixstatic.com/media/e4d6f7_5b148aa055a5495581b6c92b9bbfa756~mv2.png/v1/fill/w_1960,h_604,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/e4d6f7_5b148aa055a5495581b6c92b9bbfa756~mv2.png",
    imageAlt: "Cirencester Abbey Grounds music festival",
    categories: ["Festivals"],
    websiteUrl: "https://www.phoenix-festival.co.uk/",
  },
  {
    id: "country-cup-polo-2026",
    title: "Country Cup Polo",
    description:
      "The closing polo tournament of the Cirencester Park season in August. Good atmosphere and a chance to watch high-quality play before the season ends.",
    location: "Cirencester Park Polo Club",
    month: "August",
    day: "4",
    endDay: "13",
    endMonth: "August",
    year: 2026,
    imageUrl:
      "https://cirencesterpolo.co.uk/wp-content/uploads/CambiasoHomePage-1-2048x1499.png",
    imageAlt: "Country Cup polo Cirencester Park",
    categories: ["Sporting"],
    websiteUrl: "https://cirencesterpolo.co.uk",
  },
  {
    id: "big-feastival-2026",
    title: "The Big Feastival",
    description:
      "Alex James's annual food and music festival on his Kingham farm. Michelin-starred chefs, street food, headline bands and a Cotswolds farm setting. Three days and most people camp. Book early, it sells out.",
    location: "Alex James' Farm, Kingham",
    month: "August",
    day: "28",
    endDay: "30",
    endMonth: "August",
    year: 2026,
    imageUrl:
      "https://bigfeastival.com/wp-content/uploads/2025/01/The-Big-Feastival-2024_20240823_Atmosphere_GaelleBeri_9077-Instagram.jpeg",
    imageAlt: "The Big Feastival Alex James Farm Kingham",
    categories: ["Festivals", "Food"],
    websiteUrl: "https://www.bigfeastival.com",
  },
  {
    id: "moreton-show-2026",
    title: "Moreton-in-Marsh Show",
    description:
      "One of the best traditional country shows in the Cotswolds. Shetland Pony Grand National, Livestock Grand Parade, shopping and entertainment across the showground. A proper agricultural show that hasn't forgotten what it's for.",
    location: "Moreton-in-Marsh Showground",
    month: "September",
    day: "5",
    year: 2026,
    imageUrl: "https://moretonshow.co.uk/wp-content/uploads/2025/06/IMG_5527-1-scaled.jpg",
    imageAlt: "Moreton-in-Marsh Show showground",
    categories: ["Food", "Family"],
    websiteUrl: "https://www.moretonshow.co.uk",
  },
  {
    id: "castle-combe-autumn-classic-2026",
    title: "Castle Combe Autumn Classic",
    description:
      "Historic motor racing at the Castle Combe Circuit over two days in September. Vintage cars and bikes on a track that has been racing since 1950. A very different experience from the village a few miles away.",
    location: "Castle Combe Circuit",
    month: "September",
    day: "12",
    endDay: "13",
    endMonth: "September",
    year: 2026,
    imageUrl:
      "https://ex7988es9ka.exactdn.com/wp-content/uploads/2026/02/Overview-2-1-768x432.jpg",
    imageAlt: "Castle Combe Autumn Classic motor racing",
    categories: ["Sporting"],
    websiteUrl: "https://www.castlecombecircuit.co.uk",
  },
  {
    id: "broadway-autumn-show-2026",
    title: "Broadway Autumn Show",
    description:
      "A traditional horticultural and craft show in Broadway on the day before the Food Festival. Flowers, vegetables, jams and crafts judged in the old-fashioned way. A good reason to arrive in Broadway a day early.",
    location: "Broadway",
    month: "September",
    day: "12",
    year: 2026,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/5523d629e4b0c8f3afe085cf/1660167089445-JOOFHVNXIRAYJJ34CFNN/Broadway-Horticultural-And-Craft-Show-Worcestershire-Cotswolds.jpg?format=2500w",
    imageAlt: "Broadway Autumn Show horticultural",
    categories: ["Family"],
    websiteUrl: "https://www.broadway-cotswolds.co.uk/broadway-horticultural-craft-show",
  },
  {
    id: "broadway-food-festival-2026",
    title: "Broadway Food Festival",
    description:
      "Around 35 artisan producers on Broadway's high street for one day in September. Freshly baked cakes, hot food, beers and gins from local makers. Free to attend. Broadway is worth a visit any time and this makes it worth timing.",
    location: "Broadway High Street",
    month: "September",
    day: "13",
    year: 2026,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/5523d629e4b0c8f3afe085cf/44a42761-1f81-4743-94f7-56df895cff45/Village-Green-Broadway-Festival-Worcestershire-UK.jpg?format=2500w",
    imageAlt: "Broadway Food Festival high street artisan stalls",
    categories: ["Food"],
    websiteUrl: "https://www.broadway-cotswolds.co.uk/food-festival",
  },
  {
    id: "blenheim-horse-trials-2026",
    title: "Blenheim Palace International Horse Trials",
    description:
      "Three days of international eventing in the grounds of Blenheim Palace in September. One of the most prestigious horse trials in the world, with top riders competing across dressage, cross-country and show jumping. The palace grounds give it a scale few events can match.",
    location: "Blenheim Palace, Woodstock",
    month: "September",
    day: "17",
    endDay: "20",
    endMonth: "September",
    year: 2026,
    imageUrl:
      "https://bpiht.co.uk/wp-content/uploads/2025/10/1st-Class-Images-RC90-Winner-719-THE-COMANCH-SC3_0353-scaled.jpg.webp",
    imageAlt: "Blenheim Palace International Horse Trials",
    categories: ["Sporting"],
    websiteUrl: "https://bpiht.co.uk/",
  },
  {
    id: "stroud-open-studios-2026",
    title: "Stroud Open Studios",
    description:
      "Over 80 artists open their studios across the Stroud Valleys in September and October. Free to visit. Seeing how and where work is made is a different experience from a gallery. You can buy directly from the artist.",
    location: "Various venues, Stroud Valleys",
    month: "September",
    day: "26",
    endDay: "4",
    endMonth: "October",
    year: 2026,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/5aaa85dd697a985c81246146/bd2d3e6a-395e-4f1d-ae7d-2924cc8c2450/Nik+Ramage+IMG_6153.jpeg?format=1500w",
    imageAlt: "Stroud Open Studios artist workspace",
    categories: ["Culture", "Experiences & Wellness"],
    websiteUrl: "https://www.sitefestival.org.uk/",
  },
  {
    id: "christmas-cotswold-fair-2026",
    title: "Christmas Cotswold Fair",
    description:
      "Over 200 artisan stalls at Evenlode Grounds near Daylesford, launching the festive season in the Cotswolds. Local food, drink, gifts and crafts from makers across the region. Worth combining with a visit to Daylesford itself.",
    location: "Evenlode Grounds, Daylesford",
    month: "September",
    day: "26",
    year: 2026,
    imageUrl:
      "https://cotswoldfair.com/wp21/wp-content/uploads/2025/07/Website-Images-3.png",
    imageAlt: "Christmas Cotswold Fair Daylesford artisan stalls",
    categories: ["Food"],
    websiteUrl: "https://www.cotswoldfair.com",
  },
  {
    id: "tetbury-music-festival-2026",
    title: "Tetbury Music Festival",
    description:
      "Chamber music in intimate venues around Tetbury from late September through early October. International performers, loyal audiences and a programme that has included Viktoria Mullova in 2026. Book specific concerts early, the best ones sell out.",
    location: "Various venues, Tetbury",
    month: "September",
    day: "26",
    endDay: "4",
    endMonth: "October",
    year: 2026,
    imageUrl:
      "https://static.wixstatic.com/media/9f1e28_19cd0af4ebdd4f0a9bbdb5c8e00277c5~mv2.jpg/v1/fill/w_1024,h_424,al_c,q_85,enc_avif,quality_auto/9f1e28_19cd0af4ebdd4f0a9bbdb5c8e00277c5~mv2.jpg",
    imageAlt: "Tetbury Music Festival chamber music",
    categories: ["Culture"],
    websiteUrl: "https://www.tetburymusicfestival.com",
  },
  {
    id: "cheltenham-literature-2026",
    title: "Cheltenham Literature Festival",
    description:
      "The world's longest-running literature festival, dating back to 1949. Ten days of talks, workshops and events in October with leading authors and public figures. Last year featured over 400 events. Book specific talks early as the popular ones sell out months ahead.",
    location: "Various venues, Cheltenham",
    month: "October",
    day: "9",
    endDay: "18",
    endMonth: "October",
    year: 2026,
    imageUrl:
      "https://cheltenham-festivals.transforms.svdcdn.com/production/Festivals/Literature/2025/social-images/40.png?w=1080&q=100&auto=format&fit=crop&dm=1767874172&s=a898384afa9832fd6f74fdb21483de30",
    imageAlt: "Cheltenham Literature Festival",
    categories: ["Culture"],
    websiteUrl: "https://www.cheltenhamfestivals.org",
  },
  {
    id: "cheltenham-film-festival-2026",
    title: "Cheltenham Film Festival",
    description:
      "Ten days of film screenings, guests and events in Cheltenham from late October. Now in its second year, following a debut in 2025 that screened over 40 award-winning films. Independent, volunteer-run and focused on quality cinema.",
    location: "Various venues, Cheltenham",
    month: "October",
    day: "30",
    endDay: "8",
    endMonth: "November",
    year: 2026,
    imageUrl: "https://filmchelt.org/wp-content/uploads/2026/05/we-pick-winners.jpg",
    imageAlt: "Cheltenham Film Festival",
    categories: ["Culture"],
    websiteUrl: "https://filmchelt.org",
  },
  {
    id: "chipping-campden-christmas-2026",
    title: "Chipping Campden Christmas Market",
    description:
      "The town hall and market square in Chipping Campden transformed for Christmas, with festive food, gift stalls, lights and a grotto in the town hall. One of the better Christmas markets in the region. Chipping Campden handles the season well.",
    location: "Market Square, Chipping Campden",
    month: "December",
    day: "1",
    year: 2026,
    imageUrl: "https://images.pexels.com/photos/29820836/pexels-photo-29820836.jpeg",
    imageAlt: "Chipping Campden Christmas market",
    categories: ["Food", "Family"],
    websiteUrl: "https://www.chippingcampdenonline.org/chipping-campden-christmas-market",
  },
  {
    id: "bourton-christmas-2026",
    title: "Bourton-on-the-Water Christmas Market",
    description:
      "A Christmas market in one of the most visited villages in the Cotswolds. Busier than most but the riverside setting along the Windrush is at its best in winter. Go on a weekday if you can.",
    location: "Bourton-on-the-Water",
    month: "December",
    day: "1",
    year: 2026,
    imageUrl:
      "https://gjkgchwqyjmemwadlpjv.supabase.co/storage/v1/object/public/media/bdf4d798-883e-402d-85d3-3e5e10833df1/bjnq498f3t.jpg",
    imageAlt: "Bourton-on-the-Water Christmas market riverside",
    categories: ["Food", "Family"],
    websiteUrl: "https://www.bourtoninfo.com",
  },
  {
    id: "cirencester-christmas-2026",
    title: "Cirencester Christmas Market",
    description:
      "The market place in Cirencester given over to festive stalls against the backdrop of St John the Baptist Church. A good half-day out combined with the independent shops on the surrounding streets.",
    location: "Market Place, Cirencester",
    month: "December",
    day: "1",
    year: 2026,
    imageUrl:
      "https://www.cirencesterrocks.co.uk/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmytownrocks.appspot.com%2Fcirencesterrocks.co.uk%2Flistings%2F18k0L15DStvJKd7V2xCu%2F1637662217603_Christmas-Market.JPG&w=1920&q=75",
    imageAlt: "Cirencester Christmas market market place",
    categories: ["Food"],
    websiteUrl: "https://cirencester.gov.uk/christmas-in-cirencester",
  },
  {
    id: "stroud-farmers-market",
    title: "Stroud Farmers Market",
    description:
      "Consistently rated one of the best farmers markets in the UK. Between 45 and 60 stalls every Saturday at Cornhill Market Place with organic vegetables, artisan bread, local meat and cheese, crafts and a buskers corner. Worth planning a Saturday Stroud visit around it.",
    location: "Cornhill Market Place, Stroud",
    month: "July",
    day: "4",
    year: 2026,
    imageUrl:
      "https://fresh-n-local.co.uk/wp-content/uploads/2014/10/stroud-farmers-market-banner-4-1024x372.jpg",
    imageAlt: "Stroud Farmers Market Cornhill stalls",
    categories: ["Markets"],
    websiteUrl: "https://fresh-n-local.co.uk/trader/stroud/",
    frequency: "Every Saturday",
    recurring: "Every Saturday, 9am–2pm",
  },
  {
    id: "moreton-marsh-market",
    title: "Moreton-in-Marsh Tuesday Market",
    description:
      "The largest open-air market in the Cotswolds, with over 200 stalls taking over the high street every Tuesday. Fresh produce, clothing, homewares, fish and collectables. A working market rather than a tourist one. The whole high street comes alive.",
    location: "High Street, Moreton-in-Marsh",
    month: "July",
    day: "7",
    year: 2026,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/5865693637c58153c75d6a77/1483285998974-0V6XZ0ABKJI6PYDGISOS/BracknellMarket.png?format=2500w",
    imageAlt: "Moreton-in-Marsh Tuesday market high street",
    categories: ["Markets"],
    websiteUrl: "https://www.cotswoldmarkets.com/moretoninmarsh",
    frequency: "Every Tuesday",
    recurring: "Every Tuesday",
  },
  {
    id: "cirencester-farmers-market",
    title: "Cirencester Farmers Market",
    description:
      "Local producers from within 30 miles of Cirencester selling seasonal fruit and veg, locally brewed beer, fresh flowers, game, poultry and cheeses. The 2nd and 4th Saturdays each month in the Market Place. Hobbs House Bakery is usually there.",
    location: "Market Place, Cirencester",
    month: "July",
    day: "11",
    year: 2026,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/5865693637c58153c75d6a77/1598954071705-OYSAUF4SZ5KLE125GJM2/DSC_5601.JPG?format=2500w",
    imageAlt: "Cirencester Farmers Market local producers",
    categories: ["Markets"],
    websiteUrl: "https://www.cotswoldmarkets.com/cirencester-farmers",
    frequency: "Every Saturday",
    recurring: "Every Saturday",
  },
  {
    id: "stow-farmers-market",
    title: "Stow-on-the-Wold Farmers Market",
    description:
      "Around 20 stalls in the Market Square run by the same team as the Stroud market. Farmhouse cheeses, wines, ciders, bread, pastries and local meat. The 2nd and last Thursdays April to October. Time a visit to Stow around it.",
    location: "Market Square, Stow-on-the-Wold",
    month: "July",
    day: "9",
    year: 2026,
    imageUrl:
      "https://fresh-n-local.co.uk/wp-content/uploads/2014/10/stow-farmers-market-banner-2-1024x372.jpg",
    imageAlt: "Stow-on-the-Wold Farmers Market market square",
    categories: ["Markets"],
    websiteUrl: "https://fresh-n-local.co.uk/trader/stow/",
    frequency: "Every Thursday",
    recurring: "Every Thursday",
  },
  {
    id: "tetbury-market",
    title: "Tetbury Market",
    description:
      "Two weekly markets under the Grade I listed 17th-century Market House in Tetbury. Wednesdays focus on seasonal produce, vegetables, meat, fish and plants. Saturdays are broader with bric-a-brac, books, arts and crafts. Often exhibitions upstairs too.",
    location: "Market House, Tetbury",
    month: "July",
    day: "1",
    year: 2026,
    imageUrl:
      "https://cdn.prod.website-files.com/6048f9b32c50f9e335154899/608043055ef2ed7f969f4344_Chater%20image%205.jpeg",
    imageAlt: "Tetbury Market House historic building",
    categories: ["Markets"],
    websiteUrl: "https://visittetbury.co.uk/tourism/markets",
    frequency: "Every Wednesday",
    recurring: "Every Wednesday",
  },
  {
    id: "chipping-norton-farmers-market",
    title: "Chipping Norton Farmers Market",
    description:
      "A monthly farmers market in the medieval Market Place in Chipping Norton with fresh produce, local honey, jams, cheeses and artisan bread from producers across the area. Chipping Norton repays a visit and this adds another reason to go on the right Saturday.",
    location: "Market Place, Chipping Norton",
    month: "July",
    day: "25",
    year: 2026,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/5865693637c58153c75d6a77/4514f523-8cb1-4920-b79f-950f1c59e9fe/WhatsApp+Image+2022-03-22+at+12.57.04.jpeg?format=2500w",
    imageAlt: "Chipping Norton Farmers Market medieval square",
    categories: ["Markets"],
    websiteUrl: "https://www.cotswoldmarkets.com/chipping-norton",
    frequency: "Every Wednesday",
    recurring: "Every Wednesday",
  },
  {
    id: "nailsworth-artisan-market",
    title: "Nailsworth Artisan Market",
    description:
      "A monthly artisan market in Mortimer Gardens, Nailsworth with homemade jam, cakes, cheeses, Tibetan dumplings, coffee, jewellery, ceramics and plants. Nailsworth is one of the more interesting small towns in the Stroud valleys and this is a good excuse to visit.",
    location: "Mortimer Gardens, Nailsworth",
    month: "July",
    day: "11",
    year: 2026,
    imageUrl: "https://www.lovenailsworth.com/img/Nailsworth%20Summer%20Fayre%20image.svg",
    imageAlt: "Nailsworth Artisan Market Mortimer Gardens",
    categories: ["Markets"],
    websiteUrl: "https://www.lovenailsworth.com/",
    frequency: "Every Saturday",
    recurring: "Every Saturday",
  },
  {
    id: "daylesford-workshops-2026",
    title: "Daylesford Seasonal Workshops",
    description:
      "Flower cutting and arranging from the estate's cutting garden, wellness sessions, craft workshops and more throughout the year at Daylesford Farm. The quality is consistently high and the farm setting gives everything a clear sense of place.",
    location: "Daylesford Farm, Kingham",
    month: "July",
    day: "1",
    year: 2026,
    imageUrl:
      "https://www.daylesford.com/media/wysiwyg/Demo-Widgets-Images/banner-image-about_us.jpg?format=webp&quality=85",
    imageAlt: "Daylesford Farm seasonal workshop cutting garden",
    categories: ["Experiences & Wellness"],
    websiteUrl: "https://www.daylesford.com/shop/events",
    frequency: "Various dates",
    recurring: "Various dates throughout the year",
  },
];

export function filterWhatsOnEvents(
  events: WhatsOnEvent[],
  filterId: string,
): WhatsOnEvent[] {
  if (filterId === "all") {
    return events.filter((event) => !event.recurring);
  }

  const rule = WHATS_ON_FILTERS.find((filter) => filter.id === filterId);
  if (!rule?.matchCategory) {
    return events;
  }

  if (rule.matchCategory === "Markets") {
    return events.filter(
      (event) => event.recurring && event.categories.includes("Markets"),
    );
  }

  if (rule.matchCategory === "Experiences & Wellness") {
    return events.filter((event) =>
      event.categories.includes("Experiences & Wellness"),
    );
  }

  return events.filter(
    (event) =>
      !event.recurring && event.categories.includes(rule.matchCategory!),
  );
}

export function formatEventCategories(categories: WhatsOnCategory[]): string {
  return categories.join(" · ");
}

export type WhatsOnDateFilter = "today" | "weekend" | "month";

export type WhatsOnDateRange = {
  start: Date;
  end: Date;
};

const MONTH_INDEX: Record<string, number> = {
  JAN: 0,
  JANUARY: 0,
  FEB: 1,
  FEBRUARY: 1,
  MAR: 2,
  MARCH: 2,
  APR: 3,
  APRIL: 3,
  MAY: 4,
  JUN: 5,
  JUNE: 5,
  JUL: 6,
  JULY: 6,
  AUG: 7,
  AUGUST: 7,
  SEP: 8,
  SEPT: 8,
  SEPTEMBER: 8,
  OCT: 9,
  OCTOBER: 9,
  NOV: 10,
  NOVEMBER: 10,
  DEC: 11,
  DECEMBER: 11,
};

function parseEventDate(month: string, day: string, year: number): Date | null {
  const monthIndex = MONTH_INDEX[month.trim().toUpperCase()];
  const dayNumber = Number.parseInt(day.trim(), 10);

  if (
    monthIndex === undefined ||
    !Number.isFinite(dayNumber) ||
    !Number.isFinite(year)
  ) {
    return null;
  }

  const date = new Date(year, monthIndex, dayNumber);
  date.setHours(0, 0, 0, 0);
  return date;
}

function getEventDate(event: WhatsOnEvent): Date | null {
  return parseEventDate(event.month, event.day, event.year);
}

function getEventEndDate(event: WhatsOnEvent): Date | null {
  if (event.endDay && event.endMonth) {
    return parseEventDate(event.endMonth, event.endDay, event.year);
  }

  return getEventDate(event);
}

function eventOverlapsDateRange(
  event: WhatsOnEvent,
  rangeStart: Date,
  rangeEnd: Date,
): boolean {
  const eventStart = getEventDate(event);
  const eventEnd = getEventEndDate(event);

  if (eventStart === null || eventEnd === null) {
    return false;
  }

  return eventStart <= rangeEnd && eventEnd >= rangeStart;
}

function isDateWithinEventRange(event: WhatsOnEvent, date: Date): boolean {
  const eventStart = getEventDate(event);
  const eventEnd = getEventEndDate(event);

  if (eventStart === null || eventEnd === null) {
    return false;
  }

  return date >= eventStart && date <= eventEnd;
}


export function sortWhatsOnEventsByDate(events: WhatsOnEvent[]): WhatsOnEvent[] {
  return [...events].sort((left, right) => {
    const leftDate = getEventDate(left);
    const rightDate = getEventDate(right);

    if (leftDate === null && rightDate === null) {
      return 0;
    }

    if (leftDate === null) {
      return 1;
    }

    if (rightDate === null) {
      return -1;
    }

    return leftDate.getTime() - rightDate.getTime();
  });
}

export function filterUpcomingWhatsOnEvents(
  events: WhatsOnEvent[],
  referenceDate: Date = new Date(),
): WhatsOnEvent[] {
  const today = new Date(referenceDate);
  today.setHours(0, 0, 0, 0);

  return events.filter((event) => {
    if (event.recurring) {
      return true;
    }

    const eventEndDate = getEventEndDate(event);
    return eventEndDate !== null && eventEndDate >= today;
  });
}

function getUpcomingWeekendDates(referenceDate: Date): Date[] {
  const dayOfWeek = referenceDate.getDay();
  let daysUntilSaturday: number;

  if (dayOfWeek === 0) {
    daysUntilSaturday = 6;
  } else if (dayOfWeek === 6) {
    daysUntilSaturday = 0;
  } else {
    daysUntilSaturday = 6 - dayOfWeek;
  }

  const saturday = new Date(referenceDate);
  saturday.setHours(0, 0, 0, 0);
  saturday.setDate(referenceDate.getDate() + daysUntilSaturday);

  const sunday = new Date(saturday);
  sunday.setDate(saturday.getDate() + 1);
  sunday.setHours(0, 0, 0, 0);

  return [saturday, sunday];
}

export function filterWhatsOnEventsByDate(
  events: WhatsOnEvent[],
  dateFilter: WhatsOnDateFilter,
  referenceDate: Date = new Date(),
): WhatsOnEvent[] {
  const today = new Date(referenceDate);
  today.setHours(0, 0, 0, 0);

  if (dateFilter === "today") {
    return events.filter((event) => isDateWithinEventRange(event, today));
  }

  if (dateFilter === "month") {
    const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
    monthStart.setHours(0, 0, 0, 0);
    const monthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    monthEnd.setHours(0, 0, 0, 0);

    return events.filter((event) =>
      eventOverlapsDateRange(event, monthStart, monthEnd),
    );
  }

  const weekendDates = getUpcomingWeekendDates(referenceDate);
  return events.filter((event) =>
    weekendDates.some((weekendDate) => isDateWithinEventRange(event, weekendDate)),
  );
}

export function filterWhatsOnEventsByDateRange(
  events: WhatsOnEvent[],
  range: WhatsOnDateRange,
): WhatsOnEvent[] {
  const start = new Date(range.start);
  start.setHours(0, 0, 0, 0);
  const end = new Date(range.end);
  end.setHours(0, 0, 0, 0);

  if (start > end) {
    return [];
  }

  return events.filter((event) => eventOverlapsDateRange(event, start, end));
}
