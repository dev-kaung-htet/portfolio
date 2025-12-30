const nextConfig = {
  // basePath and assetPrefix are removed so it defaults to "/"
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    // Keep this as an empty string in case your components use it
    NEXT_PUBLIC_BASE_PATH: "",
  },
};

export default nextConfig;
