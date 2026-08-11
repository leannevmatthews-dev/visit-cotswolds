import Image from "next/image";
import { isExternalImageUrl } from "@/lib/utils/is-external-image-url";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { GuideImagePlaceholder } from "@/components/guides/guide-image-placeholder";
import { GuideMapEmbeds } from "@/components/guides/guide-map-embeds";
import type { GuideContentBlock } from "@/lib/guides-data";

type GuideBlockRendererProps = {
  blocks: GuideContentBlock[];
  blockOffset?: number;
  headingIds?: Record<number, string>;
};

export function GuideBlockRenderer({
  blocks,
  blockOffset = 0,
  headingIds = {},
}: GuideBlockRendererProps) {
  return (
    <div className="guide-article space-y-6 md:space-y-8">
      {blocks.map((block, index) => {
        const blockIndex = blockOffset + index;
        const key = `${block.type}-${blockIndex}`;

        switch (block.type) {
          case "paragraph":
            return (
              <p
                key={key}
                className="font-body-lg text-on-surface-variant leading-relaxed"
              >
                {block.text}
              </p>
            );
          case "paragraph_with_links":
            return (
              <p
                key={key}
                className="font-body-lg text-on-surface-variant leading-relaxed"
              >
                {block.segments.map((segment, i) => {
                  if (segment.type === "text") {
                    return <span key={i}>{segment.text}</span>;
                  }
                  return (
                    <a
                      key={i}
                      href={segment.href}
                      {...(segment.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-limestone underline underline-offset-2 hover:text-on-surface-variant transition-colors"
                    >
                      {segment.text}
                    </a>
                  );
                })}
              </p>
            );
          case "heading":
            if (block.level === 2) {
              return (
                <h2
                  key={key}
                  id={headingIds[blockIndex]}
                  className="font-display-lg scroll-mt-28 text-[32px] md:scroll-mt-32 md:text-[40px] text-primary leading-tight pt-4 md:pt-6"
                >
                  {block.text}
                </h2>
              );
            }
            if (block.level === 3) {
              return (
                <h3
                  key={key}
                  className="font-headline-md text-[22px] md:text-[26px] text-primary leading-tight pt-2"
                >
                  {block.text}
                </h3>
              );
            }
            return (
              <h4
                key={key}
                className="font-headline-sm text-[18px] md:text-[20px] text-primary leading-tight pt-2"
              >
                {block.text}
              </h4>
            );
          case "list": {
            const ListTag = block.style === "numbered" ? "ol" : "ul";
            return (
              <ListTag
                key={key}
                className={`font-body-lg text-on-surface-variant space-y-2 pl-6 leading-relaxed ${
                  block.style === "numbered" ? "list-decimal" : "list-disc"
                }`}
              >
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ListTag>
            );
          }
          case "table":
            return (
              <div key={key} className="overflow-x-auto my-2">
                <table className="village-table">
                  <thead>
                    <tr>
                      {block.headers.map((header) => (
                        <th key={header}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex}>
                            {typeof cell === "string" ? (
                              cell
                            ) : (
                              <a
                                href={cell.href}
                                {...(cell.external
                                  ? {
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                    }
                                  : {})}
                                className="text-limestone underline underline-offset-2 hover:text-on-surface-variant transition-colors"
                              >
                                {cell.text}
                              </a>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "image":
            if (block.src) {
              return (
                <figure key={key} className="my-8 md:my-10">
                  <div className="relative aspect-video w-full overflow-hidden bg-surface-container">
                    <Image
                      src={block.src}
                      alt={block.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 48rem"
                      className="object-cover object-center"
                      unoptimized={isExternalImageUrl(block.src)}
                    />
                    {block.imageCredit ? (
                      <a
                        href={block.imageCredit.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-2 right-2 z-10 max-w-[min(100%,18rem)] rounded bg-black/55 px-2 py-1 font-body-sm text-[10px] leading-snug text-white/75 underline-offset-2 transition-colors hover:bg-black/70 hover:text-white hover:underline md:text-[11px]"
                      >
                        {block.imageCredit.text}
                      </a>
                    ) : null}
                  </div>
                  {block.caption ? (
                    <figcaption className="font-body-sm mt-3 text-on-surface-variant">
                      {block.caption}
                    </figcaption>
                  ) : null}
                </figure>
              );
            }
            return (
              <GuideImagePlaceholder
                key={key}
                alt={block.alt}
                caption={block.caption}
              />
            );
          case "faq":
            return (
              <div key={key} className="pt-2">
                <FaqAccordion items={block.items} />
              </div>
            );
          case "notice":
            return (
              <aside
                key={key}
                className="border-l-4 border-limestone bg-surface-container-low px-5 py-4 md:px-6 md:py-5"
              >
                <p className="font-body-sm text-on-surface-variant leading-relaxed">
                  {block.text}
                </p>
              </aside>
            );
          case "links":
            return (
              <aside
                key={key}
                className="border-l-4 border-limestone bg-surface-container-low px-5 py-4 md:px-6 md:py-5"
              >
                <p className="font-label-caps text-[10px] tracking-widest text-limestone uppercase mb-4">
                  {block.title}
                </p>
                <ul className="space-y-4">
                  {block.items.map((item) => (
                    <li key={item.url}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body-sm text-limestone underline-offset-2 hover:underline"
                      >
                        {item.label}
                      </a>
                      {item.note ? (
                        <p className="font-body-sm mt-1 text-on-surface-variant leading-relaxed">
                          {item.note}
                        </p>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </aside>
            );
          case "map_embeds":
            return (
              <GuideMapEmbeds
                key={key}
                title={block.title}
                routes={block.routes}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
