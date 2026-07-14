type GuideImagePlaceholderProps = {
  alt: string;
  caption?: string;
};

export function GuideImagePlaceholder({
  alt,
  caption,
}: GuideImagePlaceholderProps) {
  return (
    <figure className="my-8 md:my-10">
      <div
        className="relative flex aspect-video w-full flex-col items-center justify-center gap-3 border border-outline-variant/40 bg-surface-container px-6 text-center"
        role="img"
        aria-label={alt}
      >
        <span className="font-label-caps text-[10px] tracking-widest text-limestone uppercase">
          Image pending
        </span>
        <p className="font-body-sm max-w-xl text-on-surface-variant leading-relaxed">
          {alt}
        </p>
      </div>
      {caption ? (
        <figcaption className="font-body-sm mt-3 text-on-surface-variant">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
