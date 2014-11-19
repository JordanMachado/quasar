define(['PIXI','TweenMax'],function(PIXI, TweenMax){


	var PixiPOV = {
		stage: new PIXI.Stage( 0x212123),
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
			PixiPOV.container.position.x = window.innerWidth/2-PixiPOV.container.width/2;
			PixiPOV.container.position.y = window.innerHeight/2-PixiPOV.container.height/2;
			PixiPOV.stage.addChild(PixiPOV.container);

			PixiPOV.showAllChildrenInContainer();
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
		resize:function(windowWidth,windowHeight) {
			PixiPOV.container.position.x = windowWidth/2-PixiPOV.container.width/2;
			PixiPOV.container.position.y = windowHeight/2-PixiPOV.container.height/2;
			PixiPOV.renderer.resize(windowWidth,windowHeight);
		},
		showAllChildrenInContainer: function() {
				TweenMax.to(PixiPOV.container.children,1,{alpha:1,ease:Quint.easeIn});
		},
		hideAllChildrenInContainer: function() {
				TweenMax.to(PixiPOV.container.children,1,{alpha:0,ease:Quint.easeOut});
		}


	};
	window.PixiPOV = PixiPOV;
	return PixiPOV;

});