const src = './app'
const dest = './build'

module.exports = {
  app: src,
  build: dest,
  browserSync: {
    ui: false,
    server: false,
    open: false,
    notify: false,
    port: 8000
  },
  favicon: {
    src: `${src}/favicon*.*`,
    dest: dest
  },
  images: {
    src: `${src}/images/**`,
    dest: `${dest}/images`
  },
  fonts: {
    src: `${src}/fonts/**`,
    dest: `${dest}/fonts`
  },
  scripts: {
    all: `${src}/**/*.js`,
    src: `${src}/index.js`,
    dest: dest,
  },
  styles: {
    src: [
      `${src}/styles/**/*.{sass,scss}`
    ],
    dest: `${dest}/styles`
  },
  }
}