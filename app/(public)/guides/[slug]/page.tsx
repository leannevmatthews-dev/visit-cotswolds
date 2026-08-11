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
  getAllPublishedGuideSlugs,
  getGuideBySlug,
} from "@/lib/guides/queries";
import type { GuideContentBlock } from "@/lib/guides-data";
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

export const dynamic = "force-dynamic";
export const dynamicParams = true;

const HARDCODED_GUIDE_SLUGS = Object.keys(GUIDE_CONTENT_MAP);

type ResolvedGuide = {
  slug: string;
  title: string;
  meta_title: string;
  meta_description: string;
  category: string;
  hero_image_url: string | null;
  hero_image_alt: string | null;
  hero_image_credit: string | null;
  hero_image_credit_url: string | null;
  published_at: string | null;
  created_at: string;
  updated_at: string;
  blocks: GuideContentBlock[];
};

async function resolveGuide(slug: string): Promise<ResolvedGuide | null> {
  const meta = GUIDE_META_MAP[slug];
  const blocks = GUIDE_CONTENT_MAP[slug];
  const listing = GUIDES_LISTINGS.find((entry) => entry.id === slug);

  if (meta && blocks && listing) {
    return {
      slug: meta.slug,
      title: meta.title,
      meta_title: meta.metaTitle,
      meta_description: meta.metaDescription,
      category: listing.category,
      hero_image_url: listing.imageUrl ?? null,
      hero_image_alt: listing.imageAlt ?? null,
      hero_image_credit: listing.imageCredit?.text ?? null,
      hero_image_credit_url: listing.imageCredit?.url ?? null,
      published_at: meta.datePublished,
      created_at: meta.datePublished,
      updated_at: meta.dateModified,
      blocks,
    };
  }

  const guide = await getGuideBySlug(slug);
  if (!guide) {
    return null;
  }

  try {
    return {
      slug: guide.slug,
      title: guide.title,
      meta_title: guide.meta_title,
      meta_description: guide.meta_description,
      category: guide.category,
      hero_image_url: guide.hero_image_url,
      hero_image_alt: guide.hero_image_alt,
      hero_image_credit: guide.hero_image_credit,
      hero_image_credit_url: guide.hero_image_credit ? "#" : null,
      published_at: guide.published_at,
      created_at: guide.created_at,
      updated_at: guide.updated_at,
      blocks: JSON.parse(guide.content) as GuideContentBlock[],
    };
  } catch {
    return null;
  }
}

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const supabaseSlugs = await getAllPublishedGuideSlugs();
  const allSlugs = [...new Set([...HARDCODED_GUIDE_SLUGS, ...supabaseSlugs])];
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = await resolveGuide(slug);

  if (!guide) {
    return { title: "Guide Not Found" };
  }

  return {
    title: { absolute: guide.meta_title },
    description: guide.meta_description,
    alternates: {
      canonical: absoluteUrl(`/guides/${guide.slug}`),
    },
    openGraph: {
      title: guide.meta_title,
      description: guide.meta_description,
      type: "article",
    },
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = await resolveGuide(slug);

  if (!guide) {
    notFound();
  }

  const heroImageCredit =
    guide.hero_image_credit && guide.hero_image_credit_url
      ? { text: guide.hero_image_credit, url: guide.hero_image_credit_url }
      : undefined;

  const faqItems =
    guide.blocks.find((block) => block.type === "faq")?.items ?? [];
  const tocInsertIndex = getGuideTocInsertIndex(guide.blocks);
  const introBlocks = guide.blocks.slice(0, tocInsertIndex);
  const bodyBlocks = guide.blocks.slice(tocInsertIndex);
  const headingIds = buildGuideH2IdByIndex(guide.blocks);

  return (
    <>
      <JsonLd
        data={[
          getArticleJsonLd({
            title: guide.title,
            description: guide.meta_description,
            path: `/guides/${guide.slug}`,
            datePublished: guide.published_at ?? guide.created_at,
            dateModified: guide.updated_at,
            authorName: "Leanne Matthews",
          }),
          getBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Guides", path: "/guides" },
            { name: guide.title, path: `/guides/${guide.slug}` },
          ]),
          ...(faqItems.length > 0 ? [getFaqJsonLd(faqItems)] : []),
        ]}
      />
      {guide.hero_image_url ? (
        <GuidePageHero
          imageUrl={guide.hero_image_url}
          imageAlt={guide.hero_image_alt ?? guide.title}
          imageCredit={heroImageCredit}
        />
      ) : null}
      <main className="bg-background text-on-background pt-6 pb-16 md:pt-8 md:pb-24 lg:pt-10 lg:pb-32">
        <article className="mx-auto max-w-3xl px-margin-mobile md:px-margin-desktop">
          <p className="font-label-caps text-[10px] tracking-widest text-limestone uppercase mb-4">
            {guide.category}
          </p>
          <h1 className="font-display-lg text-[40px] sm:text-[48px] md:text-[56px] text-primary leading-tight mb-10 md:mb-14">
            {guide.title}
          </h1>
          <GuideBlockRenderer blocks={introBlocks} headingIds={headingIds} />
          <GuideToc blocks={guide.blocks} />
          <GuideBlockRenderer
            blocks={bodyBlocks}
            blockOffset={tocInsertIndex}
            headingIds={headingIds}
          />
          {(BEFORE_YOU_GO_GUIDE_SLUGS as readonly string[]).includes(
            guide.slug,
          ) ? (
            <BeforeYouGoSection currentSlug={guide.slug} />
          ) : null}
        </article>
      </main>
    </>
  );
}
