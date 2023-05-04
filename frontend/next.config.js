/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: '/backend/:path*',
        destination: 'https://www.cise.ufl.edu/~lixiaokai/cis4930/CineGator/backend/:path*'
        // destination: 'http://localhost/cinegator/backend/:path*'
      }
    ]
  }
}

module.exports = nextConfig
