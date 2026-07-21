import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  BEFORE_YOU_GO_GUIDE_SLUGS,
  BeforeYouGoSection,
} from "@/components/guides/before-you-go-section";
import { GuideBlockRenderer } from "@/components/guides/guide-block-renderer";
import { GuidePageHero } from "@/components/guides/guide-page-hero";
import { GuideToc } from "@/components/guides/guide-toc";
import {
  buildGuideH2IdByIndex,
  getGuideTocInsertIndex,
} from "@/lib/guides/heading-anchors";
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
import "@/css/village-hero.css";
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
  const tocInsertIndex = getGuideTocInsertIndex(blocks);
  const introBlocks = blocks.slice(0, tocInsertIndex);
  const bodyBlocks = blocks.slice(tocInsertIndex);
  const headingIds = buildGuideH2IdByIndex(blocks);

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
      {listing.imageUrl ? (
        <GuidePageHero
          imageUrl={listing.imageUrl}
          imageAlt={listing.imageAlt}
          imageCredit={listing.imageCredit}
        />
      ) : null}
      <main className="bg-background text-on-background pt-6 pb-16 md:pt-8 md:pb-24 lg:pt-10 lg:pb-32">
        <article className="mx-auto max-w-3xl px-margin-mobile md:px-margin-desktop">
          <p className="font-label-caps text-[10px] tracking-widest text-limestone uppercase mb-4">
            {listing.category}
          </p>
          <h1 className="font-display-lg text-[40px] sm:text-[48px] md:text-[56px] text-primary leading-tight mb-10 md:mb-14">
            {meta.title}
          </h1>
          <GuideBlockRenderer blocks={introBlocks} headingIds={headingIds} />
          <GuideToc blocks={blocks} />
          <GuideBlockRenderer
            blocks={bodyBlocks}
            blockOffset={tocInsertIndex}
            headingIds={headingIds}
          />
          {(BEFORE_YOU_GO_GUIDE_SLUGS as readonly string[]).includes(
            listing.id,
          ) ? (
            <BeforeYouGoSection currentSlug={listing.id} />
          ) : null}
        </article>
      </main>
    </>
  );
}

