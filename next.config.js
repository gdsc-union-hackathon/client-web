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
                destination: 'https://ec322d8e-041e-4c0d-afd9-d4cfebab274a.mock.pstmn.io/:path*',
            },
        ],
    };
},
}

module.exports = nextConfig
