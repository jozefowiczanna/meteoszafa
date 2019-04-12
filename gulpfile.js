const gulp = require('gulp'),
		log = require('fancy-log'),
		compass = require('gulp-compass'),
		path = require('path'),
		connect = require('gulp-connect'),
		concat = require('gulp-concat');

const sassSources = ['components/sass/style.scss'];
const htmlSources = ['development/*.html'];
const jsFinal = ['development/js/*.js'];

const jsSources = [
	'components/js/_templates.js',
	'components/js/_main.js'
];

gulp.task('compass', function(done){
	gulp.src(sassSources)
	.pipe(compass({
		css: 'development/css',
		sass: path.normalize(__dirname+'/components/sass'),
		style: 'expanded',
		comments: false
	}))
	.on('error', console.log)
	.pipe(gulp.dest('development/css'))
	.pipe(connect.reload());
	done();
});

gulp.task('concat', function(done){
	gulp.src(jsSources)
	.pipe(concat('script.js'))
	.pipe(gulp.dest('development/js'));
	done();
})

gulp.task('html', function(done){
	gulp.src(htmlSources)
	.pipe(connect.reload());
	done();
});

gulp.task('js', function(done){
	gulp.src(jsFinal)
	.pipe(connect.reload());
	done();
});

gulp.task('watch', function(){
	gulp.watch('components/sass/*.scss', gulp.series('compass'));
	gulp.watch(htmlSources, gulp.series('html'));
	gulp.watch(jsSources, gulp.series('concat'));
	gulp.watch(jsFinal, gulp.series('js'));
});

gulp.task('connect', function(){
	connect.server({
		root: 'development',
		livereload: true
	});
});

const seriesFunctions = gulp.series('html', 'concat', 'js', 'compass');
const parallelFunctions = gulp.parallel('connect', 'watch');

gulp.task('all', gulp.series(seriesFunctions, parallelFunctions));
