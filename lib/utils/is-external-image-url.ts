/** True when src is an absolute URL not served from Supabase storage or /public. */
export function isExternalImageUrl(src: string): boolean {
  const trimmed = src.trim();
  if (!trimmed || trimmed.startsWith("/")) {
    return false;
  }
  return !trimmed.includes(".supabase.co/storage/");
}
