var gulp = require("gulp");

module.exports = function() {
    gulp.watch(paths.source, ['browserify']);
};