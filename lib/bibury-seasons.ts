export type SeasonAdvice = {
  name: string;
  icon: string;
  description: string;
};

export const BIBURY_SEASONS: SeasonAdvice[] = [
  {
    name: "Spring",
    icon: "local_florist",
    description:
      "Best for blossom along the river and Rack Isle wildflowers. Crowds build from Easter onwards—visit on a weekday if possible.",
  },
  {
    name: "Summer",
    icon: "sunny",
    description:
      "Most crowded, especially July–August weekends. Arrive before 9am or after 4pm. Long daylight hours suit extended river walks.",
  },
  {
    name: "Autumn",
    icon: "park",
    description:
      "Our pick for colours—golden stone against amber leaves. Crowds drop after October half-term. Mornings can be misty and atmospheric.",
  },
  {
    name: "Winter",
    icon: "cloudy_snowing",
    description:
      "Quietest atmosphere and fewest coach groups. Some cafés reduce hours. Cold, crisp days can be beautiful—wrap up and enjoy the solitude.",
  },
];
