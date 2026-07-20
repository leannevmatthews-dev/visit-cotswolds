import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { pageMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbJsonLd } from "@/lib/seo/schema";

export const metadata: Metadata = pageMetadata({
  title: "Editorial Policy",
  description:
    "How Visit Cotswolds researches, writes, and discloses editorial content.",
  path: "/editorial-policy",
});

export default function EditorialPolicyPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Editorial Policy", path: "/editorial-policy" },
        ])}
      />
      <main className="bg-background text-on-background">
        <article className="mx-auto max-w-3xl px-margin-mobile py-16 md:px-margin-desktop md:py-24">
          <header className="mb-12 md:mb-16">
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-4">
              Editorial Policy
            </h1>
            <p className="font-label-caps text-label-caps text-on-surface-variant">
              Last updated: July 2026
            </p>
          </header>

          <div className="space-y-10">
            <section className="space-y-4">
              <h2 className="font-headline-md text-headline-md text-on-surface">
                Our mission
              </h2>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                Visit Cotswolds exists to be a genuinely useful, independent
                guide to the Cotswolds, written by someone who lives close to the
                region and visits it regularly. We&apos;re not a tourism board, a
                directory, or a content farm. Every page is written to help you
                decide whether somewhere is worth your time, not just to tell you
                it exists.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline-md text-headline-md text-on-surface">
                How we research and write
              </h2>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                We draw a clear distinction between two types of content on this
                site:
              </p>
              <ul className="list-disc space-y-2 pl-5 font-body-lg text-on-surface-variant leading-relaxed">
                <li>
                  Research-based content is compiled from official sources,
                  operator information, and publicly available data, fact-checked
                  at the time of writing.
                </li>
                <li>
                  First-hand content reflects Leanne&apos;s own visits, and is
                  only presented as personal experience when it genuinely is one.
                </li>
              </ul>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                We do not present research-based content as if it were personal
                experience. If we haven&apos;t visited somewhere yet, we say so.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline-md text-headline-md text-on-surface">
                Our use of AI
              </h2>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                We use AI tools, including Claude by Anthropic, to assist with
                research, drafting, and editing. AI is a tool in our process, not
                a replacement for it. Every page on this site is written,
                reviewed, and approved by a human before publishing. AI never
                publishes content unsupervised, and it is never used to fabricate
                first-hand experience we don&apos;t actually have.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline-md text-headline-md text-on-surface">
                Corrections
              </h2>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                We make mistakes sometimes, information changes, and things get
                missed. If you spot something inaccurate or out of date, please
                tell us at{" "}
                <a
                  className="text-limestone underline underline-offset-4 transition-colors hover:text-on-surface"
                  href="mailto:info@visitcotswolds.uk"
                >
                  info@visitcotswolds.uk
                </a>{" "}
                and we&apos;ll review and correct it.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline-md text-headline-md text-on-surface">
                Commercial relationships
              </h2>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                At the time of writing, Visit Cotswolds does not run any
                affiliate links or accept paid or sponsored content. If this
                changes in future, any commercial relationship that could
                influence our recommendations will be clearly disclosed on the
                relevant page.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline-md text-headline-md text-on-surface">
                Image and video credits
              </h2>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                Where we use photography or video we didn&apos;t create
                ourselves, we credit the original creator and licence directly
                beneath the image. If you believe an image has been used
                incorrectly, contact us at{" "}
                <a
                  className="text-limestone underline underline-offset-4 transition-colors hover:text-on-surface"
                  href="mailto:info@visitcotswolds.uk"
                >
                  info@visitcotswolds.uk
                </a>
                .
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline-md text-headline-md text-on-surface">
                Contact us
              </h2>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                <a
                  className="text-limestone underline underline-offset-4 transition-colors hover:text-on-surface"
                  href="mailto:info@visitcotswolds.uk"
                >
                  info@visitcotswolds.uk
                </a>
              </p>
            </section>
          </div>
        </article>
      </main>
    </>
  );
}
