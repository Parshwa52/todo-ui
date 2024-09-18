/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://todo-supabase-backend.vercel.app/api/:path*",
      },
    ];
  },
};

export default nextConfig;
