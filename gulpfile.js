global.paths = {
    base: __dirname,
    tasks: __dirname + '/gulp/tasks',
    source: __dirname + '/src/**/*.jsx',
    react_entry: __dirname + '/src/app.jsx',
    javascript: __dirname + '/public/js/',
    map: __dirname + '/public/js/bundle.js.map'
};

var gulp = require('./gulp')([
    'browserify',
    'watch'
]);

gulp.task('build', ['browserify']);

gulp.task('default', ['watch']);