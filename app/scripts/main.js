require.config({
	name:'main',
	shim: {
		'underscore': {
			exports: '_'
		},
		'jquery': {
			exports: '$'
		},
		'PIXI': {
			exports: 'PIXI'
		},
		'typeface': {
			exports: '_typeface_js'
		}
	
	},
	paths: {
		'underscore': 'bower_components/underscore/underscore',
		'jquery': 'bower_components/jquery/dist/jquery',
		'TweenMax': 'bower_components/gsap/src/uncompressed/TweenMax',
		'TimeLineLite': 'bower_components/gsap/src/uncompressed/TimelineLite',
		'PIXI': 'bower_components/pixi.js/bin/pixi'

	}
});

require([
    'app/App'
],function (App) {

    var main = {
        initialize: function(){
        	$(document).ready(this.onReady.bind(this));
        	

        	
        },
        onReady:function() {
        	//console.log('ready')
        	App.initialize();
        }

    };
    main.initialize();
});