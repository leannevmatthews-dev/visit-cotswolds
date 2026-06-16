export type VillageFact = {
  label: string;
  value: string;
};

export type VillageScore = {
  label: string;
  score: number;
  max?: number;
};

export const BIBURY_AT_A_GLANCE_FACTS: VillageFact[] = [
  { label: "Time Needed", value: "2–3 Hours" },
  { label: "Dog Friendly", value: "Yes (on leads)" },
  { label: "Best Season", value: "Spring / Autumn" },
];

export const BIBURY_AT_A_GLANCE_SCORES: VillageScore[] = [
  { label: "First-Time Visitor", score: 5 },
  { label: "Couples", score: 5 },
  { label: "Families", score: 4 },
  { label: "Food & Drink", score: 3 },
  { label: "Accessibility", score: 2 },
  { label: "Hidden Gem Factor", score: 1 },
];
