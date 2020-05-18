const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
// 构建前清理
const CleanWebpackPlugin = require("clean-webpack-plugin");
// 路径获取
const resolve = require("./utils").resolve;

const webpackConfig = {
  mode: "production",
  entry: {
    public: "./src/public/"
  },
  output: {
    path: resolve("dist/public"),
    filename: "[name].js",
    chunkFilename: "[name].[contenthash].js",
    library: `public`,
    libraryTarget: "umd"
  },
  // devtool: "source-map",
  plugins: [
    new CleanWebpackPlugin(),
    // 解决动态模块导入打包重名的问题
    new webpack.NamedChunksPlugin(chunk => "public/" + chunk.name)
  ]
};

module.exports = merge(common, webpackConfig);
