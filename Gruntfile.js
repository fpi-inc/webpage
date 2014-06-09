//Gruntfile
module.exports = function(grunt){
    //grunt
    grunt.initConfig({

        //Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/**\n' +
        ' * fpi webpage v<%= pkg.version %>\n' +
        ' */\n',
        less: {
            development: {
                options: {
                    path: ["dist/css"]
                },
                files: {
                    "dist/css/<%= pkg.name %>.css": "src/less/main.less"
                }
            }
        },

        watch: {
            src: {
                files: ["src/**/*.less"],
                tasks: ["build"]
            }
        },

        usebanner: {
            dist: {
                options: {
                    position: 'top',
                    banner: "<%= banner %>\n"
                },
                files: {
                    src: [ 'dist/css/**/*.css']
                }
            }
        },

        copy: {
            css: {
                files: [{ expand: true, cwd: "src/less/css", src: ["*"], dest: "dist/css/" }]
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-banner");
    grunt.loadNpmTasks("grunt-contrib-copy");

    grunt.registerTask('default', ['less:development', 'usebanner', 'copy']);
    grunt.registerTask('build', ['less:development']);
}