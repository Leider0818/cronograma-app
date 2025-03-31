/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: async () => {
        return [
        {
            source: '/backend/:path*',
            destination:
            process.env.NODE_ENV === 'development'
                ? 'http://localhost:3000/backend/:path*'
                : '/backend/',
        },
        ]
  },
}
export default nextConfig;
