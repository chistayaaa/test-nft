const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const browsersync = require('browser-sync').create();

gulp.task('sass', function(){
    return gulp.src('src/*.sass')
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('pug', function () {
    return gulp.src('src/*.pug')
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest('dist'));
});

gulp.task('build', gulp.series(gulp.parallel('pug','sass')));


gulp.task('watch', function () {
    gulp.watch('src/**/*.sass', gulp.series('sass'));
    gulp.watch('src/**/*.pug', gulp.series('pug'))
});

gulp.task('serve', function(){
    browsersync.init({
        server: 'dist'
    });

    browsersync.watch('dist/**/*.*').on('change', browsersync.reload);
});

gulp.task('default', gulp.parallel('watch'));

gulp.task('dev', gulp.series('build', gulp.parallel('watch', 'serve')));
