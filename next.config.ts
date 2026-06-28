import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the Turbopack root to this project so it isn't mis-inferred from a
  // parent directory (e.g. under OneDrive), which breaks `tailwindcss` resolution.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
