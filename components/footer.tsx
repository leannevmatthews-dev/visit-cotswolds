import Link from "next/link";
import { NAV_ITEMS } from "@/lib/nav";

const FOOTER_INFORMATION_LINKS = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
] as const;

const footerLinkClassName =
  "font-body-sm text-on-surface-variant transition-colors hover:text-limestone";

const footerHeadingClassName =
  "font-label-caps text-[10px] text-limestone tracking-widest uppercase";

export function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/10 bg-surface-container-lowest">
      <div className="mx-auto max-w-container-max px-margin-mobile py-16 md:px-margin-desktop md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
          <div>
            <p className={footerHeadingClassName}>Visit Cotswolds</p>
            <p className="mt-3 max-w-xs font-body-sm leading-relaxed text-on-surface-variant">
              The most useful independent guide to the Cotswolds.
            </p>
          </div>

          <div>
            <p className={`${footerHeadingClassName} mb-4`}>Explore</p>
            <nav aria-label="Footer explore links">
              <ul className="flex flex-col gap-3">
                {NAV_ITEMS.map((item) => (
                  <li key={item.id}>
                    <Link href={item.href} className={footerLinkClassName}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <p className={`${footerHeadingClassName} mb-4`}>Information</p>
            <nav aria-label="Footer information links">
              <ul className="flex flex-col gap-3">
                {FOOTER_INFORMATION_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={footerLinkClassName}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className="border-t border-outline-variant/10">
        <div className="mx-auto max-w-container-max space-y-3 px-margin-mobile py-6 md:px-margin-desktop">
          <p className="font-body-sm text-on-surface-variant/60">
            © 2026 Visit Cotswolds. All rights reserved.
          </p>
          <p className="max-w-3xl text-xs leading-relaxed text-on-surface-variant/50">
            Images used for editorial purposes. If you are the rights holder and
            have concerns about usage, please contact us at{" "}
            <a
              className="text-on-surface-variant/70 underline underline-offset-2 transition-colors hover:text-limestone"
              href="mailto:hello@visitcotswolds.uk"
            >
              hello@visitcotswolds.uk
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
