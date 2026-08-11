import Image from "next/image";
import Link from "next/link";
import { VillageImagePlaceholder } from "@/components/villages/village-image-placeholder";
import type { LinkableNearbyVillage } from "@/lib/villages/village-page-links";
import { isExternalImageUrl } from "@/lib/utils/is-external-image-url";

type NearbyVillageCardProps = {
  nearby: LinkableNearbyVillage;
  heroImageUrl?: string;
};

export function NearbyVillageCard({
  nearby,
  heroImageUrl,
}: NearbyVillageCardProps) {
  const imageAlt =
    nearby.image_alt?.trim() ||
    `${nearby.village_name} village in the Cotswolds`;

  return (
    <article className="village-nearby-card">
      <Link href={nearby.href} className="village-nearby-card__image-link group">
        <div className="village-nearby-card__image">
          {heroImageUrl ? (
            <Image
              alt={imageAlt}
              src={heroImageUrl}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              unoptimized={isExternalImageUrl(heroImageUrl)}
            />
          ) : (
            <VillageImagePlaceholder className="village-compare-card__placeholder absolute inset-0" />
          )}
        </div>
      </Link>
      <div className="village-nearby-card__meta">
        <p className="village-nearby-card__name font-headline-md text-[22px] md:text-[24px] text-primary leading-tight">
          {nearby.village_name}
        </p>
        <p className="village-nearby-card__drive font-label-caps text-[10px] text-limestone tracking-[0.3em] uppercase mt-2">
          {nearby.drive_time_label}
        </p>
      </div>
    </article>
  );
}
