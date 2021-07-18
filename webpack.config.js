const path = require('path');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, 'socialNetwork/frontend/src/index.tsx'),
    output: {
        path: path.resolve(__dirname, "socialNetwork/frontend/static/frontend/public/"),
        publicPath: "/static/frontend/public/",
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': path.resolve(__dirname, 'socialNetwork/frontend/src/')
        },
    },
}
