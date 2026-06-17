"use client";

import { useEffect, useRef, useState } from "react";
import {
  VILLAGE_REGIONS,
  VILLAGES_HERO_IMAGE,
  VILLAGES_LIST_CARDS,
  type VillageRegion,
} from "@/lib/villages/list-data";

function VillageCard({
  name,
  county,
  href,
  alt,
  image,
}: (typeof VILLAGES_LIST_CARDS)[number]) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "all 0.8s cubic-bezier(0.22, 1, 0.36, 1)";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;
          target.style.opacity = "1";
          target.style.transform = "translateY(0)";
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      ref={ref}
      href={href}
      className="group relative aspect-square w-full overflow-hidden rounded-lg"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt={alt}
        src={image}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90 transition-opacity group-hover:opacity-95" />
      <div className="absolute bottom-0 left-0 w-full p-4 md:p-6">
        <span className="font-label-caps mb-1 block text-[10px] tracking-widest text-secondary md:mb-2 md:text-label-caps">
          {county}
        </span>
        <h3 className="font-display-lg text-2xl leading-tight text-primary md:text-3xl lg:text-4xl">
          {name}
        </h3>
      </div>
    </a>
  );
}

export function VillagesIndex() {
  const [activeRegion, setActiveRegion] = useState<VillageRegion>("ALL");

  return (
    <main>
      <section className="relative flex h-[353px] min-h-[300px] items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Misty Cotswolds village"
            src={VILLAGES_HERO_IMAGE}
            className="h-full w-full object-cover brightness-[0.4] grayscale-[0.2]"
          />
          <div className="editorial-overlay absolute inset-0" aria-hidden="true" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-container-max px-margin-mobile pb-12 md:px-margin-desktop">
          <h1 className="font-display-lg text-display-lg-mobile mb-2 text-primary md:text-display-lg">
            The Villages
          </h1>
          <p className="font-body-lg max-w-md text-on-surface-variant">
            Filter by region to find your perfect stay.
          </p>
        </div>
      </section>

      <section className="sticky top-[5.5rem] z-40 border-b border-outline/5 bg-background py-8">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <div className="no-scrollbar flex items-center gap-4 overflow-x-auto">
            {VILLAGE_REGIONS.map((region) => {
              const isActive = region === activeRegion;
              return (
                <button
                  key={region}
                  type="button"
                  onClick={() => setActiveRegion(region)}
                  className={`font-label-caps text-label-caps whitespace-nowrap rounded-lg px-6 py-2 transition-all active:scale-95 ${
                    isActive
                      ? "bg-primary-fixed-dim text-on-primary-fixed"
                      : "border border-outline/20 text-on-surface-variant hover:border-primary"
                  }`}
                >
                  {region}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-container-max px-margin-mobile py-12 md:px-margin-desktop md:py-20">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:gap-6 lg:grid-cols-3">
          {VILLAGES_LIST_CARDS.map((village) => (
            <VillageCard key={village.name} {...village} />
          ))}
        </div>
      </section>
    </main>
  );
}
