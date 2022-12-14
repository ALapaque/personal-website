const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true
});


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.sanity.io']
  },
  async headers() {
    const headers = [];
    if (process.env.NODE_ENV === 'production') {
      headers.push({
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex'
          }
        ],
        source: '/:path*'
      });
    }
    return headers;
  }
};

module.exports = withPWA(nextConfig);
