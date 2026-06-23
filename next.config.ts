import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  // Explicitly forces Turbopack to set the root to where your config file is located
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;