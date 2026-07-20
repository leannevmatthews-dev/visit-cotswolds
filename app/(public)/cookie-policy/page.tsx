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
                Analytics cookies (require your consent)
              </h3>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                We use Google Analytics to understand how visitors use our site.
                These cookies are only set if you click &quot;Accept&quot; on our
                cookie banner. If you click &quot;Decline,&quot; these cookies are
                not set.
              </p>

              <div className="overflow-x-auto border border-outline-variant/20">
                <table className="w-full min-w-[28rem] text-left font-body-sm text-on-surface-variant">
                  <thead className="border-b border-outline-variant/20 bg-surface-container-low">
                    <tr>
                      <th className="px-4 py-3 font-label-caps text-[10px] tracking-widest text-limestone uppercase">
                        Cookie
                      </th>
                      <th className="px-4 py-3 font-label-caps text-[10px] tracking-widest text-limestone uppercase">
                        Purpose
                      </th>
                      <th className="px-4 py-3 font-label-caps text-[10px] tracking-widest text-limestone uppercase">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-outline-variant/10">
                      <td className="px-4 py-3 font-mono text-sm text-on-surface">
                        _ga
                      </td>
                      <td className="px-4 py-3 leading-relaxed">
                        Distinguishes unique visitors
                      </td>
                      <td className="px-4 py-3">2 years</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-sm text-on-surface">
                        _ga_*
                      </td>
                      <td className="px-4 py-3 leading-relaxed">
                        Persists session state
                      </td>
                      <td className="px-4 py-3">2 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                You can change your preference at any time using the &quot;Cookie
                preferences&quot; link in our footer.
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
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                We do not use advertising or retargeting cookies.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline-md text-headline-md text-on-surface">
                Managing your cookie preferences
              </h2>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                You can change your analytics cookie preference at any time via
                the &quot;Cookie preferences&quot; link in the site footer. You
                can also block or delete cookies through your browser settings,
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
