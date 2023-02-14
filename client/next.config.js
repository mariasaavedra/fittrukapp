/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['placehold.co', 'images.unsplash.com', 'unsplash.com'],
  },
};

module.exports = nextConfig;
