/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: "http://localhost:5000",
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
