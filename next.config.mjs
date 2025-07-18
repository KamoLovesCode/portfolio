/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
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
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  basePath: '',
  
  // Compress output
  compress: true,
  
  // Generate sitemap and robots.txt
  generateBuildId: async () => {
    return 'kamocodes-portfolio-' + Date.now()
  }
}

export default nextConfig
