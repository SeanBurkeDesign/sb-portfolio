import gulp from 'gulp'

gulp.task('browserSync', require('./gulp/tasks/browserSync').init)
gulp.task('clean', require('./gulp/tasks/clean').cleanBuild)
gulp.task('copy:favicon', require('./gulp/tasks/copy').copyFavicon)
gulp.task('copy:images', require('./gulp/tasks/copy').copyImages)
gulp.task('copy:fonts', require('./gulp/tasks/copy').copyFonts)
gulp.task('styles', require('./gulp/tasks/styles').buildStyles)
gulp.task('twig', require('./gulp/tasks/twig').compile)
gulp.task('webpack:build', require('./gulp/tasks/webpack').buildProd)
gulp.task('webpack:dev', require('./gulp/tasks/webpack').buildDev)

gulp.task(
  'build',
  gulp.series(
    'clean',
    gulp.parallel(
      'webpack:build',
      'twig',
      'styles',
      'copy:favicon',
      'copy:images',
      'copy:fonts'
    )
  )
)
gulp.task('build').description = 'Builds project from the app folder into the build, uglifies the JS, and minifies the CSS'

exports.default = gulp.series(
  gulp.parallel(
    'webpack:dev',
    'styles',
    'twig',
    'copy:favicon',
    'copy:images',
    'copy:fonts'
  ),
  'browserSync',
)
