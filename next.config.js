/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placeholder.com'], // Add any external domains you're loading images from
  },
  swcMinify: true, // Enable SWC minification for faster builds
  compiler: {
    removeConsole: process.env.NODE_ENV === "production", // Remove console.log in production
  },
}

module.exports = nextConfig

