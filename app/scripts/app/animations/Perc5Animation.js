define(['underscore','TweenMax','PIXI','app/PixiPOV','app/animations/Animation'],function(_, TweenMax, PIXI, PixiPOV, Animation){

	function Perc5Animation(properties) {
		Animation.apply(this, arguments);
		this.duration = 0.2;
		this.easeIn = Quint.easeIn;
		this.easeOut = Quad.easeOut;
	};
	_.extend(Perc5Animation.prototype,Animation.prototype,{
		buildShape: function() {
			this.shape = new PIXI.Text('TEUU', {font:"50px Arial",fill:'#33ff99'});
			this.shape.position.x = window.innerWidth/2+250;
			this.shape.position.y = window.innerHeight/4;
			this.shape.alpha = 0;
			this.shape.anchor.x = 0.5;
			this.shape.anchor.y = 0.5;
			this.shape.scale.x = 1;
			this.shape.scale.y = 1;
			
			//console.log(this.shape)

			PixiPOV.stage.addChild(this.shape);

		},
		start:function() {
			Animation.prototype.start.call(this);
			// console.log('kick')
		},


	});

	return Perc5Animation;
});