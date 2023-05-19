/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  async rewrites() {
    return {
        fallback: [
            {
                source: '/:path*',
                destination: 'http://43.202.36.2:8080/:path*',
            },
        ],
    };
},
}

module.exports = nextConfig
