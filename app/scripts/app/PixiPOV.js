define(['PIXI'],function(PIXI){


	var PixiPOV = {
		stage: new PIXI.Stage('black'),
		filterEnum:{
			PIXELATE:0,
			INVERT:1
		},
		filterSwitch:[false,false],
		filterCollection:[],
		renderer: PIXI.autoDetectRenderer(window.innerWidth,window.innerHeight),
		init: function() {
			document.body.appendChild(PixiPOV.renderer.view);
			// var graphics = new PIXI.Graphics();
			// graphics.beginFill(0x000000);			
			// // draw a rectangle
			// graphics.drawRect(0, 0, window.innerWidth, window.innerHeight);
			// PixiPOV.stage.addChild(graphics)
			PixiPOV.createFilters();

			requestAnimFrame( PixiPOV.animate );
		},
		animate: function() {
			requestAnimFrame( PixiPOV.animate );

			PixiPOV.renderer.render(PixiPOV.stage);
		},
		createFilters: function() {
			var pixelateFilter = new PIXI.PixelateFilter();
			var invertFilter = new PIXI.InvertFilter();
			PixiPOV.filterCollection.push(pixelateFilter,invertFilter);
		},
		showFilter: function(filterType,enable) {
			PixiPOV.filterSwitch[filterType] = enable;
			console.log(PixiPOV.filterSwitch)
			PixiPOV.renderFilter();
		},
		renderFilter: function() {
			var filtersToApply = [];

			for (var i = 0,ln= PixiPOV.filterCollection.length; i < ln; i++) {
				if(PixiPOV.filterSwitch[i]) filtersToApply.push(PixiPOV.filterCollection[i]);
			};
			PixiPOV.stage.filters = (filtersToApply.length > 0) ? filtersToApply : null;

		}


	};

	return PixiPOV;

});