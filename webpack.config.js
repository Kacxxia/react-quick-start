const path = require('path')
const config = {
    context: __dirname,
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'app'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /jsx?$/,
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'react']
                } 
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        publicPath: '/',
        contentBase: path.resolve(__dirname, 'app')
    },
    devtool: "inline-source-map"
}

module.exports = config
