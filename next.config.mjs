/** @type {import('next').NextConfig} */

import nextI18nextConfig from "./next-i18next.config.js";
import withPlugins from "next-compose-plugins";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  i18n: {
    ...nextI18nextConfig.i18n,
    localeDetection: false,
  },
  experimental: {
    optimizePackageImports: [
      "lodash",
      "@mui/material",
      "@mui/icons-material",
      "@mui/x-date-pickers",
    ],
  },
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
  images: {
    formats: ["image/webp"],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "www.google.com",
      },
    ],
  },
  productionBrowserSourceMaps: true,
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  rewrites() {
    return [
      {
        source: "/robots.txt",
        destination: "/api/common/robots",
      },
    ];
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      type: "asset",
      resourceQuery: /url/,
    });
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      resourceQuery: { not: [/url/] },
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default withPlugins([[withBundleAnalyzer]], nextConfig);
