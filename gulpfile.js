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
gulp.task('clean', del.bind(null, ['.tmp', 'dist', 'build']));

gulp.task('build-styles', function() {
    return gulp.src('src/styles/**/*.css')
            .pipe(concat('s.css'))
            .pipe($.csso())
            .pipe(gulp.dest('dist'))
            .pipe($.size({
                title: 'css'
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
    .pipe(gulp.dest('dist/images'))
    .pipe($.size({
        title: 'images'
    }));
});

gulp.task('favicon', function() {
    return gulp.src('src/favicon*')
    .pipe(chmod(644))
    .pipe(gulp.dest('dist'))
    .pipe($.size({
        title: 'favicons'
    }));
});

gulp.task('static', function() {
    return gulp.src('static/**/*')
    .pipe(chmod(644))
    .pipe(gulp.dest('dist'))
    .pipe($.size({
        title: 'static'
    }));
});

gulp.task('sitemap', ['build-html'], function () {
    return gulp.src(['dist/**/*.html','!dist/**/*.part.html'], {
        read: false
    }).pipe(sitemap({
            siteUrl: 'https://www.illandril.net'
    }))
    .pipe(gulp.dest('dist/'));
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

gulp.task('build-html', ['build-styles', 'build-fulls', 'build-html-prep'], function() {
    return gulp.src('build/pages/**/*.swig')
    .pipe(swig())
    .pipe($.useref.assets({
        searchPath: '{.tmp,src}'
    }))
    // Concatenate And Minify JavaScript
    // Pass {mangle:false} to uglify to debug js
    .pipe($.if ('*.js', $.uglify()))
    .pipe($.useref.restore())
    .pipe($.useref())
/*
    .pipe(replace(/<link rel="stylesheet" href="/s.css">/, function(s) {
            var style = fs.readFileSync('build/s.css', 'utf8');
            return '<style>' + style + '</style>';
        }))
*/
    .pipe($.minifyHtml())
    .pipe(chmod(644))
    .pipe(gulp.dest('./dist/'))
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

// Build Production Files, the Default Task
gulp.task('default', ['clean'], function (cb) {
  runSequence('sitemap', ['images','static', 'favicon'], cb);
});
