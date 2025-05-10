/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static HTML export for GitHub Pages
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Required for static export
  },
  // basePath: '/repo-name', // replace 'repo-name' with your repository name for further dev
}

export default nextConfig
