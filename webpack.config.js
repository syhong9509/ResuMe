/**
 * Created by Marlin on 2/24/2017.
 */

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/main/js/app.js',
        app2: './src/main/js/app2.js',
        app3: './src/main/js/app3.js',
        app4: './src/main/js/app4.js',
    },

    output: {
        path: './grails-app/assets/javascripts',
        publicPath: '/assets/',
        filename: '[name].all.js',
    },

    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
};