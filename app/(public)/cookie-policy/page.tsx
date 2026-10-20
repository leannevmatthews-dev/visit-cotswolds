import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { pageMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbJsonLd } from "@/lib/seo/schema";

export const metadata: Metadata = pageMetadata({
  title: "Cookie Policy",
  description:
    "How Visit Cotswolds uses cookies, including Google Analytics and embedded maps.",
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Cookie Policy", path: "/cookie-policy" },
        ])}
      />
      <main className="bg-background text-on-background">
        <article className="mx-auto max-w-3xl px-margin-mobile py-16 md:px-margin-desktop md:py-24">
          <header className="mb-12 md:mb-16">
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-4">
              Cookie Policy
            </h1>
            <p className="font-label-caps text-label-caps text-on-surface-variant">
              Last updated: July 2026
            </p>
          </header>

          <div className="space-y-10">
            <section className="space-y-4">
              <h2 className="font-headline-md text-headline-md text-on-surface">
                What are cookies
              </h2>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                Cookies are small text files placed on your device when you visit
                a website. Some are essential for the site to work, others help
                us understand how the site is used, and some are set by embedded
                third-party content.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline-md text-headline-md text-on-surface">
                Cookies we use
              </h2>

              <h3 className="font-headline-md text-xl text-on-surface pt-2">
                Analytics
              </h3>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                We use Google Analytics to see how people use this site: which
                pages get read, how visitors find us, and where pages could be
                clearer. We use it only to improve the site.
              </p>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                Google Analytics sets cookies whose names start with _ga. They
                last up to two years. Google processes this information on our
                behalf as our data processor. We have switched off data sharing
                with Google, Google Signals and all advertising features, so this
                information is not used for advertising or for Google&apos;s own
                purposes.
              </p>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                UK law allows analytics cookies used only for this purpose to be
                set without asking first, as long as you can opt out. You can opt
                out at any time using the &quot;Opt out of analytics&quot; link in
                the footer of every page. Once you opt out, Google Analytics will
                not load in that browser. If you clear your browser&apos;s storage
                or use a different browser or device, you will need to opt out
                again.
              </p>

              <h3 className="font-headline-md text-xl text-on-surface pt-2">
                Advertising
              </h3>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                Ads on this site are served by Journey by Mediavine. Mediavine
                asks for your consent to advertising cookies in its own pop-up,
                and you can change your choice at any time through its
                preferences link.
              </p>

              <h3 className="font-headline-md text-xl text-on-surface pt-2">
                Third-party embedded content
              </h3>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                Some of our pages (route maps, village parking information)
                include embedded Google Maps. When a map loads, Google may set
                its own cookies to support the map&apos;s functionality. These are
                set by Google, not by us directly, and are separate from our
                analytics cookies. You can find out more about how Google uses
                this data at their own privacy policy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline-md text-headline-md text-on-surface">
                Managing your cookie preferences
              </h2>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                You can block or delete cookies through your browser settings,
                though this may affect how some content (such as embedded maps)
                displays.
              </p>
            </section>
          </div>
        </article>
      </main>
    </>
  );
}
