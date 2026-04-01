import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/julius-alejandro",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
