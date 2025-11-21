/** @type {import('next').NextConfig} */
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: `
      default-src 'self';
      img-src 'self' data: https:;
      script-src 'self' 'unsafe-inline' https:;
      style-src 'self' 'unsafe-inline';
      font-src 'self' https: data:;
      connect-src 'self' https:;
    `
      .replace(/\s{2,}/g, ' ')
      .trim(),
  },
];

const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
