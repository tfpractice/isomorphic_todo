var path = require('path');
var webpack = require('webpack');

module.exports = { entry: [
    './client',
  ],
  resolve: { modulesDirectories: ['node_modules', 'imports'],
    extensions: ['', '.js', '.jsx'], },
  output: { path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/', },
  module: { loaders: [{ test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: [ 'babel' ], },], },
  plugins: [
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: '"production"', }, }),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false, }, }),
  ],
  node: { fs: 'empty',
    net: 'mock',
    tls: 'mock',
    dns: 'mock',
    net: 'mock', }, };
