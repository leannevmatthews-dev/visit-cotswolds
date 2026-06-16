import type { CrowdPillLevel } from "@/lib/bibury-comparison";

export type CrowdIntelligenceRow = {
  time: string;
  level: CrowdPillLevel;
  label: string;
};

export const BIBURY_CROWD_ROWS: CrowdIntelligenceRow[] = [
  { time: "7–9am", level: "quiet", label: "Very Quiet" },
  { time: "9–11am", level: "moderate", label: "Moderate" },
  { time: "11am–3pm", level: "busy", label: "Very Busy" },
  { time: "4pm+", level: "quiet", label: "Quieter" },
];

export const BIBURY_PERFECT_FOR = [
  "First-time Cotswolds visitors",
  "Photographers (especially early morning)",
  "International visitors seeking the iconic image",
  "Couples and slow-travel day trips",
  "Families who enjoy riverside walks",
];

export const BIBURY_MAYBE_SKIP = [
  "You dislike crowds (unless visiting before 9am)",
  "You are seeking hidden, off-radar villages",
  "You need step-free access throughout",
  "You only have 20 minutes—a rushed visit rarely satisfies",
];
