const path = require('path');
module.exports = {
    mode: 'development',
    entry: {
        app: '/src/index.js'
    },
    module: {
        rules: [
            {
                test: '\.js$/',
                use: 'babel-loader'
            }
        ]
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, '../src')
        },
        extensions: ['.js', '.json']
    }
}