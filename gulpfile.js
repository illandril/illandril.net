var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');
var swig = require('gulp-swig');
var pagespeed = require('psi');
var runSequence = require('run-sequence');
var chmod = require('gulp-chmod');
var replace = require('gulp-replace');
var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');
var concat = require('gulp-concat');
var sitemap = require('gulp-sitemap');
var imagemin = require('gulp-imagemin');

var gutil = require('gulp-util');
var through = require('through2');

// Clean Output Directory
gulp.task('clean', del.bind(null, ['.tmp', 'tDist', 'build']));

gulp.task('build-styles', function() {
    return gulp.src('src/styles/**/*.css')
            .pipe(concat('s.css'))
            .pipe($.csso())
            .pipe(gulp.dest('tDist'))
            .pipe($.size({
                title: 'css'
            }));
});

gulp.task('build-scripts', function() {
    return gulp.src(['src/scripts/shims.js',
                     'src/scripts/analytics.js',
                     'src/scripts/social.js',
                     'src/scripts/main.js',
                     'src/scripts/exif.js',
                     'src/scripts/photos.js',
                     'src/scripts/hashInit.js',
                     'src/scripts/tracking.js' ])
            .pipe(concat('s.js'))
            // Pass {mangle:false} to uglify to debug js
            .pipe($.uglify())
            .pipe(chmod(644))
            .pipe(gulp.dest('tDist'))
            .pipe($.size({
                title: 'js'
            }));
});
gulp.task('images', function() {
    return gulp.src('src/images/**/*')
/* Got a memory issue...
    .pipe(imagemin({
        progressive: true
    }))
*/
    .pipe(chmod(644))
    .pipe(gulp.dest('tDist/images'))
    .pipe($.size({
        title: 'images'
    }));
});

gulp.task('favicon', function() {
    return gulp.src('src/favicon*')
    .pipe(chmod(644))
    .pipe(gulp.dest('tDist'))
    .pipe($.size({
        title: 'favicons'
    }));
});

gulp.task('static', function() {
    return gulp.src('static/**/*')
    .pipe(chmod(644))
    .pipe(gulp.dest('tDist'))
    .pipe($.size({
        title: 'static'
    }));
});

gulp.task('sitemap', ['build-html'], function () {
    return gulp.src(['tDist/**/*.html','!tDist/**/*.part.html'], {
        read: false
    }).pipe(sitemap({
            siteUrl: 'https://www.illandril.net'
    }))
    .pipe(gulp.dest('tDist/'));
});

gulp.task('build-fulls', function() {
    return gulp.src('src/pages/**/*.part.swig', { read: false })
    .pipe(through.obj(function (file, enc, cb) {
            //we handle null files (that have no contents), but not dirs
            if (file.isDirectory()) {
                this.push(file);
                return cb();
            }

            //we don't handle streams for now
            if (file.isStream()) {
                this.emit('error', new gutil.PluginError('gulp-sitemap', 'Streaming not supported'));
                return cb();
            }
            var template = 'full-template.html'; //path.relative(path.dirname(file.path),file.cwd+'/src/pages/template.html');
            mkdirp.sync(path.dirname(file.path).replace('/src/','/build/'));
            fs.writeFileSync(file.cwd + '/build/pages/' + file.relative.replace('.part',''), '{% extends \''+template+'\' %}{% block content %}{% include \'' + path.basename(file.path) + '\' %}{% endblock %}');
            return cb();
        },
        function (cb) {
            return cb();
        }));
});

gulp.task('build-html-prep', function() {
    return gulp.src('src/pages/**/*')
               .pipe(gulp.dest('build/pages/'));
});

gulp.task('build-html', ['build-styles', 'build-scripts', 'build-fulls', 'build-html-prep'], function() {
    return gulp.src('build/pages/**/*.swig')
    .pipe(swig())
    .pipe($.minifyHtml())
    .pipe(chmod(644))
    .pipe(gulp.dest('./tDist/'))
    .pipe($.size({
        title: 'html'
    }));
});

// Run PageSpeed Insights
gulp.task('pagespeed', function(cb) {
    pagespeed({
        url: 'https://www.illandril.net',
        strategy: 'mobile'
    }, function() {
        pagespeed({
            url: 'https://www.illandril.net',
            strategy: 'desktop'
        }, cb);
    });
});

// Watch Files For Changes & Reload
gulp.task('watch', function () {
  gulp.watch(['src/**/*', 'static/**/*'], ['default']);
});

gulp.task('rm-dist', del.bind(null, ['dist']));

gulp.task('real-dist', ['rm-dist'], function() {
    return gulp.src('tDist/**')
    .pipe(gulp.dest('dist'))
    .pipe($.size({
        title: 'real-dist'
    }));
});

gulp.task('rm-tdist', ['real-dist'], del.bind(null, ['tDist']));

gulp.task('build', ['clean'], function(cb){
  runSequence('sitemap', ['images','static', 'favicon'], cb);
});

// Build Production Files, the Default Task
gulp.task('default', ['build'], function (cb) {
  runSequence('rm-tdist', cb);
});
