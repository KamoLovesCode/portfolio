/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true
  },
  // Configure for GitHub Pages deployment on kamocodes.xyz
  
  // Optimize for static export
  experimental: {
    optimizeCss: true,
  },
  
  // Compress output
  compress: true,
  
  // Generate sitemap and robots.txt
  generateBuildId: async () => {
    return 'kamocodes-portfolio-' + Date.now()
  }
}

export default nextConfig
