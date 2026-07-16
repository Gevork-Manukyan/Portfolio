import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// Content Security Policy — static-friendly (no nonces), so the site stays
// fully prerendered. Next injects inline hydration <script>/<style>, which
// requires 'unsafe-inline'; a strict nonce CSP would force dynamic rendering.
// This is defense-in-depth: it still locks down object/base-uri/frame-ancestors/
// form-action and upgrades insecure requests. Everything the site loads is
// same-origin, so 'self' covers scripts, fonts, images, analytics, and the form.
// 'unsafe-eval' is added only in dev (React/Turbopack use eval for HMR).
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

// Security headers applied to every response. These are all static-friendly —
// they don't force dynamic rendering, so the site stays fully prerendered.
const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
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
