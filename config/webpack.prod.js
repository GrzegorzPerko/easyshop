const path = require('path')
const merge = require('webpack-merge')

const common = require('./webpack.common')

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin


module.exports = merge(common, {
  entry: path.resolve(__dirname, '../src/server.tsx'),
  output: {
    path: path.resolve(__dirname, '../build/static/js/'), 
    filename: 'bundle.min.js',
    globalObject: 'this',
  },
  mode: 'development',
  watch: true,
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  plugins: [
    //new BundleAnalyzerPlugin()
  ]
})