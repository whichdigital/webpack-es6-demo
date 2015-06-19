var path = require('path');
var gulp = require('gulp');
var bg = require('gulp-bg');
var webpack = require('webpack');
var WebpackDevServer = require('./build/dev');
// var WebpackProdServer = require('./build/prod');
var yargs = require('yargs');

var args = yargs
    .alias('p', 'production')
    .argv;

gulp.task('env', function() {
  process.env.NODE_ENV = args.production ? 'production' : 'development';
});

gulp.task('build', ['build-webpack']);
gulp.task('build-webpack', [args.production ? 'build-webpack-production' : 'build-webpack-dev']);
//gulp.task('build-webpack-production', new WebpackProdServer());
gulp.task('build-webpack-dev', new WebpackDevServer());

gulp.task('serve', ['env', 'build'], bg('node', 'server'));
gulp.task('default', ['serve']);