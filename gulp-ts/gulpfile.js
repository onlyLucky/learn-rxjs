/*
 * @Author: fg
 * @Date: 2022-04-16 21:24:39
 * @LastEditors: fg
 * @LastEditTime: 2022-04-17 15:03:13
 * @Description: gulp config
 */

const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

gulp.task('default', () => {
  return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest('dist'))
})
