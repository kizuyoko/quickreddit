import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      'a.thumbs.redditmedia.com',
      'b.thumbs.redditmedia.com',
      'external-preview.redd.it',
    ]
  },
};

export default nextConfig;
