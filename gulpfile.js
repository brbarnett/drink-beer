var gulp = require('gulp');
var jshint = require('gulp-jshint');
var webpack = require('gulp-webpack');

var wpConfig = require('./webpack.config');

gulp.task('build', ['html', 'js'], function () {

});

gulp.task('html', buildHtml);
gulp.task('js', buildJs);

gulp.task('watch', function () {
    gulp.watch('src/**/*.html', ['html']);
    gulp.watch(['src/**/*.js', 'src/**/*.jsx'], ['js']);
})

function buildHtml() {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist/'));
}

function buildJs() {
    return gulp.src('src/app.jsx')
        .pipe(jshint({ esversion: 6 }))
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(webpack(wpConfig))
        .pipe(gulp.dest('dist/'));
}