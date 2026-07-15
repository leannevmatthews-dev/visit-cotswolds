import { buildGuideH2Anchors } from "@/lib/guides/heading-anchors";
import type { GuideContentBlock } from "@/lib/guides-data";

type GuideTocProps = {
  blocks: GuideContentBlock[];
};

export function GuideToc({ blocks }: GuideTocProps) {
  const sections = buildGuideH2Anchors(blocks);

  if (sections.length === 0) {
    return null;
  }

  return (
    <nav
      aria-label="In this guide"
      className="my-8 border border-outline-variant/40 bg-surface-container px-5 py-5 md:px-6 md:py-6"
    >
      <p className="font-label-caps mb-4 text-[10px] tracking-widest text-limestone uppercase">
        In this guide
      </p>
      <ol className="font-body-sm space-y-2 text-on-surface-variant leading-relaxed">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="text-primary underline decoration-limestone/40 underline-offset-4 transition-colors hover:text-limestone"
            >
              {section.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
