"use client";

import type { KeyboardEvent, MouseEvent, ReactNode } from "react";

function openStayBookLink(currentTarget: EventTarget & Element) {
  const card = currentTarget.closest("[data-stay-card]");
  const book = card?.querySelector<HTMLAnchorElement>("a[data-stay-book]");
  const href = book?.href;
  if (!href) return;
  window.open(href, "_blank", "noopener");
}

/** Image or name that follows the card's Book link, including after Stay22 rewrites it. */
export function StayBookTarget({
  id,
  className,
  ariaLabel,
  children,
}: {
  id?: string;
  className?: string;
  ariaLabel?: string;
  children: ReactNode;
}) {
  const open = (currentTarget: EventTarget & Element) => {
    openStayBookLink(currentTarget);
  };

  return (
    <div
      id={id}
      role="link"
      tabIndex={0}
      aria-label={ariaLabel}
      className={`cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-limestone ${className ?? ""}`}
      onClick={(event: MouseEvent<HTMLDivElement>) => open(event.currentTarget)}
      onKeyDown={(event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key !== "Enter") return;
        event.preventDefault();
        open(event.currentTarget);
      }}
    >
      {children}
    </div>
  );
}
