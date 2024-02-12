/** @type {import('next').NextConfig} */
const nextConfig = {
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
