import type { GuideContentBlock, GuideMeta, GuideListingCategory } from "@/lib/guides-data";

const category: GuideListingCategory = "Plan Your Trip";

export const thingsToDoWithKidsMeta: GuideMeta = {
  slug: "things-to-do-in-the-cotswolds-with-kids",
  title: "Things To Do in the Cotswolds With Kids",
  metaTitle: "Things To Do in the Cotswolds With Kids",
  metaDescription:
    "From wildlife parks and lamb-feeding to river paddling and hedge mazes — the family attractions actually worth your time, by age group, with honest practical tips.",
  category,
  datePublished: "2026-08-05",
  dateModified: "2026-08-05",
};

export const thingsToDoWithKidsContent: GuideContentBlock[] = [
  {
    type: "paragraph",
    text: "The Cotswolds is, at heart, a looking destination. Pretty villages. Rolling hills. Long lunches. Which works brilliantly until you have a seven-year-old who has been in the car for two hours and wants to know what they are actually going to do.",
  },
  {
    type: "paragraph",
    text: "The good news: there is more here than most people expect. A proper wildlife park. A working farm where children can bottle-feed lambs. A palace with a hedge maze big enough to actually get lost in. A village where paddling in the river in the middle of the street is entirely normal. The trap most families fall into is treating the Cotswolds like a village-wandering trip and hoping that will be enough. For toddlers and primary-age kids, it usually is not.",
  },
  {
    type: "paragraph",
    text: "Plan around the attractions, use the villages as the backdrop, and the Cotswolds works well as a family destination. Do not, and you will spend a lot of time in car parks and market squares.",
  },
  {
    type: "image",
    id: "bourton-river-hero",
    src: "https://s0.geograph.org.uk/geophotos/08/01/05/8010599_fd290a7e.jpg",
    alt: "The River Windrush flowing through Bourton-on-the-Water in spring, with stone bridges and willow trees",
    imageCredit: {
      text: "Photo: Lewis Clarke, CC BY-SA 2.0",
      url: "https://creativecommons.org/licenses/by-sa/2.0",
    },
  },
  {
    type: "heading",
    level: 2,
    text: "The best family attractions in the Cotswolds at a glance",
  },
  {
    type: "table",
    headers: ["Attraction", "Verdict", "Best age", "Time needed"],
    rows: [
      ["Cotswolds Wildlife Park", "The strongest full day out in the region", "2-12", "Full day"],
      ["Cotswold Farm Park", "Farm animals, soft play, lamb-feeding. Reliable for most ages", "All ages", "Half to full day"],
      ["Blenheim Palace", "Expensive. The grounds justify it; the palace rooms less so for kids", "4+", "Full day"],
      ["Bourton-on-the-Water", "Free river paddling, Birdland, Model Village", "2-10", "Half day"],
      ["Broadway Tower", "A tower climb, big views, nuclear bunker on select dates", "4+", "2-3 hours"],
      ["Sudeley Castle", "Ruins, history, gardens. Better once children will engage with a story", "6+", "Half day"],
      ["Westonbirt Arboretum", "Wide woodland paths, treetop walkway, free-roaming space", "All ages", "2-3 hours"],
    ],
  },
  {
    type: "heading",
    level: 2,
    text: "Which villages actually work with kids?",
  },
  {
    type: "paragraph",
    text: "Most Cotswolds villages are primarily for adults. That is not a criticism (they are lovely to walk around), but it does mean knowing which ones have more going on is the difference between a good day and a difficult afternoon.",
  },
  {
    type: "heading",
    level: 3,
    text: "Bourton-on-the-Water",
  },
  {
    type: "paragraph",
    text: "This is the one. Of all the villages, Bourton is the only one where the village itself is child-led rather than parent-led, and the reason is straightforward: children can paddle in the River Windrush right through the middle of it. The river is wide and shallow (ankle to shin-deep in summer), the banks are grassy, and kids treat the whole stretch as a playground. Bring a change of clothes and a towel. It costs nothing and holds small children for longer than most paid attractions do.",
  },
  {
    type: "paragraph",
    text: "Beyond the river, Birdland is the best of the village's ticketed attractions: nine acres of woodland with penguins, flamingos, and a Jurassic Journey section with life-sized dinosaur models that most children find unexpectedly good. The Model Village, a one-ninth scale replica of Bourton built in the 1930s, sounds as though it might be too subtle for young children. It usually is not, particularly once they spot the model village within the model village.",
  },
  {
    type: "paragraph",
    text: "The main caveat with Bourton: it gets very busy from late morning in summer. Arrive before 10am and it is a completely different place. The High Street car park is free for two hours but fills fast; the Rissington Road pay-and-display is a four-minute walk and much more reliable.",
  },
  {
    type: "paragraph",
    text: "Full details on timings, parking and what to combine it with: visit our Bourton-on-the-Water village guide.",
  },
  {
    type: "heading",
    level: 3,
    text: "Bibury",
  },
  {
    type: "paragraph",
    text: "One of the most photographed villages in the Cotswolds, and worth seeing. But there is nothing here specifically for children, the river walk is short, and you can cover the village in under an hour. Fine as a stop if you are passing through. Not worth a dedicated trip with young kids.",
  },
  {
    type: "heading",
    level: 3,
    text: "Burford",
  },
  {
    type: "paragraph",
    text: "A good-looking market town on a steep hill, with proper independent shops and decent cafes. Nothing aimed at children, but the hill itself tends to provide enough novelty for primary-age kids and it is a natural stopping point. Budget 45 minutes.",
  },
  {
    type: "heading",
    level: 3,
    text: "Castle Combe",
  },
  {
    type: "paragraph",
    text: "Very small, very quiet, very pretty. Exactly because it is not set up for visitors in the way Bourton is, it can feel calmer with young children. Fewer crowds, more space. Good for a short walk. Probably 30 to 45 minutes before boredom sets in.",
  },
  {
    type: "heading",
    level: 3,
    text: "Stow-on-the-Wold",
  },
  {
    type: "paragraph",
    text: "A decent base and a good browse. The market square gives children space to move while adults look around. Secondhand bookshop, good cafes, not specifically child-led.",
  },
  {
    type: "heading",
    level: 3,
    text: "Snowshill",
  },
  {
    type: "paragraph",
    text: "Snowshill Manor is the draw, a National Trust property full of an extraordinary personal collection accumulated across decades. For children who like looking at things and asking why, it works well. For children who do not, less so. The village itself is small and takes about 20 minutes.",
  },
  {
    type: "heading",
    level: 2,
    text: "Best Cotswolds attractions by age",
  },
  {
    type: "heading",
    level: 3,
    text: "Toddlers and under-5s",
  },
  {
    type: "paragraph",
    text: "Cotswold Farm Park (Guiting Power, near Cheltenham) is the strongest option for this age group in the whole region. It is a working farm run by Countryfile presenter Adam Henson, and what it offers toddlers that most attractions do not is real contact with animals. Bottle-feeding lambs runs twice daily and is included in admission. Get there early because it fills up fast. The touch barn has guinea pigs and rabbits to stroke. The Adventure Barn is proper indoor soft play with a sandpit, climbing, and ride-on toys, which matters if the weather turns. Under-2s are free.",
  },
  {
    type: "paragraph",
    text: "Ticket prices vary by season and day; check the website before you go as online prices differ from gate prices.",
  },
  {
    type: "image",
    id: "cotswold-farm-park",
    src: "https://cotswoldfarmpark.co.uk/media/ewnkng3z/highland-calf-princes-first.jpg",
    alt: "A Highland calf at Cotswold Farm Park, Guiting Power",
  },
  {
    type: "paragraph",
    text: "Bourton-on-the-Water's river paddling costs nothing and keeps small children occupied longer than most ticketed attractions do. That is worth saying plainly.",
  },
  {
    type: "paragraph",
    text: "Westonbirt Arboretum (near Tetbury) has wide, pushchair-friendly paths through mature woodland and a treetop walkway that works well for slightly older toddlers. Good for burning energy in a quiet, contained setting when you need the opposite of a car park queue.",
  },
  {
    type: "heading",
    level: 3,
    text: "Primary age (5-11)",
  },
  {
    type: "paragraph",
    text: "Cotswold Wildlife Park (near Burford) is the best single attraction in the Cotswolds for this age group. Set in the grounds of a Victorian manor house, it has giraffes, white rhinos, lions, penguins, lemurs, and a reptile house that consistently holds primary-age children's attention longer than parents expect. The narrow-gauge railway runs April to October (small surcharge on top of admission) and is a useful way to rest legs mid-visit as much as anything. A full day here is realistic.",
  },
  {
    type: "paragraph",
    text: "Plan around the keeper talks: penguin feeding is at 11am and 3pm, lemur feed around noon. Arrive early. Admission is cheaper bought online in advance as an e-ticket; worth confirming current prices on the website before visiting.",
  },
  {
    type: "image",
    id: "cotswold-wildlife-park-giraffe",
    src: "https://www.cotswoldwildlifepark.co.uk/wp-content/uploads/giraffe.jpg",
    alt: "Giraffe at Cotswold Wildlife Park, near Burford, Oxfordshire",
  },
  {
    type: "paragraph",
    text: "Blenheim Palace (Woodstock) tends to be recommended with more enthusiasm than it strictly deserves for families, and it is worth being specific about why. The palace rooms are impressive; for children they are a long walk through a lot of portraits. What actually works for primary-age kids is the grounds: the Marlborough Maze is large enough to take a real while, the Butterfly House is good, and the adventure playground (which requires the higher-tier Palace and Play Pass rather than standard admission) is a proper active attraction. Worth knowing which ticket you are buying before you arrive.",
  },
  {
    type: "paragraph",
    text: "Standard park and gardens tickets are approximately £31 adult and £15 child, with a family ticket around £85. Confirm current prices at blenheimpalace.com. The admission ticket converts automatically to an annual pass, which makes a return visit the same year good value.",
  },
  {
    type: "paragraph",
    text: "Broadway Tower is one of those places that sounds modest and turns out to be well worth the trip. An 18th-century gothic folly perched on one of the highest points in the Cotswolds, with views across to 16 counties on a clear day. The tower itself is a proper spiral staircase up three floors, which children take to the climb more seriously than a viewpoint reached by a lift. On selected dates there is also access to a Cold War nuclear bunker underneath, which older primary children find surprisingly interesting. Admission is approximately £14 for adults, with reduced rates for children — confirm current prices before visiting.",
  },
  {
    type: "image",
    id: "broadway-tower",
    src: "https://broadwaytower.co.uk/wp-content/uploads/2023/11/broadway-tower-cotswolds-hero.jpg",
    alt: "Broadway Tower standing on the Cotswold escarpment, Worcestershire",
  },
  {
    type: "paragraph",
    text: "Sudeley Castle (Winchcombe) has ruined towers, extensive gardens, and the actual tomb of Katherine Parr, Henry VIII's sixth wife. Her story, and the later rediscovery of her coffin in the ruined chapel, tends to land well with children who are at the age of starting to find history interesting rather than abstract. Best for children willing to look at things and ask about them, rather than those primarily interested in running.",
  },
  {
    type: "heading",
    level: 3,
    text: "Teenagers",
  },
  {
    type: "paragraph",
    text: "The Cotswolds is not a teenage destination in the way cities or theme parks are, and saying otherwise does not help anyone plan a trip. A teenager with no particular interest in history, countryside, or food is going to find a day of village-wandering unrewarding. That is the honest position.",
  },
  {
    type: "paragraph",
    text: "A few things hold up. The Wildlife Park works for older kids with an interest in animals. The reptile house and larger mammal enclosures tend to get more engagement than parents predict. Broadway Tower's nuclear bunker (select dates) is the kind of thing that interests teenagers precisely because it is not what anyone was expecting from a Cotswolds trip. Blenheim's maze takes long enough to feel like an actual challenge. The Cotswold Water Park near Cirencester has a private operator offering kayaking and paddleboarding, which is more active than anything else in the region.",
  },
  {
    type: "paragraph",
    text: "If your teenagers walk, the Cotswold Way has sections that are accessible without specialist kit. Broadway Tower down to the village is short, achievable, and the views at the top are the kind that make the effort feel justified.",
  },
  {
    type: "heading",
    level: 2,
    text: "What to do on a rainy day in the Cotswolds with kids",
  },
  {
    type: "paragraph",
    text: "The Cotswolds is primarily an outdoor destination, and bad weather reduces options significantly. The practical advice is to build a rainy day contingency in before you arrive rather than improvising when you are already there.",
  },
  {
    type: "list",
    style: "bullet",
    items: [
      "Cotswold Farm Park's Adventure Barn: a large indoor play barn; the farm itself stays open in rain and most children under 10 barely register the weather when feeding animals and running around soft play.",
      "Cotswold Wildlife Park: enough under-cover space (the reptile house, various indoor enclosures) to give you a meaningful portion of the visit even in poor weather.",
      "The Cotswold Motoring Museum (Bourton-on-the-Water): a compact indoor space covering vintage cars, vehicles, and toys. Often underrated for children who engage with objects.",
      "Blenheim's palace rooms: fully indoor and open regardless of weather. The Churchill exhibitions tell a coherent story well enough to hold older children's attention. Note that the adventure playground, maze, and butterfly house are outdoors.",
      "The Corinium Museum (Cirencester): covers Roman history with a good collection of mosaics and everyday Roman objects. A 90-minute option at most.",
    ],
  },
  {
    type: "image",
    id: "blenheim-palace-exterior",
    src: "https://s0.geograph.org.uk/geophotos/03/39/95/3399507_2613ed03.jpg",
    alt: "Blenheim Palace south elevation, Woodstock, Oxfordshire",
    imageCredit: {
      text: "Photo: David P Howard, CC BY-SA 2.0",
      url: "https://creativecommons.org/licenses/by-sa/2.0",
    },
  },
  {
    type: "heading",
    level: 2,
    text: "Practical things worth knowing before you go",
  },
  {
    type: "list",
    style: "bullet",
    items: [
      "Pack a change of clothes and a towel for Bourton-on-the-Water. The paddling is free and children will get wet regardless of what you say beforehand.",
      "Bring wellies year-round. Countryside paths and farm sites get muddy even in dry spells.",
      "Book in advance for busy sites during school holidays. Cotswold Wildlife Park and Cotswold Farm Park both ask for advance booking online. Blenheim strongly recommends it. Online prices are also cheaper than buying at the gate.",
      "Start early at Bourton-on-the-Water. The difference between arriving before 10am and arriving at noon in summer is significant.",
      "Getting around the Cotswolds requires a car. Public transport between villages is limited.",
      "Farm Park and Bourton-on-the-Water are six miles apart, making them a natural combination for a full day. Cotswold Wildlife Park is just south of Burford on the A361.",
    ],
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
        question: "Is the Cotswolds good for families with young kids?",
        answer:
          "Yes, with the right plan. The mistake most families make is treating it as a village-wandering trip and expecting that to be enough. Build the day around at least one proper attraction — Farm Park, Wildlife Park, or Bourton-on-the-Water's river — and use the village stops as the rest of the day rather than the main event.",
      },
      {
        question: "What is the single best day out in the Cotswolds with kids?",
        answer:
          "For most ages, Cotswold Farm Park in the morning and Bourton-on-the-Water in the afternoon. They are six miles apart, complement each other well (structured animal activity followed by free outdoor time), and between them cover most of what makes a good family day in the region. Cotswold Wildlife Park on its own is also a full day without needing anything else.",
      },
      {
        question: "Which Cotswolds village is best for young children?",
        answer:
          "Bourton-on-the-Water. The shallow river running through the village green is the main reason. Children can paddle freely at no cost, with space around them and ice cream nearby. No queue to join. It is the only village where the village itself is the activity rather than the backdrop.",
      },
      {
        question: "Is the Cotswolds good for toddlers?",
        answer:
          "Yes. Cotswold Farm Park is specifically excellent for under-5s: bottle-feeding lambs, the touch barn, indoor soft play. Westonbirt Arboretum has mostly flat, pushchair-suitable paths. Bourton's river paddling costs nothing and works at any energy level.",
      },
      {
        question: "What can teenagers do in the Cotswolds?",
        answer:
          "The Cotswolds works better for adults than teenagers, and it is worth knowing that before you book. The Wildlife Park holds up for older kids who like animals. Broadway Tower has a nuclear bunker on selected dates. Blenheim's maze is satisfying. The Cotswold Water Park near Cirencester has kayaking and paddleboarding. Walking Broadway Tower down to Broadway village is short enough to be achievable and the views make the effort worthwhile.",
      },
      {
        question: "When is the best time to visit the Cotswolds with kids?",
        answer:
          "Spring. Cotswold Farm Park during lambing season (roughly mid-February through April) is the peak reason to visit early in the year, the crowds are lighter than summer, and the countryside is green. Summer works but school holiday crowds at popular spots are significant. Start earlier in the day than you think you need to.",
      },
      {
        question: "Do you need to book attractions in advance?",
        answer:
          "For school holiday visits to the busier sites, yes. Cotswold Wildlife Park and Cotswold Farm Park both ask for advance online booking. Blenheim recommends it. Online prices are cheaper than gate prices at all three.",
      },
      {
        question: "Is the Cotswolds accessible with a pushchair?",
        answer:
          "Mostly, with caveats. Cotswold Farm Park, Westonbirt Arboretum, and Blenheim's grounds are all manageable with a buggy. Village streets like Bourton and Burford are navigable. Cobbled or uneven surfaces in older villages (parts of Bibury, Castle Combe) are harder going. If you plan countryside walking, a carrier is worth packing.",
      },
    ],
  },
];
