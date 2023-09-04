"use strict";

const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const pug = require('gulp-pug');
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const server = require("browser-sync").create();
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const svgstore = require("gulp-svgstore");
const del = require("del");
const uglify = require('gulp-uglify-es').default;
const posthtml = require("gulp-posthtml");
const include = require("posthtml-include");
const rigger = require('gulp-rigger');
const webp = require("gulp-webp");
const babel = require("gulp-babel");

gulp.task("clean", function () {
    return del("build");
});

gulp.task("copy", function () {
    return gulp.src([
            "source/fonts/**/*.{woff,woff2}",
            "source/favicon.ico"
        ], { base: "source" })
        .pipe(gulp.dest("build"));
});

gulp.task("pug", function () {
    return gulp.src("source/*.pug")
        .pipe(pug({ pretty: true }))
        .pipe(posthtml([
            include()
        ]))
        .pipe(gulp.dest("build"));
});

gulp.task("css", function () {
    return gulp.src("source/sass/style.scss")
        .pipe(plumber())
        .pipe(sourcemap.init())
        .pipe(sass())
        .pipe(postcss([
            autoprefixer({grid:true})
        ]))
        .pipe(csso())
        .pipe(rename("style.min.css"))
        .pipe(sourcemap.write("."))
        .pipe(gulp.dest("build/css"))
        .pipe(server.stream());
});

gulp.task("sprite", function () {
    return gulp.src("source/img/icon-*.svg")
        .pipe(svgstore({
            inlineSvg: true
        }))
        .pipe(rename("sprite.svg"))
        .pipe(gulp.dest("build/img/icons"));
});

gulp.task("js", function () {
    return gulp.src("source/js/script.js", {allowEmpty: true})
        .pipe(rigger())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest("build/js"));
});

gulp.task("images", function () {
    return gulp.src("source/img/**/*.{jpg,png,svg,webp}")
        .pipe(imagemin([
            imagemin.svgo()
        ]))
        .pipe(gulp.dest("build/img"));
});

gulp.task("imgmin", function () {
    return gulp.src("source/img/**/*.{jpg,png,svg}")
        .pipe(imagemin([
            imagemin.optipng({optimizationLevel: 3}),
            imagemin.jpegtran({progressive: true})
        ]))
        .pipe(gulp.dest("build/img"));
});

gulp.task("webp", function () {
  return gulp.src("source/img/**/*.{png,jpg}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("source/img"));
});


gulp.task("server", function () {
    server.init({
        server: "build/",
        notify: false,
        open: true,
        cors: true,
        ui: false
    });

    gulp.watch("source/**/*.pug", gulp.series("pug", "refresh"));
    gulp.watch("source/sass/**/*.{scss,sass}", gulp.series("css"));
    gulp.watch("source/img/**/*.{jpg,png,svg}", gulp.series("images", "refresh"));
    gulp.watch("source/img/*.svg", gulp.series("sprite", "pug", "refresh"));
    gulp.watch("source/js/**/*.js", gulp.series("js", "refresh"));
});

gulp.task("refresh", function (done) {
    server.reload();
    done();
});

gulp.task("build", gulp.series("clean", "copy", "sprite", "pug", "css", "js", "images"));
gulp.task("start", gulp.series("build", "server"));
