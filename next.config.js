/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  eslint: {
    dirs: ['pages', 'components', 'app'],
  },
};

module.exports = nextConfig;
