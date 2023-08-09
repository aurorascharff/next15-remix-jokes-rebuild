/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['pages', 'components', 'app'],
  },
  experimental: {
    serverActions: true,
  },
  async redirects() {
    return [
      {
        destination: '/demo/nesting',
        permanent: true,
        source: '/demo',
      },
    ];
  },
};

module.exports = nextConfig;
