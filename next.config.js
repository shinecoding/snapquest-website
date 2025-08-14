/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    // assetPrefix: '',
    // basePath: '',
    output: 'export',
    images: {
      unoptimized: true, // Disable default image optimization
    },
};

module.exports = nextConfig;
