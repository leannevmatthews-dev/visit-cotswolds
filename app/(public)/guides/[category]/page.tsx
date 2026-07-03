import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/json-ld";
import { GuideCategoryContent } from "@/components/guides/guide-category-content";
import {
  getGuideCategoryBySlug,
  GUIDE_CATEGORY_SLUGS,
  isGuideCategorySlug,
} from "@/lib/guides-data";
import { pageMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbJsonLd } from "@/lib/seo/schema";
import "@/css/listing-directory.css";
import "@/css/village-hero.css";

type GuideCategoryPageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return GUIDE_CATEGORY_SLUGS.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: GuideCategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getGuideCategoryBySlug(categorySlug);

  if (!category) {
    return {};
  }

  return pageMetadata({
    title: category.title,
    description: category.description,
    path: category.href,
  });
}

export default async function GuideCategoryPage({
  params,
}: GuideCategoryPageProps) {
  const { category: categorySlug } = await params;

  if (!isGuideCategorySlug(categorySlug)) {
    notFound();
  }

  const category = getGuideCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
          { name: category.title, path: category.href },
        ])}
      />
      <GuideCategoryContent category={category} />
    </>
  );
}
