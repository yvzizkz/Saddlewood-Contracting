/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  env: {
    NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.VITE_GA_MEASUREMENT_ID,
  },
}

module.exports = nextConfig
