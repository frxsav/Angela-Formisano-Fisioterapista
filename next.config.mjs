/** @type {import('next').NextConfig} */
const securityHeaders = [
  // {
  //   key: 'Content-Security-Policy',
  //   value: `
  //     default-src 'self';
  //     script-src 'self';
  //     style-src 'self';
  //     img-src 'self' blob: data:;
  //     font-src 'self';
  //     object-src 'none';
  //     base-uri 'self';
  //     form-action 'self';
  //     frame-ancestors 'none';
  //     upgrade-insecure-requests;
  //     require-trusted-types-for 'script';
  //   `
  //     .replace(/\s{2,}/g, ' ')
  //     .trim(),
  // },
  {
    key: 'Cross-Origin-Opener_Policy',
    value: 'same-origin',
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
  productionBrowserSourceMaps: true,
};

export default nextConfig;
