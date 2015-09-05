var gulp = require("gulp");

module.exports = function() {
    gulp.watch(paths.source, ['browserify']);
    gulp.watch(paths.less, ['less']);
};