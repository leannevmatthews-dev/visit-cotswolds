import Link from "next/link";
import type { ReactNode } from "react";
import { VILLAGE_PAGE_LINK_PHRASES } from "@/lib/villages/village-page-links";

function findNextVillageLink(
  text: string,
  linkedPhrases: Set<string>,
): { phrase: string; href: string; index: number } | null {
  let best: { phrase: string; href: string; index: number } | null = null;

  for (const { phrase, href } of VILLAGE_PAGE_LINK_PHRASES) {
    if (linkedPhrases.has(phrase)) {
      continue;
    }

    const index = text.indexOf(phrase);
    if (index === -1) {
      continue;
    }

    if (
      !best ||
      index < best.index ||
      (index === best.index && phrase.length > best.phrase.length)
    ) {
      best = { phrase, href, index };
    }
  }

  return best;
}

function linkVillageNamesInTextInner(
  text: string,
  linkedPhrases: Set<string>,
): ReactNode {
  const next = findNextVillageLink(text, linkedPhrases);
  if (!next) {
    return text;
  }

  linkedPhrases.add(next.phrase);

  const before = text.slice(0, next.index);
  const match = text.slice(next.index, next.index + next.phrase.length);
  const after = text.slice(next.index + next.phrase.length);

  return (
    <>
      {linkVillageNamesInTextInner(before, linkedPhrases)}
      <Link href={next.href} className="village-inline-link">
        {match}
      </Link>
      {linkVillageNamesInTextInner(after, linkedPhrases)}
    </>
  );
}

/** Link village names in prose when a live village page exists. */
export function linkVillageNamesInText(text: string): ReactNode {
  if (!text) {
    return text;
  }

  return linkVillageNamesInTextInner(text, new Set());
}
