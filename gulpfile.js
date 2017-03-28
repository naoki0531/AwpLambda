'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const plumber = require('gulp-plumber');
const beautify = require('gulp-beautify');
const mocha = require('gulp-mocha');

gulp.task('lint', function() {
  gulp.src(['src/*.js'])
    .pipe(plumber({
      errorHandler: function(error) {
        console.error(error.plugin + '\n' + error.message);
      }
    }))
    .pipe(beautify())
    .pipe(eslint({ useEslintrc: true }))
    .pipe(eslint.format())
    .pipe(eslint.failOnError())
    .pipe(gulp.dest('src/'))
    .pipe(plumber.stop());
});

gulp.task('mocha', () =>
  gulp.src(['test/*.js'], {read: false})
    .pipe(plumber({
      // テスト失敗の際に吐かれるエラーはmochaが出力する内容と同じ為握りつぶす
      errorHandler: (error) => {}
    }))
    .pipe(mocha())
    .pipe(plumber.stop())
);