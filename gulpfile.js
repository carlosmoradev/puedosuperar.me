const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyHtml = require('gulp-minify-html');

gulp.task('default', ['sass', 'minifyHtml']); //Desde aqui llamo a todas las tareas desde default

gulp.task('sass', function(){
    return gulp.src('scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'));
});

gulp.task('minifyHtml', function(){
    gulp.src('app/origen.html')
    .pipe(minifyHtml())
    .pipe(gulp.dest('app'))
});