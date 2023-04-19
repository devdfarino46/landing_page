const {src, dest, series, parallel, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const jade = require('gulp-jade');
const cleanCSS = require('gulp-clean-css')


function browsersync() {
    browserSync.init({
        server: {
            baseDir: "dist/"
        },
        open: false
    });

    watch("src/**/*.jade", templates);
    watch("src/scss/**/*.scss", styles);
}

function styles() {
    return src("src/scss/**/*.scss")
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS({
            compatibility: 'ie9'
        }))
        .pipe(dest("dist/css/"))
        .pipe(browserSync.stream());
}

function templates() {
    return src("src/**/*.jade")
        .pipe(jade({
            
        }))
        .pipe(dest("dist/"))
        .pipe(browserSync.stream());
}

exports.styles = series(styles);
exports.templates = series(templates)

exports.default = series(styles, templates, browsersync);