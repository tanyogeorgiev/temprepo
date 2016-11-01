// npm i gulp gulp-watch gulp-mocha gulp-batch

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');

gulp.task('default', function() {
      gulp.watch(['lib/**', 'test/**'], ['mocha']);
});

gulp.task('mocha', function() {
    return gulp.src(['test/*.js'], { read: false })
        .pipe(mocha({ reporter: 'mochawesome',
                        useColors: true }))
        .on('error', gutil.log);
});