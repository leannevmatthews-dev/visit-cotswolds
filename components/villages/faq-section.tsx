import { getFaqJsonLd } from "@/lib/villages/helpers";
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
      <div className="village-faq">
        {village.faq_items.map((item) => (
          <details key={item.question} className="village-faq__item">
            <summary className="village-faq__question font-label-caps text-label-caps text-on-surface tracking-widest uppercase">
              <span>{item.question}</span>
              <span
                className="material-symbols-outlined village-faq__icon text-limestone"
                aria-hidden="true"
              >
                expand_more
              </span>
            </summary>
            <div className="village-faq__answer">
              <div className="village-faq__answer-inner">
                <p className="font-body-sm text-on-surface-variant leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
