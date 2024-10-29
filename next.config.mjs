/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com', 'fakestoreapi.com'],
  },
  experimental: {
    esmExternals: true, // Enable ES module support
  },
};

export default nextConfig;
