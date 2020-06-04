var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefix = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var postcss = require('gulp-postcss');

var fa_fonts = 'node_modules/font-awesome/fonts';

var postcss_src = ['postcss/*'];
function do_postcss() {
   return gulp.src(postcss_src)
      .pipe(postcss([require('postcss-write-svg')()
                    ]))
      .pipe(concat('postcss.css'))
      .pipe(gulp.dest('dist/'));
}

var scss_src = ['scss/*.scss'];
function do_css() {
   return gulp.src(scss_src)
      .pipe(plumber())  // errors are not fatal
      .pipe(sass({outputStyle: 'expanded'}))
      .pipe(autoprefix())
      .pipe(concat('styles.css'))
      .pipe(gulp.dest('dist/'));
}

var js_src = ['js/*.js'];
function do_js() {
   return gulp.src(js_src)
      .pipe(plumber()) // errors are not fatal
      .pipe(concat('scripts.js'))
      .pipe(gulp.dest('dist/'));
}

var media_src = ['media/*'];
function do_media() {
   return gulp.src(media_src.concat([fa_fonts + '/*']))
      .pipe(gulp.dest('dist/'));
}

gulp.task('postcss', do_postcss);
gulp.task('css', do_css);
gulp.task('js', do_js);
gulp.task('media', do_media);

//gulp.task('default', ['css', 'js', 'media']);
gulp.task('watch', function() {
   gulp.watch(scss_src, do_css);
   gulp.watch(postcss_src, do_postcss);
   gulp.watch(js_src, do_js);
   gulp.watch(media_src, do_media);
});
