var webpack = require("webpack");

module.exports = {
    plugins:[
        new webpack.ProvidePlugin({
            "lodash": "lodash"
        })
    ],
    entry: './src/app.ts',
    output: {
        filename: './dist/bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.ts$/,
            loader: 'ts-loader'
        }]
    }
}
