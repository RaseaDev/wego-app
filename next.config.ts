import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  compress: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/wego-settings.apk",
        headers: [
          {
            key: "Content-Disposition",
            value: "attachment; filename=wego-settings.apk",
          },
          {
            key: "Content-Type",
            value: "application/vnd.android.package-archive",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
