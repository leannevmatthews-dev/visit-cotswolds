import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/contact/contact-form";
import { NewsletterSignup } from "@/components/shared/newsletter-signup";
import { pageMetadata } from "@/lib/seo/metadata";
import "@/css/village-hero.css";

const CONTACT_HERO_IMAGE =
  "https://pwwpxxeploahbcpubhnx.supabase.co/storage/v1/object/public/village-images/homepage/contact-hero.jpg";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Get in touch with Visit Cotswolds — for reader questions, local business enquiries, or anything else.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="bg-background text-on-background">
      <section className="village-hero">
        <Image
          alt=""
          aria-hidden="true"
          src={CONTACT_HERO_IMAGE}
          fill
          priority
          className="village-hero__bg object-cover"
          sizes="100vw"
        />
        <div className="village-hero__gradient" aria-hidden="true" />
        <div className="village-hero__content">
          <div className="village-hero__copy">
            <span className="font-label-caps text-[10px] text-limestone tracking-[0.3em] uppercase">
              Visit Cotswolds
            </span>
            <h1 className="font-display-lg text-[48px] sm:text-[56px] md:text-[72px] lg:text-[88px] text-primary leading-none tracking-tighter mt-3 md:mt-4">
              Get In Touch
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-margin-mobile py-16 md:px-margin-desktop md:py-20">
        <p className="font-body-lg text-on-surface-variant leading-relaxed">
          Whether you have a question about planning a Cotswolds trip, want to
          suggest somewhere worth including, or have a business enquiry, this is
          the right place. We read everything that comes in. Use the form below
          for anything at all.
        </p>
      </section>

      <section className="mx-auto max-w-2xl px-margin-mobile pb-20 md:px-margin-desktop md:pb-24">
        <div className="border border-outline-variant/20 bg-surface-container-low px-8 py-10 md:px-10 md:py-12">
          <ContactForm />
        </div>
      </section>

      <NewsletterSignup />
    </main>
  );
}
