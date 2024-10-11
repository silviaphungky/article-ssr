/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    path: `${process.env.BASE_PATH || ''}/_next/image`,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  rewrites: async () => [
    {
      source: '/articles',
      destination: '/api/articles',
    },
  ],
}

export default nextConfig
