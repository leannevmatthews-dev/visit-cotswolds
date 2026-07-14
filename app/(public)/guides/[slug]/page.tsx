import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideBlockRenderer } from "@/components/guides/guide-block-renderer";
import { JsonLd } from "@/components/seo/json-ld";
import {
  GUIDE_CONTENT_MAP,
  GUIDE_META_MAP,
  GUIDES_LISTINGS,
} from "@/lib/guides-data";
import { absoluteUrl } from "@/lib/seo/site";
import {
  getArticleJsonLd,
  getBreadcrumbJsonLd,
  getFaqJsonLd,
} from "@/lib/seo/schema";
import "@/css/village-page.css";

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return GUIDES_LISTINGS.map((listing) => ({ slug: listing.id }));
}

export async function generateMetadata({
  params,
}: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const meta = GUIDE_META_MAP[slug];

  if (!meta) {
    return { title: "Guide Not Found" };
  }

  return {
    title: { absolute: meta.metaTitle },
    description: meta.metaDescription,
    alternates: {
      canonical: absoluteUrl(`/guides/${meta.slug}`),
    },
    openGraph: {
      title: meta.metaTitle,
      description: meta.metaDescription,
      type: "article",
    },
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const listing = GUIDES_LISTINGS.find((entry) => entry.id === slug);
  const blocks = GUIDE_CONTENT_MAP[slug];
  const meta = GUIDE_META_MAP[slug];

  if (!listing || !blocks || !meta) {
    notFound();
  }

  const faqItems =
    blocks.find((block) => block.type === "faq")?.items ?? [];

  return (
    <>
      <JsonLd
        data={[
          getArticleJsonLd({
            title: meta.title,
            description: meta.metaDescription,
            path: `/guides/${meta.slug}`,
            datePublished: meta.datePublished,
            dateModified: meta.dateModified,
            authorName: "Leanne Matthews",
          }),
          getBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Guides", path: "/guides" },
            { name: meta.title, path: `/guides/${meta.slug}` },
          ]),
          ...(faqItems.length > 0 ? [getFaqJsonLd(faqItems)] : []),
        ]}
      />
      <main className="bg-background text-on-background pt-28 pb-16 md:pt-32 md:pb-24 lg:pb-32">
        <article className="mx-auto max-w-3xl px-margin-mobile md:px-margin-desktop">
          <p className="font-label-caps text-[10px] tracking-widest text-limestone uppercase mb-4">
            {listing.category}
          </p>
          <h1 className="font-display-lg text-[40px] sm:text-[48px] md:text-[56px] text-primary leading-tight mb-10 md:mb-14">
            {meta.title}
          </h1>
          <GuideBlockRenderer blocks={blocks} />
        </article>
      </main>
    </>
  );
}

