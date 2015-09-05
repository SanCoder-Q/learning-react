global.paths = {
    base: __dirname,
    tasks: __dirname + '/gulp/tasks',
    source: __dirname + '/src/**/*.jsx',
    react_entry: __dirname + '/src/app.jsx',
    less: __dirname + '/less/styles.less',
    stylesheets: __dirname + '/public/css/',
    javascript: __dirname + '/public/js/',
    map: __dirname + '/public/js/bundle.js.map'
};

var gulp = require('./gulp')([
    'browserify',
    'less',
    'watch'
]);

gulp.task('build', ['browserify', 'less']);

gulp.task('default', ['watch']);