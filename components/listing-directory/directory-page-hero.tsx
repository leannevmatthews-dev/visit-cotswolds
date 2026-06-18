import type { ReactNode } from "react";

type DirectoryPageHeroProps = {
  title: string;
  subtitle: string;
  heroImage: string;
  intro?: string;
  children?: ReactNode;
};

export function DirectoryPageHero({
  title,
  subtitle,
  heroImage,
  intro,
  children,
}: DirectoryPageHeroProps) {
  return (
    <section className="village-hero">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt=""
        aria-hidden="true"
        className="village-hero__bg"
        src={heroImage}
      />
      <div className="village-hero__gradient" aria-hidden="true" />
      <div className="village-hero__content">
        <div className="village-hero__copy">
          <h1 className="font-display-lg text-[48px] sm:text-[56px] md:text-[72px] lg:text-[88px] text-primary leading-none tracking-tighter">
            {title}
          </h1>
          <p className="font-headline-md text-secondary mt-3 md:mt-4 max-w-xl italic text-[22px] md:text-[28px]">
            {subtitle}
          </p>
          {intro && (
            <p className="font-body-sm text-on-surface-variant mt-4 max-w-xl leading-relaxed">
              {intro}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
