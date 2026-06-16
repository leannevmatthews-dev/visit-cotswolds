type IconProps = {
  className?: string;
};

export function PlayIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export function PublicIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3 12h18M12 3c2.5 2.2 4 5.2 4 9s-1.5 6.8-4 9M12 3c-2.5 2.2-4 5.2-4 9s1.5 6.8 4 9"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function ShareIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="6" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8 11l8-4M8 13l8 4"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
