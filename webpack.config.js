const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  // optimization: {
  //   chunkIds: 'named',
  // },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'async',
  //     minSize: 200,
  //     minRemainingSize: 0,
  //     minChunks: 1,
  //     maxAsyncRequests: 30,
  //     maxInitialRequests: 30,
  //     enforceSizeThreshold: 50000,
  //     cacheGroups: {
  //       defaultVendors: {
  //         test: /[\\/]node_modules[\\/]/,
  //         priority: -10,
  //         reuseExistingChunk: true,
  //       },
  //       default: {
  //         minChunks: 2,
  //         priority: -20,
  //         reuseExistingChunk: true,
  //       },
  //     },
  //   },
  // },
  plugins: [
    new BundleAnalyzerPlugin(),
  ]
}