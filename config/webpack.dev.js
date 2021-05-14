const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode: 'development',
    entry: {
        app: '/src/index.js'
    },
    module: {
        rules: [
            {
                test: '/\.js$/',
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, '../src')
        },
        extensions: ['.js', '.json']
    },
    devServer: {
        port: 8000,
        hot: true,
        open: true,
        host: '0.0.0.0',
        openPage: 'index.html',
        contentBase: [
            path.join(__dirname, "../static"),
            path.join(__dirname, "../template"),
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            inject: 'head',
            template: path.resolve(__dirname, '../template/index.html'),
            filename: 'index.html'
        })
    ],
    devtool: 'source-map'
}