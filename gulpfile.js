'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var plumber = require('gulp-plumber');
var beautify = require('gulp-beautify');

gulp.task('lint', function() {
  gulp.src(['src/*.js'])
    .pipe(plumber({
      errorHandler: function(error) {
        console.error(error.plugin + '\n' + error.message);
      }
    }))
    .pipe(beautify({indent_size: 2}))
    .pipe(eslint({ useEslintrc: true }))
    .pipe(eslint.format())
    .pipe(eslint.failOnError())
    .pipe(gulp.dest('src/'))
    .pipe(plumber.stop());
});
