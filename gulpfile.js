var gulp = require('gulp');
var webpack = require('gulp-webpack');

var wpConfig = require('./webpack.config');

gulp.task('build', ['html', 'js'], function () {

});

gulp.task('html', buildHtml);
gulp.task('js', buildJs);

gulp.task('watch', function () {
    gulp.watch('src/**/*.html', ['html']);
    gulp.watch(['src/**/*.js'], ['js']);
})

function buildHtml() {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist/'));
}

function buildJs() {
    return gulp.src('src/index.js')
        .pipe(webpack(wpConfig))
        .pipe(gulp.dest('dist/'));
}