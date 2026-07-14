import type { GuideContentBlock } from "@/lib/guides-data";

export const whereAreTheCotswoldsMeta = {
  slug: "where-are-the-cotswolds",
  title: "Where Are the Cotswolds? Map, Counties and Boundary Explained",
  metaTitle: "Where Are the Cotswolds? Map & Counties | Visit Cotswolds",
  metaDescription:
    "Find the Cotswolds on a map, see the six counties the region crosses, and understand which nearby cities and towns sit outside the official boundary.",
  category: "Plan Your Trip" as const,
  datePublished: "2026-07-14",
  dateModified: "2026-07-14",
};

export const whereAreTheCotswoldsContent: GuideContentBlock[] = [
  {
    type: "paragraph",
    text: "The Cotswolds are in south-central and south-west England, across a long band of countryside to the west of Oxford and north-east of Bristol. The protected landscape stretches from Bath and Wiltshire in the south, through Gloucestershire and Oxfordshire, to Worcestershire and southern Warwickshire in the north.",
  },
  {
    type: "paragraph",
    text: "The Cotswolds are not one town or county. The formal Cotswolds National Landscape covers approximately 790 square miles, or 2,038 square kilometres, across parts of six ceremonial counties.",
  },
  {
    type: "paragraph",
    text: "The simplest answer: the Cotswolds are north-west of London, west of Oxford, east of Gloucester and north-east of Bristol. There is no single town centre or arrival point because the region extends for roughly 90 miles from north to south.",
  },
  {
    type: "image",
    id: "primary-locator-map",
    alt: "Map showing the Cotswolds in England, west of Oxford and north-east of Bristol",
    caption:
      "The Cotswolds stretch from the countryside around Bath to southern Warwickshire and Worcestershire",
    src: "https://pwwpxxeploahbcpubhnx.supabase.co/storage/v1/object/public/village-images/where-are-the-cotswolds-map-england%20(1).svg",
    placeholder: true,
  },
  {
    type: "heading",
    level: 2,
    text: "The Cotswolds at a glance",
  },
  {
    type: "table",
    headers: ["Question", "Answer"],
    rows: [
      ["Where are the Cotswolds?", "In south-central and south-west England"],
      [
        "Are the Cotswolds a county?",
        "No, the region crosses several county boundaries",
      ],
      [
        "Are the Cotswolds a town?",
        "No, it contains many separate towns, villages and rural areas",
      ],
      ["How large are the Cotswolds?", "Approximately 790 square miles"],
      ["How long is the region?", "Roughly 90 miles from north to south"],
      [
        "What is its protected status?",
        "National Landscape, with the legal designation Area of Outstanding Natural Beauty",
      ],
      [
        "Is there one central town?",
        "No, different towns work as bases for different parts of the region",
      ],
      ["Which country is it in?", "England, within the United Kingdom"],
    ],
  },
  {
    type: "paragraph",
    text: "The Cotswolds was designated an Area of Outstanding Natural Beauty in 1966 and extended in 1990. The protected area is now publicly known as the Cotswolds National Landscape, although AONB remains the legal name of the designation.",
  },
  {
    type: "heading",
    level: 2,
    text: "Where are the Cotswolds in England?",
  },
  {
    type: "paragraph",
    text: "On a map of England, the Cotswolds sit broadly:",
  },
  {
    type: "list",
    style: "bullet",
    items: [
      "north-west of London",
      "west of Oxford",
      "east of Gloucester and the Severn Valley",
      "north-east of Bristol",
      "around the northern, eastern and southern edges of Bath",
      "south of Birmingham",
    ],
  },
  {
    type: "paragraph",
    text: "The landscape is long and relatively narrow. It follows the Cotswold hills from the Bath area towards southern Warwickshire and Worcestershire, rather than forming a compact circle around one central destination. The western edge includes the steep Cotswold escarpment above the Severn Valley and Vale of Evesham, while the land slopes more gradually towards Oxfordshire and the upper Thames to the east.",
  },
  {
    type: "paragraph",
    text: 'This shape matters when planning a visit. Two places described as being "in the Cotswolds" may still be a considerable drive apart. The name identifies a large region, not a single collection of neighbouring villages.',
  },
  {
    type: "heading",
    level: 2,
    text: "What county is the Cotswolds in?",
  },
  {
    type: "paragraph",
    text: "The Cotswolds are not contained within one county. The clearest visitor-facing answer is that the formal landscape crosses parts of six ceremonial counties:",
  },
  {
    type: "list",
    style: "bullet",
    items: [
      "Gloucestershire",
      "Oxfordshire",
      "Wiltshire",
      "Somerset",
      "Warwickshire",
      "Worcestershire",
    ],
  },
  {
    type: "paragraph",
    text: "Most of the protected area lies within Gloucestershire, including parts of the South Gloucestershire unitary authority. The official boundary also includes land administered by Oxfordshire, Wiltshire, Warwickshire, Worcestershire and Bath & North East Somerset.",
  },
  {
    type: "table",
    headers: [
      "County",
      "Examples within or associated with that part of the protected landscape",
    ],
    rows: [
      [
        "Gloucestershire",
        "Bibury, Cirencester, Chipping Campden, Snowshill and Stow-on-the-Wold",
      ],
      [
        "Oxfordshire",
        "Burford, Chipping Norton and much of the eastern Cotswolds",
      ],
      ["Wiltshire", "Castle Combe and part of the southern Cotswolds"],
      [
        "Somerset",
        "Cotswold countryside around the northern, eastern and southern edges of Bath",
      ],
      [
        "Warwickshire",
        "Lower Brailes and countryside in the south of Stratford-on-Avon District",
      ],
      [
        "Worcestershire",
        "Broadway, Bredon Hill and the north-western Cotswolds",
      ],
    ],
  },
  {
    type: "paragraph",
    text: "The county examples should be understood as orientation rather than a complete list. The official boundary is irregular and does not follow county borders neatly.",
  },
  {
    type: "heading",
    level: 3,
    text: "Why do some websites say five counties and others say six?",
  },
  {
    type: "paragraph",
    text: "You will see both answers online.",
  },
  {
    type: "paragraph",
    text: "Five-county lists generally name Gloucestershire, Oxfordshire, Wiltshire, Warwickshire and Worcestershire, omitting Somerset. The official National Landscape boundary, however, includes land in Bath & North East Somerset. Bath & North East Somerset forms part of the ceremonial county of Somerset, so counting ceremonial counties produces a total of six.",
  },
  {
    type: "paragraph",
    text: "South Gloucestershire is a separate unitary authority but forms part of the ceremonial county of Gloucestershire, so it does not create a seventh county.",
  },
  {
    type: "paragraph",
    text: "For consistency, Visit Cotswolds uses six ceremonial counties when answering the question.",
  },
  {
    type: "image",
    id: "boundary-map",
    alt: "Map of the Cotswolds National Landscape boundary across six English counties",
    caption:
      "Visit Cotswolds uses the formal National Landscape boundary as its main editorial scope",
    src: "https://pwwpxxeploahbcpubhnx.supabase.co/storage/v1/object/public/village-images/cotswolds-national-landscape-boundary-map%20(1).svg",
    placeholder: true,
  },
  {
    type: "heading",
    level: 2,
    text: "What exactly counts as the Cotswolds?",
  },
  {
    type: "paragraph",
    text: 'The word "Cotswolds" is used in three different ways. Understanding the difference helps explain why maps and travel guides do not always agree.',
  },
  {
    type: "heading",
    level: 3,
    text: "The Cotswolds as a wider region",
  },
  {
    type: "paragraph",
    text: 'In everyday conversation and travel marketing, "the Cotswolds" can describe a loose cultural and geographical region. Nearby cities, hotels and attractions may use the name because they are convenient for visiting the area, even when they sit outside its formal boundary.',
  },
  {
    type: "paragraph",
    text: "This can be useful for broad trip planning, but it is not a precise definition.",
  },
  {
    type: "heading",
    level: 3,
    text: "The Cotswolds National Landscape",
  },
  {
    type: "paragraph",
    text: "The Cotswolds National Landscape is the formally designated and mapped protected area. It covers 790 square miles, crosses 15 local authority areas and was designated to conserve and enhance the natural beauty of the landscape.",
  },
  {
    type: "paragraph",
    text: "This boundary includes far more than well-known stone villages. It also covers farmland, woodland, river valleys, limestone grassland, high open ground and the western escarpment.",
  },
  {
    type: "heading",
    level: 3,
    text: "Cotswold District",
  },
  {
    type: "paragraph",
    text: "Cotswold District is a local government area within Gloucestershire. It contains many recognised Cotswold towns and villages, but it is not the same as the whole Cotswolds.",
  },
  {
    type: "paragraph",
    text: "Only 43.8% of the National Landscape falls within Cotswold District. The protected area continues into other Gloucestershire districts and across several other counties.",
  },
  {
    type: "heading",
    level: 2,
    text: "How Visit Cotswolds defines the region",
  },
  {
    type: "paragraph",
    text: "Visit Cotswolds uses the formal Cotswolds National Landscape boundary when deciding which villages, attractions and local recommendations form part of the site.",
  },
  {
    type: "paragraph",
    text: "Nearby cities and towns may be mentioned where they are useful for transport, accommodation or wider trip planning, but they are not automatically presented as Cotswold destinations.",
  },
  {
    type: "paragraph",
    text: "This gives the website a consistent geographical rule and avoids quietly expanding the region whenever a nearby place is commercially useful.",
  },
  {
    type: "heading",
    level: 2,
    text: "Where are the Cotswolds on a map?",
  },
  {
    type: "paragraph",
    text: "A useful Cotswolds map needs to show more than a collection of village pins.",
  },
  {
    type: "paragraph",
    text: "It should show:",
  },
  {
    type: "list",
    style: "bullet",
    items: [
      "where the Cotswolds sit within England",
      "the shape of the formal National Landscape boundary",
      "nearby cities used as arrival points",
      "where individual villages sit within the wider region",
    ],
  },
  {
    type: "paragraph",
    text: "The official boundary map shows a long, uneven landscape running from Bath towards Warwickshire and Worcestershire. Banbury and Oxford sit beyond its eastern side; Gloucester and Bristol are outside to the west and south-west; Stratford-upon-Avon is north of the boundary.",
  },
  {
    type: "paragraph",
    text: 'Searching for "the Cotswolds" in a navigation app can be misleading because the app may return a single central pin. For directions, enter the exact village, town, attraction or car park you intend to visit.',
  },
  {
    type: "paragraph",
    text: "The Cotswolds National Landscape publishes both a boundary map and a visitor map. The boundary map is the more reliable reference for deciding whether a place is formally within the protected area.",
  },
  {
    type: "heading",
    level: 2,
    text: "Are Bath, Cheltenham, Oxford and Stratford-upon-Avon in the Cotswolds?",
  },
  {
    type: "paragraph",
    text: "Several nearby places are frequently included in Cotswolds trips, but their relationship with the formal boundary differs.",
  },
  {
    type: "table",
    headers: ["Place", "Is it in the Cotswolds?"],
    rows: [
      [
        "Cheltenham",
        "Cheltenham town centre is outside the National Landscape. The protected landscape lies immediately to the east and south, with a small area extending into the borough around Leckhampton. It is best described as a gateway to the western and northern Cotswolds.",
      ],
      [
        "Bath",
        "Bath sits at the southern end of the region, but the city centre is not a Cotswold town. The National Landscape surrounds the city to the north, east and south, and the 102-mile Cotswold Way runs between Chipping Campden and Bath.",
      ],
      [
        "Oxford",
        "Oxford is outside the National Landscape, to its east. It is a useful arrival point for parts of the Oxfordshire Cotswolds but should not be described as a Cotswold town.",
      ],
      [
        "Stratford-upon-Avon",
        "Stratford-upon-Avon is north of the formal boundary. The National Landscape does extend into the southern part of Stratford-on-Avon District, but not into Stratford town itself.",
      ],
      [
        "Tewkesbury",
        "Tewkesbury town sits west of the formal landscape. Parts of the eastern side of Tewkesbury Borough fall within the National Landscape.",
      ],
      [
        "Banbury",
        "Banbury is outside the Cotswolds, beyond the north-eastern edge of the protected landscape.",
      ],
      [
        "Malmesbury",
        "Malmesbury sits just outside the formal southern boundary, although it is often included in wider Cotswolds trips.",
      ],
      [
        "Gloucester",
        "Gloucester is outside the National Landscape, below the western Cotswold escarpment.",
      ],
      [
        "Bristol",
        "Bristol is outside the Cotswolds, to the south-west, but is a useful arrival point for the southern part of the region.",
      ],
    ],
  },
  {
    type: "paragraph",
    text: "The distinction is not intended to exclude useful nearby places. It simply makes clear when a destination is near the Cotswolds rather than formally within them.",
  },
  {
    type: "heading",
    level: 2,
    text: "How big are the Cotswolds?",
  },
  {
    type: "paragraph",
    text: "The Cotswolds National Landscape covers 790 square miles, or 2,038 square kilometres. It is roughly 90 miles long and about 25 miles across at its widest point.",
  },
  {
    type: "paragraph",
    text: "That makes it larger than many visitors expect. A northern market town, a central Gloucestershire village and a location near Bath may all be described as Cotswolds destinations, but they do not necessarily belong in the same day's route.",
  },
  {
    type: "paragraph",
    text: "There are no official tourism boundaries dividing the region into north, central and south. However, these informal labels are useful when planning:",
  },
  {
    type: "table",
    headers: ["Informal area", "Broad location", "Planning use"],
    rows: [
      [
        "North Cotswolds",
        "Around Chipping Campden, Broadway, Moreton-in-Marsh and Stow-on-the-Wold",
        "Useful for grouping the northern towns and villages",
      ],
      [
        "Central Cotswolds",
        "Around Bourton-on-the-Water, Northleach, Bibury, Burford and Cirencester",
        "Covers much of central Gloucestershire and the eastern Cotswolds",
      ],
      [
        "South Cotswolds",
        "Around Tetbury, Castle Combe and the countryside towards Bath",
        "Better approached from Bath, Bristol or the M4 corridor",
      ],
    ],
  },
  {
    type: "paragraph",
    text: "These are practical groupings rather than fixed geographical definitions.",
  },
  {
    type: "image",
    id: "wider-landscape-photo",
    alt: "Cotswold farmland and limestone houses viewed from the hillside above the village",
    placeholder: true,
  },
  {
    type: "heading",
    level: 2,
    text: "What this means when planning a visit",
  },
  {
    type: "paragraph",
    text: "The Cotswolds should be treated as a region to explore, not one stop to add to a route.",
  },
  {
    type: "paragraph",
    text: "For a more manageable visit:",
  },
  {
    type: "list",
    style: "bullet",
    items: [
      "decide which villages or attractions matter most to you",
      "locate them on the boundary map",
      "group places from the same part of the region",
      "use the exact destination when checking routes and travel times",
      "avoid crossing from one end of the Cotswolds to the other for brief stops",
      "allow more time for narrow rural roads, parking and walking into village centres",
    ],
  },
  {
    type: "paragraph",
    text: "For a one-day visit, one compact section of the Cotswolds will usually provide a better experience than attempting to collect places across the entire region.",
  },
  {
    type: "heading",
    level: 2,
    text: "Frequently asked questions",
  },
  {
    type: "faq",
    items: [
      {
        question: "Where are the Cotswolds in the UK?",
        answer:
          "The Cotswolds are in England, in the southern half of the United Kingdom. The region lies north-west of London, west of Oxford, north-east of Bristol and south of Birmingham.",
      },
      {
        question: "Where are the Cotswolds in relation to London?",
        answer:
          "The Cotswolds are north-west of London. There is no single distance because the protected landscape is roughly 90 miles long. The journey to an eastern gateway is different from the journey to the southern Cotswolds near Bath and Castle Combe.",
      },
      {
        question: "Is the Cotswolds a town?",
        answer:
          "No. The Cotswolds is a large geographical region containing many separate towns, villages, hamlets and rural areas.",
      },
      {
        question: "Are the Cotswolds a county?",
        answer:
          "No. The formal National Landscape crosses parts of six ceremonial counties: Gloucestershire, Oxfordshire, Wiltshire, Somerset, Warwickshire and Worcestershire.",
      },
      {
        question: "Is the Cotswolds a National Park?",
        answer:
          "No. The Cotswolds is a National Landscape, with the legal designation of an Area of Outstanding Natural Beauty. National Parks and National Landscapes are both protected landscapes, but they have different governance and statutory arrangements.",
      },
      {
        question: "Where is the centre of the Cotswolds?",
        answer:
          "There is no official visitor centre point or single town that provides equal access to the whole region. Different towns work as bases for the northern, central and southern Cotswolds.",
      },
    ],
  },
  {
    type: "heading",
    level: 2,
    text: "Explore the Cotswolds by place",
  },
  {
    type: "paragraph",
    text: "Use the map to choose a part of the region, then continue to the individual village and town guides. Each guide covers what is there, how long to allow, practical access information and what can sensibly be combined nearby.",
  },
  {
    type: "paragraph",
    text: "Written and researched by Leanne Matthews. Founder and editor of Visit Cotswolds, an independent guide built from direct visits, original photography and independently checked visitor information.",
  },
  {
    type: "heading",
    level: 2,
    text: "Sources and editorial method",
  },
  {
    type: "paragraph",
    text: "The geographical scope of this page is based on the formal Cotswolds National Landscape boundary. Area, designation and local-authority information were checked against material published by the Cotswolds National Landscape Board. Nearby towns and cities were checked against the official boundary map and relevant local-authority information.",
  },
  {
    type: "paragraph",
    text: "Visit Cotswolds is an independent guide and is not affiliated with the official tourism body or Cotswolds National Landscape Board.",
  },
  {
    type: "paragraph",
    text: "Last fact-checked: July 2026",
  },
];
