import gulp from "gulp";
import autoprefixer from "gulp-autoprefixer";
import dartSass from "sass";
import gulpSass from "gulp-sass";
const sass = gulpSass(dartSass);
import browserS from "browser-sync";
const browserSync = browserS.create();
import sourcemaps from "gulp-sourcemaps";
gulp.task("hello", function (done) {
  console.log("Hello World!");
  done();
});
gulp.task("sass", function () {
  return gulp
    .src("./scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream());
});
gulp.task("watch", function () {
  browserSync.init({
    server: {
      baseDir: "./",
    },
    port: 3000,
  });
  gulp.watch("./scss/**/*.scss", gulp.series("sass"));
  gulp.watch("./**/*.html").on("change", browserSync.reload);
});
