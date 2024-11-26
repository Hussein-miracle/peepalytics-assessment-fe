import type { NextConfig } from "next";


// const withTM = require("next-transpile-modules")(['@square/web-sdk',"react-square-web-payments-sdk"])

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode:true,
  experimental:{
    esmExternals:"loose",
  }
};

export default nextConfig;
