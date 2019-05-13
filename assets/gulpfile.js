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

gulp.task("serve", function serving(done) {
    console.log('... not working at the moment try \ncd .. && bundle exec jekyll serve --watch\n',
                'then go to \nhttp://localhost:4000/Type-on-Strap/');
    shell.task([
        "python -m webbrowser 'http://localhost:4000/Type-on-Strap/'; cd .. && bundle exec jekyll serve --watch"
    ]);
    done();
});

gulp.task("default", gulp.series(gulp.parallel('js', 'css', 'img')));
