/**
 * Created by prajwal on 1/2/2017.
 */

'use strict';

var gulp        = require('gulp'),
	connect     = require('gulp-connect'), // to run the local dev server
	open        = require('gulp-open'), // to open a url in the web browser
	browserify  = require('browserify'), // bundles js
	reactify    = require('reactify'), // transforms jsx to js
	source      = require('vinyl-source-stream'), // user conventional text streams with gulp
	lint        = require('gulp-eslint'),   // lints js including jsx
	concat      = require('gulp-concat'); // concatinates files


	var config      = {                      // configuration
		connect: {
			root: ['dist'],
			port: '9090',
			base: 'http://localhost',
			livereload: true
		},
		paths: {
			html: './src/*.html',
			dist: './dist',
			js: './src/**/*.jsx',
			mainJs: './src/main.jsx',
			css: [
				'node_modules/bootstrap/dist/css/bootstrap.min.css',
				'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
				'node_modules/toastr/toastr.css'
			]
		}
	};

// start local dev server
gulp.task('connect', function () {
	connect.server(config.connect);
})


gulp.task('open', ['connect'], function () {
   gulp.src('dist/index.html')
		.pipe(open({uri: config.connect.base + ':' + config.connect.port + '/'}));
});

gulp.task('html', function () {
	gulp.src(config.paths.html)
		.pipe(gulp.dest(config.paths.dist))
		.pipe(connect.reload());
});

gulp.task('css', function(){
	gulp.src(config.paths.css)
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('js', function (){
	browserify(config.paths.mainJs)
		.transform(reactify)
		.bundle()
		.on('error', console.error.bind(console))
		.pipe(source('bundle.js'))
		.pipe(gulp.dest(config.paths.dist + '/scripts'))
		.pipe(connect.reload());

});

gulp.task('lint', function(){
	return gulp.src(config.paths.js)
				.pipe( lint({config: 'eslint.config.json'}) )
				.pipe(lint.format());
})

gulp.task('watch', function(){
	gulp.watch(config.paths.html, ['html']);
	gulp.watch(config.paths.js, ['js', 'lint']);
});

gulp.task('default', ['html', 'css', 'js', 'lint', 'open', 'watch']);

