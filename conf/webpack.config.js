const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const loaders = require("./loaders.js");

const sourceFolder = path.resolve(__dirname, "../src");
const outputFolder = path.resolve(__dirname, "../dist");
const templateIndex = path.resolve(__dirname, "../src/index.html");


module.exports = {
  devtool: "eval",
  entry: [
    "webpack-dev-server/client?http://localhost:3000",
    "webpack/hot/only-dev-server",
    sourceFolder
  ],
  output: {
    path: outputFolder,
    filename: "bundle.js",
    publicPath: "http://localhost:3000/"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject : true,
      template : templateIndex
    })
  ],
  module: {loaders}
};