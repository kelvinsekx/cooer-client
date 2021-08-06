const path = require("path")
const WEBPACK = require("webpack");
const NODEEXTERNALS = require("webpack-node-externals");
var glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const CONFIG = {
    name: "staticBuild",
    entry: glob.sync('./public/**.[js | html | css]').reduce(function(obj, el){
      obj[path.parse(el).name] = el;
      return obj
   },{}),
    target: "node",
    mode: "development",
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: "[name].js"
    },
	plugins: [new HtmlWebpackPlugin()],
	module:{	rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],},
    externalsPresets: { node: true },
    externals: [NODEEXTERNALS()]
};

module.exports = CONFIG;
