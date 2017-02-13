var gulp 	= require('gulp'),
	watch	= require('gulp-watch');

gulp.task('default', function() {
	console.log("Hello World");
});

gulp.task('watch', function(){
	watch('./app/index.html', function(){
		gulp.start('default');
	});

	watch('./app/assets/styles/**/*.css', function() {
		gulp.start(console.log("dummy text"))
	});
});

