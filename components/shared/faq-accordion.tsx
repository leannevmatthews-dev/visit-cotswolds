type FaqAccordionItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqAccordionItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <div className="village-faq">
      {items.map((item) => (
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
              <p className="font-body-sm text-on-surface-variant leading-[1.5]">
                {item.answer}
              </p>
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}
