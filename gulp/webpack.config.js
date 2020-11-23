const config = require('./config')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: path.resolve(config.app),
  entry: {
    app: './scripts/index.js',
  },
  output: {
    chunkFilename: '[name].bundle.js?[hash:6]',
    filename: '[name].built.js',
    path: path.resolve(config.scripts.dest),
    publicPath: ''
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minChunks: 2,
      minSize: 0,
      cacheGroups: {
        vendors: false,
        default: false,
      }
    }
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: {
          loader: 'eslint-loader',
          options: {
            formatter: require('eslint/lib/cli-engine/formatters/table'),
            failOnError: true
          }
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader'
        }
      },
    ]
  },
  devtool: false,
  plugins: [
    new HtmlWebpackPlugin({
      template: '../app/index.html',
      filename: './index.html'
    })
  ],
  stats: {
    colors: true,
    env: true,
    modules: false
  }
}