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

function preLoaders() {
  return [
    {
      test: /\.js?$/,
      loader: 'eslint-loader',
      exclude: [/node_modules/]
    }
  ]
}

const handlersBasePath = './src/handlers';

module.exports = {
  entry: {
    hello: `${handlersBasePath}/hello-handler.js`,
    health: `${handlersBasePath}/health-handler.js`
  },
  target: 'node',
  module: {
    preLoaders: preLoaders(),
    loaders: loaders()
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
};