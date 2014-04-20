module.exports = function(grunt) {

  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          outputStyle: 'nested'
        },
        files: [{
          'assets/css/style.css': 'assets/sass/style.scss'
        }
        ]
      }
    },

    watch: {
      sass: {
        files: 'assets/sass/**/*.scss',
        tasks: ['sass']
      }
    }

  });

  grunt.registerTask('default', ['watch']);

};
