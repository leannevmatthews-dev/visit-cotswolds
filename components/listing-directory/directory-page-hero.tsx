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
    <section className="village-hero directory-page-hero">
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
          <h1 className="font-display-lg text-primary leading-none tracking-tighter xl:text-[88px]">
            {title}
          </h1>
          <p className="directory-page-hero__subtitle font-headline-md text-secondary mt-3 max-w-xl italic xl:mt-4 xl:text-[28px]">
            {subtitle}
          </p>
          {intro && (
            <p className="directory-page-hero__intro font-body-sm text-on-surface-variant mt-4 max-w-xl leading-relaxed xl:text-body-sm">
              {intro}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
