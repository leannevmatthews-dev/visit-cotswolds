import type { Metadata } from "next";
import { NewsletterSignup } from "@/components/shared/newsletter-signup";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Visit Cotswolds is an independent guide to the Cotswolds. No sponsored content, no tourism board backing — just honest recommendations from real visits.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="bg-background text-on-background">
      <article className="mx-auto max-w-3xl px-margin-mobile py-16 md:px-margin-desktop md:py-24">
        <header className="mb-12 md:mb-16">
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-4">
            About Visit Cotswolds
          </h1>
        </header>

        <div className="space-y-10">
          <div className="space-y-6">
            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              The Cotswolds has no shortage of guides. Most of them list the same
              places, use the same photographs, and avoid saying anything that might
              put someone off.
            </p>
            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              That&apos;s not particularly useful if you&apos;re trying to decide
              whether somewhere is worth a two-hour drive.
            </p>
            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              Visit Cotswolds is an independent guide. We research places properly,
              visit in person where we can, and only include what we&apos;d genuinely
              recommend. Not everything makes the cut. Some popular villages are worth
              skipping on a summer weekend. Some less obvious ones are worth going out
              of your way for. We try to be honest about which is which.
            </p>
            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              No sponsored content. No tourism board backing. No obligation to present
              anywhere in a better light than it deserves.
            </p>
            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              If you come here with a question about where to go, where to stay, or
              whether something is worth your time, we want you to leave with an
              actual answer.
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="font-headline-md text-headline-md text-on-surface">
              Image Attribution
            </h2>
            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              Images featured on Visit Cotswolds are sourced from official
              business websites, tourism boards, and licensed image repositories
              (Wikimedia Commons, Creative Commons). We aim to showcase each
              location and business accurately. If you are the rights holder of
              any image and have concerns about its use, please contact us at{" "}
              <a
                className="text-limestone underline underline-offset-4 transition-colors hover:text-on-surface"
                href="mailto:hello@visitcotswolds.uk"
              >
                hello@visitcotswolds.uk
              </a>{" "}
              and we will address it promptly.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-headline-md text-headline-md text-on-surface">
              Get In Touch
            </h2>
            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              Contact us at [email to be added]. We are always happy to hear from
              readers, local businesses, or anyone with a question about the
              Cotswolds.
            </p>
          </section>
        </div>
      </article>
      <NewsletterSignup />
    </main>
  );
}
