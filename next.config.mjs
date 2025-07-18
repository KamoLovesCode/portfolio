/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Ensures Next.js builds as a static site
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Required for static export
  },
  experimental: {
    // Remove optimizeCss if it causes issues with 'critters' or if you prefer not to use it
    // optimizeCss: true,
  },
};

export default nextConfig;
