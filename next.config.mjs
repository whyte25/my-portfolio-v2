/** @type {import('next').NextConfig} */
import { createContentlayerPlugin } from "next-contentlayer2";

const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /generate-dotpkg\.js$/,
        use: "null-loader",
      });
    }
    return config;
  },
};

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
});

export default withContentlayer(nextConfig);
