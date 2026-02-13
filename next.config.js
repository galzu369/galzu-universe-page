/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: '.next-local',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig