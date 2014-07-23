var gulp      = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('default', function() {
  var conf = { port: 8030,
               livereload: true,
               directoryListing: true };
  gulp.src('app').pipe(webserver(conf));
});
