const path = require('path');
const webpack = require('webpack');

module.exports = env => ({
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new webpack.DefinePlugin({
        ENVIRONMENT: JSON.stringify(env.NODE_ENV)
    })]
});
