define(['PIXI'],function(PIXI){


	var PixiPOV = {
		stage: new PIXI.Stage('black'),
		filterEnum:{
			PIXELATE:0,
			INVERT:1
		},
		filterSwitch:[false,false],
		filterCollection:[],
		container: new PIXI.DisplayObjectContainer(),
		renderer: PIXI.autoDetectRenderer(window.innerWidth,window.innerHeight),
		init: function() {
			document.body.appendChild(PixiPOV.renderer.view);
			
			//PixiPOV.createFilters();
			
			var graphics = new PIXI.Graphics();
			graphics.beginFill(0xFF);			
			graphics.drawRect(0, 0,100,100);
			PixiPOV.container.addChild(graphics);
			PixiPOV.container.position.x = window.innerWidth/2;
			PixiPOV.container.position.y = window.innerHeight/2;
			console.log(PixiPOV.container.width+"width");

			PixiPOV.stage.addChild(PixiPOV.container);

			PixiPOV.animate();
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

		},
		resize:function(width,height) {
			console.log('resize pixi')
			PixiPOV.container.scale.x = PixiPOV.container.scale.y = PixiPOV.renderer.width / width;
			
			PixiPOV.renderer.resize(width,height);

		}


	};
	window.PixiPOV = PixiPOV;
	return PixiPOV;

});