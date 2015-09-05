var gulp = require("gulp");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var uglifyify = require('uglifyify');
var exorcist = require('exorcist');

module.exports = function() {
	return browserify({
		entries: paths.react_entry,
		debug: true,
		extensions: ['.jsx', 'js']
	})
		.transform(['reactify', { 'es6': true }, 'envify'])
		.transform({ global: true }, 'uglifyify')
		.bundle()
        .pipe(exorcist(paths.map, "/js/bundle.js.map", "/", paths.base))
		.pipe(source('bundle.js'))
		.pipe(gulp.dest(paths.javascript));
};