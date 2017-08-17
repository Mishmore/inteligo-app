var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var addsrc = require('gulp-add-src');

var config = {
  source: './src/',
  dist: './public/'
};

var paths = {
    assets: "assets/",
    html: "**/*.html",
    js: "js/**/*.js",
    sass: "scss/**/*.scss",
    jquery: "js/vendor/jquery-3.2.1.min.js",
    bootstrapJs: "js/vendor/bootstrap.min.js",
    bootstrapCss: "css/vendor/bootstrap.min.css",
    font: "css/vendor/Arial.eot",
    mainSass: "scss/main.scss",
    mainJS: "js/app.js"
};

var sources = {
    assets: config.source + paths.assets,
    html: config.source + paths.html,
    sass: config.source + paths.assets + paths.sass,
    js: config.source + paths.assets + paths.js,
    jquery: config.source + paths.assets + paths.jquery,
    bootstrapJs: config.source + paths.assets + paths.bootstrapJs,
    bootstrapCss: config.source + paths.assets + paths.bootstrapCss,
    font: config.source + paths.assets + paths.font,
    rootSass: config.source + paths.assets + paths.mainSass,
    rootJS: config.source + paths.assets + paths.mainJS
};

//gulp.task('icons', function() {
//  gulp.src(sources.assets + 'icons/**/*').pipe(gulp.dest(config.dist + paths.assets + 'icons'));
//});

gulp.task('html', function() {
    gulp.src(sources.html).pipe(gulp.dest(config.dist));
});

gulp.task('img', function() {
 gulp.src(sources.assets + 'img/**/*').pipe(gulp.dest(config.dist + paths.assets + 'img'));
});

gulp.task('sass', function() {
    gulp.src(sources.rootSass)
        .pipe(sass({ outputStyle: "compressed" }).on("Error", sass.logError))
        .pipe(gulp.dest(config.dist + paths.assets +
            "css"));
});

gulp.task('js', function() {
    return gulp.src([sources.assets + "js/vendor/bootstrap.min.js", sources.assets + "js/utils/*.js", sources.assets + "js/components/*.js", sources.rootJS])
        .pipe(concat('app.js'))
        .pipe(browserify())
        .pipe(rename("bundle.js"))
        .pipe(addsrc(sources.jquery))
        .pipe(gulp.dest(config.dist + paths.assets + "js"))
});
gulp.task('css', function() {
    gulp.src(sources.bootstrapCss).pipe(gulp.dest(config.dist + paths.assets + "css"));
});
gulp.task('font', function() {
    gulp.src(sources.font).pipe(gulp.dest(config.dist + paths.assets + "css"));
});

gulp.task('sass-watch', ["sass"], function(done) {
    browserSync.reload();
    done();
});

gulp.task('js-watch', ["js"], function(done) {
    browserSync.reload();
    done();
});

gulp.task('html-watch', ["html"], function(done) {
    browserSync.reload();
    done();
});

gulp.task('start', ['html', 'sass', 'css', 'js', 'img']);


gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: config.dist
        }
    });
    gulp.watch(sources.html, ["html-watch"]);
    gulp.watch(sources.sass, ["sass-watch"]);
    gulp.watch(sources.js, ["js-watch"]);
});

gulp.task("watcher", () => {
  gulp.watch(sources.html, ["html-watch"]);
  gulp.watch(sources.sass, ["sass-watch"]);
  gulp.watch(sources.js, ["js-watch"]);
});
