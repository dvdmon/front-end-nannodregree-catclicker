var gulp = require('gulp');
cssnano = require('gulp-cssnano'),
	jshint = require('gulp-jshint'),
	imagemin = require('gulp-imagemin'),
	minify = require('gulp-minify'),
	minifyHtml = require("gulp-minify-html"),
	prettify = require('gulp-html-prettify'),
	beautify = require('gulp-jsbeautify'),
	convertNewline = require("gulp-convert-newline");

	gulp.task('jsLint', function() {
	gulp.src('/**/*.js') // path to your files
		.pipe(jshint())
		.pipe(jshint.reporter()); // Dump results
});

gulp.task('prettifyHTML', function() {
	gulp.src('src/*.html')
		.pipe(prettify({
			indent_char: '	',
			indent_size: 1
		}))
		.pipe(gulp.dest('app/'))
});

gulp.task('prettifyJS', function() {
	gulp.src('src/views/js/*.js')
		.pipe(beautify({
			indent_char: '	',
			indent_size: 1
		}))
		.pipe(gulp.dest('app/views/js/'));
});

gulp.task("crlfHtml", function() {
    return gulp.src("src/*.html")
        .pipe(convertNewline({
            newline: "crlf"
        }))
        .pipe(gulp.dest("app/"));
});

gulp.task("crlfJs", function() {
    return gulp.src("src/js/*.js")
        .pipe(convertNewline({
            newline: "crlf"
        }))
        .pipe(gulp.dest("app/"));
});

gulp.task("crlfCss", function() {
    return gulp.src("src/css/*.css")
        .pipe(convertNewline({
            newline: "crlf"
        }))
        .pipe(gulp.dest("app/"));
});




gulp.task('minifyJs', function() {
	gulp.src('src/js/*.js')
		.pipe(minify({
			src: '-debug.js',
			min: '.js'
		}))
		.pipe(gulp.dest('dist/js/'))
});

gulp.task('minifyHTML', function() {
	gulp.src('./src/*.html') // path to your files
		.pipe(minifyHtml())
		.pipe(gulp.dest('dist/'));
});

gulp.task('minifyCss', function() {
	return gulp.src('src/css/*.css')
		.pipe(cssnano())
		.pipe(gulp.dest('./dist/css/'));
});

gulp.task('minifyImages', () =>
	gulp.src('src/img/*')
	.pipe(imagemin())
	.pipe(gulp.dest('dist/img/'))
);





gulp.task('prettifyGulpJS', function() {
	gulp.src('gulpfile.js')
		.pipe(beautify({
			indent_char: '	',
			indent_size: 1
		}))
		.pipe(gulp.dest('./'));
});