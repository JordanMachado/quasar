var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('connect', function() {
  $.connect.server({
    root: 'app',
    livereload: true
  });
});

gulp.task('html', function () {
  return gulp.src('./app/*.html')
    .pipe($.connect.reload());
});

gulp.task('scripts', function () {
  return gulp.src('./app/scripts/**/*.js')
    .pipe($.connect.reload());
});

gulp.task('compass', function() {

  return  gulp.src('./app/style/scss/*.scss')
      .pipe($.compass({
        css: './app/style/css',
        sass: './app/style/scss/'
        }))
      .pipe(gulp.dest('./app/style/css'))
});


gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
  gulp.watch(['./app/scripts/**/*.js'], ['scripts']);
  gulp.watch(['./app/scripts/**/**/*.js'], ['scripts']);
  gulp.watch(['./app/style/scss/*.scss'], ['compass']);
});

gulp.task('requirejs', function() {
  $.requirejs({
    baseUrl: 'app/scripts/',
    out: 'main.js',
    name:'main',
  shim: {
    'underscore': {
      exports: '_'
    },
    'jquery': {
      exports: '$'
    }
  },
  paths: {
    'underscore': 'bower_components/underscore/underscore',
    'jquery': 'bower_components/jquery/dist/jquery',
    'TweenLite': 'bower_components/gsap/src/uncompressed/TweenLite',
    'TimeLineLite': 'bower_components/gsap/src/uncompressed/TimelineLite',
    'TweenMax': 'bower_components/gsap/src/uncompressed/TweenMax',
    'PIXI': 'bower_components/pixi.js/bin/pixi'
  }
    })
  .pipe(gulp.dest('./dist/script'));
});

/* TODO DIST */

gulp.task('default', ['compass','connect', 'watch']);