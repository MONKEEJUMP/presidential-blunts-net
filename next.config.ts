import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Enforced (chief 1016, was Report-Only): GA4 + InLinks hosts; Next inline scripts need 'unsafe-inline' without a nonce proxy.
          { key: "Content-Security-Policy", value: "default-src 'self'; base-uri 'self'; script-src 'self' 'unsafe-inline' https://jscloud.net https://www.googletagmanager.com https://google-analytics.com https://*.google-analytics.com; style-src 'self' 'unsafe-inline' https://jscloud.net; connect-src 'self' https://jscloud.net https://www.googletagmanager.com https://google-analytics.com https://*.google-analytics.com https://*.analytics.google.com; font-src 'self'; img-src 'self' data: https://jscloud.net https://www.googletagmanager.com https://google-analytics.com https://*.google-analytics.com https://*.analytics.google.com; object-src 'none'; frame-ancestors 'self'; form-action 'self'" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.presidentialblunts.net" }],
        destination: "https://presidentialblunts.net/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
