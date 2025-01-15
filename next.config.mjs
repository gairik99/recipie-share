/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*", // Applies to all paths
        headers: [
          {
            key: "Referrer-Policy",
            value: "no-referrer-when-downgrade", // You can adjust the policy if needed
          },
        ],
      },
    ];
  },
};

export default nextConfig;
