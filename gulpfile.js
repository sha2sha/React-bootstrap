var gulp       = require('gulp');
//var less       = require('gulp-less');
var gulpif = require('gulp-if');
//var sprity = require('sprity');
//var imagemin = require('gulp-imagemin');
var autoprefixer = require('gulp-autoprefixer');
var webserver = require('gulp-webserver');
var consolidate = require('gulp-consolidate');
var iconfont = require('gulp-iconfont');
var clean = require('gulp-clean');
var sourcemaps = require('gulp-sourcemaps');
var svgSprite = require("gulp-svg-sprites");
var filter    = require('gulp-filter');
const path = require('path');
// gulp.task('clean', function () {
//     return gulp.src('./public/', {read: false})
//         .pipe(clean());
// });

var config = {
    mode: "sprite",
    templates: {
        css: require("fs").readFileSync("./client/assets/svg-sprite/tmpl/_sprite.scss", "utf-8")
    },
    cssFile:  'scss/_sprite.scss', //'less/_sprite.less', //'css/sprite.css',, //,  give outfile in scss/css change tmpl file
    svg: {
        sprite: '../image/sprite.svg' //output sprite name and file location
    },
    preview: {
        sprite: "sprite-preview.html"
    },
    baseSize: 16,
    common: "icons"


};
gulp.task("clean:output", function() {
    return gulp.src("./client/assets/svg-sprite/svg-sprite-output", {read: true})
        .pipe(clean());
});

gulp.task('sprite', ["clean:output"], function() {

    return gulp.src('./client/assets/svg-sprite/svg/*.svg')
        .pipe(svgSprite(config))
        .pipe(gulp.dest("./client/assets/svg-sprite/svg-sprite-output")) //output everything
        .pipe(filter('**/*.svg'))  // Filter out everything except the SVG file
        // .pipe(svg2png())           // Create a PNG
        .pipe(gulp.dest("./client/assets/svg-sprite/svg-sprite-output")); //only output sprite image
});


var sass = require('gulp-sass');

gulp.task('sass:dev', function () {
    return gulp.src('./client/assets/styles/scss/site.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        // .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./client/assets/styles/css'));
});

gulp.task('sass', function () {
    return gulp.src('./client/assets/styles/scss/site.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./client/assets/styles/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./client/assets/styles/scss/**/*.scss', ['sass']);
});

//Convert SVG to font icon
// gulp.task('iconfont', function () {
//     return gulp.src('./client/assets/icon-font/svg/*.svg')
//         .pipe(iconfont({
//             fontName: 'icon-font',
//             formats: ['ttf', 'eot', 'woff', 'woff2'],
//             appendCodepoints: true,
//             appendUnicode: false,
//             normalize: true,
//             fontHeight: 1000,
//             centerHorizontally: true
//         }))
//         .on('glyphs', function (glyphs, options) {
//             gulp.src('./client/assets/icon-font/*.scss')
//                 .pipe(consolidate('underscore', {
//                     glyphs: glyphs,
//                     fontName: options.fontName,
//                     fontDate: new Date().getTime()
//                 }))
//                 .pipe(gulp.dest('./client/assets/icon-font/dist/scss'));
//
//             gulp.src('./client/assets/icon-font/index.html')
//                 .pipe(consolidate('underscore', {
//                     glyphs: glyphs,
//                     fontName: options.fontName
//                 }))
//                 .pipe(gulp.dest('./client/assets/icon-font/dist/'));
//         })
//         .pipe(gulp.dest('./client/assets/icon-font/dist/fonts'));
// });


//Start local server
gulp.task('webserver', function() {
    gulp.src('./client/assets/')
        .pipe(webserver({
            host: '0.0.0.0',
            port: 3030,
            livereload: false,
            directoryListing: true,
            //hostname: '0.0.0.0',
            directoryListing: {
                enable:true,
                path: './client/assets/'
            },
            //fallback:   '/src/web/index.html',
            open: true
        }));
});


// generate sprite.png and _sprite.scss
// gulp.task('sprites', function () {
//     return sprity.src({
//         src: './src/assets/sprite/**/*.{png,jpg}',
//         style: './sprite.less',
//         // ... other optional options
//         // for example if you want to generate scss instead of css
//         processor: 'less', // make sure you have installed sass
//         'dimension': [
//             {
//             ratio: 1, dpi: 72
//         },
//             {
//             ratio: 2, dpi: 192
//         }],
//     })
//         .pipe(gulpif('*.png', gulp.dest('./src/assets/images/'),
//             gulp.dest('./src/assets/sprite/')))
// });

//gulp.task('imagemin', function () {
//    gulp.src('src/assets/images/**/*.{png,jpg}')
//        .pipe(imagemin())
//        .pipe(gulp.dest('dist/images'))
//
//});

// gulp.task('compile-less', function() {
//     gulp.src('./src/assets/less/site.less')
//         .pipe(less())
//         .pipe(gulp.dest('./src/assets/css/'));
// });

/* Task to watch less changes */
// gulp.task('watch-less', function() {
//     gulp.watch('./src/assets/less/**/*.less' , ['compile-less']);
// });

//Copy JS files from src/assets/vendor to
gulp.task('copyfiles', function() {
    // gulp.src('./src/assets/fonts/**/*.{ttf,woff,woff2,eot,svg}')
    //     .pipe(gulp.dest('./public/fonts/'));
    //

    // gulp.src('./client/assets/icon-font/dist/fonts/*.{ttf,woff,woff2,eot,svg}')
    //     .pipe(gulp.dest('./client/assets/styles/fonts'));

    gulp.src('./client/assets/svg-sprite/image/*.svg')
        .pipe(gulp.dest('./client/assets/image'));
    // gulp.src('./client/assets/svg-sprite/image/*.svg')
    //     .pipe(gulp.dest(path.join(__dirname, 'public/image')));

});

// gulp.task('autoprefixer', function () {
//     return gulp.src('./public/css/site.css')
//         .pipe(autoprefixer({
//             browsers: ['last 2 versions'],
//             cascade: false
//         }))
//         .pipe(gulp.dest('./public/css'));
// });

gulp.task('build', [ 'iconfont', 'sass', 'copyfiles', 'webserver']);
gulp.task('start', ['webserver'])
gulp.task('icon', [  'sprite', 'copyfiles']);
//gulp.task('default', ['compile-less', 'copyfiles', 'watch-less']);
gulp.task('dev',
    [
        'sass:dev',
        'copyfiles',
        'sass:watch',
        'webserver'
    ]
);

