var gulp          = require('gulp'),
	sass          = require('gulp-sass'),
	browserSync   = require('browser-sync');

gulp.task('sass',function(){
	return gulp.src('app/sass/style.sass')
			   .pipe(sass())
			   .pipe(gulp.dest('app/css'))
			   .pipe(browserSync.reload({stream:true}));
});

gulp.task('watch',['bs','sass'],function(){
	gulp.watch('app/sass/style.sass',['sass']);
});

gulp.task('bs',function(){
	browserSync({
		server: {baseDir:'app'},
		notyfy: false
	});
});