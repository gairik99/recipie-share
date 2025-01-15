/ @type {import('next').NextConfig} */;
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Skip ESLint checks during builds
  },
  images: {
    remotePatterns: [{ hostname: "res.cloudinary.com" }],
  },
};

export default nextConfig;
