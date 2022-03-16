import webpack from 'webpack-stream';

export const JavaScript=()=>{
    return app.gulp.src(app.path.src.JavaScript, {sourcemap:true })
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "JAVASCRIPT",
            message: "Error: <%= error.message %>"
        })
    ))
    .pipe(webpack({
        mode:'development',
        output:{
            filename: 'app.js'
        }
    }))
   .pipe(app.gulp.dest(app.path.build.JavaScript))
 // .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browsersync.stream())
}