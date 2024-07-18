const { src, dest, watch, series, parallel } = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const postcss = require('gulp-postcss');
const avif = require('gulp-avif');
const webp = require('gulp-webp');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const svgSprite = require('gulp-svg-sprite');
const del = require('del');


function toAvif() {
  return src('app/images/src/**/*.{jpg,jpeg,png}', {
      encoding: false
    })
    .pipe(avif())
    .pipe(newer('app/images'))
    .pipe(dest('app/images'))
}

function toWebp() {
  return src('app/images/src/**/*.{jpg,jpeg,png}', {
      encoding: false
    })
    .pipe(webp())
    .pipe(newer('app/images'))
    .pipe(dest('app/images'));
}

function minimizeImg() {
  return src('app/images/src/**/*.*', {
      encoding: false
    })
    .pipe(imagemin())
    .pipe(dest('app/images'));
}


function sprite () {
  return src('app/images/*.svg')
  .pipe(svgSprite({
    mode: {
      stack: {
        sprite: '../sprite.svg',
        inline: true,
        example: true
      }
    }
  }))
  .pipe(dest('app/images'))
}

function styles() {
  const plugins = [
    require('autoprefixer')({ overrideBrowserslist: ['last 10 versions'] }),
    require('cssnano')()
  ];
  return src('app/css/*.css')
    .pipe(postcss(plugins))
    .pipe(concat('style.min.css'))
    .pipe(dest('app/css'))
}

function scripts() {
  return src('app/js/*.js')
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'))
}

function building() {
  return src([
    'app/css/style.min.css',
    'app/js/main.min.js',
    'app/images/sprite.svg',
    'app/images/**/*.{jpg,jpeg,png,webp,avif}',
    '!app/images/src/**/*.*',
    '!app/images/stack/**/*.*',
  ], { base: 'app', 
    encoding: false
  })
    .pipe(dest('dist'));
}

function cleanDist() {
  return del('dist')
}

exports.styles = styles;
exports.scripts = scripts;
exports.sprite = sprite;
exports.building = building;
exports.cleanDist = cleanDist;
exports.minimizeImg = minimizeImg;
exports.toAvif = toAvif;
exports.toWebp = toWebp;


exports.images = series(minimizeImg, toAvif, toWebp, sprite);
exports.build = series(cleanDist, building);
exports.default = series(styles, scripts, exports.images);