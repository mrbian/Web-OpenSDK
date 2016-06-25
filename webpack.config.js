/**
 * Created by oureda on 5/30/16.
 */
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    entry: './entry.js',
    output : {
        path : './dist',
        filename : 'index.js'
    },
    module : {
        loaders : [
            { test : /\.js$/, exclude : /node_modules/, loader : 'babel-loader'},
            { test : /\.css$/, loader : ExtractTextPlugin.extract("style-loader","css-loader") },
            { test : /\.png$|\.jpg|\.gif$/ , loader : 'file-loader' },
            { test : /\.ttf/, loader : 'file-loader' },
            { test : /\.TTF/, loader : 'file-loader' }
        ]
    },
    plugins : [
        new ExtractTextPlugin("index.css"),
        new LiveReloadPlugin()
    ]
};