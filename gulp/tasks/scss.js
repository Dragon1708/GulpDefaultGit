import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";

import cleanCss from "gulp-clean-css"; //сжатие css
import webpcss from "gulp-webpcss"; // webp сжатие картинок
import groupCssMediaQueries from "gulp-group-css-media-queries";// групировка медиа запросов

const sass=gulpSass(dartSass)

export const scss=()=>{
    return app.gulp.src(app.path.src.scss, {sourcemaps:true})
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "SCSS",
            message: "Error: <%= error.message %>"
        })
    ))
    .pipe(app.plugins.replace(/@img\//g,'../img/'))
    .pipe(sass({
        outputStyle:'expanded' //сжать файл стилей или нет
    }))
    .pipe(groupCssMediaQueries())
    .pipe(webpcss({
        webpClass: '.webp',
        noWebpClass: '.no-webp'
    }))
    .pipe(app.gulp.dest(app.path.build.css)) //если расскоментировать создает 2 не сжатый файл css
    .pipe(cleanCss())
    .pipe(rename({
        extname:'.min.css'
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream());
}