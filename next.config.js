/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['media.rawg.io'],
  },
};

module.exports = nextConfig;
