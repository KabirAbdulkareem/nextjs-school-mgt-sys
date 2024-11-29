/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "images.pexels.com" },{hostname: "media-los2-1.cdn.whatsapp.net"}],
  },
};

export default nextConfig;
