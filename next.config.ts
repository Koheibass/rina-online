import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/payment.html",
        destination: "/payment",
        permanent: true,
      },
      {
        source: "/news/20240121.html",
        destination: "/news/20240121",
        permanent: true,
      },
      {
        source: "/news/20240217.html",
        destination: "/news/20240217",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
