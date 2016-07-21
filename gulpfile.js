var gulp = require('gulp'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	cssmin = require('gulp-cssmin');

gulp.task('sass', function(){
	return gulp.src('./app/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('css/style.css'))
		.pipe(cssmin())
		.pipe(gulp.dest('./dist/app'));
});

gulp.task('sass:w', function(){
	gulp.watch('app/**/*.scss', ['sass'])
});