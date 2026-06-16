import Link from "next/link";
import { MailIcon, PublicIcon, ShareIcon } from "./icons";
import { Logo } from "./logo";
import { FOOTER_LINKS } from "@/lib/nav";

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/10 py-16 md:py-24 px-margin-mobile md:px-margin-desktop w-full text-center flex flex-col items-center gap-8 md:gap-12">
      <Link href="/" className="site-logo" aria-label="Visit Cotswolds">
        <Logo className="site-logo-svg" />
      </Link>

      <div className="flex flex-wrap justify-center gap-6 md:gap-12">
        {FOOTER_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-opacity duration-300"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex gap-8">
        <a
          className="text-on-surface-variant/40 hover:text-limestone transition-colors"
          href="#"
        >
          <PublicIcon className="h-6 w-6" />
        </a>
        <a
          className="text-on-surface-variant/40 hover:text-limestone transition-colors"
          href="#"
        >
          <MailIcon className="h-6 w-6" />
        </a>
        <a
          className="text-on-surface-variant/40 hover:text-limestone transition-colors"
          href="#"
        >
          <ShareIcon className="h-6 w-6" />
        </a>
      </div>

      <p className="font-label-caps text-label-caps text-on-surface-variant/50 max-w-sm leading-relaxed">
        © 2024 VISIT COTSWOLDS. UNHURRIED LUXURY. <br />
        A REFINED GUIDE TO THE HEART OF ENGLAND.
      </p>
    </footer>
  );
}
