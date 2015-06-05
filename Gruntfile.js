var _ = require('underscore'),
    fs = require('fs'),
    path = require('path');

var PUBLISH_DIR = 'build';

module.exports = function (grunt) {
    'use strict';
    var config = {
        pkg: grunt.file.readJSON('./package.json'),
        connect: {
            server: {
                options: {
                    port: 8080,
                    base: 'public'
                }
            }
        },
        watch: {
            less: {
                files: './less/**/*.less',
                tasks: ['less']
            }
        },
        less: {
            local: {
                files: {
                    'public/css/index.css': 'less/core.less'
                }
            }
        }
    };

    grunt.initConfig(config);

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');


    // run development server for debugging
    var defaultTask = [];
    defaultTask.push('less:local');
    defaultTask.push('connect');
    defaultTask.push('watch');

    grunt.registerTask('default', defaultTask);
};
