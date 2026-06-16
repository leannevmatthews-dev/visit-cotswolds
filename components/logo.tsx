type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 80"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <text
        x="50%"
        y="55%"
        dominantBaseline="middle"
        textAnchor="middle"
        style={{
          fontFamily: "var(--font-eb-garamond), 'EB Garamond', Georgia, serif",
          fontWeight: 300,
          fontSize: 32,
          letterSpacing: "0.15em",
          fill: "#EDE5D8",
        }}
      >
        VISIT COTSWOLDS
      </text>
    </svg>
  );
}
