import Image from "next/image";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { GuideImagePlaceholder } from "@/components/guides/guide-image-placeholder";
import type { GuideContentBlock } from "@/lib/guides-data";

type GuideBlockRendererProps = {
  blocks: GuideContentBlock[];
};

export function GuideBlockRenderer({ blocks }: GuideBlockRendererProps) {
  return (
    <div className="guide-article space-y-6 md:space-y-8">
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`;

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
          case "heading":
            if (block.level === 2) {
              return (
                <h2
                  key={key}
                  className="font-display-lg text-[32px] md:text-[40px] text-primary leading-tight pt-4 md:pt-6"
                >
                  {block.text}
                </h2>
              );
            }
            return (
              <h3
                key={key}
                className="font-headline-md text-[22px] md:text-[26px] text-primary leading-tight pt-2"
              >
                {block.text}
              </h3>
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
                    {block.rows.map((row) => (
                      <tr key={row.join("|")}>
                        {row.map((cell, cellIndex) => (
                          <td key={`${cellIndex}-${cell}`}>{cell}</td>
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
                      className="object-contain"
                      unoptimized={block.src.endsWith(".svg")}
                    />
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
          default:
            return null;
        }
      })}
    </div>
  );
}
