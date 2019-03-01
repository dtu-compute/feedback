'use strict';

const gulp = require("gulp");
const ts = require("gulp-typescript");
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const DIST='dist/';

sass.compiler = require('node-sass');


gulp.task('sass', function () {
  return gulp.src('./lib/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(DIST));
});

gulp.task("build-ts", function () {
    var tsResult = gulp.src("index.ts")
        .pipe(ts({
              noImplicitAny: true,
              module: 'amd',
              out: "feedback.js"
        }));
    return tsResult.js.pipe(gulp.dest(DIST));
});


gulp.task("default", gulp.parallel('build-ts', 'sass'));
