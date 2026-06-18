import type { Metadata } from "next";
import type { Village } from "@/lib/villages/types";
import { absoluteUrl } from "@/lib/seo/site";

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(path),
    },
  };
}

export function villagePageMetadata(village: Village): Metadata {
  return pageMetadata({
    title: village.meta_title ?? `${village.name} | Visit Cotswolds`,
    description:
      village.meta_description ??
      `Discover ${village.name} in the Cotswolds — crowd intelligence, local tips, and everything worth knowing before you visit.`,
    path: `/villages/${village.slug}`,
  });
}
