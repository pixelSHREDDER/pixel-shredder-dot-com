module.exports = function(grunt) {
	const sass = require('sass');
	require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks 
 
	grunt.initConfig({
		sass: {
			options: {
				sourceMap: true,
				implementation: sass
			},
			dist: {
				files: {
					'css/main.css': 'css/main.scss',
					'css/tv-contents.css': 'css/tv-contents.scss'
				}
			}
		},
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'css',
					src: ['*.css', '!*.min.css'],
					dest: 'css',
					ext: '.min.css'
				}]
			}
		},
		uglify: {
			my_target: {
				files: {
					'js/main.min.js': ['js/main.js']
				}
			}
		}
	});
 
	grunt.registerTask('default', ['sass', 'cssmin']);
	// no es6 support for uglify yet :(
};