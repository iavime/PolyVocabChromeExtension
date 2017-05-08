
const path = require('path');

module.exports = {
  entry: path.join(__dirname, '../src/content_scripts/main.js'),
  output: {
    path: path.join(__dirname, '../build/'),
    publicPath: path.join(__dirname, '../build/'),
    filename: 'content_script.bundle.js',
    sourceMapFilename: '[name].map',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [
          '../node_modules'
        ],
        loader: ['babel-loader']
      }
    ]
  },
  devtool: 'source-map'
}
