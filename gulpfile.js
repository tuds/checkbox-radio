var gulp = require("gulp");
var sass = require("gulp-sass");
var browser_sync = require('browser-sync').create();

// Copy html
gulp.task('html', function(){
	gulp.src(['./index.html', './html/*.html'])
	.pipe(gulp.dest('./dist'))
	.pipe(browser_sync.stream());
});

// Copy fonts
gulp.task('fonts', function(){
    gulp.src('./fonts/**')
    .pipe(gulp.dest('./dist/fonts'))
    .pipe(browser_sync.stream());
});

// Run Sass
gulp.task('sass', function(){
	gulp.src('./sass/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('./dist/css'))
	.pipe(browser_sync.stream());
});

// Copy images
gulp.task('image', function(){
	gulp.src('./images/*')
	.pipe(gulp.dest('./dist/images'))
	.pipe(browser_sync.stream());
});

// Run browser sync
gulp.task('browser_sync', ['html', 'sass', 'image'], function(){
	browser_sync.init({
		server: {
			baseDir: "./dist"
		}
	});
	gulp.watch(['./index.html', './html/*.html'], ['html']);
	gulp.watch('./sass/*.scss', ['sass']);
	gulp.watch('./images/*', ['image']);
});

// Run all task
gulp.task('default', ['browser_sync', 'fonts']);
