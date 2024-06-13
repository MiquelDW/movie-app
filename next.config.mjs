/** @type {import('next').NextConfig} */
const nextConfig = {
  // use this configuration to add external images in your application
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
