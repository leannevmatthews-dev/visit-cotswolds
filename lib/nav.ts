export const NAV_ITEMS = [
  { id: "villages", label: "Villages", href: "/pages/villages/index.html" },
  { id: "stays", label: "Places to Stay", href: "/pages/places-to-stay.html" },
  { id: "eat", label: "Places to Eat", href: "/pages/places-to-eat.html" },
  { id: "experiences", label: "Things to Do", href: "/pages/things-to-do.html" },
  { id: "whats-on", label: "What's On", href: "/pages/whats-on.html" },
  { id: "journal", label: "The Journal", href: "/pages/journal.html" },
  { id: "plan", label: "Plan Your Visit", href: "/pages/plan-your-visit.html" },
] as const;

/** Desktop inline nav: items before index sit left of logo; rest sit right. */
export const NAV_SPLIT_INDEX = 4;

export const NAV_LEFT_ITEMS = NAV_ITEMS.slice(0, NAV_SPLIT_INDEX);
export const NAV_RIGHT_ITEMS = NAV_ITEMS.slice(NAV_SPLIT_INDEX);

export const FOOTER_LINKS = [
  { label: "THE COLLECTION", href: "/pages/places-to-stay.html" },
  { label: "VILLAGE GUIDE", href: "/pages/villages/index.html" },
  { label: "EXPERIENCES", href: "/pages/things-to-do.html" },
  { label: "STAYS", href: "/pages/places-to-stay.html" },
  { label: "EAT", href: "/pages/places-to-eat.html" },
  { label: "JOURNAL", href: "/pages/journal.html" },
  { label: "PLAN", href: "/pages/plan-your-visit.html" },
] as const;
