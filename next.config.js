/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    API: process.env.API,
    DEFAULT_MONTHS: process.env.DEFAULT_MONTHS
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig