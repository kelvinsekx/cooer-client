const PATH = require("path");
const WEBPACK = require("webpack");
const CWD = process.cwd();

const DEV_CLIENT_CONFIG = {
    name: "browser",
    mode: "development",
    devtool: "eval-source-map",
    entry: [
        "webpack-hot-middleware/client?reload=true",
        PATH.join(CWD, "/src/main.js")
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
    },
    plugins: [
        new WEBPACK.HotModuleReplacementPlugin(),
        new WEBPACK.NoEmitOnErrorsPlugin()
    ]
};

module.exports = DEV_CLIENT_CONFIG