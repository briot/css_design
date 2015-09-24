var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefix = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');

var scss_src = ['scss/*.scss'];
gulp.task('css', function() {
   return gulp.src(scss_src)
      .pipe(plumber())  // errors are not fatal
      .pipe(sass({outputStyle: 'expanded'}))
      .pipe(autoprefix())
      .pipe(concat('styles.css'))
      .pipe(gulp.dest('dist/'));
});

var js_src = ['js/*.js'];
gulp.task('js', function() {
   return gulp.src(js_src)
      .pipe(plumber()) // errors are not fatal
      .pipe(concat('scripts.js'))
      .pipe(gulp.dest('dist/'));
});

var media_src = ['media/*'];
gulp.task('media', function() {
   return gulp.src(media_src)
      .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['css', 'js', 'media']);
gulp.task('watch', ['default'], function() {
   gulp.watch(scss_src, ['css']);
   gulp.watch(js_src, ['js']);
   gulp.watch(media_src, ['media']);
});
