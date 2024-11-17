const gulp = require('gulp');
const del = require('del');
const sass = require('gulp-sass')(require('sass'));
const htmlMin = require('gulp-htmlmin');


const paths = {
    styles: {
        src: 'src/sass/**/*.sсss',
        dest: 'dist/css/'
    },
    scripts: {
        src: 'src/scripts/**/*.js',
        dest: 'dist/js/'
    }
};

function clean() {
    return del(['dist']);
};

function styles() {
    return gulp.src(paths.styles.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.styles.dest));
};


exports.clean = clean;  
exports.styles = styles;  