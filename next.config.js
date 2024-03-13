/** @type {import('next').NextConfig} */
const pkg = require('./package.json')
const isDev = process.env.NODE_ENV == 'development'

const nextConfig = {
  reactStrictMode: false,
  output: 'export',
  distDir: isDev ? undefined : `./dist/${pkg.config.base}`,
  basePath: `/${pkg.config.base}`,
  trailingSlash: true,
}

module.exports = nextConfig
