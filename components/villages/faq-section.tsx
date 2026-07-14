import { FaqAccordion } from "@/components/shared/faq-accordion";
import { getFaqJsonLd } from "@/lib/seo/schema";
import type { Village } from "@/lib/villages/types";

type FaqSectionProps = {
  village: Village;
};

export function FaqSection({ village }: FaqSectionProps) {
  return (
    <div className="mb-24 md:mb-32 max-w-3xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFaqJsonLd(village.faq_items)),
        }}
      />
      <h2 className="font-display-lg text-[32px] md:text-[40px] text-primary leading-tight mb-4 text-center">
        {village.name} FAQs: What You Need to Know Before You Visit
      </h2>
      <p className="font-body-sm text-on-surface-variant text-center mb-10">
        Answers based on our visits and the questions visitors search for most
        often.
      </p>
      <FaqAccordion items={village.faq_items} />
    </div>
  );
}
