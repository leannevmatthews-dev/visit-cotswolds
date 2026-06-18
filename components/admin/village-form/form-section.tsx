import type { ReactNode } from "react";

type FormSectionProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export function FormSection({ title, description, children }: FormSectionProps) {
  return (
    <section className="border border-outline/15 bg-surface-container-low/40">
      <div className="border-b border-outline/10 px-4 py-3 md:px-6">
        <h2 className="font-label-caps text-[10px] tracking-widest text-limestone/80">
          {title}
        </h2>
        {description && (
          <p className="mt-1 font-body-sm text-on-surface-variant">{description}</p>
        )}
      </div>
      <div className="flex flex-col gap-5 px-4 py-5 md:px-6">{children}</div>
    </section>
  );
}
