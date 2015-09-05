var gulp = require("gulp");
var less = require("gulp-less");

module.exports = function() {
    return gulp.src(paths.less)
        .pipe(less())
        .pipe(gulp.dest(paths.stylesheets));
};
