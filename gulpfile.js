var { src, dest } = require('gulp');
var concatCss = require('gulp-concat-css');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');

function bundleCss() {
    return src('./src/css/**/*.css')
        .pipe(concatCss('style.css'))
        .pipe(autoprefixer({grid: 'autoplace'}))
        .pipe(cleanCSS())
        .pipe(dest('./build/'));
}

function bundleHtml() {
    return src('./src/index.html')
        .pipe(dest('./build/'));
}
  
exports.css = bundleCss;
exports.html = bundleHtml;