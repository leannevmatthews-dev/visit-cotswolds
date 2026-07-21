import type { DirectoryFilter, DirectoryListing } from "@/lib/listing-directory";

export type ActivityListingCategory =
  | "Walks & Trails"
  | "Gardens & Estates"
  | "Historic Houses"
  | "Unique Experiences"
  | "Markets"
  | "Family";

export type ThingsToDoListing = DirectoryListing & {
  category: ActivityListingCategory;
  familyFriendly: boolean;
  location: string;
  address: string;
  isAttraction?: boolean;
};

export const THINGS_TO_DO_HERO_IMAGE =
  "https://pwwpxxeploahbcpubhnx.supabase.co/storage/v1/object/public/village-images/things-to-do-hero.jpg";

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
    id: "historic-houses",
    label: "Historic Houses",
    matchCategory: "Historic Houses",
  },
  {
    id: "unique-experiences",
    label: "Unique Experiences",
    matchCategory: "Unique Experiences",
  },
  { id: "markets", label: "Markets", matchCategory: "Markets" },
  { id: "family", label: "Family", matchCategory: "Family" },
];

export const THINGS_TO_DO_LISTINGS: ThingsToDoListing[] = [
  {
    id: "highgrove-gardens",
    name: "Highgrove Gardens",
    description:
      "The private gardens of King Charles III near Tetbury. Organic landscaping, a stumpery, wild meadows and themed garden rooms across 37 acres. Guided tours only and they book up fast. The website opens new dates periodically so check back if your preferred slot is full.",
    category: "Gardens & Estates",
    location: "Tetbury",
    address: "Doughton, Tetbury GL8 8TN",
    familyFriendly: false,
    priceLevel: 3,
    imageUrl: "https://www.highgrovegardens.com/cdn/shop/files/Garden-Highlights-side-by-side-v1719484076341.jpg?v=1758540187&width=1500",
    imageAlt: "Highgrove Gardens, garden in Tetbury",
    websiteUrl: "https://www.highgrovegardens.com",
  },
  {
    id: "sudeley-castle",
    name: "Sudeley Castle & Gardens",
    description:
      "A Grade I listed castle in Winchcombe with ten distinct gardens and the only private burial place of an English queen. Katherine Parr is buried in the church on the grounds. The gardens are worth the visit in their own right. Allow at least half a day.",
    category: "Historic Houses",
    location: "Winchcombe",
    address: "Winchcombe GL54 5LP",
    familyFriendly: true,
    priceLevel: 2,
    imageUrl:
      "https://sudeleycastle.co.uk/cms-assets/header-images/_headerXl/Homepage-Thumnail_with-video.jpg",
    imageAlt: "Sudeley Castle & Gardens, historic houses in Winchcombe",
    websiteUrl: "https://sudeleycastle.co.uk",
  },
  {
    id: "painswick-rococo-garden",
    name: "Painswick Rococo Garden",
    description:
      "The only complete surviving Rococo garden in the UK, set in a hidden valley outside Painswick. Flamboyant follies, winding paths and a snowdrop display in February that draws visitors from across the country. Unusual and specific to this one valley. Nothing else in the Cotswolds looks quite like it.",
    category: "Gardens & Estates",
    location: "Painswick",
    address: "Gloucester Road, Painswick GL6 6TH",
    familyFriendly: true,
    priceLevel: 2,
    imageUrl:
      "https://www.rococogarden.org.uk/wp-content/uploads/2025/04/2-2.png",
    imageAlt: "Painswick Rococo Garden, garden in Painswick",
    websiteUrl: "https://www.rococogarden.org.uk",
  },
  {
    id: "kelmscott-manor",
    name: "Kelmscott Manor",
    description:
      "William Morris's country home near Lechlade, preserved largely as it was in his lifetime. Tudor architecture, Arts and Crafts interiors and a garden that directly influenced his textile designs. Open Wednesday to Saturday on limited days, so check before you go.",
    category: "Historic Houses",
    location: "Lechlade",
    address: "Kelmscott, Lechlade GL7 3HJ",
    familyFriendly: false,
    priceLevel: 2,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/f4/Courtyard_-_Kelmscott_Manor_-_Oxfordshire%2C_England_-_DSC00147.jpg",
    imageAlt: "Kelmscott Manor, historic houses in Lechlade",
    imageCredit: { text: "Photo: Daderot (public domain)", url: "https://commons.wikimedia.org/wiki/File:Courtyard_-_Kelmscott_Manor_-_Oxfordshire,_England_-_DSC00147.jpg" },
    websiteUrl: "https://kelmscottmanor.org.uk",
  },
  {
    id: "batsford-arboretum",
    name: "Batsford Arboretum",
    description:
      "Sixty acres of rare trees near Moreton-in-Marsh, particularly good in autumn when the Japanese maples turn. Smaller and quieter than Westonbirt with a different character. If you're visiting the arboretum at Westonbirt, Batsford is worth combining on the same trip.",
    category: "Gardens & Estates",
    location: "Moreton-in-Marsh",
    address: "Batsford, Moreton-in-Marsh GL56 9AT",
    familyFriendly: true,
    priceLevel: 2,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/bc/Batsford-Arboretum-bridge.jpg",
    imageAlt: "Batsford Arboretum, garden in Moreton-in-Marsh",
    imageCredit: { text: "Photo: Mervyn (public domain)", url: "https://commons.wikimedia.org/wiki/File:Batsford-Arboretum-bridge.jpg" },
    websiteUrl: "https://batsarb.co.uk",
  },
  {
    id: "sezincote-house",
    name: "Sezincote House & Garden",
    description:
      "A Neo-Mughal Indian estate in the Cotswolds with temples, waterfalls, specimen pools and an extraordinary house that the Prince Regent visited before commissioning the Brighton Pavilion. Still a private family home, open on limited afternoons. One of the most surprising things in the region.",
    category: "Historic Houses",
    location: "Moreton-in-Marsh",
    address: "Sezincote, Moreton-in-Marsh GL56 9AW",
    familyFriendly: false,
    priceLevel: 2,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/e3/Sezincote_House_and_garden_-_geograph.org.uk_-_6205744.jpg",
    imageAlt: "Sezincote House & Garden, historic houses in Moreton-in-Marsh",
    imageCredit: { text: "Photo: Chris Gunns, CC BY-SA 2.0", url: "https://creativecommons.org/licenses/by-sa/2.0" },
    websiteUrl: "http://www.sezincote.co.uk",
  },
  {
    id: "cotswolds-distillery",
    name: "Cotswolds Distillery",
    description:
      "A boutique distillery near Shipston-on-Stour making single malt whisky and dry gin using traditional methods. The whisky has won serious international recognition. Tours run daily and include tastings. Worth the short drive from the main Cotswolds villages.",
    category: "Unique Experiences",
    location: "Shipston-on-Stour",
    address: "Whichford Road, Stourton CV36 5EX",
    familyFriendly: false,
    priceLevel: 2,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c8/Outside_picture_of_Cotswolds_Distillery_main_building.jpg",
    imageAlt: "Cotswolds Distillery, unique experiences in Shipston-on-Stour",
    imageCredit: { text: "Photo: Wikireaderofbrooklyn, CC BY-SA 4.0", url: "https://creativecommons.org/licenses/by-sa/4.0" },
    websiteUrl: "https://www.cotswoldsdistillery.com",
  },
  {
    id: "woodchester-valley-vineyard",
    name: "Woodchester Valley Vineyard",
    description:
      "A family-owned vineyard producing award-winning still and sparkling wines on steep limestone slopes in the Stroud valley. Tours and tastings run through the season. The English sparkling is genuinely competitive with Champagne.",
    category: "Unique Experiences",
    location: "Stroud",
    address: "Gydynap Lane, Stroud GL5 5EY",
    familyFriendly: false,
    priceLevel: 2,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/ec/Woodchester_Valley_Vineyard_-_geograph.org.uk_-_7244370.jpg",
    imageAlt: "Woodchester Valley Vineyard, unique experiences in Stroud",
    imageCredit: { text: "Photo: Stephen McKay, CC BY-SA 2.0", url: "https://creativecommons.org/licenses/by-sa/2.0" },
    websiteUrl: "https://www.woodchestervalleyvineyard.co.uk",
  },
  {
    id: "kiftsgate-court-gardens",
    name: "Kiftsgate Court Gardens",
    description:
      "A garden cultivated over three generations of female gardeners near Chipping Campden. The Kiftsgate Rose is the largest rose in England and covers an entire wall. Sweeping views across the Vale of Evesham. Smaller than Hidcote next door and more personal for it.",
    category: "Gardens & Estates",
    location: "Chipping Campden",
    address: "Chipping Campden GL55 6LN",
    familyFriendly: false,
    priceLevel: 2,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/97/Kiftsgate_Court_Geograph_4471.jpg",
    imageAlt: "Kiftsgate Court Gardens, garden in Chipping Campden",
    imageCredit: { text: "Photo: Jerry Evans, CC BY-SA 2.0", url: "https://creativecommons.org/licenses/by-sa/2.0" },
    websiteUrl: "http://www.kiftsgate.co.uk",
  },
  {
    id: "hidcote-manor-garden",
    name: "Hidcote Manor Garden",
    description:
      "One of the most influential gardens in England, a National Trust Arts and Crafts masterpiece of interconnected outdoor rooms near Chipping Campden. Created by Major Lawrence Johnston from 1907. Gets busy in summer. Arrive before 10am or visit in September when the crowds thin and the late-season colour is at its best.",
    category: "Gardens & Estates",
    location: "Chipping Campden",
    address: "Hidcote Bartrim, Chipping Campden GL55 6LR",
    familyFriendly: true,
    priceLevel: 2,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/bf/Hidcote_Manor_Garden_-_geograph.org.uk_-_4298969.jpg",
    imageAlt: "Hidcote Manor Garden, garden in Chipping Campden",
    imageCredit: { text: "Photo: Michael Garlick, CC BY-SA 2.0", url: "https://creativecommons.org/licenses/by-sa/2.0" },
    websiteUrl: "https://www.nationaltrust.org.uk/hidcote",
  },
  {
    id: "chastleton-house",
    name: "Chastleton House",
    description:
      "A Jacobean house near Moreton-in-Marsh that has barely changed since 1612. The National Trust deliberately maintains it in its original faded condition rather than restoring it, which makes it feel more authentic than almost any other house of its kind. The rules of croquet were codified here in 1865.",
    category: "Historic Houses",
    location: "Moreton-in-Marsh",
    address: "Chastleton, Moreton-in-Marsh GL56 0SU",
    familyFriendly: false,
    priceLevel: 2,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/cf/Chastleton_House_-_front.jpg",
    imageAlt: "Chastleton House, historic houses in Moreton-in-Marsh",
    imageCredit: { text: "Photo: DeFacto, CC BY-SA 4.0", url: "https://creativecommons.org/licenses/by-sa/4.0" },
    websiteUrl: "https://www.nationaltrust.org.uk/chastleton",
  },
  {
    id: "stroud-farmers-market-todo",
    name: "Stroud Farmers Market",
    description:
      "Consistently rated one of the best farmers markets in the UK. Between 45 and 60 stalls every Saturday at Cornhill Market Place with organic vegetables, artisan bread, local meat, cheese, crafts and a buskers corner. Worth timing a Stroud visit around a Saturday morning.",
    category: "Markets",
    location: "Stroud",
    address: "Cornhill Market Place, Stroud GL5 1AP",
    familyFriendly: true,
    priceLevel: 1,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/71/Farmers%27_market%2C_Stroud.jpg",
    imageAlt: "Stroud Farmers Market, market in Stroud",
    imageCredit: { text: "Photo: Jongleur100 (public domain)", url: "https://commons.wikimedia.org/wiki/File:Farmers'_market,_Stroud.jpg" },
    websiteUrl: "https://fresh-n-local.co.uk/trader/stroud/",
  },
  {
    id: "westonbirt-arboretum",
    name: "Westonbirt, The National Arboretum",
    description:
      "Six hundred acres of trees, 15,000 individual specimens from around the world. Spectacular in autumn but worth visiting in any season. The treetop walkway gives a completely different perspective on the collection. Go on a weekday morning in October if you can, weekends get very busy.",
    category: "Gardens & Estates",
    location: "Tetbury",
    address: "Tetbury GL8 8QS",
    familyFriendly: true,
    priceLevel: 2,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/d4/Westonbirt%2C_the_National_Arboretum_-_geograph.org.uk_-_6654520.jpg",
    imageAlt: "Westonbirt, The National Arboretum, garden in Tetbury",
    imageCredit: { text: "Photo: Rebecca A Wills, CC BY-SA 2.0", url: "https://creativecommons.org/licenses/by-sa/2.0" },
    websiteUrl: "https://www.forestryengland.uk/westonbirt",
  },
  {
    id: "cookery-school-thyme",
    name: "The Cookery School at Thyme",
    description:
      "Bespoke masterclasses at the Thyme estate in Southrop using organic ingredients from the estate's own gardens. Half-day and full-day options covering bread, pastry, seasonal cooking and more. The setting makes it worth the trip even before you start cooking.",
    category: "Unique Experiences",
    location: "Southrop, Lechlade",
    address: "Southrop Manor Estate, Southrop GL7 3PW",
    familyFriendly: false,
    priceLevel: 3,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/5f6b4b0c38cfbb7e2af14d5e/1615580720723-X487TRC4BBZTZ1YONJIG/Thyme+-+The+Cookery+School+-+Food1.jpg",
    imageAlt: "The Cookery School at Thyme, unique experiences in Southrop",
    websiteUrl: "https://www.thyme.co.uk",
  },
  {
    id: "cotswold-way",
    name: "Cotswold Way National Trail",
    description:
      "One hundred and two miles from Chipping Campden to Bath along the Cotswold escarpment. You don't have to walk all of it. The Broadway Tower section and the stretch above Painswick are both manageable day walks with views that are hard to beat anywhere in the region. The full route takes around a week.",
    category: "Walks & Trails",
    location: "Chipping Campden to Bath",
    address: "Market Place, Chipping Campden GL55 6HB",
    familyFriendly: true,
    priceLevel: 1,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cotswold_Way_National_Trail_marker_-_geograph.org.uk_-_335032.jpg",
    imageAlt: "Cotswold Way National Trail, country walk in Chipping Campden to Bath",
    imageCredit: { text: "Photo: Caroline Tandy, CC BY-SA 2.0", url: "https://creativecommons.org/licenses/by-sa/2.0" },
    websiteUrl: "https://www.alltrails.com",
  },
  {
    id: "cotswold-farm-park",
    name: "Cotswold Farm Park",
    description:
      "Adam Henson's conservation farm near Guiting Power dedicated to rare British breeds. Good for families with younger children, with hands-on animal encounters, farm trails and seasonal activities. The farm is a working conservation operation, not just a visitor attraction.",
    category: "Family",
    location: "Guiting Power",
    address: "Guiting Power, Cheltenham GL54 5FL",
    familyFriendly: true,
    priceLevel: 2,
    imageUrl:
      "https://cotswoldfarmpark.co.uk/media/ctrfvncu/hillside-play.jpg?cc=0.05966061377646743%2C0.33949092066470116%2C0.05966061377646736%2C0&width=2280&height=1140&quality=80",
    imageAlt: "Cotswold Farm Park, family in Guiting Power",
    websiteUrl: "https://cotswoldfarmpark.co.uk",
  },
  {
    id: "cotswold-falconry-centre",
    name: "Cotswold Falconry Centre",
    description:
      "Close-up encounters and flying demonstrations at Batsford Park near Moreton-in-Marsh. The flying displays are dramatic in a way that photographs don't capture. The centre takes its conservation work seriously and the knowledge of the staff shows. One of the better ways to spend a couple of hours in the northern Cotswolds.",
    category: "Unique Experiences",
    location: "Moreton-in-Marsh",
    address: "Batsford Park, Moreton-in-Marsh GL56 9QB",
    familyFriendly: true,
    priceLevel: 2,
    imageUrl:
      "https://www.cotswold-falconry.co.uk/images/our-birds/vultures/african-white-backed-vulture.jpg",
    imageAlt: "Cotswold Falconry Centre, unique experiences in Moreton-in-Marsh",
    websiteUrl: "https://www.cotswold-falconry.co.uk",
  },
  {
    id: "arlington-row-walk",
    name: "Arlington Row",
    description:
      "A short walk past the 14th-century weavers' cottages in Bibury along the River Coln. Free to walk at any time. Most visitors only see Arlington Row from the road. The riverside path beyond the bridge is quieter and more interesting, and most people never find it.",
    category: "Walks & Trails",
    location: "Bibury",
    address: "Arlington Row, Bibury GL7 5ND",
    familyFriendly: true,
    priceLevel: 1,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/be/Bibury_2015_06.jpg",
    imageAlt: "Arlington Row, country walk in Bibury",
    imageCredit: { text: "Photo: Mike Peel, CC BY-SA 4.0", url: "https://creativecommons.org/licenses/by-sa/4.0" },
    websiteUrl: "https://www.bibury.com/arlington-row/",
  },
  {
    id: "st-edwards-church-stow",
    name: "St Edward's Church, Stow-on-the-Wold",
    description:
      "A medieval church with a doorway flanked by two ancient yew trees that have grown into the frame over centuries. Said to have inspired Tolkien's Doors of Durin. Free to visit and easy to miss if you don't know it's there. Five minutes is enough but most people stay longer.",
    category: "Historic Houses",
    location: "Stow-on-the-Wold",
    address: "Stow-on-the-Wold GL54 1AB",
    familyFriendly: true,
    priceLevel: 1,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/57/Stow-on-the-Wold_church_-_geograph.org.uk_-_2534959.jpg",
    imageAlt: "St Edward's Church, Stow-on-the-Wold, historic houses in Stow-on-the-Wold",
    imageCredit: { text: "Photo: Philip Halling, CC BY-SA 2.0", url: "https://creativecommons.org/licenses/by-sa/2.0" },
    websiteUrl: "https://www.scats.org.uk",
  },
  {
    id: "cleeve-hill-walk",
    name: "Cleeve Hill Circular Walk",
    description:
      "The highest point in the Cotswolds at 330 metres, with views stretching across the River Severn into Wales on a clear day. An upland walk that feels nothing like the village Cotswolds. Park at the golf course and follow the common. Go on a weekday if possible.",
    category: "Walks & Trails",
    location: "Near Cheltenham",
    address: "Cleeve Hill Common, Cheltenham GL52 3PW",
    familyFriendly: true,
    priceLevel: 1,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c2/Cleeve_Hill.jpg",
    imageAlt: "Cleeve Hill Circular Walk, country walk in Near Cheltenham",
    imageCredit: { text: "Photo: Tim Fennell (public domain)", url: "https://commons.wikimedia.org/wiki/File:Cleeve_Hill.jpg" },
    websiteUrl: "https://www.alltrails.com",
  },
  {
    id: "minchinhampton-common",
    name: "Minchinhampton Common",
    description:
      "Six hundred acres of National Trust common land near Stroud where cattle graze freely alongside ancient earthworks. One of the best places in the Cotswolds to walk without crowds. The views from the escarpment edge are better than most of the more famous viewpoints in the region.",
    category: "Walks & Trails",
    location: "Minchinhampton",
    address: "Minchinhampton GL6 9JJ",
    familyFriendly: true,
    priceLevel: 1,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/64/Minchinhampton_Common_-_geograph.org.uk_-_6117930.jpg",
    imageAlt: "Minchinhampton Common, country walk in Minchinhampton",
    imageCredit: { text: "Photo: Vieve Forward, CC BY-SA 2.0", url: "https://creativecommons.org/licenses/by-sa/2.0" },
    websiteUrl: "https://www.alltrails.com",
  },
  {
    id: "slaughters-riverside-walk",
    name: "Lower to Upper Slaughter Riverside Walk",
    description:
      "A gentle walk linking the two Slaughter villages along the River Eye. One of the most photographed walks in the Cotswolds and one of the quietest in the early morning. The old mill at Lower Slaughter has been converted but still sits well in the setting. About a mile each way.",
    category: "Walks & Trails",
    location: "Lower Slaughter",
    address: "Copse Hill Road, Lower Slaughter GL54 2HS",
    familyFriendly: true,
    priceLevel: 1,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/2c/River_Eye_at_Upper_Slaughter-geograph-4298791-by-Clint-Mann.jpg",
    imageAlt: "Lower to Upper Slaughter Riverside Walk, country walk in Lower Slaughter",
    imageCredit: { text: "Photo: Clint Mann, CC BY-SA 2.0", url: "https://creativecommons.org/licenses/by-sa/2.0" },
    websiteUrl: "https://www.alltrails.com",
  },
  {
    id: "chipping-campden-walk",
    name: "Chipping Campden High Street Walk",
    description:
      "A self-guided walk along what many consider the finest high street in England. A continuous terrace of 14th-century wool merchants' houses in limestone, with the Market Hall at the centre dating from 1627. Free, always accessible and takes about 20 minutes to walk end to end.",
    category: "Walks & Trails",
    location: "Chipping Campden",
    address: "High Street, Chipping Campden GL55 6HB",
    familyFriendly: true,
    priceLevel: 1,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/79/Chipping_Campden_High_Street_%28geograph_4837077%29.jpg",
    imageAlt: "Chipping Campden High Street Walk, country walk in Chipping Campden",
    imageCredit: { text: "Photo: Anthony O'Neil, CC BY-SA 2.0", url: "https://creativecommons.org/licenses/by-sa/2.0" },
    websiteUrl: "https://www.alltrails.com",
  },
  {
    id: "bibury-trout-farm",
    name: "Bibury Trout Farm",
    description:
      "One of Britain's oldest working trout farms, open to visitors for catch-your-own fishing, feeding the fish and riverside walks. A good addition to a Bibury visit that gives the trip more substance than just photographing Arlington Row. Children enjoy it and it takes about 30 minutes.",
    category: "Family",
    location: "Bibury",
    address: "Bibury, Cirencester GL7 5NL",
    familyFriendly: true,
    priceLevel: 1,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/17/Bibury_Trout_Farm_-_geograph.org.uk_-_1440334.jpg",
    imageAlt: "Bibury Trout Farm, family in Bibury",
    imageCredit: { text: "Photo: Steve Daniels, CC BY-SA 2.0", url: "https://creativecommons.org/licenses/by-sa/2.0" },
    websiteUrl: "https://www.biburytroutfarm.co.uk",
  },
  {
    id: "woodchester-park",
    name: "Woodchester Park",
    description:
      "A secluded wooded valley near Stonehouse containing five lakes and an unfinished Victorian Gothic mansion that was abandoned mid-construction and never completed. Free to walk the valley at any time. The mansion opens on selected weekends and is worth timing a visit around.",
    category: "Walks & Trails",
    location: "Stonehouse",
    address: "Nympsfield, near Stonehouse GL10 3TS",
    familyFriendly: true,
    priceLevel: 1,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/cb/Woodchester_Mansion%2C_Woodchester_Park_-_geograph.org.uk_-_931759.jpg",
    imageAlt: "Woodchester Park, country walk in Stonehouse",
    imageCredit: { text: "Photo: Brian Robert Marshall, CC BY-SA 2.0", url: "https://creativecommons.org/licenses/by-sa/2.0" },
    websiteUrl: "https://www.alltrails.com",
  },
  {
    id: "rack-isle-river-coln",
    name: "Rack Isle and the River Coln",
    description:
      "A former wool-drying meadow beside clear chalk-stream water. The riverside is the calmer side of Bibury and the start of the longer Coln walking route.",
    category: "Walks & Trails",
    location: "Bibury",
    isAttraction: true,
    address: "",
    familyFriendly: true,
    priceLevel: 1,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/16/Bibury%2C_Arlington_Row_and_the_stone_bridge_over_the_River_Coln_-_geograph.org.uk_-_4461538.jpg",
    imageAlt: "Rack Isle and the River Coln, country walk in Bibury",
    imageCredit: { text: "Photo: Michael Garlick, CC BY-SA 2.0", url: "https://creativecommons.org/licenses/by-sa/2.0" },
    websiteUrl: "https://www.alltrails.com",
  },
  {
    id: "burford-high-street",
    name: "Burford High Street",
    description:
      "A sloping stone street running from the top of town down to the River Windrush and medieval bridge. Independent shops, pubs and cafes line both sides. It is the practical centre of any Burford visit and works better on foot than by car.",
    category: "Walks & Trails",
    location: "Burford",
    isAttraction: true,
    address: "",
    familyFriendly: true,
    priceLevel: 1,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/30/Burford_High_Street_-_geograph.org.uk_-_4017747.jpg",
    imageAlt: "Burford High Street, country walk in Burford",
    imageCredit: { text: "Photo: Des Blenkinsopp, CC BY-SA 2.0", url: "https://creativecommons.org/licenses/by-sa/2.0" },
    websiteUrl: "https://www.alltrails.com",
  },
  {
    id: "st-john-baptist-church-burford",
    name: "St John the Baptist Church",
    description:
      "Norman origins, open daily 9am to 5pm and free to enter. More than 100,000 visitors a year and one of the most historically significant churches in the Cotswolds. The Levellers connection from 1649 is documented inside.",
    category: "Historic Houses",
    location: "Burford",
    address: "Church Green, Burford, Oxfordshire, OX18 4RY",
    familyFriendly: true,
    priceLevel: 1,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/59/1053287_Church_St_John_the_Baptist_Burford_20240601_0030.jpg",
    imageAlt: "St John the Baptist Church, historic houses in Burford",
    imageCredit: { text: "Photo: Tilman2007, CC BY-SA 4.0", url: "https://creativecommons.org/licenses/by-sa/4.0" },
    websiteUrl: "https://www.burfordchurch.org/",
  },
  {
    id: "market-cross-lower-village-castle-combe",
    name: "The Market Cross and Lower Village",
    description:
      "The 14th-century Market Cross stands where the three principal streets of the lower village converge. This is the recognised film-location view, the most-photographed part of Castle Combe and the centre of any visit.",
    category: "Historic Houses",
    location: "Castle Combe",
    isAttraction: true,
    address: "",
    familyFriendly: true,
    priceLevel: 1,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/01/Market_Cross_Castle_Combe_-_geograph.org.uk_-_3400473.jpg",
    imageAlt: "The Market Cross and Lower Village, historic houses in Castle Combe",
    imageCredit: { text: "Photo: Martin Dawes, CC BY-SA 2.0", url: "https://creativecommons.org/licenses/by-sa/2.0" },
    websiteUrl: "https://www.visitcotswolds.com",
  },
  {
    id: "by-brook-valley-walk",
    name: "The By Brook Valley Walk",
    description:
      "A signed walking route follows By Brook beyond the lower village through Long Dean, Nettleton Mill and gentle climbs. It covers ground most day visitors never reach and is the best way to extend a Castle Combe visit beyond the central street.",
    category: "Walks & Trails",
    location: "Castle Combe",
    isAttraction: true,
    address: "",
    familyFriendly: true,
    priceLevel: 1,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Dry_valley_in_the_southern_Cotswolds_-_geograph.org.uk_-_1232625.jpg",
    imageAlt: "The By Brook Valley Walk, country walk in Castle Combe",
    imageCredit: { text: "Photo: Maurice Pullin, CC BY-SA 2.0", url: "https://creativecommons.org/licenses/by-sa/2.0" },
    websiteUrl: "https://www.alltrails.com",
  },
  {
    id: "manor-house-walks",
    name: "Manor House Walks",
    description:
      "365 acres of formal gardens and parkland surround the hotel, and non-guests can walk the grounds even if you're not staying or eating here. Castle Combe itself gets busy with day-trippers by late morning, so this is a quieter alternative if you want the village's countryside without the crowds on the high street.",
    category: "Walks & Trails",
    location: "Castle Combe",
    isAttraction: true,
    address: "",
    familyFriendly: true,
    priceLevel: 1,
    imageUrl:
      "https://www.exclusive.co.uk/media/1wul2s2x/manor-house-christmas-2021-282.jpg?rxy=0.5186286808449669,0.7708066715864401&width=2100&height=924&quality=70&v=1db2e9ba11750f0",
    imageAlt: "Manor House Walks, country walk in Castle Combe",
    websiteUrl: "https://www.exclusive.co.uk/the-manor-house/things-to-do/",
  },
  {
    id: "snowshill-manor-and-garden",
    name: "Snowshill Manor and Garden",
    description:
      "The eccentric former home of Charles Paget Wade, who spent decades collecting everything from samurai armour to mousetraps rather than furnishing the house the way anyone else would. It's a genuine 500-yard walk uphill from the car park to the garden, worth knowing if mobility's a factor, though a buggy runs between the two. Skip it with young children. There's little here to hold their attention room after room, and better to save the visit for when they're old enough to find the oddities interesting rather than boring.",
    category: "Historic Houses",
    location: "Snowshill",
    address: "Snowshill, near Broadway, Gloucestershire, WR12 7JU",
    familyFriendly: false,
    priceLevel: 2,
    imageUrl:
      "https://nt.global.ssl.fastly.net/binaries/content/gallery/website/national/regions/gloucestershire-cotswolds/places/snowshill-manor-and-garden/library/summer/adj-the-priests-house-by-nick-taylor-web-crop.jpg?auto=webp&width=676&crop=16:9&dpr=2",
    imageAlt: "Snowshill Manor and Garden, historic houses in Snowshill",
    websiteUrl:
      "https://www.nationaltrust.org.uk/visit/gloucestershire-cotswolds/snowshill-manor-and-garden",
  },
  {
    id: "cotswold-lavender-fields",
    name: "Cotswold Lavender Fields",
    description:
      "A seasonal working lavender farm at Hill Barn Farm, Snowshill. Open 11 June to 5 August 2026, with peak flowering from 27 June onwards. Adult admission £7.75, child £3.50. Card payment only. Parking is free for patrons.",
    category: "Gardens & Estates",
    location: "Snowshill",
    address: "Hill Barn Farm, Snowshill, Broadway, Worcestershire, WR12 7JY",
    familyFriendly: true,
    priceLevel: 1,
    imageUrl:
      "https://www.cotswoldlavender.co.uk/cdn/shop/files/ladies_lavender_field.jpg?v=1652366252&width=3000",
    imageAlt: "Cotswold Lavender Fields, garden in Snowshill",
    websiteUrl: "https://www.cotswoldlavender.co.uk",
  },
  {
    id: "stanton-snowshill-edge-walk",
    name: "The Stanton, Snowshill and The Edge Walk",
    description:
      "A signed Cotswolds National Landscape circular route linking Snowshill, Stanton and The Edge via the Cotswold Way. The full route is 6 miles; a shorter 2.5-mile option is available. Stanton makes a natural pairing with Snowshill on a walking day.",
    category: "Walks & Trails",
    location: "Snowshill",
    isAttraction: true,
    address: "",
    familyFriendly: true,
    priceLevel: 1,
    imageUrl:
      "https://nationaltrails.s3.eu-west-2.amazonaws.com/uploads/Snowshill-lo-res-448x300.jpg",
    imageAlt: "The Stanton, Snowshill and The Edge Walk, country walk in Snowshill",
    websiteUrl: "https://www.alltrails.com",
  },
  {
    id: "river-windrush-five-bridges",
    name: "The River Windrush and the Five Bridges",
    description:
      "The low stone bridges crossing the Windrush through the village centre are the reason Bourton picked up its Venice nickname. Before 10am they are genuinely photogenic; by midday in summer they are often busy.",
    category: "Walks & Trails",
    location: "Bourton-on-the-Water",
    isAttraction: true,
    address: "",
    familyFriendly: true,
    priceLevel: 1,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/ce/The_River_Windrush_-_geograph.org.uk_-_1252151.jpg",
    imageAlt: "The River Windrush and the Five Bridges, country walk in Bourton-on-the-Water",
    imageCredit: { text: "Photo: Steve Daniels, CC BY-SA 2.0", url: "https://creativecommons.org/licenses/by-sa/2.0" },
    websiteUrl: "https://www.alltrails.com",
  },
  {
    id: "birdland-park-and-gardens",
    name: "Birdland Park and Gardens",
    description:
      "Nine acres of aviaries and woodland along the River Windrush, and the only breeding colony of King Penguins in England. It's a two-minute drive from the village centre rather than on the main street itself, so don't expect to just stumble on it during a stroll along the water. Good half-day option if you're travelling with kids and need a break from village-hopping.",
    category: "Family",
    location: "Bourton-on-the-Water",
    address: "Rissington Road, Bourton-on-the-Water, Gloucestershire, GL54 2BN",
    familyFriendly: true,
    priceLevel: 2,
    imageUrl:
      "https://www.birdland.co.uk/wp-content/uploads/2016/08/Flamingos-at-Birdland-1.jpg",
    imageAlt: "Birdland Park and Gardens, family in Bourton-on-the-Water",
    websiteUrl: "https://www.birdland.co.uk/",
  },
  {
    id: "cotswold-motoring-museum",
    name: "Cotswold Motoring Museum",
    description:
      "Seven small galleries of vintage cars, motorcycles and toys, best known for housing Brum, the yellow car from the children's TV series. It won't fill a whole day, so treat it as a rainy-afternoon option rather than the main reason to visit Bourton.",
    category: "Unique Experiences",
    location: "Bourton-on-the-Water",
    address: "The Old Mill, Bourton-on-the-Water, Gloucestershire, GL54 2BY",
    familyFriendly: true,
    priceLevel: 2,
    imageUrl:
      "https://www.cotswoldmotoringmuseum.co.uk/wp-content/uploads/2018/02/DOK4.jpg",
    imageAlt: "Cotswold Motoring Museum, unique experiences in Bourton-on-the-Water",
    websiteUrl: "https://www.cotswoldmotoringmuseum.co.uk/",
  },
  {
    id: "cotswold-wildlife-park-burford",
    name: "Cotswold Wildlife Park",
    description:
      "A proper wildlife park 2 miles south of Burford on the A361, with rhinos, zebras, giraffes, big cats and penguins across 160 acres. Paid admission from £17.50 adult and £12.50 child in 2026. Allow at least half a day.",
    category: "Family",
    location: "Burford",
    address: "Bradwell Grove, Burford, Oxfordshire, OX18 4JP",
    familyFriendly: true,
    priceLevel: 2,
    imageUrl:
      "https://www.cotswoldwildlifepark.co.uk/wp-content/uploads/photographer.jpg",
    imageAlt: "Cotswold Wildlife Park, family in Burford",
    websiteUrl: "https://www.cotswoldwildlifepark.co.uk",
  },
];
