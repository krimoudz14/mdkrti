/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true
  },
  
  // Set base path if deploying to subdirectory
  // basePath: '/your-subdirectory',
  
  // Set asset prefix if needed
  // assetPrefix: '/your-subdirectory',
  
  // Configure trailing slash
  trailingSlash: true,
  
  // Disable server-side features for static export
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  
  // Handle environment variables
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  
  // Webpack configuration
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
        stream: false,
        url: false,
        zlib: false,
        http: false,
        https: false,
        assert: false,
        os: false,
        path: false,
      };
    }
    return config;
  },
}

module.exports = nextConfig