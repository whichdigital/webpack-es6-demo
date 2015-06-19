var path = require('path');

module.exports = {
  entry: './src/client/app.js',
  output: {
    path: __dirname,
    publicPath: '/public/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: path.join(__dirname, '../../src'),
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader']
      }
    ]
  },
  devServer: {
    contentBase: __dirname,
    noInfo: false,
    colors: true
  }
};