import type { NextConfig } from "next"
import path from "path"

const siteFolder = process.env.DATA 

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // whenever you import from "@/data", it will point to data/roofing
      "@data": path.resolve(__dirname, `data/${siteFolder}`),
    }
    return config
  },
}

export default nextConfig