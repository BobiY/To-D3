const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + '/dist',
        filename: "bundle.js"
    },
    devServer: {
        contentBase: __dirname + '/dist',
        compress: true,
        port: 9000,
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "My App",
            filename: "index.html",
            template: "index.html"
        })
    ]
}