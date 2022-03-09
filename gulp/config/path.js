import * as nodePath from 'path';
const rootFolder=nodePath.basename(nodePath.resolve())

const buildFolder='./dist'
const srcFolder='./src'

export const path={
    build:{
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        files: `${buildFolder}/files/`,
        fonts: `${buildFolder}/fonts/`,
        images: `${buildFolder}/img/`
    },
    src:{
        scss: `${srcFolder}/scss/style.scss`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        html: `${srcFolder}/*.html`,
        svg: `${srcFolder}/img/**/*.svg`,
        files: `${srcFolder}/files/**/*.*`
    },
    watch:{
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