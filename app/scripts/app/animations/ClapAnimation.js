define(['underscore','TweenMax','PIXI','app/PixiPOV','app/animations/Animation'],function(_, TweenMax, PIXI, PixiPOV, Animation){

	function ClapAnimation(properties) {
		Animation.apply(this, arguments);
	};
	_.extend(ClapAnimation.prototype,Animation.prototype,{
		duration:0.2,
		easeIn:Quint.easeIn,
		easeOut:Quad.easeOut,
		buildShape: function() {
			this.shape = new PIXI.Text('Clap', {font:'25px Arial',fill:'white'});
			this.shape.position.x = window.innerWidth/2;
			this.shape.position.y = window.innerHeight-window.innerHeight/8;
			this.shape.alpha = 1;
			this.shape.anchor.x = 0.5;
			this.shape.anchor.y = 0.5;

			PixiPOV.stage.addChild(this.shape);

		},


	});

	return ClapAnimation;
});