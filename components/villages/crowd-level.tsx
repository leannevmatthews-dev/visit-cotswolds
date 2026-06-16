type CrowdLevelProps = {
  level: "quiet" | "moderate" | "busy";
  label: string;
  fill: number;
};

export function CrowdLevel({ level, label, fill }: CrowdLevelProps) {
  return (
    <span className={`village-crowd-label village-crowd--${level}`}>
      <span className="village-crowd-label__text">{label}</span>
      <span className="village-crowd-label__bar" aria-hidden="true">
        <span
          className="village-crowd-label__fill"
          style={{ width: `${fill}%` }}
        />
      </span>
    </span>
  );
}
