const path = require("path");
const webpack = require("webpack");
const cwd = process.cwd();
//const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  name: "production",
  entry: [path.join(cwd, "/src/main.js")],
  output: {
    path: path.join(cwd,"/dist/"),
    filename: "bundle.js",
    publicPath: "/",
  },
	plugins: [
		new HtmlWebpackPlugin({
		inject: true,
		template: "./public/index.html"
	}),
		new MiniCssExtractPlugin()
],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
	  options: {
	     presets: [
	        '@babel/preset-env',
	        '@babel/preset-react'  	
	     ],
	     plugins: [
		     "@babel/plugin-transform-runtime"
	     ]
	  }
        },
      },
	{
        test: /\.css$/i,
		use: ["style-loader", "css-loader"]
      },
      { 
        test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/, 
        use: ["file-loader"] 
      },
    ],
}
};

module.exports = config;
