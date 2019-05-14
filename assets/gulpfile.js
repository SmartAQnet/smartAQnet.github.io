/* 
 * Use `npm install` to install all the dependencies located in package.json 
 * Then `gulp default` to minimize css and images.
 */
const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const shell = require('gulp-shell');
const less = require('gulp-less');
const cssmin = require('gulp-cssmin')
const replace = require('gulp-replace');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var tildeImporter = require('node-sass-tilde-importer');

var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded',
    importer: tildeImporter
};

gulp.task('js', function minijs() {
    return gulp.src(['src/js/partials/**.js'])
        .pipe(concat('main.min.js'))
        //.pipe(uglify())
        .on('error', (err) => {
            console.log(err.toString());
        })
        .pipe(gulp.dest("dist/js/"))
});

gulp.task('css', function sassminicss() {
    return gulp.src(['src/css/bootstrap.scss'])
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cssmin())
        .pipe(gulp.dest("dist/css/"))
});

gulp.task("img", function imging() {
    return gulp.src('static/img/**/*.{png,svg,jpg,gif}')
        .pipe(imagemin())
        .on('error', (err) => {
            console.log(err.toString());
        })
        .pipe(gulp.dest('static/img/'))
});

const watchOptions = {
    usePolling: !!process.env.USE_POLLING
}

gulp.task("default", gulp.series(gulp.parallel('js', 'css', 'img')));
gulp.task('compileAndWatch', gulp.series('default', function watch() {
    console.log("Watching Javascript and CSS files. Restart for minifying additional images.")
    gulp.watch(['js/partials/*', 'js/vendors/*'], watchOptions, gulp.series('js'));
    gulp.watch(['fonts/**/*', 'css/**/*.scss', 'css/vendor/*'], watchOptions, gulp.series('css'));
}));