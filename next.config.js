/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 30,
    },
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
