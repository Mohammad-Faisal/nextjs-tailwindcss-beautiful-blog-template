/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  images: {
    domains: [
      "images.unsplash.com",
      "images.pexels.com",
      "miro.medium.com",
      "/images",
    ],
    loader: "custom",
    disableStaticImages: true,
  },
  webpack: function (config, { isServer }) {
    if (isServer) {
      require("./scripts/sitemap-generator");
    }
    return config;
  },
};

module.exports = nextConfig;
