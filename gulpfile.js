var gulp = require('gulp'),
    notify = require('gulp-notify'),
    stylus = require('gulp-stylus'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

gulp.task('stylus', function () {
    return gulp.src('./stylus/main.styl')
      .pipe(stylus())
      .pipe(gulp.dest('dist/css'))
      .pipe(rename('main.min.css'))
      .pipe(cleanCSS())
      .pipe(gulp.dest("dist/css/"))
      .pipe(notify("CSS successfully compiled and minified"));
});

gulp.task('scripts', function () {
    return gulp.src('js/main.js')
        .pipe(gulp.dest('dist/js/'))
        .pipe(rename('main.min.js'))
        //.pipe(uglify())
        //.pipe(gulp.dest('dist/js/'))
        .pipe(notify("JS successfully minified"));
});

gulp.task('watch', function () {
    gulp.watch('./stylus/*.styl', gulp.series(['stylus']));
    gulp.watch('./js/main.js', gulp.series(['scripts']));
});

gulp.task('default', gulp.series(['stylus', 'scripts', 'watch']));
