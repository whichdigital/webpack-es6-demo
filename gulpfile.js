var path = require('path'),
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    webpack = require('webpack'),
    webpackConfig = require('./webpack.config'),
    WebpackDevServer = require('webpack-dev-server');

gulp.task('webpack-dev-server', function (callback) {
  // Start a webpack-dev-server
  var compiler = webpack(webpackConfig),
      webpackOptions = {
        debug: true,
        devtool: '#source-map',
        watchDelay: 200
      };

  new WebpackDevServer(compiler, webpackOptions)
      .listen(8080, 'localhost', function (err) {
        if (err) throw new gutil.PluginError('webpack-dev-server', err);
        // Server listening
        gutil.log('[webpack-dev-server]', 'http://localhost:8080/webpack-dev-server/index.html');

        // keep the server alive or continue?
        // callback();
      });
});

gulp.task('serve', ['webpack-dev-server']);
gulp.task('default', function() {
  // place code for your default task here
});