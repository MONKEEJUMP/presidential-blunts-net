import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
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
