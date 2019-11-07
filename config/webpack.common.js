const path = require('path')

const getPathForFolder = folder => path.resolve(__dirname, `../src/${folder}/`)

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader']
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      '@Core': getPathForFolder('core'),
      '@Components': getPathForFolder('components'),
      '@Services': getPathForFolder('services'),
      '@Utils': getPathForFolder('utils')
    }
  },
}
