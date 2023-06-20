// Gulp file: we run on CLI using Node.js, to create and minify files

// Initialize modules (import anpm packages we installed as modules, so we can access their fns)
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const babel = require('gulp-terser');
const browsersync = require('browser-sync').create();

// Use dart-sass for @use
sass.compiler = require('dart-sass');

// Sass task
