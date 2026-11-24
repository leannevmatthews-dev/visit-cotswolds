"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { trackRelatedCardClick } from "@/lib/analytics";
import type { RelatedGuide } from "@/lib/guides/queries";
import { isExternalImageUrl } from "@/lib/utils/is-external-image-url";

type RelatedGuideCardsProps = {
  guides: RelatedGuide[];
  fromSlug: string;
  placement: "sidebar" | "inline" | "end";
  layout: "stack" | "carousel";
  heading?: string;
};

function activeCardIndex(track: HTMLElement) {
  const card = track.querySelector<HTMLElement>(".guide-related-card");
  if (!card) return 0;
  const gap = parseFloat(getComputedStyle(track).columnGap) || 16;
  const step = card.offsetWidth + gap;
  if (step <= 0) return 0;
  const count = track.querySelectorAll(".guide-related-card").length;
  return Math.max(0, Math.min(count - 1, Math.round(track.scrollLeft / step)));
}

function easeInOut(t: number) {
  return 0.5 - Math.cos(Math.PI * t) / 2;
}

export function RelatedGuideCards({
  guides,
  fromSlug,
  placement,
  layout,
  heading,
}: RelatedGuideCardsProps) {
  const stacked = layout === "stack";
  const trackRef = useRef<HTMLDivElement>(null);
  const [hintVisible, setHintVisible] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (stacked) return;
    const track = trackRef.current;
    if (!track) return;

    let touched = false;
    let nudged = false;
    let cancelled = false;
    let frame = 0;

    const markTouched = () => {
      touched = true;
      cancelled = true;
    };

    const onScroll = () => {
      const left = track.scrollLeft;
      const hint = left <= 20;
      const max = track.scrollWidth - track.clientWidth;
      const end = max <= 1 || left >= max - 2;
      const index = activeCardIndex(track);
      setHintVisible((prev) => (prev === hint ? prev : hint));
      setAtEnd((prev) => (prev === end ? prev : end));
      setActive((prev) => (prev === index ? prev : index));
    };

    const animate = (from: number, to: number, duration: number) =>
      new Promise<void>((resolve) => {
        const start = performance.now();
        const tick = (now: number) => {
          if (cancelled) {
            resolve();
            return;
          }
          const t = Math.min(1, (now - start) / duration);
          track.scrollLeft = from + (to - from) * easeInOut(t);
          if (t < 1) frame = requestAnimationFrame(tick);
          else resolve();
        };
        frame = requestAnimationFrame(tick);
      });

    track.addEventListener("pointerdown", markTouched);
    track.addEventListener("touchstart", markTouched, { passive: true });
    track.addEventListener("wheel", markTouched, { passive: true });
    track.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || nudged || touched || reduced) return;
        if (track.scrollLeft > 20) return;
        nudged = true;
        observer.disconnect();
        const previousSnap = track.style.scrollSnapType;
        track.style.scrollSnapType = "none";
        void (async () => {
          const start = track.scrollLeft;
          await animate(start, start + 60, 450);
          if (cancelled) {
            track.style.scrollSnapType = previousSnap;
            return;
          }
          await animate(track.scrollLeft, start, 450);
          track.style.scrollSnapType = previousSnap;
        })();
      },
      { threshold: 0.5 },
    );
    observer.observe(track);

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      track.removeEventListener("pointerdown", markTouched);
      track.removeEventListener("touchstart", markTouched);
      track.removeEventListener("wheel", markTouched);
      track.removeEventListener("scroll", onScroll);
      track.style.scrollSnapType = "";
    };
  }, [stacked, guides.length]);

  const cards = guides.map((guide, index) => {
    const imageUrl = guide.hero_image_url?.trim() || "";
    const imageAlt = guide.hero_image_alt?.trim() || guide.title;
    const linkClass =
      "guide-related-card group listing-directory-card block min-w-0 text-inherit no-underline outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-limestone";
    const onClick = () =>
      trackRelatedCardClick({
        from_slug: fromSlug,
        to_slug: guide.slug,
        position: index + 1,
        placement,
      });

    if (stacked) {
      return (
        <Link
          key={guide.slug}
          href={`/guides/${guide.slug}`}
          className={linkClass}
          onClick={onClick}
        >
          <div className="listing-card-image relative aspect-[16/10] overflow-hidden bg-surface-container">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                loading="lazy"
                sizes="300px"
                className="object-cover"
                unoptimized={isExternalImageUrl(imageUrl)}
              />
            ) : null}
          </div>
          <p className="mt-3 font-label-caps text-[10px] tracking-widest text-limestone uppercase">
            {guide.category}
          </p>
          <p className="listing-directory-card__name mt-1 line-clamp-3 font-display-lg text-[22px] leading-tight text-on-background">
            {guide.title}
          </p>
        </Link>
      );
    }

    return (
      <Link
        key={guide.slug}
        href={`/guides/${guide.slug}`}
        className={linkClass}
        onClick={onClick}
      >
        <div className="guide-related-overlay listing-card-image relative aspect-[4/3] overflow-hidden bg-surface-container">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              loading="lazy"
              sizes="70vw"
              className="object-cover"
              unoptimized={isExternalImageUrl(imageUrl)}
            />
          ) : null}
          <div className="guide-related-overlay-shade" aria-hidden="true" />
          <div className="guide-related-overlay-copy">
            <p className="font-label-caps text-[10px] tracking-widest text-limestone uppercase">
              {guide.category}
            </p>
            <p className="listing-directory-card__name mt-1 line-clamp-2 font-display-lg text-[22px] leading-tight text-white">
              {guide.title}
            </p>
          </div>
        </div>
      </Link>
    );
  });

  if (stacked) {
    return <div className="guide-related-stack">{cards}</div>;
  }

  return (
    <div className="guide-related-carousel-block">
      <div className="guide-related-carousel-head">
        <h2 className="guide-related-heading">{heading}</h2>
        <p
          className={`guide-related-swipe font-label-caps text-[10px] tracking-widest text-limestone uppercase ${
            hintVisible ? "" : "is-dismissed"
          }`}
          aria-hidden="true"
        >
          Swipe for more →
        </p>
      </div>
      <div className="guide-related-carousel-frame">
        <div
          ref={trackRef}
          className="guide-related-carousel"
          role="region"
          aria-label={heading}
          tabIndex={0}
        >
          {cards}
        </div>
        <div
          className={`guide-related-carousel-fade ${atEnd ? "is-hidden" : ""}`}
          aria-hidden="true"
        />
      </div>
      <div className="guide-related-dots" aria-hidden="true">
        {guides.map((guide, index) => (
          <span
            key={guide.slug}
            className={`guide-related-dot ${index === active ? "is-active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
