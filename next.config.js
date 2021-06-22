const path = require('path')

module.exports = {
  experimental: {
    eslint: true,
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.join(__dirname, 'src')
    config.resolve.alias['@npm'] = path.join(__dirname, 'node_modules')
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 650000
        }
      }
    })
    return config
  }
}
