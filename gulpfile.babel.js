import gulp from 'gulp';
import browserSync from 'browser-sync';
import plugins from 'gulp-load-plugins';
const $ = plugins();

gulp.task('html', () => {
  gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
});

gulp.task('css', () => {
  gulp.src('src/style/main.styl')
    .pipe($.plumber())
    .pipe($.stylus())
    .pipe($.autoprefixer('last 2 version'))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('js', () => {
  gulp.src('src/script/**/*.js')
    .pipe($.plumber())
    .pipe($.babel())
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());
});

gulp.task('serve', () => {
  browserSync.init({
    logLevel: "debug",
    server: "./dist",
    open: true,
    port: 3000,
    online: false,
    ui: false,
    scrollProportionally: false
  });
});

gulp.task('default', ['serve', 'html', 'css', 'js'], () => {
  gulp.watch('src/style/**/*.styl', ['css']);
  gulp.watch('src/script/**/*.js', ['js']);
  gulp.watch('src/**/*.html', ['html'])
    .on('change', browserSync.reload);
});
