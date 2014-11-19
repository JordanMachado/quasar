//require configuration
require.config({
	name:'main',
	shim: {
		'underscore': {
			exports: '_'
		},
		'jquery': {
			exports: '$'
		}
	},
	paths: {
		'underscore': 'bower_components/underscore/underscore',
		'jquery': 'bower_components/jquery/dist/jquery',
		'TimeLineLite': 'bower_components/gsap/src/uncompressed/TimelineLite',
		'TweenMax': 'bower_components/gsap/src/uncompressed/TweenMax',
		'PIXI': 'bower_components/pixi.js/bin/pixi'

	}
});
// starting point
require([
    'app/App',
    'jquery'
],function (App, $) {

    var main = {
        initialize: function(){
        	// when document is ready launch the application
        	$(document).ready(this.onReady.bind(this));
        },
        onReady:function() {
        	App.initialize();
        }
    };
    main.initialize();
});