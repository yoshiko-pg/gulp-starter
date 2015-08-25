var gulp = require('gulp');
var jade = require('gulp-jade');
var less = require('gulp-less');
var plumber = require('gulp-plumber');
var prefixer = require('gulp-autoprefixer');
var coffee = require('gulp-coffee');

gulp.task('jade', function(){
  gulp.src('src/*.jade')
    .pipe(plumber())
    .pipe(jade())
    .pipe(gulp.dest('.'));
});

gulp.task('less', function(){
  gulp.src('src/*.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(prefixer('last 2 version'))
    .pipe(gulp.dest('dest'));
});

gulp.task('coffee', function(){
  gulp.src('src/*.coffee')
    .pipe(plumber())
    .pipe(coffee())
    .pipe(gulp.dest('dest'));
});

gulp.task('default', ['jade', 'less', 'coffee'], function(){
  gulp.watch('src/*.jade', ['jade']);
  gulp.watch('src/*.less', ['less']);
  gulp.watch('src/*.coffee', ['coffee']);
});
