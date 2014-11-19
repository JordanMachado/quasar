define(['TweenMax', 'jquery', 'PIXI', 'app/PixiPOV'], function(TweenMax, $, PIXI, PixiPOV) {
	/*
	 * Animation super Class
	 * This class is the super class of the othersanimation so all have got the same pattern
	 *  PROPERTIES:
	 *  	duration (number)
	 *  	easeIn (ease)
	 *  	easeOut (ease)
	 *  	shape (object)
	 *	 METHODS:
	 *	 	initialize
	 *	 	buildShape
	 *	 	start
	 *	 	reset
	 */
	function Animation() {
		this.duration = 0.2;
		this.easeIn = Quint.easeIn;
		this.easeOut = Quad.easeOut;
		this.shape = {};
		this.initialize();
	}
	Animation.prototype.initialize = function() {
		this.buildShape();
	};
	/*
	 * Method for setting the shape of the animation
	 * will be overrided
	 */
	Animation.prototype.buildShape = function() {
		/* overrided*/
	};
	/*
	 * Method for starting the animation 
	 * default simple fadeIn
	 * will be overrided
	 */
	Animation.prototype.start = function() {
		var that = this;

		TweenMax.to(this.shape, this.duration, {
			alpha: 1,
			ease: this.easeIn,
			onComplete: function() {
				that.reset();
			}
		});
	};
	/*
	 * Method for reset the animation
	 * default simple toggle visibility
	 * will be overrided
	 */
	Animation.prototype.reset = function() {
		TweenMax.killTweensOf(this.shape);
		this.shape.alpha = 0;
	};

	return Animation;
});