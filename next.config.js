/** @type {import('next').NextConfig} */
const pkg = require('./package.json')
const isDev = process.env.NODE_ENV == 'development'

const nextConfig = {
  env: {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_KEY: process.env.SUPABASE_KEY,
  },
  reactStrictMode: false,
  output: 'export',
  distDir: isDev ? undefined : `./dist/${pkg.config.base}`,
  basePath: `/${pkg.config.base}`,
  trailingSlash: true,
}

module.exports = nextConfig
