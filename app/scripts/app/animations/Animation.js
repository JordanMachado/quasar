define(['TweenMax','jquery','PIXI','app/PixiPOV' ],function( TweenMax, $, PIXI, PixiPOV) {
	'use strict';

	function Animation() {
		this.duration = 0.5;
		this.easeIn = Quint.easeIn;
		this.easeOut = Quad.easeOut;
		this.shape = {};
		this.init();
	}
	Animation.prototype.init = function () {
		this.buildShape();
	}
	Animation.prototype.buildShape = function() {

	}
	Animation.prototype.start = function () {
		var that = this;

		TweenMax.to(this.shape,this.duration,{alpha:1,ease:this.easeIn,onComplete:function(){
		 	that.reset();
		 }});
		
	}
	Animation.prototype.reset = function () {
		TweenMax.killTweensOf(this.shape);
		this.shape.alpha = 0;
	}

	return Animation;
});