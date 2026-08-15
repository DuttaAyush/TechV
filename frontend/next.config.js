const path = require('path');
const dotenv = require('dotenv');
const envConfig = dotenv.config({ path: path.join(__dirname, '../.env.local') }).parsed || {};

// Next.js manages NODE_ENV internally and forbids overriding it in next.config.js
if (envConfig.NODE_ENV) {
  delete envConfig.NODE_ENV;
}

/** @type {import('next').NextConfig} */

const nextConfig = {
  env: envConfig,
  output: 'standalone',

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        pathname: '/**',
      },
    ],
  },

  // MongoDB package for App Router
  serverExternalPackages: ['mongodb'],

  webpack(config, { dev }) {
    if (dev) {
      config.watchOptions = {
        poll: 2000,
        aggregateTimeout: 300,
        ignored: ['**/node_modules'],
      };
    }

    return config;
  },

  onDemandEntries: {
    maxInactiveAge: 10000,
    pagesBufferLength: 2,
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'ALLOWALL',
          },
          {
            key: 'Content-Security-Policy',
            value: 'frame-ancestors *;',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: process.env.CORS_ORIGINS || '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: '*',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;