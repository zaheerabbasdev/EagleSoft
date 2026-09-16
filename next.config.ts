import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GoDaddy shared/cPanel hosting has no Node.js server to run `next start` on,
  // so the site is built as static HTML/CSS/JS and uploaded directly.
  output: "export",
  // No image-optimization server exists on static hosting; serve images as-is.
  images: {
    unoptimized: true,
  },
  // Emits `/about/index.html` instead of `/about.html`, so Apache serves
  // `/about/` (and `/about` via its default DirectorySlash redirect) correctly.
  trailingSlash: true,
};

export default nextConfig;
