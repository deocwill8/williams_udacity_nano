// // function defaultTask(cb) {
// //     // place code for your default task here
// //     cb();
// //   }
  
// //   exports.default = defaultTask

// var gulp = require('gulp');
// var browserify = require('gulp-browserify');
// var concat = require('gulp-concat');
// var less = require('gulp-less');
// var refresh = require('gulp-livereload');
// var lr = require('tiny-lr');
// var server = lr();
// var minifyCSS = require('gulp-minify-css');
// var embedlr = require('gulp-embedlr');
// var browserSync = require("browser-sync").create();

// gulp.task('scripts', function() {
//     gulp.src(['app/js/*.js'])
//         .pipe(browserify())
//         .pipe(concat('dest.js'))
//         .pipe(gulp.dest('dist/build'))
//         .pipe(refresh(server))
// })

// gulp.task('styles', function() {
//     gulp.src(['app/css/style.css'])
//         .pipe(minifyCSS())
//         .pipe(gulp.dest('dist/build'))
//         .pipe(refresh(server))
// })

// gulp.task('html', function() {
//     gulp.src("app/*.html")
//         .pipe(embedlr())
//         .pipe(gulp.dest('dist/'))
//         .pipe(refresh(server));
// })

// gulp.task('default', function() {
//     gulp.run('lr-server', 'scripts', 'styles', 'html');

//     gulp.watch('app/src/**', function(event) {
//         gulp.run('scripts');
//     })

//     gulp.watch('app/css/**', function(event) {
//         gulp.run('styles');
//     })

//     gulp.watch('app/**/*.html', function(event) {
//         gulp.run('html');
//     })
// })