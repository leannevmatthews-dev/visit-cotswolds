export const NAV_ITEMS = [
  { id: "villages", label: "Villages", href: "/villages" },
  { id: "stays", label: "Places to Stay", href: "/places-to-stay" },
  { id: "eat", label: "Places to Eat", href: "/places-to-eat" },
  { id: "experiences", label: "Things to Do", href: "/things-to-do" },
  { id: "whats-on", label: "What's On", href: "/whats-on" },
  { id: "journal", label: "The Journal", href: "/journal" },
  { id: "plan", label: "Plan Your Visit", href: "/plan-your-visit" },
] as const;

/** Desktop inline nav: items before index sit left of logo; rest sit right. */
export const NAV_SPLIT_INDEX = 4;

export const NAV_LEFT_ITEMS = NAV_ITEMS.slice(0, NAV_SPLIT_INDEX);
export const NAV_RIGHT_ITEMS = NAV_ITEMS.slice(NAV_SPLIT_INDEX);

export const FOOTER_LINKS = [
  { label: "THE COLLECTION", href: "/places-to-stay" },
  { label: "VILLAGE GUIDE", href: "/villages" },
  { label: "EXPERIENCES", href: "/things-to-do" },
  { label: "STAYS", href: "/places-to-stay" },
  { label: "EAT", href: "/places-to-eat" },
  { label: "JOURNAL", href: "/journal" },
  { label: "PLAN", href: "/plan-your-visit" },
] as const;
