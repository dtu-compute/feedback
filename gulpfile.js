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

const tsProj = ts.createProject('tsconfig.json');

gulp.task('build-ts', () => {
    return gulp.src('src/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(tsProj())
       // .pipe(babel())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(DIST));
});

gulp.task("default", gulp.parallel('build-ts', 'sass'));
