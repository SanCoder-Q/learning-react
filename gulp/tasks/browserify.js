var gulp = require("gulp");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

var paths = {
	source: __base + '/src/app.jsx',
	javascript: __base + '/public/js/',
    map: __base + '/public/js/bundle.js.map'
};

module.exports = function() {
	return browserify({
		entries: paths.source,
		debug: true,
		extensions: ['.jsx', 'js']
	})
		.transform(['reactify', { 'es6': true }, 'envify'])
		.bundle()
		.pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(paths.javascript));
};