import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL(
        "https://yt3.googleusercontent.com/A784tCaoCdqlwu57NcG-NZo6mNf-6hK7YnCuHIe0NT8rhUx9qG8nt7rsPBT-2aPbhjlPiid5=s900-c-k-c0x00ffffff-no-rj"
      ),
      new URL("https://fakestoreapi.com/img/**"),
    ],
  },
};

export default nextConfig;
