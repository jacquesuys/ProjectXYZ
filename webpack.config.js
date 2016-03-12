var path = require('path');
var webpack = require('webpack');

var outputPath = __dirname + '/client';

module.exports = {
  entry: './client/init.js',
  output: { path: outputPath, filename: 'bundle.js' },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: [/node_modules/, /typings/, /bower_components/],
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },

};