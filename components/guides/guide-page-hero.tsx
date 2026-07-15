import Image from "next/image";

type GuidePageHeroProps = {
  imageUrl: string;
  imageAlt: string;
  imageCredit?: { text: string; url: string };
};

export function GuidePageHero({
  imageUrl,
  imageAlt,
  imageCredit,
}: GuidePageHeroProps) {
  return (
    <section className="village-hero guide-page-hero">
      <Image
        alt={imageAlt}
        className="village-hero__bg object-cover"
        src={imageUrl}
        fill
        sizes="100vw"
        priority
        unoptimized={imageUrl.endsWith(".svg")}
      />
      <div className="village-hero__gradient" aria-hidden="true" />
      {imageCredit ? (
        <a
          href={imageCredit.url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-3 right-3 z-20 max-w-[min(100%,18rem)] rounded bg-black/55 px-2 py-1 font-body-sm text-[10px] leading-snug text-white/75 underline-offset-2 transition-colors hover:bg-black/70 hover:text-white hover:underline md:bottom-4 md:right-4 md:text-[11px]"
        >
          {imageCredit.text}
        </a>
      ) : null}
    </section>
  );
}
