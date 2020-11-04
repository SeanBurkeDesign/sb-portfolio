const del = require('del')

function cleanBuild() {
  return del(['dist/**/*'])
}

module.exports = {
  cleanBuild: cleanBuild
}