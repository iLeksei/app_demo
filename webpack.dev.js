const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

console.log(path.resolve(__dirname, 'dist'))

module.exports = {
    mode: 'development',
    entry: "./src/index.tsx",
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: path.join(''),
    },
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                        ],
                    },
                },
            },
            {
                test: /\.(scss|sass|css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(jpg|jpeg|gif)$/,
                type: "asset/resource",
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                    }
                }
            },
            {
                test: /\.(svg|png)$/,
                use: ["url-loader"]
            }
        ],
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx"],
        modules: [
            path.join(__dirname, "node_modules"),
            path.join(__dirname, "src"),
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "template.html"),
            filename: "index.html",
            inject: "body",
            cache: false,
        }),
        // new webpack.HotModuleReplacementPlugin(),
    ],
    optimization: {
        concatenateModules: true,
        minimize: true,
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    filename: 'dependencies.bundle.js',
                    chunks: 'all'
                }
            },
        },
        minimizer: []
    },
    // watch: true,
    devServer: {
        devMiddleware: {
            writeToDisk: true
        },
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        historyApiFallback: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS, PATCH",
            "Access-Control-Allow-Headers": "X-Requested-With, origin, content-type, Authorization",
        },
        hot: true,
        // contentBase: path.join(__dirname + "public"),
        compress: true,
        port: 3000,
        allowedHosts: [
            'localhost:8882',
            "http://127.0.0.1:8080",
            "http://127.0.0.1:1414"
        ]
    },
};