var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('connect', function() {
  $.connect.server({
    root: 'app',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe($.connect.reload());
});

gulp.task('scripts', function () {
  gulp.src('./app/scripts/**/*.js')
    .pipe($.connect.reload());
});


gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
  gulp.watch(['./app/scripts/**/*.js'], ['scripts']);
  gulp.watch(['./app/scripts/**/**/*.js'], ['scripts']);
});

gulp.task('default', ['connect', 'watch']);