/* @flow weak */

'use strict';

var gutil = require('gulp-util');
var webpack = require('webpack');
var webpackConfig = require('./config/dev');
var WebpackDevServer = require('webpack-dev-server');

module.exports = function() {
  return function(callback) {
    // Start a webpack-dev-server
    var compiler = webpack(webpackConfig),
        webpackOptions = {
          debug: true,
          devtool: '#source-map',
          watchDelay: 200,
          // reload component(s)
          // hot: true,
          quiet: false
        };

    new WebpackDevServer(compiler, webpackOptions)
        .listen(8080, 'localhost', function (err) {
          if (err) throw new gutil.PluginError('webpack-dev-server', err);
          // Server listening
          gutil.log('[webpack-dev-server]', 'http://localhost:8080/webpack-dev-server/index.html');

          // keep the server alive or continue?
          // callback();
        });
  };
};