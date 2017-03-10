var gulp = require('gulp');


var bump = require('gulp-bump');

// --build major|minor|patch
var build = gulp.env.build || 'patch';

gulp.task('default', function() {
    gulp.src(['./package.json', './pkg'])
        .pipe(bump({
            type: build
        }))
        .pipe(gulp.dest('./'));
});
