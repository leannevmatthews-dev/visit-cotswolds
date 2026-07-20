import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { pageMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbJsonLd } from "@/lib/seo/schema";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Visit Cotswolds collects and uses your data.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ])}
      />
      <main className="bg-background text-on-background">
        <article className="mx-auto max-w-3xl px-margin-mobile py-16 md:px-margin-desktop md:py-24">
          <header className="mb-12 md:mb-16">
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-4">
              Privacy Policy
            </h1>
            <p className="font-label-caps text-label-caps text-on-surface-variant">
              Last updated: July 2026
            </p>
          </header>

          <div className="space-y-10">
            <section className="space-y-4">
              <h2 className="font-headline-md text-headline-md text-on-surface">
                Who we are
              </h2>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                Visit Cotswolds is operated by Leanne Matthews, trading as Visit
                Cotswolds, a sole trader based in the UK. For the purposes of UK
                data protection law, Leanne Matthews is the data controller for
                any personal data collected through this website.
              </p>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                Contact:{" "}
                <a
                  className="text-limestone underline underline-offset-4 transition-colors hover:text-on-surface"
                  href="mailto:info@visitcotswolds.uk"
                >
                  info@visitcotswolds.uk
                </a>
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline-md text-headline-md text-on-surface">
                What information we collect
              </h2>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                We collect personal data in two ways.
              </p>

              <h3 className="font-headline-md text-xl text-on-surface pt-2">
                When you contact us
              </h3>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                If you use our contact form, we collect your name, email address,
                phone number (if provided), preferred contact method, and the
                content of your message. We use this only to respond to your
                enquiry. This information is sent directly to our business email
                account and is not stored in any database.
              </p>

              <h3 className="font-headline-md text-xl text-on-surface pt-2">
                When you browse our site
              </h3>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                If you accept analytics cookies (see our{" "}
                <Link
                  href="/cookie-policy"
                  className="text-limestone underline underline-offset-4 transition-colors hover:text-on-surface"
                >
                  Cookie Policy
                </Link>
                ), we use Google Analytics to understand how visitors use the
                site — which pages are popular, how people arrive at the site,
                and general browsing patterns. This data is anonymised and
                aggregated; we do not use it to identify individual visitors.
              </p>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                We do not run an email newsletter or mailing list at this time,
                and we do not use advertising or retargeting cookies.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline-md text-headline-md text-on-surface">
                Our legal basis for processing your data
              </h2>
              <ul className="list-disc space-y-2 pl-5 font-body-lg text-on-surface-variant leading-relaxed">
                <li>
                  Responding to your enquiries: legitimate interest (to run our
                  business and answer questions from visitors).
                </li>
                <li>
                  Analytics cookies: your consent, given via our cookie banner.
                  You can withdraw this at any time.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline-md text-headline-md text-on-surface">
                How long we keep your data
              </h2>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                Contact form enquiries are kept only as long as necessary to
                respond to and resolve them, and are deleted periodically as part
                of routine mailbox management. We do not keep enquiry data
                indefinitely.
              </p>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                Analytics data is retained according to Google Analytics&apos;
                standard retention settings and is not linked to your identity.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline-md text-headline-md text-on-surface">
                Who we share your data with
              </h2>
              <ul className="list-disc space-y-2 pl-5 font-body-lg text-on-surface-variant leading-relaxed">
                <li>
                  Namecheap Private Email, our email hosting provider, processes
                  messages sent via our contact form as part of standard email
                  delivery.
                </li>
                <li>
                  Google Analytics processes anonymised browsing data if you
                  consent to analytics cookies. Some of this data may be
                  processed on servers outside the UK/EEA; Google provides
                  appropriate safeguards for this under standard contractual
                  clauses.
                </li>
              </ul>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                We do not sell your data, and we do not share it with any other
                third party for marketing purposes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline-md text-headline-md text-on-surface">
                Cookies
              </h2>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                See our separate{" "}
                <Link
                  href="/cookie-policy"
                  className="text-limestone underline underline-offset-4 transition-colors hover:text-on-surface"
                >
                  Cookie Policy
                </Link>{" "}
                for full details of the cookies used on this site and how to
                manage your preferences.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline-md text-headline-md text-on-surface">
                Your rights
              </h2>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                Under UK GDPR, you have the right to:
              </p>
              <ul className="list-disc space-y-2 pl-5 font-body-lg text-on-surface-variant leading-relaxed">
                <li>Ask what personal data we hold about you</li>
                <li>Ask us to correct inaccurate data</li>
                <li>Ask us to delete your data</li>
                <li>Object to how we&apos;re processing your data</li>
                <li>Withdraw consent for analytics cookies at any time</li>
              </ul>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                To exercise any of these rights, contact us at{" "}
                <a
                  className="text-limestone underline underline-offset-4 transition-colors hover:text-on-surface"
                  href="mailto:info@visitcotswolds.uk"
                >
                  info@visitcotswolds.uk
                </a>
                . You also have the right to complain to the Information
                Commissioner&apos;s Office (
                <a
                  className="text-limestone underline underline-offset-4 transition-colors hover:text-on-surface"
                  href="https://ico.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ico.org.uk
                </a>
                ) if you believe we&apos;ve mishandled your data.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline-md text-headline-md text-on-surface">
                Changes to this policy
              </h2>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                We may update this policy from time to time to reflect changes to
                the site or the law. The &quot;last updated&quot; date at the top
                will always show the most recent version.
              </p>
            </section>
          </div>
        </article>
      </main>
    </>
  );
}
