module.exports = function(grunt) {
    grunt.initConfig({
        sprite: {
            all: {
                src: ['./images/*.png'],
                dest: './images/dati.png',
                destCss: './css/sprites.css'
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: './css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/css',
                    ext: '.min.css'
                }]
            }
        }
    });
    grunt.loadNpmTasks('grunt-spritesmith');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
};