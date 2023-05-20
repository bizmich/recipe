/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: "https://node-recipe-api-psi.vercel.app",
  },
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "plus.unsplash.com",
      "node-recipe-api-psi.vercel.app",
      "localhost",
    ],
  },
};

module.exports = nextConfig;
