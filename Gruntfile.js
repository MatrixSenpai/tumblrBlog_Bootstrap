module.exports = function (grunt) {
  grunt.initConfig({
    processhtml: {
      options: {
        strip: false,
        recursive: true
      },
      dist: {
        files: {
          'master.html' : ['src/masterCompile.html']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-processhtml');
  grunt.registerTask('default', ['processhtml']);
}
