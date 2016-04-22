var gulp = require('gulp');
var webpack = require('gulp-webpack');

var wpConfig = require('./webpack.config');

gulp.task('build', function(){
    return gulp.src('app/main.js')
    .pipe(webpack(wpConfig))
    .pipe(gulp.dest('dist/'));
});