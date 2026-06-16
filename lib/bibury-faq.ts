export type FaqItem = {
  question: string;
  answer: string;
};

export const BIBURY_FAQ_ITEMS: FaqItem[] = [
  {
    question: "Is Bibury free to visit?",
    answer:
      "Yes. There is no admission fee to walk the village, Arlington Row, or the public river paths. Parking, food, and accommodation are separate costs.",
  },
  {
    question: "Is Bibury worth visiting?",
    answer:
      "Yes—with the right timing. Its architectural unity and riverside setting are genuinely exceptional. We would avoid midday on a summer Saturday, but an early weekday morning visit is among the best experiences in the Cotswolds.",
  },
  {
    question: "How long should I stay?",
    answer:
      "Allow 2–3 hours to see Arlington Row, walk the river, and have a coffee or lunch. Most coach groups only stay 45 minutes—you will gain a much richer experience with a little more time.",
  },
  {
    question: "Is Bibury busy?",
    answer:
      "It can be, especially 11am–3pm on weekends and school holidays between May and September. On our May 2026 visit it was almost empty at 9am and noticeably busy by 11am. Weekdays and early mornings are much quieter.",
  },
  {
    question: "Where should I park?",
    answer:
      "Use the main pay-and-display car park on the B4425 opposite Bibury Trout Farm (GL7 5NP). It holds roughly 80 vehicles with overflow in peak season. Avoid parking on the narrow village roads.",
  },
  {
    question: "Can I visit Bibury without a car?",
    answer:
      "It is possible but less convenient. The nearest station is Kemble (12 miles). Bus services are limited—check routes from Cirencester or Northleach depending on the day. Taxis from Kemble or Cirencester should be pre-booked.",
  },
  {
    question: "Can you swim in the river?",
    answer:
      "Swimming in the Coln through Bibury is not recommended. The river is shallow in places but runs through private land and the Trout Farm. Wild swimming is better suited to designated spots elsewhere in the Cotswolds.",
  },
  {
    question: "Is Bibury dog friendly?",
    answer:
      "Yes. Dogs are welcome on outdoor paths and in many pub gardens including The Swan. Keep dogs on leads near Rack Isle and the river to protect wildlife.",
  },
  {
    question: "Is Bibury good for families?",
    answer:
      "Yes, with caveats. Children enjoy the river, trout farm, and ducks. Paths near the meadows are uneven for pushchairs. Pair with Bourton-on-the-Water for family attractions if needed.",
  },
  {
    question: "Can you go inside Arlington Row?",
    answer:
      "No. Arlington Row cottages are National Trust-owned and privately tenanted. You can photograph them from the public path and bridge, but please do not enter gardens or peer through windows.",
  },
  {
    question: "What is the best time to visit Bibury?",
    answer:
      "Before 9am on a weekday, or after 4pm any day. Spring and autumn offer the best balance of weather and crowds. Summer is fine if you avoid the 11am–3pm window.",
  },
  {
    question: "Are there toilets in Bibury?",
    answer:
      "Public toilets are available near the Trout Farm car park. The Swan Hotel and cafés also serve customers—please buy something if using their facilities.",
  },
  {
    question: "Is Bibury accessible for wheelchairs?",
    answer:
      "Partially. The main road through the village is relatively level, but Arlington Row bridge, river paths, and Rack Isle have steps, gravel, and narrow surfaces. The Trout Farm area offers the most accessible option.",
  },
];

export function getBiburyFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: BIBURY_FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
