/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/earlybird',
        destination: '/tickets',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig 