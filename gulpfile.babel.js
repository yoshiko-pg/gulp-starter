import gulp from 'gulp';
import browserSync from 'browser-sync';
import plugins from 'gulp-load-plugins';
const $ = plugins();

gulp.task('html', () => {
  gulp.src('src/**/*.jade')
    .pipe($.plumber())
    .pipe($.jade())
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({stream: true, once: true}));
});

gulp.task('css', () => {
  gulp.src('src/style/**/*.stylus')
    .pipe($.plumber())
    .pipe($.stylus())
    .pipe($.autoprefixer('last 2 version'))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({stream: true, once: true}));
});

gulp.task('js', () => {
  gulp.src('src/script/**/*.js')
    .pipe($.plumber())
    .pipe($.babel())
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.reload({stream: true, once: true}));
});

gulp.task('serve', () => {
  browserSync.init(null, {
    server: {baseDir: './dist'}
  });
});

gulp.task('reload', () => {
  browserSync.reload();
});

gulp.task('default', ['serve', 'html', 'css', 'js'], () => {
  gulp.watch('src/**/*.jade', ['html']);
  gulp.watch('src/style/**/*.stylus', ['css']);
  gulp.watch('src/script/**/*.js', ['js']);
});
