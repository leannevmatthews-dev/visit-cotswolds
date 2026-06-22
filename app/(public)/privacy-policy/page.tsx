import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy | Visit Cotswolds",
  description:
    "How Visit Cotswolds collects, uses, and protects your data under UK GDPR.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-background text-on-background">
      <article className="mx-auto max-w-3xl px-margin-mobile py-16 md:px-margin-desktop md:py-24">
        <header className="mb-12 md:mb-16">
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-4">
            Privacy Policy
          </h1>
          <p className="font-label-caps text-label-caps text-on-surface-variant">
            Last updated: June 2026
          </p>
        </header>

        <div className="space-y-10">
          <p className="font-body-lg text-on-surface-variant leading-relaxed">
            Visit Cotswolds (visitcotswolds.uk) is an independent guide to the
            Cotswolds. This page explains what data we collect, how we use it,
            and your rights under UK GDPR.
          </p>

          <section className="space-y-4">
            <h2 className="font-headline-md text-headline-md text-on-surface">
              Section 1 — What we collect
            </h2>
            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              We collect email addresses when you request The Little Black Book
              of the Cotswolds via our signup form. We do not collect any other
              personal data directly. We use Google Analytics to understand how
              visitors use the site — this collects anonymised usage data
              including pages visited, time on site, and approximate location.
              No personally identifiable information is collected via analytics.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-headline-md text-headline-md text-on-surface">
              Section 2 — How we use your data
            </h2>
            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              Your email address is used solely to deliver the guide you
              requested and to send occasional updates about Visit Cotswolds. We
              do not sell, share, or pass your data to third parties. You can
              unsubscribe at any time by replying to any email we send.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-headline-md text-headline-md text-on-surface">
              Section 3 — Cookies
            </h2>
            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              This site uses cookies for analytics purposes via Google Analytics.
              By continuing to use the site you consent to this. You can disable
              cookies in your browser settings at any time.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-headline-md text-headline-md text-on-surface">
              Section 4 — Your rights
            </h2>
            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              Under UK GDPR you have the right to access, correct, or delete any
              personal data we hold about you. To exercise these rights, contact
              us at{" "}
              <a
                className="text-limestone underline underline-offset-4 transition-colors hover:text-on-surface"
                href="mailto:hello@visitcotswolds.uk"
              >
                hello@visitcotswolds.uk
              </a>
              .
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-headline-md text-headline-md text-on-surface">
              Section 5 — Changes to this policy
            </h2>
            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              We may update this policy occasionally. The date at the top of this
              page shows when it was last revised.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
