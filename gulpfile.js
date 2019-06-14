var gulp = require('gulp');
var webserver = require('gulp-webserver');
var browserSync = require('browser-sync').create();

browserSync.init({
  watch: true,
  
    baseDir: "app",
    index: "index.html"
});


 
gulp.task('webserver', function() {
    gulp.src('root')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});


gulp.task('browser-sync', function() {
  browserSync.init({
    proxy: "192.168.33.21"
  });
});
