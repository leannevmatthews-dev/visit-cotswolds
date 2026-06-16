import type { CrowdPillLevel } from "@/lib/bibury-comparison";

type CrowdPillProps = {
  level: CrowdPillLevel;
  label: string;
};

export function CrowdPill({ level, label }: CrowdPillProps) {
  return (
    <span className={`village-crowd-pill village-crowd-pill--${level}`}>
      {label}
    </span>
  );
}
