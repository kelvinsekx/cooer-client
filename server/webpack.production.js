const path = require("path");
const webpack = require("webpack");
const cwd = process.cwd();
//const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = {
  name: "production",
  entry: [path.join(cwd, "/src/main.js")],
  output: {
    path: path.resolve("./dist/"),
    filename: "bundle.js",
  },
	plugins: [
		new HtmlWebpackPlugin({
		inject: true,
		template: "./public/index.html"
	})
],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      { test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/, use: ["file-loader"] },
    ],
},
};

module.exports = config;
