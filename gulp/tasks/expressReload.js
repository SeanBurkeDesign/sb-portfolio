const nodemon = require('nodemon')

function expressReload(callback) {
  let started = false
  return nodemon({
    script: './server/index.js',
    ignore: [
      'gulpfile.babel.js',
      'node_modules'
    ]
  }).on('start', () => {
    if (!started) {
      callback()
      started = true
    }
  })
}

module.exports = {
  expressReload: expressReload
}