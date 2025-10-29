/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,          // static export ke liye safe
  experimental: {
    optimizeCss: false,         // kabhi-kabhi Turbopack bug avoid karta hai
  },
};

export default nextConfig;
