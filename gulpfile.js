var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');

gulp.task('jade', function(){
  gulp.src('src/*.jade')
    .pipe($.plumber())
    .pipe($.jade())
    .pipe(gulp.dest('.'))
    .pipe(browserSync.reload({stream: true, once: true}))
    ;
});

gulp.task('stylus', function(){
  gulp.src('src/*.stylus')
    .pipe($.plumber())
    .pipe($.stylus())
    .pipe($.autoprefixer('last 2 version'))
    .pipe(gulp.dest('dest'))
    .pipe(browserSync.reload({stream: true, once: true}))
    ;
});

gulp.task('coffee', function(){
  gulp.src('src/*.coffee')
    .pipe($.plumber())
    .pipe($.coffee())
    .pipe(gulp.dest('dest'))
    .pipe(browserSync.reload({stream: true, once: true}))
    ;
});

gulp.task('serve', function(){
  browserSync.init(null, {
    server: {baseDir: './'}
  });
});

gulp.task('reload', function(){
  browserSync.reload();
});

  gulp.task('default', ['serve', 'jade', 'stylus', 'coffee'], function(){
  gulp.watch('src/*.jade', ['jade']);
  gulp.watch('src/*.stylus', ['stylus']);
  gulp.watch('src/*.coffee', ['coffee']);
});
