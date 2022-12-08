/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dribbble.com",
        pathname: "/users/**",
      },
    ],
  },
  env: {
    API_MSG: "/api/routes/messages",
    API_Story: "/api/routes/story",
    API_Image: "/api/routes/image",
  },
};

module.exports = nextConfig;
