define(['underscore','TweenMax','PIXI','app/PixiPOV','app/animations/Animation'],function(_, TweenMax, PIXI, PixiPOV, Animation){

	function KickAnimation(properties) {
		Animation.apply(this, arguments);
	};
	_.extend(KickAnimation.prototype,Animation.prototype,{
		duration:.5,
		easeIn:Quint.easeIn,
		easeOut:Quad.easeOut,
		buildShape: function() {
			this.shape = new PIXI.Text('KICK', {font:"50px Arial",fill:'white'});
			this.shape.position.x = window.innerWidth/2;
			this.shape.position.y = window.innerHeight/2;
			this.shape.alpha = 1;
			this.shape.anchor.x = 0.5;
			this.shape.anchor.y = 0.5;
			this.shape.scale.x = 1;
			this.shape.scale.y = 1;
			
			//console.log(this.shape)

			PixiPOV.stage.addChild(this.shape);

		},
		start:function() {
			Animation.prototype.start.call(this);
		},
		reset:function() {
			Animation.prototype.reset.call(this);
		}


	});

	return KickAnimation;
});