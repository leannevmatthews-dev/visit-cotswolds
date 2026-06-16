"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function FadeInSection({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.classList.add(
      "transition-all",
      "duration-1000",
      "ease-out",
      "opacity-0",
      "translate-y-10",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.05 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <section ref={ref}>{children}</section>;
}
