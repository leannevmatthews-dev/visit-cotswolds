/** Canonical Next.js routes for legacy static HTML pages. */
export const STATIC_PAGE_REDIRECTS = [
  { source: "/index.html", destination: "/", permanent: false },
  { source: "/pages/villages/index.html", destination: "/villages", permanent: false },
  { source: "/pages/villages/bibury.html", destination: "/villages/bibury", permanent: false },
  { source: "/pages/villages/burford.html", destination: "/villages/burford", permanent: false },
  { source: "/pages/villages/bourton-on-the-water.html", destination: "/villages/bourton-on-the-water", permanent: false },
  { source: "/pages/villages/castle-combe.html", destination: "/villages/castle-combe", permanent: false },
  { source: "/pages/villages/snowshill.html", destination: "/villages/snowshill", permanent: false },
  { source: "/pages/places-to-stay.html", destination: "/places-to-stay", permanent: false },
  { source: "/pages/places-to-eat.html", destination: "/places-to-eat", permanent: false },
  { source: "/pages/things-to-do.html", destination: "/things-to-do", permanent: false },
  { source: "/pages/journal.html", destination: "/journal", permanent: false },
  { source: "/pages/plan-your-visit.html", destination: "/guides", permanent: false },
  { source: "/plan-your-visit", destination: "/guides", permanent: false },
  { source: "/pages/whats-on.html", destination: "/whats-on", permanent: false },
] as const;
