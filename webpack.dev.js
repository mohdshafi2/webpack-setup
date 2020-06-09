const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "js/[name].min.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'css/[name].min.css',
      chunkFilename: 'css/[name].min.css',
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      template: "./src/Pages/index.html",
      filename: './index.html',
      chunks: ['all', 'external']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      template: "./src/Pages/about.html",
      filename: './about.html',
      chunks: ['all', 'external']
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", //3. Inject styles into DOM
          "css-loader", //2. Turns css into commonjs
          "sass-loader" //1. Turns sass into css
        ]
      }
    ]
  }
});
