import Image from "next/image";
import { isExternalImageUrl } from "@/lib/utils/is-external-image-url";

type VillageCompareImageProps = {
  src?: string;
  alt: string;
};

export function VillageCompareImage({ src, alt }: VillageCompareImageProps) {
  return (
    <div className="village-compare-card__image relative">
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          unoptimized={isExternalImageUrl(src)}
        />
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
