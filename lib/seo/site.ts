export const SITE_URL = "https://visitcotswolds.uk";

/** Build an absolute URL for a site path (e.g. `/villages` → https://visitcotswolds.uk/villages). */
export function absoluteUrl(path = "/"): string {
  if (!path || path === "/") {
    return SITE_URL;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}
