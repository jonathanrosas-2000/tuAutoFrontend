/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    API: process.env.API,
    DEFAULT_MONTHS: process.env.DEFAULT_MONTHS
  },
  images: {
    domains: ['localhost', 'res.cloudinary.com'],
  },
};

module.exports = nextConfig