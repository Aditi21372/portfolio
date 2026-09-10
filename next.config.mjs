/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const repo = "/portfolio";

const nextConfig = {
  output: "export",
  basePath: isProd ? repo : "",
  assetPrefix: isProd ? repo : "",
  trailingSlash: true,
  images: { unoptimized: true },
  // Exposed so hand-written internal hrefs can be prefixed (see lib/basePath.ts).
  env: { NEXT_PUBLIC_BASE_PATH: isProd ? repo : "" },
};

export default nextConfig;
