'use strict';
let path = require('path');

function loaders() {
  return [{
    test: /\.js$/,
    loaders: ['babel'],
    include: __dirname,
    exclude: /node_modules/,
  }];
}

module.exports = {
  entry: {
    hello: './src/handlers/hello-handler.js',
  },
  target: 'node',
  module: {
    loaders: loaders()
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
};