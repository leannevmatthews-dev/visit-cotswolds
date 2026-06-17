type VillageImagePlaceholderProps = {
  className?: string;
  label?: string;
};

export function VillageImagePlaceholder({
  className = "village-compare-card__placeholder",
  label = "Image coming soon",
}: VillageImagePlaceholderProps) {
  return (
    <div className={className} aria-hidden="true">
      <span className="village-compare-card__placeholder-label font-label-caps text-[10px] tracking-widest uppercase">
        {label}
      </span>
    </div>
  );
}

type VillageMediaImageProps = {
  src: string | null | undefined;
  alt: string;
  className?: string;
  imageClassName?: string;
  placeholderClassName?: string;
};

export function VillageMediaImage({
  src,
  alt,
  className,
  imageClassName,
  placeholderClassName,
}: VillageMediaImageProps) {
  if (!src) {
    return (
      <VillageImagePlaceholder
        className={placeholderClassName ?? "village-compare-card__placeholder"}
      />
    );
  }

  return (
    <div className={className}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className={imageClassName} />
    </div>
  );
}
