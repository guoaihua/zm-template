const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const smp = new SpeedMeasurePlugin();
const threadLoader = require('thread-loader');

threadLoader.warmup({
  // pool options, like passed to loader options
  // must match loader options to boot the correct pool
}, [
  // modules to load
  // can be any module, i. e.
  'cache-loader',
  'babel-loader',
  'sass-loader',
]);


module.exports = {
    mode: 'development',
    entry: {
        app: '/src/index.js'
    },
    module: {
        rules: [
            {
                test: '/\.js$/',
                include: '/src',
                use: 
                [
                    'thread-loader',
                    'cache-loader',
                    'babel-loader'
                ]
            },
            {
                test: /\.scss$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options:{
                            name: '[name].[ext]'
                        }
                    }
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
        open: false,
        host: '0.0.0.0',
        openPage: 'index.html',
        contentBase: [
            path.join(__dirname, "../static"),
            path.join(__dirname, "../template"),
        ]
    },
    plugins:[
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            inject: 'head',
            template: path.resolve(__dirname, '../template/index.html'),
            filename: 'index.html'
        })
    ],
    devtool: 'source-map'
}