var path = require('path');
var gulp = require('gulp');
var bg = require('gulp-bg');
var webpack = require('webpack');
var WebpackDevServer = require('./webpack/dev');
var yargs = require('yargs');

var args = yargs
    .alias('p', 'production')
    .argv;

gulp.task('env', function() {
  process.env.NODE_ENV = args.production ? 'production' : 'development';
});

gulp.task('build', ['build-webpack']);
gulp.task('build-webpack', [args.production ? 'build-webpack-production' : 'build-webpack-dev']);
//gulp.task('build-webpack-production', webpackBuild(makeWebpackConfig(false)));
gulp.task('build-webpack-dev', new WebpackDevServer());

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('server', ['env', 'build'], bg('node', 'server'));