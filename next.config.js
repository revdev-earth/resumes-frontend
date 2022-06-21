/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: process.env.NODE_ENV === "development",
  },
}

module.exports = nextConfig
