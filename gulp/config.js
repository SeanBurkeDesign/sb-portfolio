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
    proxy: 'http://localhost:8080',
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
    src: `${src}/assets/fonts/**`,
    dest: `${dest}/assets/fonts`
  },
  scripts: {
    all: `${src}/**/*.js`,
    src: `${src}/index.js`,
    dest: dest,
  },
  styles: {
    src: [
      `${src}/assets/styles/**/*.{sass,scss}`
    ],
    dest: `${dest}/assets/styles`
  }
}