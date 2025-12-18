import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // 👈 Los dos asteriscos aceptan CUALQUIER dominio
      },
    ],
  },
};

export default nextConfig;
