export const NAV_ITEMS = [
  { id: "villages", label: "Villages", href: "/villages" },
  { id: "stays", label: "Places To Stay", href: "/places-to-stay" },
  { id: "eat", label: "Places To Eat", href: "/places-to-eat" },
  { id: "experiences", label: "Things To Do", href: "/things-to-do" },
  { id: "whats-on", label: "What's On", href: "/whats-on" },
  { id: "plan", label: "Plan Your Visit", href: "/plan-your-visit" },
] as const;

/** Desktop inline nav: items before index sit left of logo; rest sit right. */
export const NAV_SPLIT_INDEX = 3;

export const NAV_LEFT_ITEMS = NAV_ITEMS.slice(0, NAV_SPLIT_INDEX);
export const NAV_RIGHT_ITEMS = NAV_ITEMS.slice(NAV_SPLIT_INDEX);
