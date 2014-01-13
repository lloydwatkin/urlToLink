var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

gulp.task('compress', function () {
    "use strict";
    gulp.src('./jquery.urlToLink.js')
        .pipe(uglify())
        .pipe(rename('jquery.urlToLink.min.js'))
        .pipe(gulp.dest('./'));
});

gulp.task('default', function () {
    "use strict";
    gulp.run('compress');
})
