var gulp = require('gulp');
var jshint = require('gulp-jshint');
var webpack = require('gulp-webpack');

var wpConfig = require('./webpack.config');

gulp.task('build', ['html', 'js'], function(){
    
});

gulp.task('html', buildHtml);
gulp.task('js', buildJs);

gulp.task('watch', function(){
    gulp.watch('app/**/*.html', ['html']);
    gulp.watch('app/**/*.jsx', ['js']);
})

function buildHtml(){
    return gulp.src('app/**/*.html')
    .pipe(gulp.dest('dist/'));
}

function buildJs(){
    return gulp.src('app/main.js')
    .pipe(jshint({ esversion: 6 }))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(webpack(wpConfig))    
    .pipe(gulp.dest('dist/'));
}