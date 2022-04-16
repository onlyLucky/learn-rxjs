/*
 * @Author: fg
 * @Date: 2022-04-16 21:24:39
 * @LastEditors: fg
 * @LastEditTime: 2022-04-16 23:19:55
 * @Description: gulp config
 */

const gulp = require('gulp')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const tsify = require('tsify')
const paths = {
  pages: ['src/*.html']
}

gulp.task('copy-html', function () {
  return gulp.src(paths.pages)
    .pipe(gulp.dest('dist'))
})

gulp.task('default', ['copy-html'], function () {
  return browserify({
    basedir: '.',
    debug: true,
    entries: ['src/main.ts'],
    cache: {},
    packageCache: {}
  })
    .plugin(tsify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'))
})
