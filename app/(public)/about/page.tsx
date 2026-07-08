import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { NewsletterSignup } from "@/components/shared/newsletter-signup";
import { pageMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbJsonLd, getPersonJsonLd } from "@/lib/seo/schema";

const LEANNE_ABOUT_SUMMARY =
  "I'm Leanne Matthews, and I built Visit Cotswolds after moving to the area and finding most existing guides weren't much help for actual trip planning.";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Visit Cotswolds is an independent guide to the Cotswolds. No sponsored content, no tourism board backing — just honest recommendations from real visits.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          getPersonJsonLd(LEANNE_ABOUT_SUMMARY),
          getBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
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
              {LEANNE_ABOUT_SUMMARY}{" "}
              This is an independent guide, not a tourism board site or a
              directory. I research places properly, visit in person where I can, and
              only include what I&apos;d genuinely recommend. Not everything makes the
              cut. Some popular villages are worth skipping on a summer weekend. Some
              less obvious ones are worth going out of your way for. I try to be
              honest about which is which.
            </p>
            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              Where I haven&apos;t visited somewhere yet, I say so. Recommendations and
              honest opinions come from first-hand experience, not from copying what
              other sites already say.
            </p>
            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              I use AI tools to help with research and drafting, the same way a lot of
              writers now do. It&apos;s useful for pulling together background
              information and speeding up the research process. But the actual
              judgement, whether somewhere&apos;s worth your time, what to skip, what
              surprised me, always comes from having been there myself. AI doesn&apos;t
              write opinions on this site. I do.
            </p>
            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              No sponsored content. No tourism board backing. No obligation to present
              anywhere in a better light than it deserves.
            </p>
            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              If you come here with a question about where to go, where to stay, or
              whether something&apos;s worth your time, I want you to leave with an
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
                href="mailto:info@visitcotswolds.uk"
              >
                info@visitcotswolds.uk
              </a>{" "}
              and we will address it promptly.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-headline-md text-headline-md text-on-surface">
              Get In Touch
            </h2>
            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              Contact me at{" "}
              <a
                className="text-limestone underline underline-offset-4 transition-colors hover:text-on-surface"
                href="mailto:info@visitcotswolds.uk"
              >
                info@visitcotswolds.uk
              </a>
              . I&apos;m always happy to hear from readers, local businesses, or
              anyone with a question about the Cotswolds.
            </p>
          </section>
        </div>
      </article>
      <NewsletterSignup />
    </main>
    </>
  );
}
