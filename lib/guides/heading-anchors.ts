import type { GuideContentBlock } from "@/lib/guides-data";
import { slugifyName } from "@/lib/villages/form-schema";

export type GuideH2Anchor = {
  id: string;
  text: string;
};

function resolveHeadingId(
  text: string,
  explicitId: string | undefined,
  usedIds: Set<string>,
): string {
  const base = explicitId ?? slugifyName(text);
  let id = base;
  let suffix = 2;

  while (usedIds.has(id)) {
    id = `${base}-${suffix}`;
    suffix += 1;
  }

  usedIds.add(id);
  return id;
}

export function buildGuideH2Anchors(blocks: GuideContentBlock[]): GuideH2Anchor[] {
  const usedIds = new Set<string>();

  return blocks.flatMap((block) => {
    if (block.type !== "heading" || block.level !== 2) {
      return [];
    }

    return [
      {
        id: resolveHeadingId(block.text, block.id, usedIds),
        text: block.text,
      },
    ];
  });
}

export function buildGuideH2IdByIndex(
  blocks: GuideContentBlock[],
): Record<number, string> {
  const usedIds = new Set<string>();
  const idByIndex: Record<number, string> = {};

  blocks.forEach((block, index) => {
    if (block.type === "heading" && block.level === 2) {
      idByIndex[index] = resolveHeadingId(block.text, block.id, usedIds);
    }
  });

  return idByIndex;
}

export function getGuideTocInsertIndex(blocks: GuideContentBlock[]): number {
  const index = blocks.findIndex(
    (block) =>
      block.type === "image" ||
      block.type === "map_embeds" ||
      block.type === "table" ||
      (block.type === "heading" && block.level === 2),
  );

  return index === -1 ? blocks.length : index;
}
