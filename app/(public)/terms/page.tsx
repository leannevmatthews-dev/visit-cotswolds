import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { pageMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbJsonLd } from "@/lib/seo/schema";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Use",
  description:
    "Terms of use for Visit Cotswolds, an independent guide to the Cotswolds.",
  path: "/terms",
});

export default function TermsOfUsePage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Terms of Use", path: "/terms" },
        ])}
      />
      <main className="bg-background text-on-background">
        <article className="mx-auto max-w-3xl px-margin-mobile py-16 md:px-margin-desktop md:py-24">
          <header className="mb-12 md:mb-16">
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-4">
              Terms of Use
            </h1>
            <p className="font-label-caps text-label-caps text-on-surface-variant">
              Last updated: July 2026
            </p>
          </header>

          <div className="space-y-10">
            <section className="space-y-4">
              <h2 className="font-headline-md text-headline-md text-on-surface">
                About this website
              </h2>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                Visit Cotswolds (visitcotswolds.uk) is an independent,
                editorially-led guide to the Cotswolds, created and maintained by
                Leanne Matthews. We are not affiliated with any official tourism
                board or public body, and our recommendations reflect independent
                editorial judgement.
              </p>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                By using this website, you accept these terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline-md text-headline-md text-on-surface">
                Accuracy of information
              </h2>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                We make every reasonable effort to keep information on this site
                accurate and up to date, including opening times, prices,
                parking, and accessibility details. However, this kind of
                information changes frequently and is often outside our control.
                Always check directly with the relevant business or venue before
                making plans, particularly for anything time-sensitive.
              </p>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                We do not guarantee that any information on this site is
                complete, current, or error-free.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline-md text-headline-md text-on-surface">
                Editorial recommendations
              </h2>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                Recommendations, opinions, and ratings expressed on this site are
                editorial judgements based on our own research and, where stated,
                personal experience. They are not guarantees of quality or
                suitability for your particular needs.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline-md text-headline-md text-on-surface">
                Intellectual property
              </h2>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                Unless otherwise credited, all original text, photography, and
                video on this site is the property of Leanne Matthews / Visit
                Cotswolds and may not be reproduced, republished, or used
                commercially without permission.
              </p>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                Some images on this site are used under Creative Commons licences
                and are credited to their original photographers, with a link to
                the licence terms, at the point of use.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline-md text-headline-md text-on-surface">
                Acceptable use
              </h2>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                You may not scrape, republish, or systematically extract content
                from this site without our permission. You may not use our
                contact form for unsolicited commercial messages.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline-md text-headline-md text-on-surface">
                External links
              </h2>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                This site contains links to third-party websites (businesses,
                transport operators, attractions, and similar). We are not
                responsible for the content, accuracy, or availability of
                external sites, and linking to them does not imply endorsement of
                everything on them.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline-md text-headline-md text-on-surface">
                Limitation of liability
              </h2>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                We provide this website on an &quot;as is&quot; basis. To the
                fullest extent permitted by law, we are not liable for any loss
                or damage arising from your use of this site or reliance on its
                content, including travel plans made based on information found
                here.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline-md text-headline-md text-on-surface">
                Governing law
              </h2>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                These terms are governed by the laws of England and Wales.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline-md text-headline-md text-on-surface">
                Changes to these terms
              </h2>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                We may update these terms from time to time. The &quot;last
                updated&quot; date above reflects the most recent version.
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
