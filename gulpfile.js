import gulp from 'gulp';

import {path} from './gulp/config/path.js'
import {plugins} from './gulp/config/plugins.js'

global.app={
  //  isBuild: process.argv.includes('--build'),
   // isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins
}

import {copy} from "./gulp/tasks/copy.js"
import {reset} from "./gulp/tasks/reset.js"
import {html} from "./gulp/tasks/html.js"
import {server} from "./gulp/tasks/server.js"
import {scss} from "./gulp/tasks/scss.js"
import {JavaScript} from "./gulp/tasks/JavaScript.js"
import {images} from "./gulp/tasks/images.js"
import { otftoTtf, ttfToWoff, fontsStyle} from "./gulp/tasks/fonts.js"

const fonts=gulp.series(otftoTtf, ttfToWoff, fontsStyle)

const mainTasks=gulp.series(fonts, gulp.parallel(copy, html, scss, JavaScript, images))

function watcher(){
    gulp.watch(path.watch.files,copy)
    gulp.watch(path.watch.html,html)
    gulp.watch(path.watch.scss,scss)
    gulp.watch(path.watch.images,images)
    gulp.watch(path.watch.JavaScript,JavaScript)
}

const dev=gulp.series(reset, mainTasks,
    gulp.parallel(watcher, server))

gulp.task('default', dev)
