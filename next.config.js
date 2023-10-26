/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['pages', 'components', 'app'],
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
