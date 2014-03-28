module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
        },
        uglify: {
        },
        less: {
        },
        watch: {
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less'  );
    grunt.loadNpmTasks('grunt-contrib-watch' );

    grunt.registerTask('default', ['concat', 'uglify', 'less', 'watch']);
};
