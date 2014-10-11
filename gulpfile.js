var gulp = require('gulp');
var run = require('gulp-run');
var taskListing = require('gulp-task-listing');
var mainBowerFiles = require('main-bower-files');
var del = require('del');
var sass = require('gulp-sass');

(function() {
  var clientLibraryDir = "./public/lib";

  gulp.task('default', taskListing);

  gulp.task('cleanLibraries', function() {
    del([clientLibraryDir], function(err) {
      if(err)
        throw err;
      console.log(clientLibraryDir + " cleaned");
    });
  });

  gulp.task('regenerateLibraries', ['cleanLibraries'], function() {
    run('npm install').exec();
    run('bower install').exec();

    gulp.src(mainBowerFiles())
      .pipe(gulp.dest(clientLibraryDir));
  });

  gulp.task('sass', function() {
    gulp.src('./resource/scss/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('./public/css'));
  });

})();
