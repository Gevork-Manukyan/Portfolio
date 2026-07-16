import type { NextConfig } from "next";

// Security headers applied to every response. These are all static-friendly —
// they don't force dynamic rendering, so the site stays fully prerendered.
const securityHeaders = [
  // Force HTTPS for 2 years, including subdomains. No `preload` — keeps an
  // escape hatch (preload is hardcoded into browsers and slow to reverse).
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains",
  },
  // Block MIME-type sniffing.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Clickjacking: disallow being framed anywhere (CSP frame-ancestors reinforces).
  { key: "X-Frame-Options", value: "DENY" },
  // Isolate the top-level window from cross-origin popups (origin isolation).
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  // Send only the origin as referrer on cross-origin navigations.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Deny powerful APIs the site doesn't use.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
];

const nextConfig: NextConfig = {
  // Pin the workspace root to this project (a stray lockfile in the home
  // directory otherwise confuses Next's root inference).
  turbopack: {
    root: __dirname,
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
