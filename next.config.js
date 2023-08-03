/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['pages', 'components', 'app'],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
