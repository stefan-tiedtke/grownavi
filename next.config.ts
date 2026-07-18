import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Allows isolated CI/build verification while a local dev server owns `.next`.
  distDir: process.env.NEXT_DIST_DIR || ".next",
};
export default nextConfig;
