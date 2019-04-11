const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(process.cwd(), 'dist')
    },
    optimization: {
        splitChunks: {
            // include all types of chunks
            chunks: 'all'
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    // hot load  change data not refesh
                    options: {
                        plugins: ["react-hot-loader/babel"]
                    }
                }
            }, {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }, {
                test: /\.css$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader'
                    }
                ]
            }, {
                test: /\.scss$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader'
                    }, {
                        loader: 'sass-loader'
                    }
                ]
            }, {
                test: /\.(jpg|woff)$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        // show progress in cmd
        new webpack.ProgressPlugin((percentage, message) => {
            console.log(`${ (percentage * 100).toFixed()}% ${message}`);
        }),
        new CleanWebpackPlugin(),
        // hot load  change data not refesh
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebPackPlugin({template: "./src/index.html", filename: "./index.html"})
    ],
    devServer: {
        hot: true
    }
};