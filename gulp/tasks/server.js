export const server = (done) => {
    app.plugins.browserSync.init({
        server:{
            baseDir: `${app.path.build.html}`
        },
        injectChanges: true,
        notify: false,
        port: 3000,
    })
};


