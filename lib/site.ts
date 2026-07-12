/**
 * Resolve the canonical site URL from env, tolerantly.
 * Accepts values with or without a scheme (e.g. "gevorkmanukyan.com" or
 * "https://gevorkmanukyan.com") and always returns a valid absolute URL with
 * no trailing slash — so `new URL(...)` never throws during the build.
 */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://example.com";
  const withScheme = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  return withScheme.replace(/\/+$/, "");
}
