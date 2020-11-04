const src = './src'
const dest = './dist'

module.exports = {
  app: src,
  build: dest,
  browserSync: {
    ui: false,
    server: false,
    open: false,
    notify: false,
    port: 3000
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
  twig: {
    data: `${src}/json/`,
    dest: dest,
    global: `${src}/json/global.json`,
    pattern: `${src}/*.twig`,
    source: src,
    src: `${src}/*.twig`,
    namespaces: {
      includes: `${src}/includes`
    },
    watchSrc: [
      `${src}/**/*.twig`,
      `${src}/json/*.json`
    ]
  }
}