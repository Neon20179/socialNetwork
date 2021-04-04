const path = require('path');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, 'socialNetwork/frontend/src/index.js'),
    output: {
        path: path.resolve(__dirname, "socialNetwork/frontend/static/frontend/public/"),
        publicPath: "/static/frontend/public/",
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: { presets: ["@babel/env"] }
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
}
