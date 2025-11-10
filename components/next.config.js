/** @type {import('next').NextConfig} */
const nextConfig = {
  // The app directory is enabled by default in Next.js 14 and above. Remove
  // deprecated experimental flag.
  images: {
    domains: []
  },
  reactStrictMode: true
};

module.exports = nextConfig;