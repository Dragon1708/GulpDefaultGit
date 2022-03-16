import * as nodePath from 'path';
const rootFolder=nodePath.basename(nodePath.resolve())

const buildFolder='./dist'
const srcFolder='./src'

export const path={
    build:{
        JavaScript: `${buildFolder}/JavaScript/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        files: `${buildFolder}/files/`,
        fonts: `${buildFolder}/fonts/`,
        images: `${buildFolder}/img/`
    },
    src:{
        JavaScript: `${srcFolder}/JavaScript/app.js`,
        scss: `${srcFolder}/scss/style.scss`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        html: `${srcFolder}/*.html`,
        svg: `${srcFolder}/img/**/*.svg`,
        files: `${srcFolder}/files/**/*.*`
    },
    watch:{
        JavaScript: `${srcFolder}/JavaScript/**/*.js`,
        scss: `${srcFolder}/scss/**/*.scss`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        html: `${srcFolder}/**/*.html`,
        files: `${srcFolder}/files/**/*.*`
    },
    clean: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp:``
}