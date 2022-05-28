/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // basePath: "/nextjs-tailwindcss-beautiful-blog-template",
  assetPrefix:
    "https://mohammad-faisal.github.io/nextjs-tailwindcss-beautiful-blog-template/",
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
