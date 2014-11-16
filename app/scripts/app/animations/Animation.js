define(['TweenMax','jquery','PIXI','app/PixiPOV' ],function( TweenMax, $, PIXI, PixiPOV) {
	'use strict';

	function Animation() {
		this.init();
	}
	Animation.prototype.init = function () {
		this.buildShape();

	}
	Animation.prototype.buildShape = function() {

	}
	Animation.prototype.start = function () {
		var that = this;

		TweenMax.to(this.shape,this.duration,{alpha:1,ease: Quad.easeOutBounce,onComplete:function(){
		 	that.reset();
		 }});
		
	}
	Animation.prototype.reset = function () {
		TweenMax.killTweensOf(this.shape);
		this.shape.alpha = 0;
	}

	return Animation;
});