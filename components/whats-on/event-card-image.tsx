"use client";

import Image from "next/image";
import { useState } from "react";

type EventCardImageProps = {
  src: string;
  alt: string;
  categoryLabel: string;
};

export function EventCardImage({ src, alt, categoryLabel }: EventCardImageProps) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(src.trim()) && !failed;

  if (!showImage) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-surface-container-low px-6 text-center">
        <span className="font-label-caps text-[10px] tracking-widest text-limestone uppercase">
          {categoryLabel || "Event"}
        </span>
      </div>
    );
  }

  return (
    <>
      <Image
        alt={alt}
        className="object-cover transition-transform duration-1000 group-hover:scale-105"
        fill
        onError={() => setFailed(true)}
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        src={src}
        unoptimized
      />
      <div className="glass-overlay absolute inset-0 opacity-60" />
    </>
  );
}
