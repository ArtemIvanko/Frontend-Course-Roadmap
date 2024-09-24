const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode : "production",
  entry : "./main/lesson22.js",
  output : {
    filename : "bundle.[contenthash].js",
    path : path.resolve(__dirname, "dist"),
  },
  module : {
    rules : [
      {
        test : /\.js$/,
        exclude : /node_modules/,
        use : "babel-loader",
      },
      {
        test : /\.scss$/,
        use : [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test : /\.css$/,
        use : [
          MiniCssExtractPlugin.loader,
          "css-loader",
        ],
      },
    ],
  },
  optimization : {
    minimizer : [new TerserPlugin()],
  },
  plugins : [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename : "[name].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      template : "./main/index.html",
    }),
  ],
  devServer : {
    static : path.join(__dirname, "dist"),
    compress : true,
    port : 9000,
  },
};
