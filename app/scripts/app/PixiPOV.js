define(['PIXI'],function(PIXI){

	var PixiPOV = {
		stage: new PIXI.Stage('black'),
		renderer: PIXI.autoDetectRenderer(window.innerWidth,window.innerHeight),
		init: function() {
			document.body.appendChild(PixiPOV.renderer.view);
			var dotScreenFilter = new PIXI.DotScreenFilter();
			requestAnimFrame( PixiPOV.animate );
		},
		animate: function() {
			requestAnimFrame( PixiPOV.animate );

			PixiPOV.renderer.render(PixiPOV.stage);
		}

	};

	return PixiPOV;

});