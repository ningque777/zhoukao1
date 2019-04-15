const image = require('gulp-image');
const gulp = require('gulp');
const css = require('gulp-clean-css');
const js = require('gulp-uglify');


//压缩css
gulp.task('css',()=>{
    gulp.src('css/*.css')
    .pipe(css())
    .pipe(dest(dist))
})
//压缩js
gulp.task('js',()=>{
    gulp.src('js/*.js')
    .pipe(js())
    .pipe(dest(dist))
})
//压缩image
gulp.task('image',()=>{
    gulp.src('images/*.png')
    .pipe(image())
    .pipe(dest(dist))
})
//监听自动刷新
gulp.task('default',['css','js','image'],()=>{
    gulp.watch('css/*.css',['css1'])
})
