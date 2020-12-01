import gulp from 'gulp'

gulp.task('browserSync', require('./gulp/tasks/browserSync').init)
gulp.task('expressReload', require('./gulp/tasks/expressReload').expressReload)
gulp.task('cleanBuild', require('./gulp/tasks/clean').cleanBuild)
gulp.task('cleanDev', require('./gulp/tasks/clean').cleanDev)
gulp.task('copy:favicon', require('./gulp/tasks/copy').copyFavicon)
gulp.task('copy:images', require('./gulp/tasks/copy').copyImages)
gulp.task('copy:fonts', require('./gulp/tasks/copy').copyFonts)
gulp.task('styles', require('./gulp/tasks/styles').buildStyles)
gulp.task('webpack:build', require('./gulp/tasks/webpack').buildProd)
gulp.task('webpack:dev', require('./gulp/tasks/webpack').buildDev)

gulp.task(
  'build',
  gulp.series(
    'cleanBuild',
    gulp.parallel(
      'webpack:build',
      'styles',
      'copy:favicon',
      'copy:images',
      'copy:fonts'
    )
  )
)
gulp.task('build').description = 'Builds project from the app folder into the build, uglifies the JS, and minifies the CSS'

exports.default = gulp.series(
  'cleanDev',
  'webpack:dev',
    gulp.parallel(
      'styles',
      'copy:favicon',
      'copy:images',
      'copy:fonts'
    ),
  'browserSync',
  'expressReload'
)
