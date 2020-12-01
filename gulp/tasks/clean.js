const del = require('del')

function cleanBuild() {
  return del(['build/**/*'])
}

function cleanDev() {
  return del(['build/app.built.js'])
}

module.exports = {
  cleanBuild: cleanBuild,
  cleanDev: cleanDev
}