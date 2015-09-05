global.__base = __dirname;

var gulp = require('./gulp')([
    'browserify'
]);

gulp.task('build', ['browserify']);

gulp.task('default', ['browserify']);