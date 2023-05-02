/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: '/backend/:path*',
        destination: 'http://localhost/cinegator/backend/:path*'
      }
    ]
  }
}

module.exports = nextConfig
