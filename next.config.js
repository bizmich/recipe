/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: "https://node-recipe-api-psi.vercel.app",
  },
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "plus.unsplash.com"],
  },
};

module.exports = nextConfig;
