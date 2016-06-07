var path = require('path');
var webpack = require('webpack');
var filename = "app.js";
var plugins = [];

var minify = process.argv.indexOf('--minify') != -1;

if (minify) {
    var filename = "app.min.js";
    plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: './js',
        filename: filename,
    },
    devtool: 'source-map',
    plugins: plugins
};
