define(['underscore','TweenMax','PIXI','app/PixiPOV','app/animations/Animation'],function(_, TweenMax, PIXI, PixiPOV, Animation){

	function HatAnimation(properties) {
		Animation.apply(this, arguments);
	};
	_.extend(HatAnimation.prototype,Animation.prototype,{
		duration:0.1,
		easeIn:Quint.easeIn,
		easeOut:Quad.easeOut,
		buildShape: function() {
			this.shape = new PIXI.Text('Hat', {font:"25px Arial",fill:'white'});
			this.shape.position.x = window.innerWidth/2;
			this.shape.position.y = window.innerHeight/6;
			this.shape.alpha = 1;
			this.shape.anchor.x = 0.5;
			this.shape.anchor.y = 0.5;
			this.shape.scale.x = 1;
			this.shape.scale.y = 1;

			PixiPOV.stage.addChild(this.shape);

		},


	});

	return HatAnimation;
});