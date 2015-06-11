var path = require('path');

module.exports = {
  entry: './app/app.js',
  output: {
    path: __dirname,
    publicPath: '/public/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: path.join(__dirname, 'app'),
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: __dirname,
    noInfo: false,
    colors: true
  }
};