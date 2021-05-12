
const path = require('path');
const ReplaceInFileWebpackPlugin = require('replace-in-file-webpack-plugin');
const outPutPath = path.resolve(__dirname, '../dist');

module.exports = {
    mode: 'production',
    entry: '/src/index.js',
    output: {
        filename: '[name].js',
        path: outPutPath,
        library: 'zm',
        libraryTarget: "umd",
        libraryExport: 'default'
    },
    module: {
        rules: [
            {
                test: '/\.js$/',
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        //生产打包注意修改define输出，以防与requirejs产生冲突, 范围为出口仓库
        new ReplaceInFileWebpackPlugin([{
            dir: outPutPath,
            rules: [{
                search: /\bdefine\b/ig,
                replace: 'def'
            }]
        }]),
    ],
    resolve: {
        alias: {
            '~': path.resolve(__dirname, '../src')
        },
        extensions: ['.js', '.json']
    }
}