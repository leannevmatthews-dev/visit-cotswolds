type VillageCompareImageProps = {
  src?: string;
  alt: string;
};

export function VillageCompareImage({ src, alt }: VillageCompareImageProps) {
  return (
    <div className="village-compare-card__image">
      {src ? (
        <img src={src} alt={alt} />
      ) : (
        <div className="village-compare-card__placeholder" aria-hidden="true">
          <span className="village-compare-card__placeholder-label font-label-caps text-[10px] tracking-widest uppercase">
            Image coming soon
          </span>
        </div>
      )}
    </div>
  );
}
