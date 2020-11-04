const gulp = require('gulp')
const gulpData = require('gulp-data')
const plumber = require('gulp-plumber')
const twig = require('gulp-twig')
const path = require('path')
const fs = require('fs')
const config = require('../config').twig

function compile() {
  return gulp
    .src(config.src)
    .pipe(plumber())
    .pipe(gulpData(function(file) {
      let filePath = config.data + path.basename(file.path) + '.json'
      if (fs.existsSync(filePath)) {
        return JSON.parse(fs.readFileSync(filePath))
      }
    }))
    .pipe(twig())
    .pipe(gulp.dest(config.dest))
}

module.exports = {
  compile: compile
}