const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/App.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    mode: process.env.NODE_ENV === "prod" ? "production" : "development",
    /**
     * 1. Transformation - Diffrent dilects of JS can be transformed using dedicated transformers like babel
     * 2. Loaders - Can include stylesheets, css-loader to include external css and style-loader to inject as style tag
     * 3. Static assets - Can include inline images or supports direct imports within js files.
     */
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    // Plugins play part post transformation and loading happens.
    // Its use to shape up the final bundle.
    plugins: [
        // To generate html file in bundle based on template
        new HtmlWebpackPlugin({
            title: 'Custom template',
            template: './src/index.html'
        })],
}