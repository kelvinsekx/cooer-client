const PATH = require("path");
const WEBPACK = require("webpack");
const CWD = process.cwd();
const NODEEXTERNALS = require("webpack-node-externals");

const WEBPACK_CONFIG = {
    name: "server",
    entry: [
      PATH.join(CWD, "./server/src/server.js")  
    ],
    target: "node",
    output: {
        path: PATH.join(CWD, "/server/dist/"),
        filename: "bundled.server.js",
        publicPath: "/server/dist/",
        libraryTarget: "commonjs2" 
    },
    externals: [NODEEXTERNALS()],
    module: {
        rules: [
            {
                test: /\.js$/,
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

module.exports = WEBPACK_CONFIG;