const PATH = require("path");
const WEBPACK = require("webpack");
const CWD = process.cwd();

const test = {
    name: "browser",
    mode: "development",
    devtool: "eval-source-map",
    entry: [
        PATH.join(CWD, "/test/")
    ],
    output: {
        path: PATH.join(CWD, "/dist/"),
        filename: "bundle.js",
        publicPath: "/dist/"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }, 
            {
                test: /\.(ttf|eot|svg|gif|jpg|png)$/,
                include: /images/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'images/',
                      publicPath: 'images/'
                    }
                  }
                ]
              }
        ]
    }
};

module.exports = test