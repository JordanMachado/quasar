define(['PIXI', 'TweenMax'], function(PIXI, TweenMax) {

	/*
	 * PixiPov is the point of view object for manage the Pixi stage
	 *   PROPERTIES:
	 *		stage (PIXI.Stage)
	 *		filterEnum (object as enumeration)
	 *		filterCollection (array)
	 *		container (PIXI.DisplayObjectContainer)
	 *		renderer (PIXI.autoDetectRenderer)
	 *	 METHODS:
	 *	 	initialize
	 *	 	animate
	 *	 	createFilters
	 *	 	showFilter
	 *	 	renderFilter
	 *	 	resize
	 *	 	showAllChildrenInContainer
	 *	 	hideAllChildrenInContainer
	 */
	var PixiPOV = {
		stage: new PIXI.Stage(0x212123),
		filterEnum: {
			PIXELATE: 0,
			INVERT: 1
		},
		filterSwitch: [false, false],
		filterCollection: [],
		container: new PIXI.DisplayObjectContainer(),
		renderer: PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight),
		/*
		 * Method called in first for initializing add tge rebder to the dom and set the container position
		 */
		initialize: function() {
			document.body.appendChild(PixiPOV.renderer.view);
			// set the position of the container to the center of the window in X and Y axes
			PixiPOV.container.position.x = window.innerWidth / 2 - PixiPOV.container.width / 2;
			PixiPOV.container.position.y = window.innerHeight / 2 - PixiPOV.container.height / 2;
			PixiPOV.stage.addChild(PixiPOV.container);
			// show all element in the container for showing to the user the composition of texts
			PixiPOV.showAllChildrenInContainer();
			PixiPOV.animate();
		},
		/*
		 * Refresh method for Pixi's stage
		 */
		animate: function() {
			requestAnimFrame(PixiPOV.animate);
			PixiPOV.renderer.render(PixiPOV.stage);
		},
		/* 
		 * Method for create all filter of the PixiPOV
		 */
		createFilters: function() {
			var pixelateFilter = new PIXI.PixelateFilter();
			var invertFilter = new PIXI.InvertFilter();
			PixiPOV.filterCollection.push(pixelateFilter, invertFilter);
		},
		/*
		 * Method for changing the state of a filter
		 *  PARAMS
		 *  filterType: the type of the filter (ex:invertFilter)
		 *  enable: bollean for enable or disable a filter
		 */
		changeStateOfFilter: function(filterType, enable) {
			PixiPOV.filterSwitch[filterType] = enable;
			console.log(PixiPOV.filterSwitch)
			PixiPOV.renderFilter();
		},
		/*
		 * Render filter to the PixiPOV's stage
		 */
		renderFilter: function() {
			var filtersToApply = [];

			for (var i = 0, ln = PixiPOV.filterCollection.length; i < ln; i++) {
				if (PixiPOV.filterSwitch[i]) filtersToApply.push(PixiPOV.filterCollection[i]);
			};
			PixiPOV.stage.filters = (filtersToApply.length > 0) ? filtersToApply : null;

		},
		/*
		 * Method wich manage the resize and position of the container
		 */
		resize: function(windowWidth, windowHeight)  {
			PixiPOV.container.position.x = windowWidth / 2 - PixiPOV.container.width / 2;
			PixiPOV.container.position.y = windowHeight / 2 - PixiPOV.container.height / 2;
			PixiPOV.renderer.resize(windowWidth, windowHeight);
		},
		/*
		 * Show all texts of the container
		 */
		showAllChildrenInContainer: function() {
			TweenMax.to(PixiPOV.container.children, 1, {
				alpha: 1,
				ease: Quint.easeIn
			});
		},
		/*
		 * Hide all texts of the container
		 */
		hideAllChildrenInContainer: function() {
			TweenMax.to(PixiPOV.container.children, 1, {
				alpha: 0,
				ease: Quint.easeOut
			});
		}


	};

	return PixiPOV;
});